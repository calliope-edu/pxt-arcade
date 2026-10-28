#!/usr/bin/env bash
# Calliope edition: put the Calliope mini (n3) runtime - the C++ part of the .hex - for
# extension combinations into built/hexcache. staticpkg copies built/hexcache into the static
# version, so downloads with these extensions do not need the MakeCode cloud.
#
# Usage (in the repository root):  scripts/calliope-hexcache.sh ["ext1 ext2" ...]
#   default: the Jacdac multiplayer extension ("jacdac-multiplayer")
# Then rebuild the static version (staticpkg, see CALLIOPE.md).
#
# Run it again after changes to C++ code (e.g. libs/jacdac/*.cpp) or a pxt update: the
# checksum changes. The runtime is fetched from cdn.makecode.com; the build in step 1 makes
# the MakeCode cloud compile it first if it does not exist yet.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PXT="node $ROOT/node_modules/pxt-core/built/pxt.js"
COMBOS=("$@")
[ ${#COMBOS[@]} -eq 0 ] && COMBOS=("jacdac-multiplayer")

mkdir -p "$ROOT/built/hexcache"
for combo in "${COMBOS[@]}"; do
    dir="$ROOT/projects/hexcache-$(echo "$combo" | tr ' ' '-')"
    rm -rf "$dir"
    mkdir -p "$dir"
    deps='"device": "*", "hw---n3": "*"'
    for ext in $combo; do deps="$deps, \"$ext\": \"*\""; done
    printf '{ "name": "hexcache", "version": "0.0.1", "dependencies": { %s }, "files": ["main.ts"] }\n' "$deps" > "$dir/pxt.json"
    echo 'controller.moveSprite(sprites.create(image.create(8, 8), SpriteKind.Player))' > "$dir/main.ts"

    echo "== $combo"
    # 1. build like the editor does; the debug output names the runtime checksum
    (cd "$dir" && PXT_NODOCKER=1 $PXT install > /dev/null && PXT_DEBUG=1 PXT_NODOCKER=1 $PXT build --hw n3 > build.log 2>&1) \
        || { echo "build failed, see $dir/build.log"; exit 1; }
    sha=$(grep -oE 'hexcache/[0-9a-f]{64}\.hex' "$dir/build.log" | head -1 | grep -oE '[0-9a-f]{64}')
    [ -n "$sha" ] || { echo "no runtime checksum found, see $dir/build.log"; exit 1; }

    # 2. fetch the runtime into the hex cache
    target="$ROOT/built/hexcache/$sha.hex"
    if [ -s "$target" ]; then
        echo "already in built/hexcache: $sha"
    else
        curl -fsSL "https://cdn.makecode.com/compile/$sha.hex" -o "$target"
        echo "added to built/hexcache: $sha"
    fi
    rm -rf "$dir"
done
rmdir "$ROOT/projects" 2> /dev/null || true
# pxt regenerates these on every build; they are not part of the Calliope edition
git -C "$ROOT" checkout -- 'libs/*/shims.d.ts' 2> /dev/null || true
