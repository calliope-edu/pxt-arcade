# MakeCode Arcade (Calliope-Edition) auf Cloudflare

Der statische Editor (`pxt staticpkg`) liegt als **Pages-Projekt `arcade`** bei Cloudflare (`https://arcade.pages.dev`, siehe unten). Teilen und GitHub-Anmeldung übernimmt der **Worker `arcade-api`** (`worker.js`, die Aufgaben von `server/server.js`). Die geteilten Projekte liegen in R2, dem Dateispeicher von Cloudflare. Ein eigener Rechner ist nicht nötig.

Warum zwei Teile: Pages kennt keine Begrenzung von Anfragen (Rate Limiting gibt es nur für Worker). Der Worker begrenzt das Teilen pro IP. Er hat keine eigene Adresse; Pages reicht ihm `/api/…` und `/oauth/…` über eine Service-Bindung weiter, mit der Adresse des Editors.

| Anfrage | wird bedient von |
|---------|------------------|
| Editor, Simulator, `hexcache/` (C++ der mitgelieferten Bibliotheken), `docs/` | Pages direkt (statische Dateien, kein Worker) |
| `/`, Hilfe-Links (`/github`, `/github/commit`, …), `/static/…` | `pages/_worker.js`: `index.html` bzw. `docs/<pfad>.html` und `docs/static/…` |
| `POST /api/scripts`, `GET /api/<id>`, `/api/<id>/text`, `/api/<id>/thumb` | Worker `arcade-api`, Ablage in R2 unter `scripts/<id>/` (`script.json`, `text.json`, `thumb`; dieselben Dateien wie in `server/data/scripts/`) |
| `POST /api/<id>/abusereports` | Worker `arcade-api`, Ablage in R2 unter `abusereports/` |
| `GET /oauth/login`, `/oauth/callback` | Worker `arcade-api`: „Mit GitHub anmelden“ über die eigene GitHub-OAuth-App, ohne App Weiterleitung an makecode.com |
| `/api/clientconfig`, `/api/compile/…` (C++-Build für Erweiterungen) | `COMPILE_API` (z. B. `server/server.js` auf einem Rechner mit ARM-Toolchain), sonst MakeCode-Cloud |
| alle anderen `/api/…` (GitHub-Erweiterungen, früher auf makecode.com geteilte Projekte, …) | weitergereicht an `https://www.makecode.com/api/` |

Der Editor braucht keine Änderung: Er nimmt `api/` unter seiner eigenen Adresse (`CLOUD_API_ROOT` in `editor/extension.ts`). Geteilte Links lauten deshalb automatisch `https://arcade.pages.dev/#pub:_…`.

## Einrichten

Voraussetzungen:
- Ein Cloudflare-Konto (der kostenlose Plan reicht).
- Node.js.

1. **Wrangler installieren und anmelden:**
   ```bash
   npm install -g wrangler
   wrangler login
   ```
2. **Speicher für geteilte Projekte anlegen (einmalig):**
   ```bash
   wrangler r2 bucket create arcade-scripts
   ```
3. **API-Worker hochladen** (zuerst, Pages braucht ihn für die Service-Bindung):
   ```bash
   cd cloudflare
   wrangler deploy
   ```
4. **Statische Version bauen** (siehe „Statische Version bauen“ in `CALLIOPE.md`), z. B. nach `~/MakeCodeArcadeBLE-static`, und für Pages vorbereiten:
   ```bash
   cloudflare/pages/prepare.sh ~/MakeCodeArcadeBLE-static
   ```
   Das kopiert den Editor nach `cloudflare/pages/dist/` und legt `_worker.js`, `_routes.json` (welche Pfade Pages ohne Worker ausliefert) und `404.html` dazu.
