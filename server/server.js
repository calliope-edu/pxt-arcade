#!/usr/bin/env node
// Calliope edition: share server for MakeCode Arcade.
//
// The editor talks to "pxt.Cloud.apiRoot" (see editor/extension.ts). This server answers
// the requests used for sharing and opening projects itself and forwards everything else
// (C++ compile, clientconfig, GitHub extensions, ...) to the MakeCode cloud:
//
//   POST /api/scripts            publish a project       -> stored in DATA_DIR
//   GET  /api/<id>               project info (name, meta, ...)
//   GET  /api/<id>/text          project files (JSON)
//   GET  /api/<id>/thumb         screenshot from the share dialog
//   POST /api/<id>/abusereports  "report abuse"          -> appended to DATA_DIR/abusereports.log
//   GET  /api/clientconfig        points the editor's C++ hex downloads to this server
//   GET  /api/compile/<sha>.hex   C++ runtime from the hex cache (DATA_DIR/hexcache, STATIC_DIR/hexcache)
//   POST /api/compile/extension   build the C++ runtime locally (compile.js), poll <sha>.json
//   *    /api/...                everything else          -> UPSTREAM (www.makecode.com/api/)
//   GET  /oauth/login, /oauth/callback  "sign in with GitHub" (own OAuth app or makecode.com)
//
// IDs that are not stored here (projects shared before, or on makecode.com) are looked up
// on the MakeCode cloud as well, so old links keep working.
// Optionally the static editor (output of "pxt staticpkg") is served from STATIC_DIR, so
// editor and API share one origin.
//
// No dependencies, Node.js >= 18. Settings via environment variables, see README.md.

"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = parseInt(process.env.PORT || "8790", 10);
const HOST = process.env.HOST || "0.0.0.0";
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, "data"));
const STATIC_DIR = process.env.STATIC_DIR ? path.resolve(process.env.STATIC_DIR) : "";
const UPSTREAM = (process.env.UPSTREAM || "https://www.makecode.com/api/").replace(/\/?$/, "/");
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "*").split(",").map(s => s.trim()).filter(s => !!s);
const MAX_BODY = parseInt(process.env.MAX_BODY || String(8 * 1024 * 1024), 10);
const PUBLISH_PER_HOUR = parseInt(process.env.PUBLISH_PER_HOUR || "60", 10);
const TRUST_PROXY = process.env.TRUST_PROXY === "1";
// "local": build C++ on this server (compile.js); "makecode": leave it to the MakeCode cloud
const COMPILE = process.env.COMPILE || "local";
// cdn to ask for hex files that are not cached here, e.g. https://cdn.makecode.com ("" = none)
const HEX_FALLBACK = (process.env.HEX_FALLBACK || "").replace(/\/$/, "");
const COMPILE_PER_HOUR = parseInt(process.env.COMPILE_PER_HOUR || "30", 10);
const COMPILE_LOGS = process.env.COMPILE_LOGS === "1";
// public address of /api/ (e.g. https://arcade.example.org/api/); default: from the request
const PUBLIC_API_URL = (process.env.PUBLIC_API_URL || "").replace(/\/?$/, process.env.PUBLIC_API_URL ? "/" : "");
// own GitHub OAuth app for "sign in with GitHub" (callback <server>/oauth/callback); unset = makecode.com
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";
const GITHUB_SCOPE = process.env.GITHUB_SCOPE || "repo";
// C++ extensions are only built from these GitHub organisations / repositories ("*" = any)
const CPP_ORGS = (process.env.CPP_ORGS || "calliope-edu").split(",").map(s => s.trim()).filter(s => !!s);
const CPP_REPOS = (process.env.CPP_REPOS || "").split(",").map(s => s.trim()).filter(s => !!s);
// bundled packages of the editor (their C++ files are always allowed)
const TARGET_JSON = process.env.TARGET_JSON || (STATIC_DIR ? path.join(STATIC_DIR, "target.json") : path.join(__dirname, "..", "built", "target.json"));

const SCRIPTS_DIR = path.join(DATA_DIR, "scripts");
fs.mkdirSync(SCRIPTS_DIR, { recursive: true });

