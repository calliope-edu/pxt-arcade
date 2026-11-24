# CLAUDE.md

The Calliope edition of Microsoft MakeCode Arcade (fork of
`microsoft/pxt-arcade`) for the Calliope mini 3 with GameKit: its own
simulator, Bluetooth flashing, Jacdac multiplayer, translated tutorials, a
share server on Cloudflare. [CALLIOPE.md](CALLIOPE.md) (German) describes
every change and how to keep up with upstream; [CALLIOPE-BUILD.md](CALLIOPE-BUILD.md)
how it is built and served. It runs on its own at arcade.calliope.cc and inside
Calliope Campus.

## Branches

- Work on `calliope-main`: branch off it and merge back into it. `master` and
  the other branches are upstream's history; `calliopemini-ble-jacdac` was
  the working branch before `calliope-main`.
- `calliope-main` is a release of `microsoft/pxt-arcade` (remote `upstream`)
  plus the Calliope commits. Take upstream in with a merge of its tag
  (CALLIOPE.md, "Mit Microsofts Stand aktuell halten"), never a rebase: the
  build branches name the source commits.
- A tag `calliope-vX.Y.Z` on `calliope-main` goes live: the `calliope-build`
  workflow builds it onto `build-live` (arcade.calliope.cc; Campus pins it).
  Every push to `calliope-main` builds onto `build-dev`
  (arcade-dev.calliope.cc, campus-dev). A build takes about half an hour.
- Never commit to `build-live` or `build-dev` by hand; only the workflow
  writes them, and they only ever grow (Campus release tags pin old commits).
- Upstream's own workflows (`pxt-buildpush`, `pxt-buildvtag`, …) are disabled
  in this repository's Actions settings, not deleted, so upstream merges stay
  clean. Only `calliope-build` runs.

## Version

- `BUILD.json` and the help menu's version line follow CALLIOPE-BUILD.md,
  which follows the format of calliope-mini-python-editor `docs/build-info.md`.

## Running it

- `npm install --ignore-scripts` (no lockfile: upstream ignores
  `package-lock.json`). `pxt-arcade-sim`, an optional dependency, is
  Microsoft's private repository and is skipped; the edition has its own
  simulator (`sim/`).
- `PXT_NODOCKER=1 node node_modules/pxt-core/built/pxt.js serve --no-browser`
  serves the editor at http://localhost:3232/ (CALLIOPE.md, "Lokal starten");
  sharing needs `node server/server.js` beside it. Use Node 22 or newer: with
  older Node pxt renders every help page empty, without an error.
- `scripts/calliope-build.sh <out> <site-url>` builds what the workflow pushes
  (Linux or WSL). Every pxt build rewrites `libs/*/shims.d.ts`; don't commit
  those changes (`git checkout -- 'libs/*/shims.d.ts'`).
- `npx tsc -p editor --noEmit` type-checks the editor extension quickly.
