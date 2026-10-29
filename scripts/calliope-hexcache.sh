#!/usr/bin/env bash
# Calliope edition: put the Calliope mini (n3) runtime - the C++ part of the .hex - for
# extension combinations into built/hexcache. staticpkg copies built/hexcache into the static
# version, so downloads with these extensions do not need the MakeCode cloud.
#
# Usage (in the repository root):  scripts/calliope-hexcache.sh ["ext1 ext2" ...]
#   default: no extension (""), the Jacdac multiplayer extension ("jacdac-multiplayer"), and
#   both with "usb-only" (added by the editor to games too big for Bluetooth)
# Then rebuild the static version (staticpkg, see CALLIOPE.md).
#
# The runtime is built here with the local ARM toolchain and optimized for size (CMake
# MinSizeRel = -Os, like server/compile.js): about 22 KB smaller than the -O2 build of the
# MakeCode cloud, so games fit next to the SoftDevice and the DFU bootloader. An existing file
# in built/hexcache (e.g. the cloud build that "pxt buildtarget" stores there) is replaced.
#
# Run it again after changes to C++ code (e.g. libs/jacdac/*.cpp, libs/hw---n3/*.cpp), to the
# yotta config of a package, or after a pxt update: the checksum changes. The libraries come
# from built/target.json, so rebuild the target first (pxt buildtarget / serve / staticpkg).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PXT="node $ROOT/node_modules/pxt-core/built/pxt.js"
export PXT_NODOCKER=1
# CMake >= 4 refuses the old cmake_minimum_required() in CODAL
export CMAKE_POLICY_VERSION_MINIMUM=3.5
COMBOS=("$@")
[ ${#COMBOS[@]} -eq 0 ] && COMBOS=("" "jacdac-multiplayer" "usb-only" "jacdac-multiplayer usb-only")

mkdir -p "$ROOT/built/hexcache"
for combo in "${COMBOS[@]}"; do
    dir="$ROOT/projects/hexcache-$(echo "${combo:-base}" | tr ' ' '-')"
    rm -rf "$dir"
    mkdir -p "$dir"
    deps='"device": "*", "hw---n3": "*"'
    for ext in $combo; do deps="$deps, \"$ext\": \"*\""; done
    printf '{ "name": "hexcache", "version": "0.0.1", "dependencies": { %s }, "files": ["main.ts"] }\n' "$deps" > "$dir/pxt.json"
    echo 'controller.moveSprite(sprites.create(image.create(8, 8), SpriteKind.Player))' > "$dir/main.ts"

    echo "== ${combo:-(no extension)}"
    cd "$dir"
    $PXT install > /dev/null
    # 1. local build like the editor's; the debug output names the runtime checksum, and it
    #    leaves a CODAL checkout in built/codal (-O2 at this point)
    PXT_DEBUG=1 $PXT build --hw n3 --localbuild --force > build.log 2>&1 \
        || { echo "build failed, see $dir/build.log"; exit 1; }
    PXT_DEBUG=1 $PXT build --hw n3 --localbuild > sha.log 2>&1 || true
    sha=$(grep -oE 'hexcache/[0-9a-f]{64}\.hex' sha.log | head -1 | grep -oE '[0-9a-f]{64}')
    [ -n "$sha" ] || { echo "no runtime checksum found, see $dir/sha.log"; exit 1; }

    # 2. same build for size: build.py always configures CMake as RelWithDebInfo
    sed -i.bak 's/-DCMAKE_BUILD_TYPE=RelWithDebInfo/-DCMAKE_BUILD_TYPE=MinSizeRel/' built/codal/utils/python/codal_utils.py
    rm -rf built/codal/build
    $PXT build --hw n3 --localbuild --force > build-os.log 2>&1 \
        || { echo "build failed, see $dir/build-os.log"; exit 1; }
    grep -q 'CMAKE_BUILD_TYPE:STRING=MinSizeRel' built/codal/build/CMakeCache.txt \
        || { echo "not built as MinSizeRel, see $dir/build-os.log"; exit 1; }

    cp built/codal/build/MICROBIT.hex "$ROOT/built/hexcache/$sha.hex"
    echo "added to built/hexcache (MinSizeRel): $sha"
    cd "$ROOT"
    rm -rf "$dir"
done
rmdir "$ROOT/projects" 2> /dev/null || true
# pxt regenerates these on every build; they are not part of the Calliope edition
git -C "$ROOT" checkout -- 'libs/*/shims.d.ts' 2> /dev/null || true