const compiler = COMPILE === "local" ? require("./compile").createCompiler({
    dataDir: DATA_DIR,
    extraHexDirs: STATIC_DIR ? [path.join(STATIC_DIR, "hexcache")] : [],
    fallbackCdn: HEX_FALLBACK,
    python: process.env.PYTHON || "python3",
    buildTimeoutMs: parseInt(process.env.BUILD_TIMEOUT || "900", 10) * 1000,
    maxQueue: parseInt(process.env.COMPILE_QUEUE || "20", 10),
    checkSources: require("./cppcheck").createSourceCheck({
        orgs: CPP_ORGS,
        repos: CPP_REPOS,
        targetJson: TARGET_JSON,
        upstream: UPSTREAM,
        log: (...args) => log(...args)
    }).check,
    log: (...args) => log(...args)
}) : undefined;

// same format as MakeCode short ids, so pxt.Cloud.parseScriptId() accepts them
const ID_RX = /^_[A-Za-z0-9]{12}$/;
const ID_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function newId() {
    for (;;) {
        let id = "_";
        for (const b of crypto.randomBytes(12)) id += ID_CHARS[b % ID_CHARS.length];
        if (!fs.existsSync(path.join(SCRIPTS_DIR, id))) return id;
    }
}

function log(...args) {
    console.log(new Date().toISOString(), ...args);
}

function clientIp(req) {
    if (TRUST_PROXY && req.headers["x-forwarded-for"])
        return String(req.headers["x-forwarded-for"]).split(",")[0].trim();
    return req.socket.remoteAddress || "";
}

function cors(req, res) {
    const origin = req.headers.origin;
    if (ALLOWED_ORIGINS.indexOf("*") >= 0) res.setHeader("Access-Control-Allow-Origin", "*");
    else if (origin && ALLOWED_ORIGINS.indexOf(origin) >= 0) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Vary", "Origin");
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Td-Access-Token, If-None-Match");
    res.setHeader("Access-Control-Expose-Headers", "ETag");
    res.setHeader("Access-Control-Max-Age", "86400");
}

function send(res, status, body, type, extraHeaders) {
    const buf = Buffer.isBuffer(body) ? body : Buffer.from(body);
    res.writeHead(status, Object.assign({ "Content-Type": type, "Content-Length": buf.length }, extraHeaders || {}));
    res.end(buf);
}

function sendJson(res, status, obj, extraHeaders) {
    send(res, status, JSON.stringify(obj), "application/json; charset=utf-8", extraHeaders);
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        req.on("data", c => {
            size += c.length;
            if (size > MAX_BODY) {
                reject(Object.assign(new Error("payload too large"), { statusCode: 413 }));
                req.destroy();
                return;
            }
            chunks.push(c);
        });
        req.on("end", () => resolve(Buffer.concat(chunks)));
        req.on("error", reject);
    });
}

// --- rate limit for publishing ---------------------------------------------------------

function rateLimiter(perHour) {
    const times = new Map(); // ip -> timestamps (ms)
    setInterval(() => {
        const now = Date.now();
        for (const [ip, t] of times)
            if (!t.some(x => now - x < 3600 * 1000)) times.delete(ip);
    }, 600 * 1000).unref();
    return ip => {
        const now = Date.now();
        const recent = (times.get(ip) || []).filter(t => now - t < 3600 * 1000);
        const ok = recent.length < perHour;
        if (ok) recent.push(now);
        times.set(ip, recent);
        return ok;
    };
}

const allowPublish = rateLimiter(PUBLISH_PER_HOUR);
const allowCompile = rateLimiter(COMPILE_PER_HOUR);

// --- stored projects -------------------------------------------------------------------

function scriptDir(id) {
    return path.join(SCRIPTS_DIR, id);
}

function hasScript(id) {
    return ID_RX.test(id) && fs.existsSync(path.join(scriptDir(id), "script.json"));
}

async function publish(req, res) {
    if (!allowPublish(clientIp(req)))
        return sendJson(res, 429, { error: "too many projects published, try again later" });

    const body = await readBody(req);
    let data;
    try {
        data = JSON.parse(body.toString("utf8"));
    } catch (e) {
        return sendJson(res, 400, { error: "invalid JSON" });
    }
    if (!data || typeof data.text !== "string")
        return sendJson(res, 400, { error: "missing project files" });
    try {
        const files = JSON.parse(data.text);
        if (!files || typeof files !== "object" || Array.isArray(files)) throw new Error();
    } catch (e) {
        return sendJson(res, 400, { error: "invalid project files" });
    }

    const str = (v, max) => typeof v === "string" ? v.slice(0, max) : "";
    const id = newId();
    let thumb;
    if (typeof data.thumbnailBuffer === "string" && /^image\/(png|gif)$/.test(data.thumbnailMimeType || ""))
        thumb = { buf: Buffer.from(data.thumbnailBuffer, "base64"), type: data.thumbnailMimeType };

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

    const dir = scriptDir(id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "text.json"), data.text);
    if (thumb) fs.writeFileSync(path.join(dir, "thumb"), thumb.buf);
    // script.json last: a project only counts as stored once it exists (see hasScript)
    fs.writeFileSync(path.join(dir, "script.json"), JSON.stringify(Object.assign({}, script, { thumbType: thumb ? thumb.type : undefined })));
    log("published", id, JSON.stringify(script.name), data.text.length, "bytes");
    sendJson(res, 200, script);
}

