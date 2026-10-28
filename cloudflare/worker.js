// Calliope edition: MakeCode Arcade on Cloudflare (Workers with static assets).
//
// The static editor (output of "pxt staticpkg") is served by Cloudflare as static assets.
// This worker answers what server/server.js does for a self-hosted editor, with shared
// projects stored in R2 instead of the file system:
//
//   POST /api/scripts            publish a project       -> R2 scripts/<id>/
//   GET  /api/<id>               project info (name, meta, ...)
//   GET  /api/<id>/text          project files (JSON)
//   GET  /api/<id>/thumb         screenshot from the share dialog
//   POST /api/<id>/abusereports  "report abuse"          -> R2 abusereports/
//   *    /api/clientconfig, /api/compile/...  C++ compile -> COMPILE_API (server/server.js
//                                somewhere else) or the MakeCode cloud
//   *    /api/...                everything else          -> UPSTREAM (www.makecode.com/api/)
//   GET  /oauth/login, /oauth/callback  "sign in with GitHub" (own OAuth app or makecode.com)
//   GET  /, /github, /static/... index.html of folders, help pages of the static version (docs/...)
//
// Projects stored in R2 use the same files as server/server.js (script.json, text.json,
// thumb), so they can be copied between both. Settings: wrangler.jsonc, see README.md.

const ID_RX = /^_[A-Za-z0-9]{12}$/;
const ID_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const FORWARD_REQ_HEADERS = ["content-type", "accept", "accept-language", "if-none-match"];
const FORWARD_RES_HEADERS = ["content-type", "etag", "cache-control", "last-modified", "location"];
const OAUTH_MAX_AGE = 10 * 60 * 1000;

function settings(env) {
    const list = s => String(s || "").split(",").map(x => x.trim()).filter(x => !!x);
    return {
        upstream: String(env.UPSTREAM || "https://www.makecode.com/api/").replace(/\/?$/, "/"),
        compileApi: env.COMPILE_API ? String(env.COMPILE_API).replace(/\/?$/, "/") : "",
        allowedOrigins: list(env.ALLOWED_ORIGINS),
        maxBody: parseInt(env.MAX_BODY || String(8 * 1024 * 1024), 10),
        githubClientId: env.GITHUB_CLIENT_ID || "",
        githubClientSecret: env.GITHUB_CLIENT_SECRET || "",
        githubScope: env.GITHUB_SCOPE || "repo"
    };
}

function json(status, obj, headers) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, headers || {})
    });
}

function clientIp(request) {
    return request.headers.get("cf-connecting-ip") || "";
}

function withCors(request, cfg, res) {
    const h = new Headers(res.headers);
    const origin = request.headers.get("origin");
    if (!cfg.allowedOrigins.length || cfg.allowedOrigins.indexOf("*") >= 0) h.set("Access-Control-Allow-Origin", "*");
    else if (origin && cfg.allowedOrigins.indexOf(origin) >= 0) {
        h.set("Access-Control-Allow-Origin", origin);
        h.append("Vary", "Origin");
    }
    h.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    h.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Td-Access-Token, If-None-Match");
    h.set("Access-Control-Expose-Headers", "ETag");
    h.set("Access-Control-Max-Age", "86400");
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}

async function readBody(request, max) {
    if (parseInt(request.headers.get("content-length") || "0", 10) > max)
        throw Object.assign(new Error("payload too large"), { status: 413 });
    const buf = await request.arrayBuffer();
    if (buf.byteLength > max) throw Object.assign(new Error("payload too large"), { status: 413 });
    return buf;
}

// --- stored projects -------------------------------------------------------------------

async function newId(env) {
    for (;;) {
        let id = "_";
        for (const b of crypto.getRandomValues(new Uint8Array(12))) id += ID_CHARS[b % ID_CHARS.length];
        if (!(await env.SCRIPTS.head(`scripts/${id}/script.json`))) return id;
    }
}

