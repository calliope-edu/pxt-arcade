#!/usr/bin/env bash
# Calliope edition: after updating pxt-arcade (git merge of a Microsoft release) or the npm
# packages pxt-core / pxt-common-packages, check the assumptions the Calliope changes make about
# code that git does not show as a conflict: files in node_modules, the pxt web app, and CODAL.
# Every check names the Calliope file that depends on it (see CALLIOPE.md).
#
# Usage (in the repository root, after "npm install"):  scripts/calliope-upstream-check.sh
# Exit code 1 if anything needs a look.
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NM="$ROOT/node_modules"
CPK="$NM/pxt-common-packages/libs"
fails=0
ok() { echo "ok    $1"; }
bad() { echo "CHECK $1"; echo "      -> $2"; fails=$((fails + 1)); }
# has <file> <fixed string> <what> <calliope file that depends on it>
has() { if grep -qF -- "$2" "$1" 2>/dev/null; then ok "$3"; else bad "$3" "not found in ${1#$ROOT/}; check $4"; fi; }

echo "pxt-core $(node -p "require('$NM/pxt-core/package.json').version"), pxt-common-packages $(node -p "require('$NM/pxt-common-packages/package.json').version")"

# 1. libs/settings/NRF52Flash.cpp is a full copy of the upstream file plus one declaration
up="$CPK/settings/NRF52Flash.cpp"
want=$(grep -oE 'upstream sha256 [0-9a-f]{64}' "$ROOT/libs/settings/NRF52Flash.cpp" | grep -oE '[0-9a-f]{64}')
have=$(shasum -a 256 "$up" | cut -d' ' -f1)
if [ "$want" = "$have" ]; then ok "settings/NRF52Flash.cpp unchanged upstream"
else bad "settings/NRF52Flash.cpp changed upstream" "merge the change into libs/settings/NRF52Flash.cpp, update the sha256 in its header (diff: diff $up libs/settings/NRF52Flash.cpp)"; fi

# 2. settings location (MICROBIT_TOP_OF_FLASH in libs/hw---n3/pxt.json)
has "$CPK/base/pxtbase.h" "#define FLASH_TOP MICROBIT_TOP_OF_FLASH" "pxtbase.h: FLASH_TOP comes from MICROBIT_TOP_OF_FLASH" "MICROBIT_TOP_OF_FLASH in libs/hw---n3/pxt.json"
has "$CPK/settings/settings.cpp" "fs(flash, FLASH_TOP - size, size)" "settings.cpp: settings end at FLASH_TOP" "MICROBIT_TOP_OF_FLASH in libs/hw---n3/pxt.json"
if grep -qi "LSM303" "$CPK/accelerometer/accelhw.cpp"; then
    bad "accelerometer: upstream now knows the LSM303" "the Calliope mini 3 sensor could work - consider restoring cppDependencies \"accelerometer\" in libs/hw---n3/pxt.json"
else ok "accelerometer: no driver for the Calliope mini 3's LSM303AGR (left out of hw---n3)"; fi

# 3. pxt runtime start: pairing mode runs in a component's init() from initCodal()
has "$CPK/core/codal.cpp" "CodalComponent::components[i]->init();" "codal.cpp: initCodal() calls init() of all components" "libs/hw---n3/pairing.cpp"

# 4. editor: "program too big" hook and its recompile path, error text
WEB="$NM/pxt-core/built/web/main.js"
has "$WEB" "pxt.commands.showProgramTooLargeErrorAsync" "web app: showProgramTooLargeErrorAsync hook" "editor/extension.ts (usb-only)"
has "$WEB" "pxt.appTarget.disabledVariants=pxt.appTarget.multiVariants.filter(" "web app: recompile path reads multiVariants.filter once" "editor/extension.ts (multiVariants getter)"
has "$WEB" "projectView:" "web app: extensions get the projectView" "editor/extension.ts (usb-only)"
has "$NM/pxt-core/built/pxtlib.js" 'program too big by {0} bytes!' "pxtlib: text of error 9283" "PROGRAM_TOO_BIG_RX in editor/extension.ts"
has "$NM/pxt-core/built/pxtcompiler.js" "switches.skipClassCheck" "compiler: skipClassCheck switch" "variants.nrf52833.compile.switches in pxtarget.json"

# 5. CODAL and the build of the runtime (pinned in pxtarget.json)
codal=$(node -p "const t=require('$ROOT/pxtarget.json').variants.nrf52833.compileService; t.codalTarget.url + ' ' + t.codalTarget.branch + ' / ' + t.githubCorePackage + ' ' + t.gittag")
if [ "$codal" = "https://github.com/thomasjball/codal-microbit-v2 13a0d323b3a9c18a59e3120535d78654b6c8a566 / lancaster-university/microbit-v2-samples v0.2.13" ]; then
    ok "CODAL target and samples tag as tested"
else
    bad "CODAL target changed: $codal" "check libs/hw---n3/pairing*.cpp (MICROBIT_BLE_MODEL, MicroBitBLEManager::init, KeyValueStorage, lib/bootloader.o), libs/settings/NRF52Flash.cpp (ble_running), MinSizeRel in server/compile.js and scripts/calliope-hexcache.sh; then update this check"
fi

echo
if [ $fails -eq 0 ]; then echo "all checks passed"; else echo "$fails check(s) need a look (see CALLIOPE.md, \"Mit Microsofts Stand aktuell halten\")"; fi
[ $fails -eq 0 ]
