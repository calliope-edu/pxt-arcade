#!/usr/bin/env bash
# Calliope edition: builds the whole site the calliope-build workflow pushes to build-live or
# build-dev (CALLIOPE-BUILD.md), into an output folder:
#
#   <out>/                 the editor on its own address, ready for the Pages project
#                          (cloudflare/pages/prepare.sh: _worker.js, _routes.json, l10n/, ...)
#   <out>/editors/arcade/  the editor as Calliope Campus serves it on its own origin
#   BUILD.json             in both
#
# Usage (in the repository root, Linux or WSL; needs node 22 or newer, python3, rsync, perl):
#   scripts/calliope-build.sh <out> <site-url>
#   <site-url>: the edition's own address, which shares the Campus variant's projects
#               (https://arcade.calliope.cc/ on live, https://arcade-dev.calliope.cc/ on dev)
# BUILD_CHANNEL, BUILD_VERSION, BUILD_COMMIT and BUILD_AT name the build
# (scripts/calliope-build-info.js); without them it is a "local" build.
#
# The Calliope mini runtimes (scripts/calliope-hexcache.sh, local ARM toolchain) are only
# built when built/hexcache has none for the current C++ sources (CALLIOPE_HEXCACHE=skip
# leaves them out, CALLIOPE_HEXCACHE=force builds them again): the workflow keeps
# built/hexcache in its cache.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:?usage: calliope-build.sh <out> <site-url>}"
SITE_URL="${2:?usage: calliope-build.sh <out> <site-url>}"
PXT="node $ROOT/node_modules/pxt-core/built/pxt.js"
export PXT_NODOCKER=1
cd "$ROOT"

TMP="$(mktemp -d)"
restore() {
    # pxt regenerates these on every build (docs/projects.md from the galleries), and the
    # build info is only for this build
    git -C "$ROOT" checkout -- pxtarget.json docs/projects.md 'libs/*/shims.d.ts' 2> /dev/null || true
    rm -rf "$TMP"
}
trap restore EXIT

# 1. The C++ runtimes for the Calliope mini, keyed by everything that changes them. The
#    marker in built/hexcache names the sources the runtimes there were built from.
key=$( (git ls-files -s -- 'libs/*.cpp' 'libs/*.c' 'libs/*.h' 'libs/*/pxt.json' \
          pxtarget.json package.json scripts/calliope-hexcache.sh; \
        node -p 'require("./node_modules/pxt-core/package.json").version'; \
        node -p 'require("./node_modules/pxt-common-packages/package.json").version') \
      | sha256sum | cut -c1-16)
marker="built/hexcache/.calliope-runtimes-$key"
case "${CALLIOPE_HEXCACHE:-}" in
    skip) echo "== runtimes: skipped (CALLIOPE_HEXCACHE=skip)" ;;
    force|"")
        if [ "${CALLIOPE_HEXCACHE:-}" != force ] && [ -f "$marker" ]; then
            echo "== runtimes: built/hexcache is up to date ($key)"
        else
            echo "== runtimes: building ($key)"
            $PXT buildtarget
            scripts/calliope-hexcache.sh
            rm -f built/hexcache/.calliope-runtimes-*
            touch "$marker"
        fi ;;
    *) echo "CALLIOPE_HEXCACHE must be skip or force" >&2; exit 1 ;;
esac

# 2. The site root, with the build info in the target (code constant and version line).
node scripts/calliope-build-info.js --patch-target
$PXT staticpkg --output "$TMP/root"

# 3. The Campus variant: the same, under /editors/arcade/, sharing through the site.
node scripts/calliope-build-info.js --patch-target --site-url "$SITE_URL"
$PXT staticpkg --route /editors/arcade/ --output "$TMP/campus"
mkdir -p "$TMP/root/editors"
cp -r "$TMP/campus/editors/arcade" "$TMP/root/editors/arcade"

# 4. Ready for Pages: _worker.js, _routes.json (which now also leaves /editors/* to Pages),
#    translated tutorials, the skillmap fix.
cloudflare/pages/prepare.sh "$TMP/root"
rm -rf "$OUT"
mkdir -p "$(dirname "$OUT")"
mv cloudflare/pages/dist.nosync "$OUT"

# 5. BUILD.json next to both variants, with the values both builds compiled in.
node scripts/calliope-build-info.js > "$OUT/BUILD.json"
cp "$OUT/BUILD.json" "$OUT/editors/arcade/BUILD.json"
cat "$OUT/BUILD.json"

# 6. Cloudflare Pages takes at most 20 000 files and 25 MiB per file.
files=$(find "$OUT" -type f | wc -l)
echo "files: $files"
if [ "$files" -gt 20000 ]; then echo "error: $files files, Cloudflare Pages takes 20000" >&2; exit 1; fi
big=$(find "$OUT" -type f -size +25M)
if [ -n "$big" ]; then echo "error: files over 25 MiB: $big" >&2; exit 1; fi