function getScript(res, id, sub) {
    const dir = scriptDir(id);
    const info = JSON.parse(fs.readFileSync(path.join(dir, "script.json"), "utf8"));
    const etag = `"${id}"`; // projects never change
    const cache = { "Cache-Control": "public, max-age=604800", "ETag": etag };
    if (!sub) {
        delete info.thumbType;
        return sendJson(res, 200, info, cache);
    }
    if (sub === "text")
        return send(res, 200, fs.readFileSync(path.join(dir, "text.json")), "application/json; charset=utf-8", cache);
    if (sub === "thumb" && info.thumb)
        return send(res, 200, fs.readFileSync(path.join(dir, "thumb")), info.thumbType || "image/png", cache);
    sendJson(res, 404, { error: "not found" });
}

async function abuseReport(req, res, id) {
    const body = await readBody(req);
    let text = "";
    try {
        text = String(JSON.parse(body.toString("utf8")).text || "").slice(0, 2000);
    } catch (e) { }
    fs.appendFileSync(path.join(DATA_DIR, "abusereports.log"),
        JSON.stringify({ time: new Date().toISOString(), id, text, ip: clientIp(req) }) + "\n");
    log("abuse report", id);
    sendJson(res, 200, {});
}

// --- C++ compile (compile.js) ---------------------------------------------------------

// public URL of /api/, for the hex links handed to the editor
function apiUrl(req) {
    if (PUBLIC_API_URL) return PUBLIC_API_URL;
    const proto = (TRUST_PROXY && req.headers["x-forwarded-proto"]) || (req.socket.encrypted ? "https" : "http");
    const host = (TRUST_PROXY && req.headers["x-forwarded-host"]) || req.headers.host;
    return `${String(proto).split(",")[0].trim()}://${host}/api/`;
}

async function compileRoute(req, res, apiPath) {
    if (apiPath === "clientconfig" && req.method === "GET")
        // pxt fetches cached runtimes from <primaryCdnUrl>/compile/<sha>.hex
        return sendJson(res, 200, { primaryCdnUrl: apiUrl(req).replace(/\/$/, "") });

    if (apiPath === "compile/extension" && req.method === "POST") {
        if (!allowCompile(clientIp(req)))
            return sendJson(res, 429, { error: "too many builds, try again later" });
        let sha;
        try {
            sha = compiler.submit(JSON.parse((await readBody(req)).toString("utf8")).data);
        } catch (e) {
            log("compile request rejected:", e.message);
            return sendJson(res, e.statusCode || 400, { error: e.message });
        }
        return sendJson(res, 200, { hex: `${apiUrl(req)}compile/${sha}.hex` });
    }

    const m = /^compile\/([0-9a-f]{64})\.(hex|json|log)$/.exec(apiPath);
    if (!m || (req.method !== "GET" && req.method !== "HEAD")) return false;
    const sha = m[1];
    if (m[2] === "hex") {
        const f = compiler.findHex(sha) || await compiler.fetchFallbackHex(sha);
        if (!f) return sendJson(res, 404, { error: "not compiled" });
        return send(res, 200, fs.readFileSync(f), "text/plain; charset=utf-8", { "Cache-Control": "public, max-age=31536000, immutable" });
    }
    if (m[2] === "json") {
        const st = compiler.status(sha);
        // 404 = still building, pxt polls again
        return st ? sendJson(res, 200, st, { "Cache-Control": "no-cache" }) : sendJson(res, 404, { error: "building" });
    }
    const lf = COMPILE_LOGS && compiler.logFile(sha);
    if (!lf) return sendJson(res, 404, { error: "not found" });
    return send(res, 200, fs.readFileSync(lf), "text/plain; charset=utf-8", { "Cache-Control": "no-cache" });
}

// --- proxy to the MakeCode cloud -------------------------------------------------------

