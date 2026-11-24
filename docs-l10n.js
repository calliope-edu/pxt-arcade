// Calliope edition: translations for the help pages (docs.html, loaded by prepare.sh after
// embed.js). pxt builds the cards of code examples (```cards) itself: their titles are fixed
// English words, their descriptions go through lf() but MakeCode has no translation for them.
(function () {
    var TEXTS = {
        // card descriptions (lf)
        "True or false values": { de: "Werte wahr oder falsch", fr: "Valeurs vrai ou faux" },
        "Logic operators and constants": { de: "Logische Operatoren und Konstanten", fr: "Opérateurs et constantes logiques" },
        "Conditional statement": { de: "Bedingte Anweisung", fr: "Instruction conditionnelle" },
        "Loops and repetition": { de: "Schleifen und Wiederholungen", fr: "Boucles et répétitions" },
        "Repeat code while a condition is true.": { de: "Wiederholt Code, solange eine Bedingung wahr ist.", fr: "Répète du code tant qu'une condition est vraie." },
        "Repeat code for each item in a list.": { de: "Wiederholt Code für jedes Element einer Liste.", fr: "Répète du code pour chaque élément d'une liste." },
        "Break out of the current loop.": { de: "Verlässt die aktuelle Schleife.", fr: "Sort de la boucle en cours." },
        "Skip iteration and continue the current loop.": { de: "Überspringt den Durchlauf und setzt die Schleife fort.", fr: "Saute l'itération et continue la boucle en cours." },
        "Repeat code for a given number of times using an index.": { de: "Wiederholt Code eine bestimmte Anzahl von Malen mit einem Index.", fr: "Répète du code un nombre de fois donné à l'aide d'un index." },
        "Repeat code for a given number of times.": { de: "Wiederholt Code eine bestimmte Anzahl von Malen.", fr: "Répète du code un nombre de fois donné." },
        "Variables": { de: "Variablen", fr: "Variables" },
        "Assign a value to a named variable.": { de: "Weist einer benannten Variablen einen Wert zu.", fr: "Attribue une valeur à une variable nommée." }
    };
    var TITLES = {
        "Boolean": { de: "Wahrheitswert", fr: "Booléen" },
        "Logic": { de: "Logik", fr: "Logique" },
        "if": { de: "wenn", fr: "si" },
        "Loops": { de: "Schleifen", fr: "Boucles" },
        "while": { de: "während", fr: "tant que" },
        "for of": { de: "für Element", fr: "pour chaque élément" },
        "break": { de: "abbrechen", fr: "interrompre" },
        "continue": { de: "fortfahren", fr: "continuer" },
        "for": { de: "für", fr: "pour" },
        "repeat": { de: "wiederholen", fr: "répéter" },
        "Variables": { de: "Variablen", fr: "Variables" },
        "variable declaration": { de: "Variablendeklaration", fr: "Déclaration de variable" },
        "Math": { de: "Mathematik", fr: "Maths" },
        "text": { de: "Text", fr: "Texte" },
        "Arrays": { de: "Arrays", fr: "Tableaux" }
    };

    function lang() {
        if (isStaticPage) return pageLang();
        var l = "";
        try { l = (window.pxt && pxt.Util.userLanguage()) || ""; } catch (e) { }
        if (!l) { var m = /:([a-z]{2}(?:-[A-Za-z]+)?)$/.exec(location.hash); l = m ? m[1] : ""; }
        return (l || "en").split("-")[0];
    }
    function pick(map, s) {
        var t = map[s];
        return (t && t[lang()]) || null;
    }

    var patched = false;
    function patchLocalize() {
        if (patched || !window.pxt || !pxt.Util || !pxt.Util._localize) return;
        patched = true;
        var localize = pxt.Util._localize;
        pxt.Util._localize = function (s) {
            var text = localize.apply(this, arguments);
            return text === s ? (pick(TEXTS, s) || text) : text;
        };
    }

    function translateTitles(root) {
        var els = root.querySelectorAll ? root.querySelectorAll(".ui.card .header, .ui.card .content .header") : [];
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.children.length) continue;
            var s = (el.textContent || "").trim();
            var t = pick(TITLES, s);
            if (t && t != s) el.textContent = t;
        }
    }

    // default variable names of blocks per language, as in the editor (editor/extension.ts)
    var VARIABLE_NAMES = {
        de: {
            mySprite: "meinSprite", mySprite2: "meinSprite2", myEnemy: "meinGegenpart",
            projectile: "projektil", otherSprite: "anderesSprite", statusbar: "statusleiste", picture: "bild"
        },
        fr: {
            mySprite: "monSprite", mySprite2: "monSprite2", myEnemy: "monEnnemi",
            projectile: "projectile", otherSprite: "autreSprite", statusbar: "barreEtat", picture: "image"
        }
    };
    var NAME_RE = new RegExp("^(" + Object.keys(VARIABLE_NAMES.de).join("|") + ")$");
    var patchedApis = false;
    function patchApis() {
        var pxtc = window.ts && ts.pxtc;
        if (patchedApis || !pxtc || !pxtc.localizeApisAsync) return;
        patchedApis = true;
        var localizeApisAsync = pxtc.localizeApisAsync;
        pxtc.localizeApisAsync = function (apis, mainPkg) {
            var args = arguments;
            var names = VARIABLE_NAMES[lang()];
            var before = Promise.resolve();
            if (names && apis && apis.byQName && mainPkg && mainPkg.localizationStringsAsync) {
                before = mainPkg.localizationStringsAsync(pxt.Util.userLanguage()).then(function (strings) {
                    strings = strings || {};
                    var extra = pxtc.apiLocalizationStrings || (pxtc.apiLocalizationStrings = {});
                    Object.keys(apis.byQName).forEach(function (q) {
                        var a = apis.byQName[q].attributes;
                        var english = a && (a._untranslatedBlock || a.block);
                        if (!english) return;
                        try {
                            var info = pxt.blocks.compileInfo(apis.byQName[q]);
                            ((info && info.handlerArgs) || []).forEach(function (h) {
                                if (names[h.name] && h.localizationKey) extra[h.localizationKey] = names[h.name];
                            });
                        } catch (e) { }
                        if (!/\((mySprite|myEnemy|projectile|otherSprite|statusbar)/.test(english)) return;
                        var key = q + "|block";
                        extra[key] = (extra[key] || strings[key] || english).replace(/(\(|variables_get\()([A-Za-z_]\w*)\)/g,
                            function (all, open, n) { return names[n] ? open + names[n] + ")" : all; });
                    });
                }).catch(function () { });
            }
            var li = { de: 0, fr: 1 }[lang()];
            var docs = li === undefined ? Promise.resolve(null)
                : fetch("/docs-jsdoc.json").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
            return before.then(function () { return localizeApisAsync.apply(pxtc, args); }).then(function (result) {
                return docs.then(function (d) { return [result, d]; });
            }).then(function (rd) {
                var result = rd[0], jsdoc = rd[1];
                var all = (result && result.byQName) || apis.byQName || {};
                // descriptions (card teasers) that the official translations leave in English
                if (jsdoc) Object.keys(jsdoc).forEach(function (q) {
                    var a = all[q] && all[q].attributes;
                    if (a && (!a._untranslatedJsDoc || a.jsDoc === a._untranslatedJsDoc)) a.jsDoc = jsdoc[q][li];
                });
                Object.keys(all).forEach(function (q) {
                    (all[q].parameters || []).forEach(function (prm) {
                        var orig = prm.__calliopeDefault || prm.default;
                        if (typeof orig != "string" || !NAME_RE.test(orig)) return;
                        prm.__calliopeDefault = orig;
                        prm.default = (names && names[orig]) || orig;
                    });
                    var a = all[q].attributes;
                    if (!a) return;
                    if (a.blockSetVariable && NAME_RE.test(a.__calliopeSetVariable || a.blockSetVariable)) {
                        a.__calliopeSetVariable = a.__calliopeSetVariable || a.blockSetVariable;
                        a.blockSetVariable = (names && names[a.__calliopeSetVariable]) || a.__calliopeSetVariable;
                    }
                    if (a.paramDefl) {
                        a.__calliopeParamDefl = a.__calliopeParamDefl || Object.assign({}, a.paramDefl);
                        Object.keys(a.__calliopeParamDefl).forEach(function (p) {
                            var v = a.__calliopeParamDefl[p];
                            if (NAME_RE.test(v)) a.paramDefl[p] = (names && names[v]) || v;
                        });
                    }
                });
                return result;
            });
        };
    }

    // ---- static help pages (/docs/<path>, also loaded there by prepare.sh) ----
    // they are rendered in English; for German and French the article is rendered again from
    // l10n/<lang>/<path>.md before pxt draws the blocks of the page
    var isStaticPage = !/(^|\/)docs(\.html)?$/.test(location.pathname.replace(/\/$/, ""))
        || !/#(doc|md):/.test(location.hash);
    function pageLang() {
        var m = /(?:^|;\s*)PXT_LANG=([\w-]+)/.exec(document.cookie || "");
        var l = (m && m[1]) || (navigator.language || "en");
        return l.toLowerCase().split("-")[0];
    }
    function pagePath() {
        var p = decodeURIComponent(location.pathname).replace(/\.html$/, "").replace(/\/+$/, "");
        p = p.replace(/^\/docs(\/|$)/, "/").replace(/^\//, "");
        return p && !/(^|\/)\.\.(\/|$)/.test(p) ? p : "";
    }
    var translatedPage = null;
    function translatePageAsync() {
        if (translatedPage) return translatedPage;
        var l = pageLang(), path = pagePath();
        var article = document.querySelector(".ui.text");
        // English pages too, where the edition has its own version (l10n/en, e.g. faq)
        if (!/^(en|de|fr)$/.test(l) || !path || !article || !window.pxt || !pxt.docs) return (translatedPage = Promise.resolve());
        translatedPage = fetch("/l10n/" + l + "/" + path + ".md").then(function (r) {
            return r.ok ? r.text() : null;
        }).then(function (md) {
            if (!md) return;
            var html = pxt.docs.renderMarkdown({ template: "@body@", markdown: md, theme: pxt.appTarget.appTheme });
            article.innerHTML = html;
            document.documentElement.setAttribute("lang", l);
            var h1 = article.querySelector("h1");
            if (h1 && h1.textContent) document.title = h1.textContent + " | " + document.title.replace(/^.*\|\s*/, "");
        }).catch(function () { });
        return translatedPage;
    }
    var patchedRunner = false;
    function patchRunner() {
        if (patchedRunner || !window.pxt || !pxt.runner || !pxt.runner.renderAsync) return;
        patchedRunner = true;
        var renderAsync = pxt.runner.renderAsync;
        pxt.runner.renderAsync = function () {
            var args = arguments;
            return translatePageAsync().then(function () { return renderAsync.apply(pxt.runner, args); });
        };
    }

    // menu entries of the help pages that this edition does not offer (all languages)
    var HIDDEN_MENU_HREFS = ["/docs/about.html", "/docs/projects.html", "/docs/github.html"];
    var HIDDEN_MENU_SECTIONS = ["Miscellaneous", "Hardware", "Developers", "Lessons", "Courses", "GitHub", "Projects", "About"];
    function hideMenu() {
        var menu = document.getElementById("side-menu");
        if (!menu) return;
        HIDDEN_MENU_HREFS.forEach(function (href) {
            var items = menu.querySelectorAll('.menuContainer > a.item[href="' + href + '"]');
            for (var i = 0; i < items.length; i++) items[i].remove();
        });
        var sections = menu.querySelectorAll(".menuContainer > .accordion.item");
        for (var j = 0; j < sections.length; j++) {
            var header = sections[j].querySelector(".title .header");
            if (header && HIDDEN_MENU_SECTIONS.indexOf((header.textContent || "").trim()) >= 0) sections[j].remove();
        }
    }
    // labels of the remaining menu entries
    var MENU_LABELS = {
        "Reference": { de: "Referenz", fr: "Référence" },
        "Blocks": { de: "Blöcke", fr: "Blocs" },
        "Loops": { de: "Schleifen", fr: "Boucles" },
        "Logic": { de: "Logik", fr: "Logique" },
        "Variables": { de: "Variablen", fr: "Variables" },
        "Types": { de: "Typen", fr: "Types" },
        "Blocks Gallery": { de: "Block-Galerie", fr: "Galerie de blocs" },
        "FAQ": { de: "Häufige Fragen", fr: "FAQ" },
        "Search...": { de: "Suchen …", fr: "Rechercher…" }
    };
    function translateMenu() {
        var l = pageLang();
        var els = document.querySelectorAll("#side-menu .menuContainer a.item, #side-menu .menuContainer .title .header");
        for (var i = 0; i < els.length; i++) {
            var t = MENU_LABELS[(els[i].textContent || "").trim()];
            if (t && t[l]) els[i].textContent = t[l];
        }
        var inputs = document.querySelectorAll('input[name="q"]');
        for (var k = 0; k < inputs.length; k++) {
            var p = MENU_LABELS[inputs[k].getAttribute("placeholder")];
            if (p && p[l]) inputs[k].setAttribute("placeholder", p[l]);
        }
    }
    if (isStaticPage) {
        var style = document.createElement("style");
        style.textContent = HIDDEN_MENU_HREFS.map(function (h) { return '#side-menu .menuContainer > a.item[href="' + h + '"]'; }).join(",") + "{display:none!important}";
        (document.head || document.documentElement).appendChild(style);
    }

    var timer = setInterval(function () {
        patchLocalize(); patchApis(); if (isStaticPage) patchRunner();
        // pages without code examples (e.g. faq) never call the runner: translate them anyway
        if (isStaticPage && !translatedPage && document.querySelector(".ui.text") && window.pxt && pxt.docs && pxt.appTarget) translatePageAsync();
        if (patched && patchedApis && (patchedRunner || !isStaticPage) && (translatedPage || !isStaticPage)) clearInterval(timer);
    }, 20);
    function start() {
        patchLocalize();
        if (isStaticPage) { hideMenu(); translateMenu(); }
        translateTitles(document);
        new MutationObserver(function () { translateTitles(document); })
            .observe(document.body, { childList: true, subtree: true });
    }
    if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
