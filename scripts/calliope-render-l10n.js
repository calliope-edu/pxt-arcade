#!/usr/bin/env node
// Calliope edition: renders the translated educator pages of the skillmaps
// (l10n/<lang>/skillmap/educator-info/*.md) as HTML, like staticpkg renders the English ones:
// the English page docs/skillmap/educator-info/<name>.html of the static editor is the
// template, only its article is replaced. Writes <out>/l10n/<lang>/skillmap/educator-info/.
// Usage: scripts/calliope-render-l10n.js <static editor folder> <out folder>
// (called by cloudflare/pages/prepare.sh)
const fs = require("fs");
const path = require("path");
// marked is an ES module package ("type": "module"), so require() returns no exports with
// newer Node; run its UMD build with a CommonJS module object instead
const { marked } = (() => {
    const file = path.join(__dirname, "../node_modules/marked/lib/marked.umd.js");
    const module = { exports: {} };
    new Function("module", "exports", fs.readFileSync(file, "utf8"))(module, module.exports);
    return module.exports;
})();

// heading ids for in-page links ("#lernpfad-geschichten-erzahlen"), GitHub style
marked.use({
    renderer: {
        heading({ tokens, depth }) {
            const text = this.parser.parseInline(tokens);
            const id = text.replace(/<[^>]+>/g, "").replace(/&#?\w+;/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase().replace(/[^a-z0-9 -]/g, "").trim().replace(/ /g, "-");
            return `<h${depth} id="${id}">${text}</h${depth}>\n`;
        }
    }
});

const [staticDir, outDir] = process.argv.slice(2);
const repo = path.join(__dirname, "..");
const SUB = "skillmap/educator-info";
const START = '<div class="ui text">';
const END = '\n    </div>\n\n\t\t\t\t\t<div class="hideprint">';

let count = 0;
for (const lang of fs.readdirSync(path.join(repo, "l10n"))) {
    const dir = path.join(repo, "l10n", lang, SUB);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith(".md"))) {
        const name = file.replace(/\.md$/, "");
        const template = path.join(staticDir, "docs", SUB, name + ".html");
        if (!fs.existsSync(template)) {
            console.log(`no English page for ${lang}/${SUB}/${name}, skipped`);
            continue;
        }
        const page = fs.readFileSync(template, "utf8");
        const i = page.indexOf(START);
        const j = page.indexOf(END, i);
        if (i < 0 || j < 0) throw new Error("article not found in " + template + ", check scripts/calliope-render-l10n.js");
        // links to skillmaps open the edition's own skillmap page instead of arcade.makecode.com
        const md = fs.readFileSync(path.join(dir, file), "utf8")
            .replace(/https:\/\/arcade\.makecode\.com\/--skillmap#/g, "/skillmap#");
        const html = page.slice(0, i + START.length) + "\n        " + marked.parse(md) + page.slice(j);
        const result = html.replace('<html lang="en"', `<html lang="${lang}"`);
        const out = path.join(outDir, "l10n", lang, SUB, name + ".html");
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, result);
        count++;
    }
}
console.log(`rendered ${count} translated educator pages`);
