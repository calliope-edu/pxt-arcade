# MakeCode Arcade (Calliope-Edition) auf Cloudflare

Der statische Editor (`pxt staticpkg`) liegt als statische Dateien bei Cloudflare („Workers mit Static Assets“). Ein kleiner Worker (`worker.js`) übernimmt die Aufgaben von `server/server.js`. Die geteilten Projekte liegen in R2, dem Dateispeicher von Cloudflare. Ein eigener Rechner ist nicht nötig.

| Anfrage | wird bedient von |
|---------|------------------|
| Editor, Simulator, `hexcache/` (C++ der mitgelieferten Bibliotheken) | statische Dateien, ohne Worker |
| `POST /api/scripts`, `GET /api/<id>`, `/api/<id>/text`, `/api/<id>/thumb` | Worker, Ablage in R2 unter `scripts/<id>/` (`script.json`, `text.json`, `thumb`; dieselben Dateien wie in `server/data/scripts/`) |
| `POST /api/<id>/abusereports` | Worker, Ablage in R2 unter `abusereports/` |
| `GET /oauth/login`, `/oauth/callback` | Worker: „Mit GitHub anmelden“ über die eigene GitHub-OAuth-App, ohne App Weiterleitung an makecode.com |
| `/`, Hilfe-Links (`/github`, `/github/commit`, …), `/static/…` | Worker: `index.html` bzw. `docs/<pfad>.html` und `docs/static/…` aus den statischen Dateien |
| `/api/clientconfig`, `/api/compile/…` (C++-Build für Erweiterungen) | `COMPILE_API` (z. B. `server/server.js` auf einem Rechner mit ARM-Toolchain), sonst MakeCode-Cloud |
| alle anderen `/api/…` (GitHub-Erweiterungen, früher auf makecode.com geteilte Projekte, …) | weitergereicht an `https://www.makecode.com/api/` |

Der Editor braucht keine Änderung: Er nimmt `api/` unter seiner eigenen Adresse (`CLOUD_API_ROOT` in `editor/extension.ts`). Geteilte Links lauten deshalb automatisch `https://calliope-arcade.<konto>.workers.dev/#pub:_…`, mit eigener Adresse z. B. `https://arcade.calliope.cc/#pub:_…`.

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
   wrangler r2 bucket create calliope-arcade-scripts
   ```
3. **Statische Version bauen** (siehe „Statische Version bauen“ in `CALLIOPE.md`), z. B. nach `~/MakeCodeArcadeJacdac-static`.
4. **Hochladen:**
   ```bash
   cd cloudflare
   wrangler deploy --assets ~/MakeCodeArcadeJacdac-static
   ```
   Ohne `--assets` nimmt Wrangler `../built/packaged` (Standardausgabe von `staticpkg`). Hochgeladen werden nur geänderte Dateien. Den Befehl nach jedem neuen `staticpkg`-Build wiederholen.

   Der Editor ist dann unter `https://calliope-arcade.<konto>.workers.dev` erreichbar; die genaue Adresse gibt Wrangler am Ende aus.
5. **GitHub-Anmeldung (optional, aber nötig für „Als GitHub-Repository speichern“):**
   - Auf GitHub unter Settings → Developer settings → OAuth Apps → New OAuth App eine App anlegen, am besten in der Organisation `calliope-edu`.
     - Homepage: `https://calliope-arcade.<konto>.workers.dev/`
     - Authorization callback URL: `https://calliope-arcade.<konto>.workers.dev/oauth/callback`
     - Bei einer eigenen Adresse stattdessen diese eintragen.
   - Client-ID und ein neu erzeugtes Client-Secret als Secrets hinterlegen:
     ```bash
     wrangler secret put GITHUB_CLIENT_ID
     wrangler secret put GITHUB_CLIENT_SECRET
     ```
   - Ohne diese App leitet der Worker an makecode.com weiter. makecode.com schickt aber nicht zu fremden Adressen zurück, die Anmeldung scheitert also.

### Eigene Adresse (z. B. `arcade.calliope.cc`)

Ein Worker kann eine eigene Adresse nur in einer Domain bekommen, die im selben Cloudflare-Konto verwaltet wird, deren Nameserver also bei Cloudflare liegen. Ein CNAME beim bisherigen DNS-Anbieter auf `….workers.dev` funktioniert nicht. Sonst bricht `wrangler deploy` mit „Can't infer zone from route“ ab (Code 10082).

Liegt die Domain bei Cloudflare:
1. In `wrangler.jsonc` die Zeile `"routes": [...]` einkommentieren.
2. `wrangler deploy` erneut ausführen. Cloudflare legt dann DNS-Eintrag und Zertifikat selbst an.

Die `workers.dev`-Adresse bleibt daneben erreichbar.

## Einstellungen (`wrangler.jsonc`)

