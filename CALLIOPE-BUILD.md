# Builds, channels and `BUILD.json`

How the Calliope edition gets built and served. What the edition changes and
why is in [CALLIOPE.md](CALLIOPE.md) (German); the plan behind the channels is
calliope-campus `docs/design/2026-editor-channels.md`, the `BUILD.json` format
calliope-mini-python-editor `docs/build-info.md`.

## Channels

| Channel | Built from                    | Build branch | Served at                                    |
| ------- | ----------------------------- | ------------ | -------------------------------------------- |
| `live`  | a tag `calliope-vX.Y.Z`       | `build-live` | `arcade.calliope.cc`, Campus pins it         |
| `dev`   | a push to `calliope-main`     | `build-dev`  | `arcade-dev.calliope.cc`, campus-dev proxies |
| `local` | `scripts/calliope-build.sh`   | none         | your machine                                 |

The `calliope-build` workflow (`.github/workflows/calliope-build.yml`) runs
`scripts/calliope-build.sh` and pushes its output to the build branch, one
commit per build. Never commit to `build-live` or `build-dev` by hand; they
only ever grow, since Campus release tags pin their older commits.

## What a build holds

`scripts/calliope-build.sh <out> <site-url>` (Linux or WSL; node, python3,
rsync, perl, and for the runtimes the ARM toolchain, CMake and Ninja):

1. **Runtimes.** The Calliope mini runtimes optimized for size
   (`scripts/calliope-hexcache.sh`, see CALLIOPE.md, "Hex-Datei und
   Microsoft-Cloud") go into `built/hexcache`, but only when the marker
   `built/hexcache/.calliope-runtimes-<key>` is missing: the key hashes the C++
   sources, the packages' `pxt.json`, `pxtarget.json` and the pxt versions.
   The workflow caches `built/hexcache`, so most builds skip this step.
   `CALLIOPE_HEXCACHE=force` rebuilds them, `skip` leaves them out.
2. **Site root.** `pxt staticpkg`, with the build info in `pxtarget.json`.
3. **Campus variant.** `pxt staticpkg --route /editors/arcade/`, copied to
   `editors/arcade/`. It runs on Campus' origin, which has no share server, so
   it shares through `<site-url>` (`calliopeBuild.siteUrl`, see
   `editor/calliope.ts`): `https://arcade.calliope.cc/` on live,
   `https://arcade-dev.calliope.cc/` on dev.
4. **Pages.** `cloudflare/pages/prepare.sh` adds `_worker.js`, `_routes.json`
   (which leaves `/editors/*` to Pages), `404.html` and the translations of
   `l10n/`. The build branch is then what the Pages project serves.
5. **`BUILD.json`** at `/BUILD.json` and `/editors/arcade/BUILD.json`.
6. **Pages limits.** It fails on more than 20 000 files or a file over 25 MiB.

`pxtarget.json`, `docs/projects.md` and `libs/*/shims.d.ts` are reset afterwards.

## Hosting

Each build branch is served by a Cloudflare Pages project with no build
command, the branch root as output directory and the service binding
`API` → `arcade-api` (the API worker of `cloudflare/README.md`, which shares
through R2): `build-live` for arcade.calliope.cc, `build-dev` for
arcade-dev.calliope.cc. Both projects use the same worker, so a project shared
on the dev site opens on the live site too. Setting the projects up is the
owner's step; until then arcade.calliope.cc stays the project
`makecodearcade`, deployed by hand as `cloudflare/README.md` says.

The Campus variant has the editor only: translated tutorials and the help
links that `_worker.js` answers fall back to English or to makecode.com there,
and its skillmap and multiplayer pages are not fixed by
`scripts/calliope-staticfix.py`. Campus opens Arcade in controller mode,
without the home screen that links to them.

## `BUILD.json`

```json
{
  "channel": "live",
  "version": "calliope-v1.0.0",
  "commit": "7ea99620f3c4…",
  "builtAt": "2026-11-23T17:00:00Z",
  "ui": null,
  "widget": null,
  "libs": {}
}
```

Arcade carries neither calliope-ui nor the connection widget (pxt keeps its
own WebUSB and Bluetooth), so `ui` and `widget` are `null`.

[`scripts/calliope-build-info.js`](scripts/calliope-build-info.js), a copy of
the Python editor's `bin/build-info.js`, makes it from `BUILD_CHANNEL`,
`BUILD_VERSION`, `BUILD_COMMIT` and `BUILD_AT` (without them: channel `local`,
version and commit from git). With `--patch-target` it writes the same values
into `pxtarget.json` as `calliopeBuild` (the code constant,
`pxt.appTarget.calliopeBuild`) and as the version line.

## The version line

The last entry of the help menu's documentation links (`appTheme.docMenu`),
linking to the source commit on GitHub:

- live: `calliope-v1.0.0 · 7ea9962`
- dev: `dev · calliope-main · a1b2c3d`

pxt's help menu takes plain links only, so the channel is a word in front of
the line rather than a framed mark, and the line sits above pxt's own last
entry (Blocks or JavaScript) rather than below a separator. `pxt serve` has no
version line.

Inside a frame (Campus) the editor logs the build once to the console
(`editor/calliope.ts`):

```
[arcade] live calliope-v1.0.0 · 7ea9962 {channel: "live", …}
```
