// Calliope edition: Pages project "makecodearcade" at https://arcade.calliope.cc (custom domain). Pages
// serves the static editor; this worker only runs for paths that _routes.json does not
// exclude (prepare.sh lists every file and folder of the editor there):
//
//   /api/..., /oauth/...   -> API worker "arcade-api" (service binding API, ../worker.js)
//   /, /kiosk, ...         -> the file Pages finds (index.html of the folder)
//   /github, /github/commit, ... help links in the editor   -> docs/<path>.html
//   /static/..., @cdnUrl@/blob/<sha>/static/... images of the help pages, icons -> docs/static/
//   /docs/<path>.md?lang=de   tutorials and skillmaps: l10n/de/<path>.md if translated
//   /api/config/<target>/targetconfig/...   the edition's targetconfig.json (skillmap page)
//   /skillmap/educator-info/<name>   "Lernerfolge" of a skillmap: l10n/<lang>/.../<name>.html
//                                (scripts/calliope-render-l10n.js) or docs/skillmap/educator-info/
//
// Pages serves "x.html" under "x" (and redirects "x.html" there), so the help pages are
// looked up without ".html". prepare.sh adds a 404.html; without it Pages would answer
// every unknown path with index.html.

const CANONICAL = "https://arcade.calliope.cc";
const PAGES_HOST = "makecodearcade.pages.dev";

function notFound() {
    return new Response(JSON.stringify({ error: "not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json; charset=utf-8" }
    });
}

async function staticFallback(request, env, url) {
    if (request.method !== "GET" && request.method !== "HEAD") return notFound();
    const p = url.pathname.replace(/\/+$/, "").replace(/^\/(?:@|%40)cdnUrl(?:@|%40)\/blob\/[0-9a-f]+(?=\/static\/)/, "");
    if (/(^|\/)\.\.(\/|$)/.test(p)) return notFound();
    const targets = [];
    if (/^\/static\//.test(p)) targets.push("/docs" + p);
    else if (p && !/\.[^/]*$/.test(p)) targets.push("/docs" + p);
    for (const t of targets) {
        const r = await env.ASSETS.fetch(new Request(url.origin + t + url.search, { method: request.method, headers: request.headers }));
        if (r.ok || r.status === 304) return r;
    }
    return notFound();
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        // the edition's address is arcade.calliope.cc; the pages.dev address of the project
        // leads there (previews of single deployments, <hash>.makecodearcade.pages.dev, stay)
        if (url.hostname === PAGES_HOST && (request.method === "GET" || request.method === "HEAD"))
            return Response.redirect(CANONICAL + url.pathname + url.search, 301);
        // the skillmap page asks the cloud for the target configuration (skillmap aliases,
        // galleries); answer with the edition's own
        if (/^\/api\/config\/[^/]+\/targetconfig(\/|$)/.test(url.pathname))
            return env.ASSETS.fetch(new Request(url.origin + "/targetconfig.json", { headers: request.headers }));
        if (/^\/(api|oauth)(\/|$)/.test(url.pathname)) return env.API.fetch(request);
        // pxt loads tutorials and skillmaps of the static editor as docs/<path>.md?lang=<lang>;
        // translations are in l10n/<language>/<path>.md (from l10n/ of the repository)
        const lang = url.searchParams.get("lang");
        if (lang && /^\/docs\/.+\.md$/.test(url.pathname) && !/(^|\/)\.\.(\/|$)/.test(url.pathname)) {
            const base = lang.toLowerCase().split("-")[0];
            if (/^[a-z]{2,3}$/.test(base)) {
                const r = await env.ASSETS.fetch(new Request(url.origin + "/l10n/" + base + url.pathname.slice(5), { headers: request.headers }));
                if (r.ok || r.status === 304) return r;
            }
        }
        // the skillmap links its educator page relative to /skillmap, without a language: take
        // the editor's language (cookie PXT_LANG, then the browser's)
        const info = /^\/(?:docs\/)?skillmap\/educator-info\/([\w-]+?)(?:\.html)?$/.exec(url.pathname);
        if (info && (request.method === "GET" || request.method === "HEAD")) {
            const cookie = /(?:^|;\s*)PXT_LANG=([\w-]+)/.exec(request.headers.get("cookie") || "");
            const accept = (request.headers.get("accept-language") || "").split(",")[0];
            const want = (url.searchParams.get("lang") || (cookie && cookie[1]) || accept || "en").toLowerCase().split("-")[0];
            const targets = (want === "en" ? [] : [`/l10n/${want}/skillmap/educator-info/${info[1]}`])
                .concat([`/docs/skillmap/educator-info/${info[1]}`]);
            for (const t of targets) {
                const r = await env.ASSETS.fetch(new Request(url.origin + t, { headers: request.headers }));
                if (r.ok || r.status === 304) return r;
            }
        }
        const res = await env.ASSETS.fetch(request);
        if (res.status !== 404) return res;
        return staticFallback(request, env, url);
    }
};
