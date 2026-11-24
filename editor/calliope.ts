/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />

namespace pxt.editor {
    // Calliope edition: the build's version (BUILD.json, CALLIOPE-BUILD.md), which
    // scripts/calliope-build-info.js writes into pxtarget.json as `calliopeBuild` in
    // the calliope-build workflow (scripts/calliope-build.sh).
    interface CalliopeBuild {
        channel: string;
        version: string;
        commit: string;
        builtAt: string;
        // only in the Campus variant (/editors/arcade/): the edition's own site
        siteUrl?: string;
    }

    function calliopeBuild(): CalliopeBuild | undefined {
        return (pxt.appTarget as any).calliopeBuild;
    }

    // The Campus variant runs on Campus' origin, which has no share server: its shared
    // projects and API requests go to the edition's own site (arcade.calliope.cc on live,
    // arcade-dev.calliope.cc on dev), whose links Campus imports as well.
    export function calliopeSiteUrl(): string | undefined {
        const build = calliopeBuild();
        return build && build.siteUrl || undefined;
    }

    // Embedded in a frame (Calliope Campus), the editor logs its build once, as the
    // other Calliope editors do; on its own address the help menu shows it.
    export function logCalliopeBuild() {
        const build = calliopeBuild();
        if (!build || window.parent === window) return;
        const short = (build.commit || "").slice(0, 7);
        console.log(`[arcade] ${build.channel} ${build.version} · ${short}`, build);
    }
}
