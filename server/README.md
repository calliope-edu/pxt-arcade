# Share-Server für MakeCode Arcade (Calliope-Edition)

Speichert geteilte Projekte auf dem eigenen Server statt in der MakeCode-Cloud (makecode.com) und baut die C++-Laufzeit der Hex-Dateien selbst (`compile.js`). Node.js-Skripte ohne Abhängigkeiten (Node ≥ 18); für den C++-Build zusätzlich die ARM-Toolchain (siehe „C++-Compile-Dienst“).

| Anfrage | Verhalten |
|---------|-----------|
| `POST /api/scripts` | Projekt veröffentlichen → `data/scripts/<id>/` (`script.json`, `text.json`, `thumb`) |
| `GET /api/<id>`, `/api/<id>/text`, `/api/<id>/thumb` | Projektinfo, Dateien, Vorschaubild |
| `POST /api/<id>/abusereports` | „Missbrauch melden“ → `data/abusereports.log` |
| `GET /api/clientconfig` | lenkt die Hex-Downloads des Editors auf diesen Server (`primaryCdnUrl`) |
| `GET /api/compile/<sha>.hex` | C++-Laufzeit aus `data/hexcache/` oder `<STATIC_DIR>/hexcache/` |
| `POST /api/compile/extension`, `GET /api/compile/<sha>.json` | C++-Laufzeit hier bauen, Status abfragen |
| alles andere unter `/api/` | wird an `https://www.makecode.com/api/` weitergereicht (GitHub-Erweiterungen, `immreader`, …; mit `COMPILE=makecode` auch `clientconfig` und `compile/…`) |
| `GET /oauth/login`, `/oauth/callback` | „Mit GitHub anmelden“ über die eigene GitHub-OAuth-App, ohne App Weiterleitung an makecode.com (siehe „GitHub-Anmeldung“) |
| außerhalb von `/api/` | statischer Editor aus `STATIC_DIR` (optional); Hilfe-Links ohne Endung (`/github`) → `docs/github.html` |

IDs haben dasselbe Format wie bei MakeCode (`_` + 12 Zeichen). Unbekannte IDs werden bei makecode.com nachgeschlagen – früher geteilte Links funktionieren also weiter.

## Starten

```bash
node server/server.js
```

Einstellungen (Umgebungsvariablen):

| Variable | Standard | Bedeutung |
|----------|----------|-----------|
| `PORT` / `HOST` | `8790` / `0.0.0.0` | Adresse des Servers |
| `DATA_DIR` | `server/data` | Ablage der Projekte (sichern!) |
| `STATIC_DIR` | – | Ordner der statischen Version (`staticpkg --output …`); dann liefert der Server auch den Editor aus |
| `ALLOWED_ORIGINS` | `*` | erlaubte Editor-Adressen für CORS, kommagetrennt (z. B. `https://arcade.calliope.cc`); nur nötig, wenn Editor und Server verschiedene Adressen haben |
| `UPSTREAM` | `https://www.makecode.com/api/` | Ziel für alle anderen API-Anfragen |
| `MAX_BODY` | `8388608` | maximale Projektgröße in Byte |
| `PUBLISH_PER_HOUR` | `60` | maximale Veröffentlichungen pro IP und Stunde |
| `TRUST_PROXY` | – | `1`, wenn ein Reverse-Proxy davor sitzt (IP aus `X-Forwarded-For`, Adresse aus `X-Forwarded-Proto`/`-Host`) |
| `COMPILE` | `local` | `local` = C++ auf diesem Server bauen; `makecode` = wie bisher an die MakeCode-Cloud weiterreichen |
| `PUBLIC_API_URL` | aus der Anfrage | öffentliche Adresse von `/api/`, z. B. `https://arcade.example.org/pfad/api/` – nötig, wenn der Proxy einen Pfad umschreibt |
| `HEX_FALLBACK` | – | z. B. `https://cdn.makecode.com`: fehlende Hex-Dateien zuerst dort suchen (spart Builds, geht aber wieder über Microsoft; die Laufzeiten von dort sind mit `-O2` gebaut, rund 22 KB größer als die eigenen – für den Calliope mini mit Bluetooth-Flashen nicht empfohlen) |
| `PYTHON` | `python3` | Python für `build.py` |
| `BUILD_TIMEOUT` | `900` | maximale Dauer eines Builds in Sekunden |
| `COMPILE_PER_HOUR` / `COMPILE_QUEUE` | `30` / `20` | Builds pro IP und Stunde / maximale Warteschlange |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | – | eigene GitHub-OAuth-App für „Mit GitHub anmelden“; ohne sie übernimmt makecode.com die Anmeldung |
| `GITHUB_SCOPE` | `repo` | angefragte GitHub-Rechte (`public_repo` = nur öffentliche Repositories) |
| `CPP_ORGS` | `calliope-edu` | GitHub-Organisationen, aus denen C++-Erweiterungen gebaut werden (kommagetrennt); `*` = keine Prüfung |
| `CPP_REPOS` | – | zusätzlich erlaubte Repositorys (`besitzer/repo`, kommagetrennt), z. B. wenn der Repository-Name nicht zum Paketnamen passt |
| `TARGET_JSON` | `<STATIC_DIR>/target.json`, sonst `built/target.json` | mitgelieferte Bibliotheken des Editors; ihre C++-Dateien sind immer erlaubt. Muss zur ausgelieferten Editor-Version passen |
| `COMPILE_LOGS` | – | `1`: Build-Protokolle unter `/api/compile/<sha>.log` abrufbar (nur zum Testen, sie enthalten Pfade des Servers) |