5. **Pages-Projekt anlegen (einmalig) und hochladen:**
   ```bash
   cd cloudflare/pages
   wrangler pages project create arcade --production-branch main
   wrangler pages deploy
   ```
   Hochgeladen werden nur geänderte Dateien. Schritt 4 und `wrangler pages deploy` nach jedem neuen `staticpkg`-Build wiederholen; der API-Worker muss nur bei Änderungen an `worker.js` oder `wrangler.jsonc` neu hochgeladen werden.

   Der Editor ist dann unter `https://arcade.pages.dev` erreichbar. Ist der Name `arcade` bei pages.dev schon vergeben, hängt Cloudflare etwas an (z. B. `arcade-4kx.pages.dev`); die genaue Adresse zeigt `wrangler pages project create` bzw. das Dashboard unter Workers & Pages → `arcade`.
6. **GitHub-Anmeldung (optional, aber nötig für „Als GitHub-Repository speichern“):**
   - Auf GitHub unter Settings → Developer settings → OAuth Apps → New OAuth App eine App anlegen, am besten in der Organisation `calliope-edu`.
     - Homepage: `https://arcade.pages.dev/`
     - Authorization callback URL: `https://arcade.pages.dev/oauth/callback`
     - Bei einer anderen Adresse (siehe Schritt 5) oder eigenen Domain stattdessen diese eintragen.
   - Client-ID und ein neu erzeugtes Client-Secret beim **API-Worker** hinterlegen:
     ```bash
     cd cloudflare
     wrangler secret put GITHUB_CLIENT_ID
     wrangler secret put GITHUB_CLIENT_SECRET
     ```
   - Ohne diese App leitet der Worker an makecode.com weiter. makecode.com schickt aber nicht zu fremden Adressen zurück, die Anmeldung scheitert also.

### Eigene Adresse (z. B. `arcade.calliope.cc`)

Im Dashboard unter Workers & Pages → `arcade` → Custom domains eintragen. Liegt die Domain bei einem anderen DNS-Anbieter, genügt dort ein CNAME auf `arcade.pages.dev`; Cloudflare zeigt den genauen Eintrag an. Danach die Adresse auch in der GitHub-OAuth-App eintragen. Die pages.dev-Adresse bleibt daneben erreichbar.

## Einstellungen des API-Workers (`wrangler.jsonc`)

| Einstellung | Voreinstellung | Bedeutung |
|-------------|----------------|-----------|
| `r2_buckets` | `arcade-scripts` | Speicher für geteilte Projekte und Missbrauchsmeldungen |
| `ratelimits` | 30 pro Minute | Veröffentlichungen pro IP. Eine Schulklasse teilt sich oft eine IP |
| `workers_dev`, `preview_urls` | `false` | keine eigene Adresse, nur über das Pages-Projekt erreichbar |
| `UPSTREAM` | `https://www.makecode.com/api/` | Ziel für alle anderen API-Anfragen |
| `COMPILE_API` | – | `/api/` eines `server/server.js` mit ARM-Toolchain für C++-Builds von Erweiterungen (z. B. `https://compile.calliope.cc/api/`); leer = MakeCode-Cloud |
| `ALLOWED_ORIGINS` | – (alle) | erlaubte andere Editor-Adressen für CORS und als Rücksprung der GitHub-Anmeldung |
| `MAX_BODY` | `8388608` | maximale Projektgröße in Byte |
| `GITHUB_SCOPE` | `repo` | angefragte GitHub-Rechte |
| Secrets `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | – | eigene GitHub-OAuth-App (`wrangler secret put …`) |

Das Pages-Projekt (`pages/wrangler.jsonc`) hat nur seinen Namen `arcade`, den Ausgabeordner `dist/` und die Service-Bindung `API` → `arcade-api`. Heißt der Worker anders, dort mit ändern.

## Lokal testen

In zwei Terminals, zuerst den API-Worker, dann Pages (die Service-Bindung aus `pages/wrangler.jsonc` liest `wrangler pages dev` nicht, daher `--service`):

```bash
cd cloudflare
wrangler dev --port 8792
```

```bash
cloudflare/pages/prepare.sh ~/MakeCodeArcadeBLE-static
cd cloudflare/pages
wrangler pages dev --port 8791 --service API=arcade-api
```

Danach den Editor unter `http://localhost:8791/` öffnen. R2 läuft dabei lokal (`.wrangler/`), nichts geht zu Cloudflare.

