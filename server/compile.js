// Calliope edition: C++ compile service for the share server (server.js).
//
// The editor only needs a native build when the C++ part of the program (CODAL runtime plus
// the C++ files of extensions) is not in a hex cache. pxt then asks
//
//   GET  <cdn>/compile/<sha>.hex          cached runtime ("<cdn>" comes from GET clientconfig)
//   POST <api>compile/extension {data}    start a build; data = base64 of the JSON
//                                         {config, tag, replaceFiles, dependencies},
//                                         sha = sha256 of that JSON; answer {hex: "<url>.hex"}
//   GET  <url>.json                       polled every 8 s (max. 5 min) until {success}
//   GET  <url>.hex                        the runtime as Intel hex
//
// This module builds such requests with the local ARM toolchain the same way "pxt build
// --localbuild" does (codal engine): clone the core package (microbit-v2-samples), check out
// the tag, write codal.json and pxtapp/, run "python build.py", take build/<binary>.hex.
// Unlike pxt and the MakeCode cloud (RelWithDebInfo = -O2) the runtime is built for size
// (buildType, -Os): ~22 KB less, so games fit next to the SoftDevice and the bootloader.
//
// The request comes from the browser, so only known compile services are accepted, only
// pxtapp/ sources and codal.json are written, and codal.json must name the expected CODAL
// target (otherwise a request could make CMake fetch and run code from any repository).
// cppcheck.js decides which C++ sources may be built at all (opts.checkSources).

"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");

// pxtarget.json -> variants.<variant>.compileService; add an entry to support more variants
const SERVICES = {
    // Calliope mini V3 (n3, nrf52833)
    mbcodal2: {
        repo: "https://github.com/lancaster-university/microbit-v2-samples",
        binary: "MICROBIT",
        targetName: "codal-microbit-v2",
        targetUrl: "https://github.com/thomasjball/codal-microbit-v2",
        // CMake build type set in utils/python/codal_utils.py of the core package
        buildType: "MinSizeRel"
    }
};

const SHA_RX = /^[0-9a-f]{64}$/;
const REF_RX = /^[\w.\-]{1,100}$/;
const FILE_RX = /^\/pxtapp\/(?:[\w\-]+\/)*[\w\-]+\.(?:cpp|c|h|hpp|s|S)$/;