async function publish(request, env, cfg) {
    if (env.PUBLISH_LIMITER && !(await env.PUBLISH_LIMITER.limit({ key: clientIp(request) })).success)
        return json(429, { error: "too many projects published, try again later" });

    let data;
    try {
        data = JSON.parse(new TextDecoder().decode(await readBody(request, cfg.maxBody)));
    } catch (e) {
        if (e.status) return json(e.status, { error: e.message });
        return json(400, { error: "invalid JSON" });
    }
    if (!data || typeof data.text !== "string")
        return json(400, { error: "missing project files" });
    try {
        const files = JSON.parse(data.text);
        if (!files || typeof files !== "object" || Array.isArray(files)) throw new Error();
    } catch (e) {
        return json(400, { error: "invalid project files" });
    }

    const str = (v, max) => typeof v === "string" ? v.slice(0, max) : "";
    const id = await newId(env);
    let thumb;
    if (typeof data.thumbnailBuffer === "string" && /^image\/(png|gif)$/.test(data.thumbnailMimeType || "")) {
        try {
            thumb = { buf: Uint8Array.from(atob(data.thumbnailBuffer), c => c.charCodeAt(0)), type: data.thumbnailMimeType };
        } catch (e) { }
    }

    // same fields as the MakeCode cloud returns for GET /api/<id>
    const script = {
        kind: "script",
        id: id,
        shortid: id,
        time: Math.floor(Date.now() / 1000),
        name: str(data.name, 200),
        description: str(data.description, 2000),
        target: str(data.target, 50),
        targetVersion: str(data.targetVersion, 50),
        editor: str(data.editor, 50),
        meta: data.meta && typeof data.meta === "object" ? data.meta : {},
        thumb: !!thumb,
        persistId: id
    };

    const dir = `scripts/${id}/`;
    await env.SCRIPTS.put(dir + "text.json", data.text, { httpMetadata: { contentType: "application/json; charset=utf-8" } });
    if (thumb) await env.SCRIPTS.put(dir + "thumb", thumb.buf, { httpMetadata: { contentType: thumb.type } });
    // script.json last: a project only counts as stored once it exists
    await env.SCRIPTS.put(dir + "script.json", JSON.stringify(Object.assign({}, script, { thumbType: thumb ? thumb.type : undefined })),
        { httpMetadata: { contentType: "application/json; charset=utf-8" } });
    console.log("published", id, JSON.stringify(script.name), data.text.length, "bytes");
    return json(200, script);
}

async function getScript(env, info, id, sub, method) {
    const cache = { "Cache-Control": "public, max-age=604800", "ETag": `"${id}"` }; // projects never change
    if (!sub) {
        delete info.thumbType;
        return json(200, info, cache);
    }
    const obj = sub === "text" ? await env.SCRIPTS.get(`scripts/${id}/text.json`)
        : sub === "thumb" && info.thumb ? await env.SCRIPTS.get(`scripts/${id}/thumb`) : null;
    if (!obj) return json(404, { error: "not found" });
    const type = sub === "text" ? "application/json; charset=utf-8" : info.thumbType || "image/png";
    return new Response(method === "HEAD" ? null : obj.body, { headers: Object.assign({ "Content-Type": type }, cache) });
}

async function abuseReport(request, env, cfg, id) {
    let text = "";
    try {
        text = String(JSON.parse(new TextDecoder().decode(await readBody(request, 64 * 1024))).text || "").slice(0, 2000);
    } catch (e) { }
    const time = new Date().toISOString();
    await env.SCRIPTS.put(`abusereports/${time}-${id}.json`, JSON.stringify({ time, id, text, ip: clientIp(request) }));
    console.log("abuse report", id);
    return json(200, {});
}

// --- proxy to the MakeCode cloud (or the compile server) -------------------------------

