// Calliope edition: translated "Learn more" pages of the extensions. The page of extension
// <name> in language <lang> is /reference/<lang>/<name> (libs/<name>/docs/reference/<lang>/
// <name>.md, for jacdac-multiplayer docs/reference/<lang>/), see scripts/calliope-extensions.py.
namespace pxt.editor.localizedDocs {
    export const LANGS = ["de"]; // more languages to follow

    export const PAGES = [
        "arcade-background-scroll", "arcade-character-animations", "arcade-fancy-text",
        "arcade-mini-menu", "arcade-minimap", "arcade-piano-roll", "arcade-sprite-data",
        "arcade-sprite-util", "arcade-story", "arcade-text", "arcade-tile-scanner",
        "arcade-tile-util", "browser-events", "calliope-mini", "carnival",
        "circuit-playground-character-icons", "color-fading", "image-mapping",
        "jacdac-multiplayer", "makeymakey", "pxt-button-combos", "pxt-raycasting",
        "pxt-scaling", "pxt-status-bar", "pxt-tick-event", "seesaw", "settings-blocks",
        "sprite-fx", "sprite-grid", "tilemaps", "timers", "turtle-logo",
    ];

    // "/reference/timers" -> "/reference/de/timers" when the editor runs in German
    export function localize(href: string): string {
        const m = /^\/reference\/([\w-]+)$/.exec(href || "");
        if (!m || PAGES.indexOf(m[1]) < 0) return href;
        const lang = (pxt.Util.userLanguage() || "en").toLowerCase().split("-")[0];
        if (LANGS.indexOf(lang) < 0) return href;
        return "/reference/" + lang + "/" + m[1];
    }
}