## Deployment

Empfohlen: Editor und Share-Server unter **einer** Adresse, dann passt die Voreinstellung im Editor (`CLOUD_API_ROOT = "api/"` in `editor/extension.ts`: `<Editor-Adresse>api/`).

**Variante A – Node liefert alles aus:**

```bash
PXT_NODOCKER=1 node node_modules/pxt-core/built/pxt.js staticpkg --output ~/MakeCodeArcadeJacdac-static
git checkout -- 'libs/*/shims.d.ts'
STATIC_DIR=~/MakeCodeArcadeJacdac-static TRUST_PROXY=1 node server/server.js
```

Davor einen Webserver mit HTTPS (WebUSB, Kiosk und Mehrspieler-Links brauchen https), z. B. nginx:

```nginx
server {
    listen 443 ssl;
    server_name arcade.example.org;
    # ssl_certificate …
    client_max_body_size 10m;
    location / {
        proxy_pass http://127.0.0.1:8790;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Variante B – statischer Editor auf einem vorhandenen Webserver, nur `/api/` an Node:**

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:8790;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    client_max_body_size 10m;
}
```

Für die GitHub-Anmeldung zusätzlich `location /oauth/ { proxy_pass http://127.0.0.1:8790; }` (mit denselben `proxy_set_header`-Zeilen) eintragen. Damit die Hilfe-Links des Editors (`/github`, `/github/commit`, …) funktionieren, im statischen Teil `location / { try_files $uri $uri/ /docs$uri.html =404; }` eintragen.

Liegt der Editor in einem Unterordner (`staticpkg --route /pfad/`), zeigt `api/` auf `/pfad/api/` – dann `location /pfad/api/ { proxy_pass http://127.0.0.1:8790/api/; }`, ebenso `/pfad/oauth/` → `/oauth/`, und `PUBLIC_API_URL=https://<server>/pfad/api/` setzen.

**Variante C – Share-Server unter anderer Adresse:** in `editor/extension.ts` `CLOUD_API_ROOT = "https://share.example.org/api/"` setzen, neu bauen und auf dem Server `ALLOWED_ORIGINS=https://<editor-adresse>` setzen.

Als Dienst (systemd, `/etc/systemd/system/arcade-share.service`):

```ini
[Unit]
Description=MakeCode Arcade share server
After=network.target

[Service]
WorkingDirectory=/opt/arcade
Environment=STATIC_DIR=/opt/arcade/static DATA_DIR=/var/lib/arcade-share TRUST_PROXY=1
ExecStart=/usr/bin/node /opt/arcade/server/server.js
Restart=always
User=www-data

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now arcade-share
```

