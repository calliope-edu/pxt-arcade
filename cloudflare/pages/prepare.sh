#!/usr/bin/env bash
# Calliope edition: fills dist/ for the Pages project from a static editor
# ("pxt staticpkg --output <folder>"), adds _worker.js, _routes.json and 404.html.
# Usage: cloudflare/pages/prepare.sh ~/MakeCodeArcadeBLE-static
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${1:?usage: prepare.sh <static editor folder>}"
SRC="$(cd "$SRC" && pwd)"
[ -f "$SRC/index.html" ] || { echo "no index.html in $SRC" >&2; exit 1; }
DIST="$HERE/dist"
mkdir -p "$DIST"
rsync -a --delete --exclude _worker.js --exclude _routes.json --exclude 404.html "$SRC/" "$DIST/"
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
    if (fs.statSync(dist + "/" + name).isDirectory()) exclude.push("/" + name + "/*");
    else exclude.push("/" + name);
}
if (exclude.length > 99) throw new Error("too many top-level entries for _routes.json: " + exclude.length);
process.stdout.write(JSON.stringify({ version: 1, include: ["/*"], exclude }, null, 2) + "\n");
JS
echo "dist ready: $(find "$DIST" -type f | wc -l | tr -d ' ') files, $(node -p "require('$DIST/_routes.json').exclude.length") excluded paths"
