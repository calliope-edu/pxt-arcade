#!/usr/bin/env node
/**
 * (c) 2026, Calliope gGmbH and contributors
 *
 * SPDX-License-Identifier: MIT
 */
// Calliope edition: the build's version as BUILD.json holds it (CALLIOPE-BUILD.md).
//
// A copy of calliope-mini-python-editor's bin/build-info.js, the reference
// for every Calliope editor. The calliope-build workflow sets BUILD_CHANNEL,
// BUILD_VERSION, BUILD_COMMIT and BUILD_AT once per job. Without them (a local
// build) the channel is "local" and version and commit come from git.
//
//   node scripts/calliope-build-info.js
//       prints BUILD.json
//   node scripts/calliope-build-info.js --patch-target [--site-url <url>]
//       writes the same values into pxtarget.json before `pxt staticpkg`: as
//       `calliopeBuild` (the code constant, pxt.appTarget.calliopeBuild, see
//       editor/calliope.ts) and as the version line, the last entry of the help
//       menu (appTheme.docMenu). --site-url (only for the Campus variant) names
//       the edition's own site, which shares the Campus variant's projects.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const CHANNELS = ["live", "dev", "local"];
const REPO_URL = "https://github.com/calliope-edu/pxt-arcade";
const TARGET = path.join(__dirname, "..", "pxtarget.json");

const git = (args) => {
    try {
        return execSync(`git ${args}`, {
            cwd: __dirname,
            stdio: ["ignore", "pipe", "ignore"],
        })
            .toString()
            .trim();
    } catch {
        return "";
    }
};

/**
 * @param {Record<string, string | undefined>} env
 */
const buildInfo = (env = process.env) => {
    const channel = env.BUILD_CHANNEL || "local";
    if (!CHANNELS.includes(channel)) {
        throw new Error(
            `BUILD_CHANNEL must be one of ${CHANNELS.join(", ")}, not "${channel}"`
        );
    }
    return {
        channel,
        // live: the tag (calliope-vX.Y.Z); dev: the branch (calliope-main).
        version: env.BUILD_VERSION || git("rev-parse --abbrev-ref HEAD") || "local",
        commit: env.BUILD_COMMIT || git("rev-parse HEAD"),
        builtAt: env.BUILD_AT || new Date().toISOString().replace(/\.\d+Z$/, "Z"),
        // Arcade carries neither calliope-ui nor the connection widget: pxt
        // keeps its own WebUSB (calliope-campus docs/design/2026-editor-repos.md, D10).
        ui: null,
        widget: null,
        libs: {},
    };
};

/**
 * The version line: "calliope-v1.0.0 · 7ea9962" on live, the channel in
 * front of it on dev and local builds ("dev · calliope-main · a1b2c3d").
 *
 * @param {ReturnType<typeof buildInfo>} info
 */
const versionLine = (info) => {
    const line = `${info.version} · ${info.commit.slice(0, 7)}`;
    return info.channel === "live" ? line : `${info.channel} · ${line}`;
};

/**
 * @param {ReturnType<typeof buildInfo>} info
 * @param {string} [siteUrl]
 */
const patchTarget = (info, siteUrl) => {
    const target = JSON.parse(fs.readFileSync(TARGET, "utf8"));
    target.calliopeBuild = siteUrl ? { ...info, siteUrl } : info;
    const docMenu = (target.appTheme.docMenu || []).filter((e) => !e.calliopeBuild);
    docMenu.push({
        name: versionLine(info),
        path: info.commit ? `${REPO_URL}/commit/${info.commit}` : REPO_URL,
        calliopeBuild: true,
    });
    target.appTheme.docMenu = docMenu;
    fs.writeFileSync(TARGET, JSON.stringify(target, null, 4) + "\n");
};

module.exports = { buildInfo, versionLine, patchTarget };

if (require.main === module) {
    const args = process.argv.slice(2);
    const info = buildInfo();
    if (args.includes("--patch-target")) {
        const i = args.indexOf("--site-url");
        const siteUrl = i >= 0 ? args[i + 1] : undefined;
        if (i >= 0 && !/^https:\/\/.+\/$/.test(siteUrl || "")) {
            throw new Error(`--site-url needs an https address ending in "/", not "${siteUrl}"`);
        }
        patchTarget(info, siteUrl);
        process.stdout.write(`pxtarget.json: ${versionLine(info)}${siteUrl ? `, site ${siteUrl}` : ""}\n`);
    } else {
        process.stdout.write(JSON.stringify(info, null, 2) + "\n");
    }
}
