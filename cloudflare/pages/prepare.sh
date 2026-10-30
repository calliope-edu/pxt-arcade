#!/usr/bin/env bash
# Calliope edition: fills dist/ for the Pages project from a static editor
# ("pxt staticpkg --output <folder>"), fixes it (scripts/calliope-staticfix.py), adds the
# translated tutorials (l10n/ of the repository), _worker.js, _routes.json and 404.html.
# Usage: cloudflare/pages/prepare.sh ~/MakeCodeArcadeBLE-static
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../.." && pwd)"
SRC="${1:?usage: prepare.sh <static editor folder>}"
SRC="$(cd "$SRC" && pwd)"
[ -f "$SRC/index.html" ] || { echo "no index.html in $SRC" >&2; exit 1; }
DIST="$HERE/dist"
mkdir -p "$DIST"
rsync -a --delete --exclude _worker.js --exclude _routes.json --exclude 404.html --exclude l10n "$SRC/" "$DIST/"
python3 "$REPO/scripts/calliope-staticfix.py" "$DIST"
mkdir -p "$DIST/l10n"
rsync -a --delete "$REPO/l10n/" "$DIST/l10n/"
node "$REPO/scripts/calliope-render-l10n.js" "$DIST" "$DIST"
cp "$HERE/_worker.js" "$DIST/_worker.js"
cat > "$DIST/404.html" <<'HTML'
<!doctype html><meta charset="utf-8"><title>404</title><p>Not found / Nicht gefunden. <a href="/">MakeCode Arcade</a></p>
HTML
# the worker runs for everything except the files and folders of the editor: requests for
# them are served by Pages directly (free, not counted as worker requests). Pages allows
# 100 rules in all.
node - "$DIST" > "$DIST/_routes.json" <<'JS'
const fs = require("fs");
const dist = process.argv[2];
const exclude = [];
for (const name of fs.readdirSync(dist).sort()) {
    if (name.startsWith(".") || ["_worker.js", "_routes.json", "404.html", "index.html", "static"].includes(name)) continue;
    // docs/*.md go through the worker (translations, see _worker.js), only the images not
    if (name == "docs") {
        exclude.push("/docs/static/*");
        continue;
    }
    // skillmap/educator-info/... ("Lernerfolge" in a skillmap) is answered by the worker,
    // only the skillmap app's own files not
    if (name == "skillmap") {
        for (const sub of fs.readdirSync(dist + "/skillmap")) exclude.push("/skillmap/" + sub + "/*");
        continue;
    }
    if (fs.statSync(dist + "/" + name).isDirectory()) exclude.push("/" + name + "/*");
    else exclude.push("/" + name);
}
if (exclude.length > 99) throw new Error("too many top-level entries for _routes.json: " + exclude.length);
process.stdout.write(JSON.stringify({ version: 1, include: ["/*"], exclude }, null, 2) + "\n");
JS
echo "dist ready: $(find "$DIST" -type f | wc -l | tr -d ' ') files, $(node -p "require('$DIST/_routes.json').exclude.length") excluded paths"