Datensicherung: `DATA_DIR` regelmäßig sichern. Ein Projekt löschen = seinen Ordner `data/scripts/<id>` entfernen.

## GitHub-Anmeldung

„Als GitHub-Repository speichern“ braucht ein GitHub-Token. pxt öffnet dafür `<Server>/oauth/login?state=…&redirect_uri=<Editor>` und erwartet `<Editor>#access_token=…&state=…` zurück. Ohne eigene App leitet der Server an makecode.com weiter (Anmeldung über Microsofts GitHub-App „Microsoft MakeCode“). Mit eigener App:

1. Auf GitHub unter *Settings → Developer settings → OAuth Apps → New OAuth App* (für Calliope besser in den Einstellungen der Organisation) eine App anlegen:
   - *Homepage URL*: Adresse des Editors, z. B. `https://arcade.example.org/`
   - *Authorization callback URL*: `https://arcade.example.org/oauth/callback` (bei einem Unterordner `…/pfad/oauth/callback`; zum lokalen Testen eine zweite App mit `http://localhost:8790/oauth/callback`)
2. *Client ID* und ein neu erzeugtes *Client secret* als `GITHUB_CLIENT_ID` und `GITHUB_CLIENT_SECRET` setzen (z. B. in der systemd-Unit oder in einer `EnvironmentFile` mit Rechten nur für den Dienst). Das Secret gehört nicht ins Repository.

Ablauf: `/oauth/login` merkt sich `state` und `redirect_uri` (10 Minuten) und leitet zu GitHub. GitHub ruft `/oauth/callback?code=…` auf, der Server tauscht den Code mit dem Secret gegen ein Token und leitet zurück zum Editor (`#access_token=…`). Das Token wird nicht gespeichert, es liegt danach nur im Browser; alle weiteren GitHub-Anfragen schickt der Editor direkt an `api.github.com`.

Sicherheit: Das Token wird nur an die Adresse des Servers selbst, an `ALLOWED_ORIGINS` (ohne `*`) oder an `http://localhost` übergeben – sonst könnte eine fremde Seite über den Server Tokens einsammeln. Liegt der Editor unter einer anderen Adresse als der Server (Variante C), muss `ALLOWED_ORIGINS` die Editor-Adresse nennen.

## C++-Compile-Dienst

Die Hex-Datei besteht aus dem übersetzten Programm (macht der Editor im Browser) und der C++-Laufzeit (CODAL, Treiber, C++-Teile von Erweiterungen). Die Laufzeit hängt nur von den C++-Dateien ab und wird über deren Prüfsumme (`sha`) zwischengespeichert. Fehlt sie in allen Caches, baut der Server sie selbst:

1. Editor: `hexcache/<sha>.hex` der statischen Version → fehlt
2. `GET /api/clientconfig` → `primaryCdnUrl` = dieser Server; `GET /api/compile/<sha>.hex` → fehlt
3. `POST /api/compile/extension` → Server legt den Auftrag in die Warteschlange (ein Build gleichzeitig)
4. Editor fragt alle 8 s `GET /api/compile/<sha>.json` (bis 5 min), dann `GET /api/compile/<sha>.hex`

Der Build entspricht `pxt build --localbuild` (Engine `codal`), aber auf Größe optimiert (CMake `MinSizeRel` statt `RelWithDebInfo`, `buildType` in `SERVICES`; `compile.js` setzt ihn nach jedem `git checkout` in `utils/python/codal_utils.py`): `data/compile/mbcodal2/` ist ein Klon von `lancaster-university/microbit-v2-samples` (Tag aus der Anfrage, z. B. `v0.2.13`), `pxtapp/` und `codal.json` kommen aus der Anfrage, dann `python3 build.py`, Ergebnis `build/MICROBIT.hex` → `data/hexcache/<sha>.hex`. Erster Build ca. 1–3 min (Klonen von CODAL), danach ca. 10 s, weil `libraries/` und `build/` erhalten bleiben.