function createCompiler(opts) {
    const log = opts.log;
    const workDir = path.join(opts.dataDir, "compile");
    const hexDir = path.join(opts.dataDir, "hexcache");
    const statusDir = path.join(workDir, "status");
    const logDir = path.join(workDir, "logs");
    for (const d of [workDir, hexDir, statusDir, logDir]) fs.mkdirSync(d, { recursive: true });

    const queue = []; // { sha, req }
    const pending = new Set();
    let running = false;

    // --- hex cache ---------------------------------------------------------------------

    function findHex(sha) {
        if (!SHA_RX.test(sha)) return undefined;
        for (const dir of [hexDir].concat(opts.extraHexDirs || [])) {
            const f = path.join(dir, sha + ".hex");
            if (fs.existsSync(f)) return f;
        }
        return undefined;
    }

    async function fetchFallbackHex(sha) {
        if (!opts.fallbackCdn || !SHA_RX.test(sha)) return undefined;
        try {
            const r = await fetch(`${opts.fallbackCdn}/compile/${sha}.hex`);
            if (r.status !== 200) return undefined;
            const text = await r.text();
            if (!/^:/.test(text)) return undefined;
            const f = path.join(hexDir, sha + ".hex");
            fs.writeFileSync(f, text);
            log("hex from fallback cdn", sha);
            return f;
        } catch (e) {
            return undefined;
        }
    }

    function status(sha) {
        if (findHex(sha)) return { success: true };
        if (pending.has(sha)) return undefined;
        try {
            return JSON.parse(fs.readFileSync(path.join(statusDir, sha + ".json"), "utf8"));
        } catch (e) {
            return undefined;
        }
    }

    // --- request validation --------------------------------------------------------------

    function parseRequest(data) {
        if (typeof data !== "string") throw new Error("missing data");
        const json = Buffer.from(data, "base64").toString("utf8");
        const sha = crypto.createHash("sha256").update(json, "utf8").digest("hex");
        const req = JSON.parse(json);
        const service = SERVICES[req.config];
        if (!service) throw new Error("unknown compile service " + req.config);
        if (!REF_RX.test(req.tag || "")) throw new Error("invalid tag");
        if (req.dependencies && Object.keys(req.dependencies).length)
            throw new Error("yotta dependencies are not supported");
        const files = req.replaceFiles || {};
        const out = {};
        for (const name of Object.keys(files)) {
            if (typeof files[name] !== "string") throw new Error("invalid file " + name);
            if (name === "/functions.json") continue; // only used by the editor
            if (name === "/codal.json") continue;
            if (!FILE_RX.test(name)) throw new Error("file not allowed: " + name);
            out[name.slice(1)] = files[name];
        }
        const codal = JSON.parse(files["/codal.json"] || "null");
        const t = codal && codal.target;
        if (!t || t.name !== service.targetName || t.url !== service.targetUrl || (t.type || "git") !== "git"
            || !REF_RX.test(t.branch || ""))
            throw new Error("unexpected CODAL target");
        for (const k of Object.keys(codal))
            if (["target", "definitions", "config", "application", "output_folder", "pxt_gitrepo", "pxt_gittag"].indexOf(k) < 0)
                throw new Error("unexpected codal.json entry " + k);
        // fixed locations, whatever the request says
        codal.application = "pxtapp";
        codal.output_folder = "build";
        out["codal.json"] = JSON.stringify(codal, null, 4) + "\n";
        return { sha, service: req.config, tag: req.tag, files: out };
    }

    // --- build -------------------------------------------------------------------------

    function run(cmd, args, cwd, logFile, timeoutMs) {
        return new Promise((resolve, reject) => {
            fs.appendFileSync(logFile, `$ ${cmd} ${args.join(" ")}\n`);
            const out = fs.openSync(logFile, "a");
            const p = spawn(cmd, args, {
                cwd,
                stdio: ["ignore", out, out],
                env: Object.assign({}, process.env, {
                    // CMake >= 4 refuses the old cmake_minimum_required() in CODAL
                    CMAKE_POLICY_VERSION_MINIMUM: "3.5",
                    GIT_TERMINAL_PROMPT: "0"
                })
            });
            const timer = setTimeout(() => p.kill("SIGKILL"), timeoutMs);
            p.on("error", e => { clearTimeout(timer); fs.closeSync(out); reject(e); });
            p.on("close", code => {
                clearTimeout(timer);
                fs.closeSync(out);
                if (code === 0) resolve();
                else reject(new Error(`${cmd} exited with ${code}`));
            });
        });
    }

    // build.py always configures CMake as RelWithDebInfo; "git checkout -f" restores the file
    function setBuildType(dir, buildType) {
        const f = path.join(dir, "utils", "python", "codal_utils.py");
        const src = fs.readFileSync(f, "utf8");
        if (!/-DCMAKE_BUILD_TYPE=RelWithDebInfo/.test(src))
            throw new Error("CMAKE_BUILD_TYPE not found in " + f);
        fs.writeFileSync(f, src.replace(/-DCMAKE_BUILD_TYPE=RelWithDebInfo/g, "-DCMAKE_BUILD_TYPE=" + buildType));
    }

    async function build(job) {
        const service = SERVICES[job.service];
        const dir = path.join(workDir, job.service);
        const logFile = path.join(logDir, job.sha + ".log");
        fs.writeFileSync(logFile, `build ${job.sha} (${job.service} ${job.tag}) ${new Date().toISOString()}\n`);
        const started = Date.now();
        const git = (...args) => run("git", args, dir, logFile, 10 * 60 * 1000);

        // only bundled packages and allowed C++ extensions (cppcheck.js)
        if (opts.checkSources) await opts.checkSources(job.files);

        if (!fs.existsSync(path.join(dir, ".git")))
            await run("git", ["clone", service.repo, dir], workDir, logFile, 10 * 60 * 1000);
        try {
            await git("checkout", "-f", job.tag);
        } catch (e) {
            await git("fetch", "--tags", "origin");
            await git("checkout", "-f", job.tag);
        }

        if (service.buildType) setBuildType(dir, service.buildType);

        // same as pxt: replace pxtapp/ completely, keep the rest (libraries/, build/) for
        // incremental builds
        fs.rmSync(path.join(dir, "pxtapp"), { recursive: true, force: true });
        for (const name of Object.keys(job.files)) {
            const f = path.join(dir, name);
            fs.mkdirSync(path.dirname(f), { recursive: true });
            fs.writeFileSync(f, job.files[name]);
        }
        // The config of codal.json ends up in build/codal_extra_definitions.h, which every file
        // includes, but CMake does not rebuild when it changes - e.g. DEVICE_BLE 1 after a
        // "usb-only" job would link stale objects. Start from scratch when it differs.
        const configFile = path.join(dir, "build", "calliope-codal-config.json");
        const config = JSON.stringify(JSON.parse(job.files["codal.json"]).config || {});
        let lastConfig = "";
        try { lastConfig = fs.readFileSync(configFile, "utf8"); } catch (e) { }
        if (lastConfig !== config) {
            fs.rmSync(path.join(dir, "build"), { recursive: true, force: true });
            fs.mkdirSync(path.join(dir, "build"), { recursive: true });
            fs.writeFileSync(configFile, config);
        }
        const hex = path.join(dir, "build", service.binary + ".hex");
        fs.rmSync(hex, { force: true });

        await run(opts.python, ["build.py"], dir, logFile, opts.buildTimeoutMs);
        if (!fs.existsSync(hex)) throw new Error("no " + service.binary + ".hex after build");
        fs.copyFileSync(hex, path.join(hexDir, job.sha + ".hex"));
        fs.appendFileSync(logFile, `done in ${Math.round((Date.now() - started) / 1000)} s\n`);
    }

    async function worker() {
        if (running) return;
        running = true;
        while (queue.length) {
            const job = queue.shift();
            log("compile start", job.sha, `(${queue.length} waiting)`);
            let result;
            try {
                await build(job);
                result = { success: true };
                log("compile done", job.sha);
            } catch (e) {
                result = { success: false, error: e.message };
                log("compile failed", job.sha, e.message);
                fs.appendFileSync(path.join(logDir, job.sha + ".log"), `FAILED: ${e.message}\n`);
            }
            fs.writeFileSync(path.join(statusDir, job.sha + ".json"), JSON.stringify(Object.assign({ time: new Date().toISOString() }, result)));
            pending.delete(job.sha);
        }
        running = false;
    }

    // returns the sha; throws on invalid requests
    function submit(data) {
        const job = parseRequest(data);
        if (findHex(job.sha) || pending.has(job.sha)) return job.sha;
        if (queue.length >= opts.maxQueue) throw Object.assign(new Error("compile queue full, try again later"), { statusCode: 503 });
        // a failed build may be retried
        fs.rmSync(path.join(statusDir, job.sha + ".json"), { force: true });
        pending.add(job.sha);
        queue.push(job);
        worker();
        return job.sha;
    }

    function logFile(sha) {
        const f = path.join(logDir, sha + ".log");
        return SHA_RX.test(sha) && fs.existsSync(f) ? f : undefined;
    }

    return { submit, findHex, fetchFallbackHex, status, logFile };
}

module.exports = { createCompiler };