async function proxy(request, url) {
    const headers = {};
    for (const h of FORWARD_REQ_HEADERS) {
        const v = request.headers.get(h);
        if (v) headers[h] = v;
    }
    const hasBody = request.method !== "GET" && request.method !== "HEAD";
    let r;
    try {
        r = await fetch(url, { method: request.method, headers, body: hasBody ? await request.arrayBuffer() : undefined, redirect: "manual" });
    } catch (e) {
        console.log("proxy error", request.method, url, e.message);
        return json(502, { error: "upstream not reachable" });
    }
    const out = new Headers();
    for (const h of FORWARD_RES_HEADERS) {
        const v = r.headers.get(h);
        if (v) out.set(h, v);
    }
    return new Response(request.method === "HEAD" ? null : r.body, { status: r.status, headers: out });
}

async function api(request, env, cfg, apiPath, search) {
    if (apiPath === "scripts" && request.method === "POST")
        return publish(request, env, cfg);

    const s = /^(_[A-Za-z0-9]{12})(?:\/(text|thumb|abusereports))?$/.exec(apiPath);
    if (s && ID_RX.test(s[1])) {
        const obj = await env.SCRIPTS.get(`scripts/${s[1]}/script.json`);
        if (obj) {
            if (s[2] === "abusereports" && request.method === "POST") return abuseReport(request, env, cfg, s[1]);
            if (request.method === "GET" || request.method === "HEAD")
                return getScript(env, await obj.json(), s[1], s[2], request.method);
            return json(405, { error: "method not allowed" });
        }
    }

    // C++ runtime builds: server/server.js on a machine with the toolchain, else MakeCode
    if (cfg.compileApi && (apiPath === "clientconfig" || /^compile\//.test(apiPath)))
        return proxy(request, cfg.compileApi + apiPath + search);

    // everything else, including projects shared on makecode.com before
    return proxy(request, cfg.upstream + apiPath + search);
}

// --- GitHub sign-in --------------------------------------------------------------------
//
// pxt opens <editor>/oauth/login?state=..&redirect_uri=<editor> and expects
// <editor>#access_token=..&state=.. back (implicit flow). GitHub only offers the code flow,
// so the worker swaps the code for a token with the client secret. The worker keeps no
// state between requests: editor state and redirect_uri travel in GitHub's "state",
// signed with the client secret.

function b64url(bytes) {
    let s = "";
    for (const b of bytes) s += String.fromCharCode(b);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64url(s) {
    return Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
}

async function hmac(secret, text) {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
    return new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(text)));
}

async function signState(cfg, obj) {
    const body = b64url(new TextEncoder().encode(JSON.stringify(obj)));
    return body + "." + b64url(await hmac(cfg.githubClientSecret, body));
}

async function readState(cfg, s) {
    const [body, sig] = String(s || "").split(".");
    if (!body || !sig) return undefined;
    const expected = b64url(await hmac(cfg.githubClientSecret, body));
    if (expected.length !== sig.length || !crypto.subtle.timingSafeEqual(new TextEncoder().encode(expected), new TextEncoder().encode(sig)))
        return undefined;
    try {
        const obj = JSON.parse(new TextDecoder().decode(fromB64url(body)));
        return Date.now() - obj.time < OAUTH_MAX_AGE ? obj : undefined;
    } catch (e) {
        return undefined;
    }
}

// the token is handed to redirect_uri: only the editor's own address (or a local dev server)
function allowedRedirect(cfg, origin, uri) {
    let u;
    try {
        u = new URL(uri);
    } catch (e) {
        return false;
    }
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    if (u.origin === origin) return true;
    if (cfg.allowedOrigins.indexOf(u.origin) >= 0) return true;
    return u.protocol === "http:" && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(u.hostname);
}

async function oauth(request, cfg, route, url) {
    if (request.method !== "GET") return json(405, { error: "method not allowed" });
    const noStore = { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" };
    const query = url.searchParams;
    const callbackUrl = url.origin + "/oauth/callback";

    if (route === "login") {
        if (!cfg.githubClientId || !cfg.githubClientSecret)
            return Response.redirect("https://www.makecode.com/oauth/login?" + query.toString(), 302);
        const state = query.get("state") || "";
        const redirect = query.get("redirect_uri") || "";
        if (!state || state.length > 200 || !allowedRedirect(cfg, url.origin, redirect))
            return json(400, { error: "bad state or redirect_uri" });
        const gh = new URL("https://github.com/login/oauth/authorize");
        gh.searchParams.set("client_id", cfg.githubClientId);
        gh.searchParams.set("redirect_uri", callbackUrl);
        gh.searchParams.set("scope", cfg.githubScope);
        gh.searchParams.set("state", await signState(cfg, { state, redirect, time: Date.now() }));
        if (query.get("prompt") === "consent") gh.searchParams.set("prompt", "select_account");
        return new Response(null, { status: 302, headers: Object.assign({ Location: gh.toString() }, noStore) });
    }

    if (route === "callback") {
        const pending = cfg.githubClientSecret && await readState(cfg, query.get("state"));
        if (!pending)
            return new Response("Anmeldung abgelaufen, bitte im Editor erneut versuchen.", { status: 400, headers: Object.assign({ "Content-Type": "text/plain; charset=utf-8" }, noStore) });
        const back = hash => new Response(null, { status: 302, headers: Object.assign({ Location: pending.redirect.replace(/#.*$/, "") + "#" + hash }, noStore) });
        // user cancelled on GitHub: back to the editor without a token
        if (!query.get("code")) return back("");
        const r = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json", "User-Agent": "calliope-arcade" },
            body: JSON.stringify({
                client_id: cfg.githubClientId,
                client_secret: cfg.githubClientSecret,
                code: query.get("code"),
                redirect_uri: callbackUrl
            })
        });
        const tok = await r.json().catch(() => ({}));
        if (!r.ok || !tok.access_token) {
            console.log("github oauth failed", r.status, tok.error || "");
            return back("");
        }
        return back(new URLSearchParams({ access_token: tok.access_token, token_type: "bearer", state: pending.state }).toString());
    }

    return json(404, { error: "not found" });
}

// --- static editor ---------------------------------------------------------------------

// only called for paths without a static file: folders ("/", "/kiosk") -> index.html,
// help links in the editor ("/github", "/github/commit", ...) -> docs/<path>.html,
// images of the help pages ("/static/...") -> docs/static/, icons that staticpkg leaves as
// "@cdnUrl@/blob/<sha>/static/..." in index.html -> docs/static/
async function staticFallback(request, env, url) {
    const notFound = () => json(404, { error: "not found" });
    if (request.method !== "GET" && request.method !== "HEAD") return notFound();
    const p = url.pathname.replace(/\/+$/, "").replace(/^\/(?:@|%40)cdnUrl(?:@|%40)\/blob\/[0-9a-f]+(?=\/static\/)/, "");
    if (/(^|\/)\.\.(\/|$)/.test(p)) return notFound();
    const targets = [];
    if (/^\/static\//.test(p)) targets.push("/docs" + p);
    else if (!/\.[^/]*$/.test(p)) {
        targets.push(p + "/index.html");
        if (p) targets.push("/docs" + p + ".html");
    }
    for (const t of targets) {
        const r = await env.ASSETS.fetch(new Request(url.origin + t + url.search, { method: request.method, headers: request.headers }));
        if (r.ok || r.status === 304) return r;
    }
    return notFound();
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const cfg = settings(env);
        try {
            const o = /^\/oauth\/(login|callback)$/.exec(url.pathname);
            if (o) return await oauth(request, cfg, o[1], url);
            // "/api//<id>": opening a "#pub:/<id>" link in an already open editor (hash change)
            const m = /^\/api\/+(.*)$/.exec(url.pathname);
            if (!m) return await staticFallback(request, env, url);
            if (request.method === "OPTIONS") return withCors(request, cfg, new Response(null, { status: 204 }));
            return withCors(request, cfg, await api(request, env, cfg, m[1], url.search));
        } catch (e) {
            console.log("error", request.method, url.pathname, e.message);
            return json(e.status || 500, { error: e.status ? e.message : "internal error" });
        }
    }
};
