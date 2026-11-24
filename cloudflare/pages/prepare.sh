#!/usr/bin/env bash
# Calliope edition: fills dist.nosync/ for the Pages project from a static editor
# ("pxt staticpkg --output <folder>"), fixes it (scripts/calliope-staticfix.py), adds the
# translated tutorials (l10n/ of the repository), _worker.js, _routes.json and 404.html.
# Usage: cloudflare/pages/prepare.sh ~/MakeCodeArcadeBLE-static
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../.." && pwd)"
SRC="${1:?usage: prepare.sh <static editor folder>}"
SRC="$(cd "$SRC" && pwd)"
[ -f "$SRC/index.html" ] || { echo "no index.html in $SRC" >&2; exit 1; }
# ".nosync": the repository may be in an iCloud-synced folder ("Documents"), where macOS
# offloads files and wrangler then times out reading them ("ETIMEDOUT ... read"); iCloud
# leaves folders ending in .nosync alone. (A link to a folder elsewhere breaks wrangler's
# path to the bundled _worker.js.)
DIST="$HERE/dist.nosync"
mkdir -p "$DIST"
rsync -a --delete --exclude _worker.js --exclude _routes.json --exclude 404.html --exclude l10n "$SRC/" "$DIST/"
python3 "$REPO/scripts/calliope-staticfix.py" "$DIST"
mkdir -p "$DIST/l10n"
rsync -a --delete "$REPO/l10n/" "$DIST/l10n/"
node "$REPO/scripts/calliope-render-l10n.js" "$DIST" "$DIST"
cp "$HERE/_worker.js" "$DIST/_worker.js"
# translations of the help pages (cards of code examples) after embed.js
cp "$HERE/docs-l10n.js" "$DIST/docs-l10n.js"
cp "$HERE/docs-jsdoc.json" "$DIST/docs-jsdoc.json"
grep -q docs-l10n.js "$DIST/docs.html" || perl -0pi -e 's#(<script[^>]*src="/embed\.js"[^>]*>\s*</script>)#$1\n    <script type="text/javascript" src="/docs-l10n.js"></script>#' "$DIST/docs.html"
grep -q docs-l10n.js "$DIST/docs.html" || echo "warning: docs-l10n.js not added to docs.html" >&2
# the static help pages (docs/**/*.html) too: German/French article, hidden menu entries
find "$DIST/docs" -name '*.html' -print0 | xargs -0 perl -0pi -e 's#(<script[^>]*src="/embed\.js"[^>]*>\s*</script>)(?!\s*<script[^>]*docs-l10n)#$1\n<script src="/docs-l10n.js" type="text/javascript"></script>#'
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
    // and /multiplayer?host=... is sent to arcade.makecode.com by the worker ("/multiplayer/*"
    // would also match /multiplayer)
    if (name == "skillmap" || name == "multiplayer") {
        for (const sub of fs.readdirSync(dist + "/" + name)) exclude.push("/" + name + "/" + sub + "/*");
        continue;
    }
    if (name == "multiplayer.html") continue;
    if (fs.statSync(dist + "/" + name).isDirectory()) exclude.push("/" + name + "/*");
    else exclude.push("/" + name);
}
if (exclude.length > 99) throw new Error("too many top-level entries for _routes.json: " + exclude.length);
process.stdout.write(JSON.stringify({ version: 1, include: ["/*"], exclude }, null, 2) + "\n");
JS
echo "dist ready: $(find "$DIST" -type f | wc -l | tr -d ' ') files, $(node -p "require('$DIST/_routes.json').exclude.length") excluded paths"
