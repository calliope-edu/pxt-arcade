// Calliope edition: Pages project "makecodearcade" (https://makecodearcade.pages.dev). Pages
// serves the static editor; this worker only runs for paths that _routes.json does not
// exclude (prepare.sh lists every file and folder of the editor there):
//
//   /api/..., /oauth/...   -> API worker "arcade-api" (service binding API, ../worker.js)
//   /, /kiosk, ...         -> the file Pages finds (index.html of the folder)
//   /github, /github/commit, ... help links in the editor   -> docs/<path>.html
//   /static/..., @cdnUrl@/blob/<sha>/static/... images of the help pages, icons -> docs/static/
//
// Pages serves "x.html" under "x" (and redirects "x.html" there), so the help pages are
// looked up without ".html". prepare.sh adds a 404.html; without it Pages would answer
// every unknown path with index.html.

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
        if (/^\/(api|oauth)(\/|$)/.test(url.pathname)) return env.API.fetch(request);
        const res = await env.ASSETS.fetch(request);
        if (res.status !== 404) return res;
        return staticFallback(request, env, url);
    }
};