| Einstellung | Voreinstellung | Bedeutung |
|-------------|----------------|-----------|
| `assets.directory` | `../built/packaged` | statischer Editor; bei `wrangler deploy` mit `--assets <ordner>` überschreibbar |
| `routes` | – (auskommentiert) | eigene Adresse (Custom Domain), siehe oben |
| `r2_buckets` | `calliope-arcade-scripts` | Speicher für geteilte Projekte und Missbrauchsmeldungen |
| `ratelimits` | 30 pro Minute | Veröffentlichungen pro IP. Eine Schulklasse teilt sich oft eine IP |
| `UPSTREAM` | `https://www.makecode.com/api/` | Ziel für alle anderen API-Anfragen |
| `COMPILE_API` | – | `/api/` eines `server/server.js` mit ARM-Toolchain für C++-Builds von Erweiterungen (z. B. `https://compile.calliope.cc/api/`); leer = MakeCode-Cloud |
| `ALLOWED_ORIGINS` | – (alle) | erlaubte andere Editor-Adressen für CORS und als Rücksprung der GitHub-Anmeldung |
| `MAX_BODY` | `8388608` | maximale Projektgröße in Byte |
| `GITHUB_SCOPE` | `repo` | angefragte GitHub-Rechte |
| Secrets `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | – | eigene GitHub-OAuth-App (`wrangler secret put …`) |

## Lokal testen

```bash
cd cloudflare
wrangler dev --assets ~/MakeCodeArcadeJacdac-static --port 8791
```

Danach den Editor unter `http://localhost:8791/` öffnen. R2 läuft dabei lokal (`.wrangler/`), nichts geht zu Cloudflare.

Für Tests der GitHub-Anmeldung legt man `GITHUB_CLIENT_ID=…` und `GITHUB_CLIENT_SECRET=…` in `cloudflare/.dev.vars` ab; die Datei ist vom Commit ausgeschlossen. Mit eingeschaltetem `routes` gibt sich `wrangler dev` als diese Adresse aus. Die Anmeldung kehrt dann dorthin zurück, lokal lässt sie sich so nicht vollständig testen.

Getestet mit Wrangler 4.154 (lokal):
- Editor, Hilfe-Links und Bilder der Hilfe-Seiten laden.
- Teilen über den Dialog: Der Link `…/#pub:_…` öffnet das Projekt wieder.
- Vorschaubild, Missbrauchsmeldung und Begrenzung (Antwort 429) funktionieren.
- Unbekannte IDs werden an makecode.com weitergegeben.
- GitHub-Anmeldung:
  - leitet zu GitHub weiter;
  - fremde Rücksprung-Adressen werden abgelehnt;
  - ein veränderter `state` wird abgelehnt;
  - nach Abbruch kehrt sie ohne Token zurück.

Noch nicht bei Cloudflare selbst ausprobiert.

## Betrieb

- **Protokolle:** im Dashboard unter Workers → `calliope-arcade` → Logs, oder live mit `wrangler tail`.
- **Missbrauchsmeldungen:** im Dashboard unter R2 → `calliope-arcade-scripts` → `abusereports/`.
- **Ein Projekt löschen:** `wrangler r2 object delete calliope-arcade-scripts/scripts/<id>/script.json --remote`. Danach gilt die ID als nicht vorhanden; die übrigen Dateien können bleiben.
- **Projekte von `server/server.js` übernehmen:** Für jede Datei von `server/data/scripts/<id>/` den folgenden Befehl ausführen, `script.json` zuletzt:
  ```bash
  wrangler r2 object put calliope-arcade-scripts/scripts/<id>/<datei> --file server/data/scripts/<id>/<datei> --remote
  ```
- **Kosten im kostenlosen Plan:**
  - Statische Dateien sind frei.
  - Der Worker läuft nur für `/api/`, `/oauth/` und Pfade ohne eigene Datei: 100.000 Anfragen pro Tag.
  - R2: 10 GB Speicher frei.
- **Grenzen:** höchstens 20.000 Dateien zu je 25 MB. Die statische Version hat etwa 6.300 Dateien, die größte unter 20 MB.

## Unterschiede zu `server/server.js`

- **Kein C++-Build im Worker.**
  - C++ der mitgelieferten Bibliotheken kommt fertig aus `hexcache/`.
  - Andere C++-Erweiterungen baut die MakeCode-Cloud oder ein `server/server.js` unter `COMPILE_API`. Dort prüft `cppcheck.js` die Quellen; ohne `COMPILE_API` bleibt nur die Prüfung im Editor (C++ nur von `calliope-edu`).
- **GitHub-Anmeldung:** Der Worker merkt sich zwischen den Anfragen nichts. Editor-Zustand und Rücksprung-Adresse reisen deshalb, mit dem Client-Secret signiert, im `state` mit GitHub und gelten 10 Minuten. Der Code von GitHub ist trotzdem nur einmal verwendbar.
- **Begrenzung beim Teilen:** pro Minute statt pro Stunde (Cloudflare kennt nur Zeiträume von 10 oder 60 Sekunden).