const FORWARD_REQ_HEADERS = ["content-type", "accept", "accept-language", "if-none-match"];
const FORWARD_RES_HEADERS = ["content-type", "etag", "cache-control", "last-modified", "location"];

async function proxy(req, res, apiPath) {
    const url = UPSTREAM + apiPath;
    const headers = {};
    for (const h of FORWARD_REQ_HEADERS)
        if (req.headers[h]) headers[h] = req.headers[h];
    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const body = hasBody ? await readBody(req) : undefined;
    let r;
    try {
        r = await fetch(url, { method: req.method, headers, body, redirect: "manual" });
    } catch (e) {
        log("proxy error", req.method, url, e.message);
        return sendJson(res, 502, { error: "upstream not reachable" });
    }
    const buf = Buffer.from(await r.arrayBuffer());
    const out = {};
    for (const h of FORWARD_RES_HEADERS) {
        const v = r.headers.get(h);
        if (v) out[h] = v;
    }
    res.writeHead(r.status, Object.assign(out, { "Content-Length": buf.length }));
    res.end(req.method === "HEAD" ? undefined : buf);
}

// --- static editor (optional) ----------------------------------------------------------

const MIME = {
    ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml",
    ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".ico": "image/x-icon",
    ".webp": "image/webp", ".wasm": "application/wasm", ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject", ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8",
    ".hex": "text/plain; charset=utf-8", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".mp4": "video/mp4",
    ".webmanifest": "application/manifest+json", ".manifest": "text/cache-manifest", ".xml": "application/xml"
};