Benötigt auf dem Server:

- `git`, `python3`, `cmake`, `make` oder `ninja`
- Arm GNU Toolchain (`arm-none-eabi-gcc`, z. B. von developer.arm.com oder `apt install gcc-arm-none-eabi`)
- getestet mit arm-none-eabi-gcc 14.2, CMake 4.2 (der Server setzt `CMAKE_POLICY_VERSION_MINIMUM=3.5`, sonst lehnt CMake 4 die alten CODAL-Dateien ab), Python 3.11

Sicherheit: Die Anfrage kommt aus dem Browser. Welche C++-Quellen überhaupt gebaut werden, regelt `cppcheck.js` (siehe unten). Angenommen werden außerdem nur bekannte Compile-Dienste (`SERVICES` in `compile.js`, derzeit `mbcodal2` = Calliope mini V3), nur Quelltexte unter `pxtapp/` (`.cpp .c .h .hpp .s .S`) und eine `codal.json`, die das erwartete CODAL-Ziel (`thomasjball/codal-microbit-v2`) nennt – sonst könnte eine Anfrage CMake Code aus einem beliebigen Repository holen und ausführen lassen. Zusätzlich (und erst recht mit `CPP_ORGS=*`) den Dienst unter einem eigenen Benutzer ohne weitere Rechte laufen lassen (z. B. `User=arcade-share` im systemd-Dienst, Schreibrechte nur auf `DATA_DIR`). Wer das nicht möchte: `COMPILE=makecode`.

### Erlaubte C++-Quellen (`cppcheck.js`)

TypeScript-Erweiterungen erreichen den Compile-Dienst nie, gebaut wird nur der C++-Teil. Vor jedem Build prüft der Server jede Datei des Auftrags:

| Datei | erlaubt, wenn |
|-------|---------------|
| C++-Dateien mitgelieferter Bibliotheken | Inhalt exakt wie in `target.json` (`TARGET_JSON`) |
| `pxtapp/<paket>/…` sonst | Inhalt exakt wie in einer Version eines Repositorys unter `CPP_ORGS` bzw. in `CPP_REPOS`: Kandidaten `<org>/<paket>`, `<org>/pxt-<paket>`; geprüft werden die 30 neuesten Tags sowie `master`/`main`, `name` in `pxt.json` muss `<paket>` sein |
| `pxtapp/main.cpp` | genau der Text, den pxt erzeugt |
| `pxtapp/pxtconfig.h` | nur `#define NAME wert` und Kommentare |
| `pxtapp/pointers.cpp` | nur die Zeilenformen, die pxt erzeugt: `#include` mitgeschickter Header, `namespace`, Deklarationen ohne Zeichenketten, `PXT_FNPTR(…)`; kein `asm`, `_Pragma`, `__attribute__` |

Ohne die Prüfung der erzeugten Dateien könnte ein Auftrag z. B. mit `asm(".incbin \"/etc/passwd\"")` Dateien des Servers in die Hex-Datei kopieren. Die Inhalte der Repositorys kommen über den GitHub-Proxy von makecode.com (`<UPSTREAM>gh/…`, dieselbe Quelle, aus der der Editor die Erweiterungen lädt; kein Limit der GitHub-API). Ergebnisse werden zwischengespeichert. Ein abgelehnter Auftrag landet als Fehler in `compile/status/<sha>.json` und im Protokoll; der Editor meldet einen fehlgeschlagenen Build. Eine verständliche Meldung kommt vorher schon aus dem Editor (`CPP_EXTENSION_ORGS` in `editor/extension.ts`, sollte zu `CPP_ORGS` passen).

Grenzen: Erweiterungen, die auf einen Commit statt auf ein Tag zeigen, gehen nur, solange dieser Stand auf `master`/`main` liegt. Was in den erlaubten Repositorys liegt, wird gebaut; wer dort schreiben darf, entscheidet also mit, was auf dem Server übersetzt wird.

Weitere Hardware-Varianten: Eintrag in `SERVICES` (Werte aus `pxtarget.json` → `variants.<variant>.compileService`).