Für Tests der GitHub-Anmeldung legt man `GITHUB_CLIENT_ID=…` und `GITHUB_CLIENT_SECRET=…` in `cloudflare/.dev.vars` ab; die Datei ist vom Commit ausgeschlossen.

Getestet mit Wrangler 4.154 (lokal, Pages mit API-Worker):
- Editor, Simulator (Pages leitet `simulator.html` auf `/simulator` um, das stört nicht), Hilfe-Links (`/github`, `/reference/usb-only`) und Bilder der Hilfe-Seiten laden.
- Herunterladen nimmt die Bluetooth-Laufzeit aus `hexcache/`, ohne MakeCode-Cloud.
- Teilen über den Dialog: Der Link `…/#pub:_…` öffnet das Projekt wieder.
- Unbekannte Pfade antworten mit 404.

Früher getestet (nur Worker mit statischen Dateien): Vorschaubild, Missbrauchsmeldung, Begrenzung (Antwort 429), Weitergabe unbekannter IDs an makecode.com und die Prüfungen der GitHub-Anmeldung. `worker.js` ist dafür unverändert.

Noch nicht bei Cloudflare selbst ausprobiert. Nach dem ersten `wrangler pages deploy` im Dashboard unter Workers & Pages → `arcade` → Settings → Bindings prüfen, dass die Service-Bindung `API` → `arcade-api` da ist; sonst dort von Hand anlegen und neu hochladen.

## Betrieb

- **Protokolle:** im Dashboard unter Workers & Pages → `arcade-api` → Logs, oder live mit `wrangler tail` im Ordner `cloudflare`.
- **Missbrauchsmeldungen:** im Dashboard unter R2 → `arcade-scripts` → `abusereports/`.
- **Ein Projekt löschen:** `wrangler r2 object delete arcade-scripts/scripts/<id>/script.json --remote`. Danach gilt die ID als nicht vorhanden; die übrigen Dateien können bleiben.
- **Projekte von `server/server.js` übernehmen:** Für jede Datei von `server/data/scripts/<id>/` den folgenden Befehl ausführen, `script.json` zuletzt:
  ```bash
  wrangler r2 object put arcade-scripts/scripts/<id>/<datei> --file server/data/scripts/<id>/<datei> --remote
  ```
- **Kosten im kostenlosen Plan:**
  - Statische Dateien sind frei.
  - `pages/_worker.js` läuft nur für Pfade, die nicht in `_routes.json` ausgenommen sind (`/`, Hilfe-Links, `/api/`, `/oauth/`); er und der API-Worker teilen sich 100.000 Anfragen pro Tag.
  - R2: 10 GB Speicher frei.
- **Grenzen von Pages:** höchstens 20.000 Dateien zu je 25 MB, 100 Regeln in `_routes.json` (`prepare.sh` bricht sonst ab).

## Unterschiede zu `server/server.js`

- **Kein C++-Build im Worker.**
  - C++ der mitgelieferten Bibliotheken kommt fertig aus `hexcache/`.
  - Andere C++-Erweiterungen baut die MakeCode-Cloud oder ein `server/server.js` unter `COMPILE_API`. Dort prüft `cppcheck.js` die Quellen; ohne `COMPILE_API` bleibt nur die Prüfung im Editor (C++ nur von `calliope-edu`).
- **GitHub-Anmeldung:** Der Worker merkt sich zwischen den Anfragen nichts. Editor-Zustand und Rücksprung-Adresse reisen deshalb, mit dem Client-Secret signiert, im `state` mit GitHub und gelten 10 Minuten. Der Code von GitHub ist trotzdem nur einmal verwendbar.
- **Begrenzung beim Teilen:** pro Minute statt pro Stunde (Cloudflare kennt nur Zeiträume von 10 oder 60 Sekunden).