function serveStatic(req, res, pathname) {
    if (!STATIC_DIR || (req.method !== "GET" && req.method !== "HEAD"))
        return sendJson(res, 404, { error: "not found" });
    let rel;
    try {
        rel = decodeURIComponent(pathname);
    } catch (e) {
        return sendJson(res, 400, { error: "bad path" });
    }
    // icons that staticpkg leaves as "@cdnUrl@/blob/<sha>/static/..." in index.html
    rel = rel.replace(/^\/@cdnUrl@\/blob\/[0-9a-f]+(?=\/static\/)/, "");
    let file = path.join(STATIC_DIR, path.normalize(rel));
    if (file !== STATIC_DIR && !file.startsWith(STATIC_DIR + path.sep))
        return sendJson(res, 403, { error: "forbidden" });
    // help links in the editor ("/github", "/github/commit", ...) -> docs/<path>.html
    const doc = path.join(STATIC_DIR, "docs", path.normalize(rel).replace(/\/+$/, "") + ".html");
    if (!fs.existsSync(file) && !path.extname(rel) && doc.startsWith(STATIC_DIR + path.sep) && fs.existsSync(doc))
        file = doc;
    // images of the help pages ("/static/...") are in docs/static/ of the static version
    const docStatic = path.join(STATIC_DIR, "docs", path.normalize(rel));
    if (!fs.existsSync(file) && /^\/static\//.test(rel) && docStatic.startsWith(STATIC_DIR + path.sep) && fs.existsSync(docStatic))
        file = docStatic;
    try {
        if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
        const stat = fs.statSync(file);
        res.writeHead(200, {
            "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
            "Content-Length": stat.size,
            "Cache-Control": "no-cache"
        });
        if (req.method === "HEAD") return res.end();
        fs.createReadStream(file).pipe(res);
    } catch (e) {
        sendJson(res, 404, { error: "not found" });
    }
}

// --- GitHub sign-in --------------------------------------------------------------------
//
// pxt opens <apiRoot without "/api/">/oauth/login?state=..&redirect_uri=<editor> and expects
// <editor>#access_token=..&state=.. back (implicit flow). GitHub only offers the code flow,
// so this server swaps the code for a token with the client secret.

const oauthPending = new Map(); // our state -> { state, redirect, time }

function serviceUrl(req) {
    return apiUrl(req).replace(/api\/$/, "");
}

// the token is handed to redirect_uri: only the editor's own address (or a local dev server)
function allowedRedirect(req, uri) {
    let u;
    try {
        u = new URL(uri);
    } catch (e) {
        return false;
    }
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    if (u.origin === new URL(serviceUrl(req)).origin) return true;
    if (ALLOWED_ORIGINS.indexOf(u.origin) >= 0) return true;
    return u.protocol === "http:" && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(u.hostname);
}

async function oauthRoute(req, res, route, query) {
    if (req.method !== "GET") return sendJson(res, 405, { error: "method not allowed" });
    const noStore = { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" };

    if (route === "login") {
        if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
            res.writeHead(302, { Location: "https://www.makecode.com/oauth/login?" + query.toString() });
            return res.end();
        }
        const state = query.get("state") || "";
        const redirect = query.get("redirect_uri") || "";
        if (!state || state.length > 200 || !allowedRedirect(req, redirect))
            return sendJson(res, 400, { error: "bad state or redirect_uri" });
        const key = crypto.randomBytes(16).toString("hex");
        const now = Date.now();
        for (const [k, v] of oauthPending)
            if (now - v.time > 10 * 60 * 1000) oauthPending.delete(k);
        if (oauthPending.size > 10000) return sendJson(res, 429, { error: "too many sign-ins, try again later" });
        oauthPending.set(key, { state, redirect, time: now });
        const gh = new URL("https://github.com/login/oauth/authorize");
        gh.searchParams.set("client_id", GITHUB_CLIENT_ID);
        gh.searchParams.set("redirect_uri", serviceUrl(req) + "oauth/callback");
        gh.searchParams.set("scope", GITHUB_SCOPE);
        gh.searchParams.set("state", key);
        if (query.get("prompt") === "consent") gh.searchParams.set("prompt", "select_account");
        res.writeHead(302, Object.assign({ Location: gh.toString() }, noStore));
        return res.end();
    }

    if (route === "callback") {
        const pending = oauthPending.get(query.get("state") || "");
        if (!pending) return send(res, 400, "Anmeldung abgelaufen, bitte im Editor erneut versuchen.", "text/plain; charset=utf-8", noStore);
        oauthPending.delete(query.get("state"));
        const back = (hash) => {
            res.writeHead(302, Object.assign({ Location: pending.redirect.replace(/#.*$/, "") + "#" + hash }, noStore));
            res.end();
        };
        // user cancelled on GitHub: back to the editor without a token
        if (!query.get("code")) return back("");
        const r = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code: query.get("code"),
                redirect_uri: serviceUrl(req) + "oauth/callback"
            })
        });
        const tok = await r.json().catch(() => ({}));
        if (!r.ok || !tok.access_token) {
            log("github oauth failed", r.status, tok.error || "");
            return back("");
        }
        log("github sign-in", clientIp(req));
        return back(new URLSearchParams({ access_token: tok.access_token, token_type: "bearer", state: pending.state }).toString());
    }

    return sendJson(res, 404, { error: "not found" });
}

// --- routing ---------------------------------------------------------------------------

async function handle(req, res) {
    const u = new URL(req.url, "http://localhost");
    // "/api//<id>": opening a "#pub:/<id>" link in an already open editor (hash change)
    const o = /^\/oauth\/(login|callback)$/.exec(u.pathname);
    if (o) return oauthRoute(req, res, o[1], u.searchParams);
    const m = /^\/api\/+(.*)$/.exec(u.pathname);
    if (!m) return serveStatic(req, res, u.pathname);

    cors(req, res);
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    const apiPath = m[1];
    if (apiPath === "scripts" && req.method === "POST")
        return publish(req, res);

    const s = /^(_[A-Za-z0-9]{12})(?:\/(text|thumb|abusereports))?$/.exec(apiPath);
    if (s && hasScript(s[1])) {
        if (s[2] === "abusereports" && req.method === "POST") return abuseReport(req, res, s[1]);
        if (req.method === "GET" || req.method === "HEAD") return getScript(res, s[1], s[2]);
        return sendJson(res, 405, { error: "method not allowed" });
    }

    if (compiler && (apiPath === "clientconfig" || /^compile\//.test(apiPath))) {
        const handled = await compileRoute(req, res, apiPath);
        if (handled !== false) return;
    }

    return proxy(req, res, apiPath + u.search);
}

http.createServer((req, res) => {
    handle(req, res).catch(e => {
        log("error", req.method, req.url, e.message);
        if (!res.headersSent) sendJson(res, e.statusCode || 500, { error: e.statusCode ? e.message : "internal error" });
        else res.end();
    });
}).listen(PORT, HOST, () => {
    log(`share server on http://${HOST}:${PORT}/api/ (data: ${DATA_DIR}${STATIC_DIR ? ", editor: " + STATIC_DIR : ""}, C++ compile: ${COMPILE}${HEX_FALLBACK ? ", hex fallback: " + HEX_FALLBACK : ""})`);
});
