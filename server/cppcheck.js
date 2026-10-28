// Calliope edition: which C++ sources the compile service (compile.js) may build.
//
// TypeScript extensions never reach the compile service: only the C++ part of a program is
// built there. C++ is accepted only if every file is
//   - part of a bundled package of this editor (same content as in target.json), or
//   - part of an extension on GitHub in an allowed organisation (default calliope-edu), with
//     the same content as one of its versions (tags or default branch), or
//   - one of the files pxt generates (main.cpp, pxtconfig.h, pointers.cpp), checked line by
//     line, so they cannot carry code (e.g. asm(".incbin ...") would copy server files into
//     the hex).
// GitHub contents come through the MakeCode GitHub proxy (<upstream>gh/...), the same source
// the editor downloads extensions from, without GitHub's API rate limit.

"use strict";

const fs = require("fs");
const crypto = require("crypto");

const MAIN_CPP = `
#include "pxt.h"
#ifdef PXT_MAIN
PXT_MAIN
#else
int main() {
    uBit.init();
    pxt::start();
    release_fiber();
    return 0;   // your program will never reach this line.
}
#endif
`;

const PXTCONFIG_LINE = /^(?:|\/\/[\w ]*|#define \w+ (?:-?\w+|"[\w .\-]*"))$/;
const POINTERS_LINE = [
    /^$/,
    /^namespace \w+ \{$/,
    /^\}$/,
    /^PXT_SHIMS_(?:BEGIN|END)$/,
    /^PXT_FNPTR\(&?(?:::\w+)+\),$/,
    /^extern "C" void \w+\(\);$/,
    // prototypes, typedefs, enum declarations: no strings, braces or preprocessor
    /^ {4}[\w:*&,()\[\] =\-]+;$/
];
const INCLUDE_RX = /^#include "((?:[\w\-]+\/)*[\w\-]+\.h)"$/;
const FORBIDDEN_RX = /\b(?:asm|__asm|__asm__|_Pragma|__attribute__)\b/;
const MAX_REFS = 30;
const PARALLEL = 8;

function hash(s) {
    return crypto.createHash("sha256").update(s, "utf8").digest("hex");
}

function createSourceCheck(opts) {
    const log = opts.log;
    const orgs = opts.orgs.map(o => o.toLowerCase());
    const repos = opts.repos;
    const off = orgs.indexOf("*") >= 0;

    // --- bundled packages (target.json of the editor) -----------------------------------

    let bundled; // { mtime, hashes }
    function bundledHashes() {
        const stat = fs.statSync(opts.targetJson);
        if (!bundled || bundled.mtime !== stat.mtimeMs) {
            const target = JSON.parse(fs.readFileSync(opts.targetJson, "utf8"));
            const hashes = new Set();
            for (const pkg of Object.values(target.bundledpkgs || {}))
                for (const text of Object.values(pkg)) hashes.add(hash(text));
            bundled = { mtime: stat.mtimeMs, hashes };
            log(`C++ check: ${hashes.size} bundled files from ${opts.targetJson}`);
        }
        return bundled.hashes;
    }

    // --- generated files -----------------------------------------------------------------

    function checkGenerated(name, text, files) {
        if (FORBIDDEN_RX.test(text) || /\\\r?\n/.test(text) || /%:|\?\?=/.test(text))
            throw new Error(`${name}: not allowed`);
        const lines = text.split(/\r?\n/);
        if (name === "pxtapp/main.cpp") {
            if (text.trim() !== MAIN_CPP.trim()) throw new Error(`${name}: unexpected content`);
        } else if (name === "pxtapp/pxtconfig.h") {
            for (const l of lines)
                if (!PXTCONFIG_LINE.test(l)) throw new Error(`${name}: unexpected line ${JSON.stringify(l)}`);
        } else if (name === "pxtapp/pointers.cpp") {
            for (const l of lines) {
                const inc = INCLUDE_RX.exec(l);
                if (inc) {
                    if (typeof files["pxtapp/" + inc[1]] !== "string") throw new Error(`${name}: include of unknown file ${inc[1]}`);
                    continue;
                }
                if (!POINTERS_LINE.some(rx => rx.test(l))) throw new Error(`${name}: unexpected line ${JSON.stringify(l)}`);
            }
        }
    }

    // --- extensions on GitHub ------------------------------------------------------------

    const verified = new Map(); // hash of a package's files -> { ok, time }

    async function getJson(apiPath) {
        const r = await fetch(opts.upstream + apiPath, { signal: AbortSignal.timeout(30000) });
        // the proxy answers 500 for repositories that do not exist
        if (!r.ok) return undefined;
        return r.json();
    }

    function versionKey(tag) {
        return (/^v?(\d+)\.(\d+)\.(\d+)/.exec(tag) || [0, 0, 0, 0]).slice(1).map(Number);
    }

    // newest tags first, then the branches
    function refNames(refs) {
        const tags = Object.keys(refs).filter(r => r.startsWith("refs/tags/")).map(r => r.slice(10));
        tags.sort((a, b) => {
            const x = versionKey(a), y = versionKey(b);
            return y[0] - x[0] || y[1] - x[1] || y[2] - x[2];
        });
        const heads = Object.keys(refs).filter(r => r.startsWith("refs/heads/")).map(r => r.slice(11))
            .filter(h => h === "master" || h === "main");
        return tags.slice(0, MAX_REFS).concat(heads);
    }

    function candidates(pkg) {
        const names = [pkg, "pxt-" + pkg];
        if (pkg.startsWith("pxt-")) names.push(pkg.slice(4));
        const res = [];
        for (const org of orgs) for (const n of names) res.push(`${org}/${n}`);
        return res.concat(repos);
    }

    async function matchesRepo(slug, pkg, pkgFiles) {
        const refs = await getJson(`gh/${slug}/refs`);
        if (!refs || !refs.refs) return false;
        const matches = async ref => {
            const text = await getJson(`gh/${slug}/${encodeURIComponent(ref)}/text`).catch(() => undefined);
            if (!text || !text["pxt.json"]) return false;
            let cfg;
            try {
                cfg = JSON.parse(text["pxt.json"]);
            } catch (e) {
                return false;
            }
            if (cfg.name !== pkg) return false;
            return Object.keys(pkgFiles).every(rel => {
                const repoText = text[rel] !== undefined ? text[rel] : text[rel.replace(/\.s$/, ".S")];
                return repoText === pkgFiles[rel];
            });
        };
        const names = refNames(refs.refs);
        for (let i = 0; i < names.length; i += PARALLEL) {
            const batch = names.slice(i, i + PARALLEL);
            const found = (await Promise.all(batch.map(matches))).indexOf(true);
            if (found >= 0) {
                log(`C++ check: ${pkg} = ${slug}#${batch[found]}`);
                return true;
            }
        }
        return false;
    }

    async function checkPackage(pkg, pkgFiles) {
        const key = hash(JSON.stringify(Object.keys(pkgFiles).sort().map(k => [k, pkgFiles[k]])));
        const known = verified.get(key);
        if (known && (known.ok || Date.now() - known.time < 10 * 60 * 1000)) return known.ok;
        let ok = false;
        for (const slug of candidates(pkg)) {
            if (await matchesRepo(slug, pkg, pkgFiles)) {
                ok = true;
                break;
            }
        }
        verified.set(key, { ok, time: Date.now() });
        return ok;
    }

    // files: { "pxtapp/...": text, "codal.json": text }; throws if anything is not allowed
    async function check(files) {
        if (off) return;
        const known = bundledHashes();
        const byPkg = {};
        for (const name of Object.keys(files)) {
            if (name === "codal.json") continue; // checked in compile.js
            if (name === "pxtapp/main.cpp" || name === "pxtapp/pxtconfig.h" || name === "pxtapp/pointers.cpp") {
                checkGenerated(name, files[name], files);
                continue;
            }
            if (known.has(hash(files[name]))) continue;
            const m = /^pxtapp\/([\w\-]+)\/(.+)$/.exec(name);
            if (!m) throw new Error(`${name}: unknown file`);
            (byPkg[m[1]] = byPkg[m[1]] || {})[m[2]] = files[name];
        }
        for (const pkg of Object.keys(byPkg))
            if (!(await checkPackage(pkg, byPkg[pkg])))
                throw new Error(`C++ extension "${pkg}" is not from ${orgs.concat(repos).join(", ")} (or changed)`);
    }

    return { check };
}

module.exports = { createSourceCheck };
