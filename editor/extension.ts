/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />

namespace pxt.editor {
    function patchBlocks(pkgTargetVersion: string, dom: Element) {
        // Perform the following upgrades for sprite event blocks:
        // - Change variables_get_reporter shadows into argument_reporter_custom shadows for sprite
        //   event blocks
        // - Delete variables_get blocks that are connected to a shadow on a sprite event block
        // - If a variables_get block inside an event handler has the same name as an event handler
        //   argument name, change the variables_get block to an argument_reporter_custom block

        /*
        Old event blocks (variables_get_reporter):

        <block type="spritesoverlap">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">sprite</field>
                </shadow>
                <block type="variables_get">
                    <field name="VAR">myVariable</field>
                </block>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="variables_get">
                            <field name="VAR">myVariable</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>


        New event blocks (argument_reporter_custom):

        <block type="spritesoverlap" x="490" y="470">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">sprite</field>
                </shadow>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="argument_reporter_custom">
                            <mutation typename="Sprite"></mutation>
                            <field name="VALUE">sprite</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>
        */
        const allEventNodes = U.toArray(dom.querySelectorAll("block[type=spritesoverlap]"))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesoncreated]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesondestroyed]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesollisions]")));

        allEventNodes.forEach(node => {
            // Don't rewrite if already upgraded, i.e. if there are argument_reporter_custom
            // shadows already present
            if (node.querySelectorAll("shadow[type=argument_reporter_custom]").length > 0) {
                return;
            }

            const paramValues = U.toArray(node.children).filter(child => {
                return child.tagName == "value" && child.getAttribute("name").indexOf("HANDLER_DRAG_PARAM_") !== -1;
            });
            const statementsRoot = node.querySelector("statement[name=HANDLER]");
            const usedVariables = U.toArray(statementsRoot.querySelectorAll("block[type=variables_get]"));

            paramValues.forEach(value => {
                let oldVariableName = "";

                const handlerVarShadow = getShadow(value, "variables_get_reporter");

                if (!handlerVarShadow) {
                    return;
                }

                const connectedVarBlock = getChildBlock(value, "variables_get");

                if (connectedVarBlock) {
                    // A variable is connected to the shadow variable reporter; use the name for
                    // the argument reporter and delete the variable
                    const connectedVarField = getField(connectedVarBlock, "VAR");
                    oldVariableName = connectedVarField.textContent;
                    value.removeChild(connectedVarBlock);
                }

                const handlerVarField = getField(handlerVarShadow, "VAR");
                const argReporterName = handlerVarField.textContent;
                oldVariableName = oldVariableName || argReporterName;
                changeVariableToSpriteReporter(handlerVarShadow, argReporterName);

                // Change all references to this variable inside the handler to argument reporters
                usedVariables.forEach(usedVarBlock => {
                    const usedVarField = getField(usedVarBlock, "VAR");
                    if (usedVarField && usedVarField.textContent === oldVariableName) {
                        // This variable is a reference to a handler parameter; change it to an
                        // argument reporter
                        changeVariableToSpriteReporter(usedVarBlock, argReporterName);
                    }
                });
            });
        });

        /**
         * Upgrade for scene.setTile() which went from being expandable to not
         */
        U.toArray(dom.querySelectorAll("block[type=gamesettile]")).forEach(block => {
            const mutation = getMutation(block);

            if (!mutation) return; // Already upgraded

            const expanded = mutation.getAttribute("_expanded") !== "0";
            block.removeChild(mutation);

            if (expanded) {
                // The value input must already be in the XML, so no changes needed
                return;
            }
            else {
                // There might be a value input present, but we should remove it
                // and replace it with the default to replicate the unexpanded behavior
                const value = getChildNode(block, "value", "name", "wall");
                if (value) {
                    block.removeChild(value);
                }

                const newValue = replaceToggle("wall", "toggleOnOff", "on", "false");
                block.appendChild(newValue);
            }
        });
        /**
         * Upgrade for game.over() which went from being expandable twice to being expandable once
         */
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.10.0") < 0) {
            U.toArray(dom.querySelectorAll("block[type=gameOver]")).forEach(block => {
                const mutation = getMutation(block);
                const value = getChildNode(block, "value", "name", "win");
                const expansion = mutation.getAttribute("_expanded")

                if (expansion !== "0") {
                    // Decrement expansion level, as win is now required
                    mutation.setAttribute("_expanded", (Number(expansion) - 1) + "");
                } else {
                    // Remove old value to replace it default to maintain current behavior
                    if (value) {
                        block.removeChild(value);
                    }

                    const newValue = replaceToggle("win", "toggleWinLose", "win", "false");
                    block.appendChild(newValue);
                }
            });
        }

        /**
         * Upgrade for enum SpriteKind -> SpriteKindLegacy
         */
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.11.20") < 0) {

            /**
             * Sometimes the getters for these omit the enum member's # improperly,
             * so we need to map those numbers to the new values.
             * e.g.
             * bad:
            <value name="kind">
                <shadow type="spritekind">
                    <field name="MEMBER">Cow</field>
                </shadow>
                <block type="spritetype">
                    <field name="MEMBER">Player</field>
                </block>
            </value>
             *
             * good:
            <value name="kind">
                <shadow type="spritekind">
                    <field name="MEMBER">7Cow</field>
                </shadow>
                <block type="spritetype">
                    <field name="MEMBER">1Player</field>
                </block>
            </value>
             */
            const legacyKindConversions: pxt.Map<string> = {};

            pxt.U.toArray(dom.querySelectorAll("variable[type=SpriteKind]")).forEach(block => {
                block.setAttribute("type", "SpriteKindLegacy");
                const kindValue = (block.textContent || "").trim();
                const withoutNum = /[0-9]*([^0-9].*)/.exec(kindValue);
                if (withoutNum) {
                    legacyKindConversions[withoutNum[1]] = kindValue;
                }
            });

            pxt.U.toArray(dom.querySelectorAll("shadow[type=spritetype], block[type=spritetype]")).forEach(block => {
                const memberField = getField(block, "MEMBER");
                const cont = (memberField?.textContent || "").trim();

                if (legacyKindConversions[cont]) {
                    memberField.textContent = legacyKindConversions[cont];
                }
            });
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.18.9") < 0) {
            /**
             * Add draggable param for tile that was hit as child of sprite hit wall block
            <value name="HANDLER_DRAG_PARAM_location">
                <shadow type="argument_reporter_custom">
                    <mutation typename="tiles.Location"/>
                    <field name="VALUE">location</field>
                </shadow>
            </value>
             */
            U.toArray(dom.querySelectorAll("block[type=spriteshitwall]")).forEach(block => {
                const doc = block.ownerDocument;
                const tileHitParam = doc.createElement("value");
                tileHitParam.setAttribute("name", "HANDLER_DRAG_PARAM_location");

                const shadow = doc.createElement("shadow");
                shadow.setAttribute("type", "argument_reporter_custom")

                const mut = doc.createElement("mutation");
                mut.setAttribute("typename", "tiles.Location");

                const field = doc.createElement("field");
                field.setAttribute("name", "VALUE");
                field.textContent = "location";

                shadow.appendChild(mut);
                shadow.appendChild(field);

                tileHitParam.appendChild(shadow);
                block.appendChild(tileHitParam);
            });

            /**
             * move from tilemap namespace to tiles namespace
             * <block type="tilemap_locationXY">
                    <field name="xy">tilemap.XY.column</field>
                    <value name="location">
                        <block type="variables_get">
                            <field name="VAR" id="L%xa3_Yy]Kq+]Q|yE{Fv">location</field>
                        </block>
                    </value>
                </block>
             */
            U.toArray(dom.querySelectorAll("block[type=tilemap_locationXY]")).forEach(block => {
                const xyField = getField(block, "xy");
                xyField.textContent = (xyField.textContent || "").replace(/^tilemap./, "tiles.");
            });
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "1.12.34") < 0) {
            const lang = pxt.BrowserUtils.getCookieLang();
            if (lang == "es-MX") {
                // on player 2 a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=ctrlonbuttonevent]"))
                .forEach(eventRoot => {
                    swapFieldIfNotMatching(eventRoot, "button", "controller", "ControllerButton.");
                });
            } else if (lang === "es-ES") {
                pxt.U.toArray(dom.querySelectorAll("[type=music_sounds]>field[name=note]"))
                    .forEach(node => node.setAttribute("name", "name"));
                // on a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=keyonevent]"))
                    .forEach(eventRoot => {
                        swapFieldIfNotMatching(eventRoot, "event", "button", "ControllerButtonEvent.");
                    });
                // on player 2 a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=ctrlonbuttonevent]"))
                    .forEach(eventRoot => {
                        swapFieldIfNotMatching(eventRoot, "button", "controller", "ControllerButton.");
                    });
            } else if (lang === "de") {
                pxt.U.toArray(dom.querySelectorAll("block[type=image_create]>value[name=heNacht]"))
                    .forEach(node => node.setAttribute("name", "height"));
            }
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "1.0.0") < 0) {
            // At some point Sprite.z switched from being a getter/setter to a property
            pxt.U.toArray(dom.querySelectorAll("block[type=Sprite_blockCombine_set]>field[name=property]"))
                .forEach(node => {
                    if (node.textContent.trim() === "Sprite.z@set") {
                        node.textContent = "Sprite.z";
                    }
                });

            const performOldEnumShimUpgrade = (variableType: string, blockType: string) => {
                const variableKinds = pxt.U.toArray(dom.querySelectorAll(`variable[type=${variableType}]`));

                if (variableKinds.length) {
                    pxt.U.toArray(dom.querySelectorAll(`block[type=${blockType}]>field[name=MEMBER]`))
                        .concat(pxt.U.toArray(dom.querySelectorAll(`shadow[type=${blockType}]>field[name=MEMBER]`)))
                        .forEach(node => {
                            const value = node.textContent;
                            if (!/^\d/.test(value)) {
                                // The correct numerical value will be in the variables
                                for (const kind of variableKinds) {
                                    const match = /^\d+(.*)/.exec(kind.textContent);
                                    if (match?.[1] === value) {
                                        node.textContent = kind.textContent;
                                        break;
                                    }
                                }
                            }
                        });
                }
            }


            // The kind field used by the legacy animation editor switched to including the numerical
            // enum value in the field (e.g. Walking -> 0Walking)
            performOldEnumShimUpgrade("ActionKind", "action_enum_shim");

            // same for SpriteKindLegacy
            performOldEnumShimUpgrade("SpriteKindLegacy", "spritetype");
        }

        // Added the "use on-screen keyboard" options to the ask for number and ask for string blocks
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "2.0.35") < 0) {
            const allPromptBlocks = U.toArray(dom.querySelectorAll("block[type=gameaskforstring]"))
                .concat(U.toArray(dom.querySelectorAll("shadow[type=gameaskforstring]")))
                .concat(U.toArray(dom.querySelectorAll("block[type=gameaskfornumber]")))
                .concat(U.toArray(dom.querySelectorAll("shadow[type=gameaskfornumber]")));

            for (const block of allPromptBlocks) {
                if (getChildNode(block, "value", "name", "useOnScreenKeyboard")) {
                    continue;
                }
                else {
                    // preserve the old behavior by setting the value to true if not present
                    const value = document.createElement("value");
                    value.setAttribute("name", "useOnScreenKeyboard");

                    const shadow = document.createElement("shadow");
                    shadow.setAttribute("type", "logic_boolean");

                    const field = document.createElement("field");
                    field.setAttribute("name", "BOOL");
                    field.textContent = "FALSE";

                    shadow.appendChild(field);
                    value.appendChild(shadow);
                    block.appendChild(value);
                }

                // since we are going to expand the block, we also need to make sure that
                // the other expandable parameter answerLength is present. the default values
                // and min/max were taken from the source in pxt-common-packages prior to this change
                const isStringBlock = block.getAttribute("type") === "gameaskforstring";
                if (!getChildNode(block, "value", "name", "answerLength")) {
                    const value = document.createElement("value");
                    value.setAttribute("name", "answerLength");

                    const shadow = document.createElement("shadow");
                    shadow.setAttribute("type", "math_number_minmax");

                    const mutation = document.createElement("mutation");
                    mutation.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
                    mutation.setAttribute("min", "1");
                    mutation.setAttribute("max", isStringBlock ? "24" : "10");
                    mutation.setAttribute("label", "AnswerLength");
                    mutation.setAttribute("prevision", "0");

                    const field = document.createElement("field");
                    field.setAttribute("name", "SLIDER");
                    field.textContent = isStringBlock ? "12" : "6";

                    shadow.appendChild(field);
                    shadow.appendChild(mutation);
                    value.appendChild(shadow);
                    block.appendChild(value);
                }
            }
        }

        // fixed a typing issue where the browserEvents_mouseButton_pauseUntil was using the wrong enum
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "2.0.41") < 0) {
            for (const block of U.toArray(dom.querySelectorAll("block[type=browserEvents_mouseButton_pauseUntil]"))) {
                const field = getChildNode(block, "field", "name", "event");
                if (!field) continue;
                if (field.textContent.startsWith("browserEvents.KeyEvent")) {
                    field.textContent = field.textContent.replace("KeyEvent", "MouseButtonEvent")
                }
            }
        }
    }

    function swapFieldIfNotMatching(
        eventRoot: Element,
        fieldAName: string,
        fieldBName: string,
        fieldAShouldStartWith: string
    ) {
        const fieldA = eventRoot.querySelector(`field[name=${fieldAName}]`);
        const fieldB = eventRoot.querySelector(`field[name=${fieldBName}]`);
        if (!fieldB || !fieldA) return;
        if (!fieldA.innerHTML.startsWith(fieldAShouldStartWith)
                && fieldB.innerHTML.startsWith(fieldAShouldStartWith)) {
            // swapped by invalid translation we now catch; swap back
            fieldA.setAttribute("name", fieldBName);
            fieldB.setAttribute("name", fieldAName);
        }
    }


    function changeVariableToSpriteReporter(varBlockOrShadow: Element, reporterName: string) {
        const varField = getField(varBlockOrShadow, "VAR");
        varBlockOrShadow.setAttribute("type", "argument_reporter_custom");
        varField.setAttribute("name", "VALUE");
        varField.textContent = reporterName;
        varField.removeAttribute("variabletype");
        varField.removeAttribute("id");
        const mutation = varBlockOrShadow.ownerDocument.createElement("mutation");
        mutation.setAttribute("typename", "Sprite");
        varBlockOrShadow.insertBefore(mutation, varBlockOrShadow.firstChild);
    }

    function getField(parent: Element, name: string) {
        return getChildNode(parent, "field", "name", name);
    }

    function getShadow(parent: Element, type: string) {
        return getChildNode(parent, "shadow", "type", type);
    }

    function getChildBlock(parent: Element, type: string) {
        return getChildNode(parent, "block", "type", type);
    }

    function getChildNode(parent: Element, nodeType: string, idAttribute: string, idValue: string) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children.item(i);
            if (child.tagName === nodeType && child.getAttribute(idAttribute) === idValue) {
                return child;
            }
        }
        return undefined;
    }

    function getMutation(parent: Element) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children.item(i);
            if (child.tagName === "mutation") {
                return child;
            }
        }
        return undefined;
    }

    // Calliope edition: content of the simulator keyboard shortcut panel (see initExtensionsAsync)
    function fillKeymap(panel: HTMLElement) {
        if (panel.querySelector(".keymap-title")) return;
        const players: [string, [string, string[]][]][] = [
            [lf("player 1"), [
                [lf("up"), ["↑", "W"]],
                [lf("down"), ["↓", "S"]],
                [lf("left"), ["←", "A"]],
                [lf("right"), ["→", "D"]],
                ["a", ["Z", lf("{id:keyboard symbol}space")]],
                ["b", ["X", lf("{id:keyboard symbol}enter")]]
            ]],
            [lf("player 2"), [
                [lf("up"), ["I"]],
                [lf("down"), ["K"]],
                [lf("left"), ["J"]],
                [lf("right"), ["L"]],
                [lf("a"), ["U"]],
                [lf("b"), ["O"]]
            ]]
        ];
        const el = (tag: string, cls: string, text?: string) => {
            const e = document.createElement(tag);
            e.className = cls;
            if (text !== undefined) e.textContent = text;
            return e;
        };
        for (const [title, rows] of players) {
            const player = document.createElement("div");
            player.appendChild(el("span", "keymap-title", title));
            for (const [name, keys] of rows) {
                const row = el("div", "keymap-row");
                keys.forEach(k => row.appendChild(el("div", "keymap-key", k)));
                row.appendChild(el("span", "keymap-name", name));
                player.appendChild(row);
            }
            panel.appendChild(player);
        }
    }

    // Calliope edition: server for shared projects (pxt.Cloud.apiRoot). It stores and returns
    // shared projects and forwards all other requests (C++ compile, GitHub extensions, ...)
    // to https://www.makecode.com/api/ (server/server.js).
    //   "api/"               -> <editor address>api/ (share server serves the editor as well)
    //   "https://host/api/"  -> share server somewhere else
    //   ""                   -> MakeCode cloud (makecode.com), as in upstream
    const CLOUD_API_ROOT = "api/";
    // share server used with the dev server ("pxt serve", localhost)
    const DEV_CLOUD_API_ROOT = "http://localhost:8790/api/";

    function cloudApiRoot(editorUrl: string) {
        if (!CLOUD_API_ROOT) return "https://www.makecode.com/api/";
        if (pxt.BrowserUtils.isLocalHost()) return DEV_CLOUD_API_ROOT;
        return /^https?:\/\//.test(CLOUD_API_ROOT) ? CLOUD_API_ROOT : editorUrl + CLOUD_API_ROOT;
    }

    // Calliope edition: extensions with C++ code only from these GitHub organisations
    // (TypeScript extensions from anywhere). The share server checks the same before it
    // builds C++ (server/cppcheck.js, CPP_ORGS). [] = no check, as in upstream.
    const CPP_EXTENSION_ORGS = ["calliope-edu"];

    // pxt's translations (lf) do not know this text; same languages as libs/*/_locales
    const CPP_EXTENSION_MESSAGE: pxt.Map<string> = {
        "ar": "لا يمكن استخدام الإضافات التي تحتوي على شيفرة C++‎ إلا من github.com/{0}: {1}",
        "ca": "Les extensions amb codi C++ només es poden utilitzar des de github.com/{0}: {1}",
        "cs": "Rozšíření s kódem C++ lze používat pouze z github.com/{0}: {1}",
        "da": "Udvidelser med C++-kode kan kun bruges fra github.com/{0}: {1}",
        "de": "Erweiterungen mit C++-Code können nur von github.com/{0} verwendet werden: {1}",
        "el": "Οι επεκτάσεις με κώδικα C++ μπορούν να χρησιμοποιηθούν μόνο από το github.com/{0}: {1}",
        "es": "Las extensiones con código C++ solo se pueden usar desde github.com/{0}: {1}",
        "fr": "Les extensions contenant du code C++ ne peuvent être utilisées que depuis github.com/{0} : {1}",
        "it": "Le estensioni con codice C++ possono essere usate solo da github.com/{0}: {1}",
        "nl": "Extensies met C++-code kunnen alleen vanaf github.com/{0} worden gebruikt: {1}",
        "pl": "Rozszerzeń z kodem C++ można używać tylko z github.com/{0}: {1}",
        "sl": "Razširitve s kodo C++ je mogoče uporabljati samo z github.com/{0}: {1}",
        "tr": "C++ kodu içeren uzantılar yalnızca github.com/{0} adresinden kullanılabilir: {1}"
    };

    function cppExtensionMessage(orgs: string, blocked: string) {
        const lang = pxt.Util.userLanguage() || "en";
        const msg = CPP_EXTENSION_MESSAGE[lang] || CPP_EXTENSION_MESSAGE[lang.split("-")[0]];
        return msg ? pxt.U.fmt(msg, orgs, blocked)
            : lf("Extensions with C++ code can only be used from github.com/{0}: {1}", orgs, blocked);
    }

    function checkCppExtensions(mainPkg: pxt.MainPackage) {
        if (!CPP_EXTENSION_ORGS.length) return;
        const blocked: string[] = [];
        for (const p of mainPkg.sortedDeps(true)) {
            if (!p.getFiles().some(f => /\.(cpp|c|h|s)$/i.test(f))) continue;
            const proto = p.verProtocol();
            if (p.id == "this") {
                blocked.push(p.id);
            } else if (proto == "github") {
                const repo = pxt.github.parseRepoId(p.verArgument());
                const owner = repo && repo.slug ? repo.slug.split("/")[0].toLowerCase() : "";
                if (CPP_EXTENSION_ORGS.indexOf(owner) < 0) blocked.push(p.id);
            } else if (proto != "embed") {
                // bundled packages are "embed:"; "file:" here is a package next to a GitHub
                // extension in its repository, "pub:" a shared project, ...
                blocked.push(p.id);
            }
        }
        if (blocked.length)
            pxt.U.userError(cppExtensionMessage(CPP_EXTENSION_ORGS.join(", github.com/"), blocked.join(", ")));
    }

    // Calliope edition: texts of the WebUSB connection (pxt's translations do not have them);
    // same languages as appTheme.availableLocales
    const CONNECT_MENU_LABEL: pxt.Map<string> = {
        "en": "Connect Calliope mini",
        "ar": "توصيل Calliope mini",
        "de": "Calliope mini verbinden",
        "es": "Conectar Calliope mini",
        "fr": "Connecter le Calliope mini",
        "ga": "Ceangail Calliope mini",
        "it": "Collega Calliope mini",
        "ja": "Calliope mini を接続",
        "ko": "Calliope mini 연결",
        "nl": "Calliope mini verbinden",
        "ru": "Подключить Calliope mini",
        "zh-CN": "连接 Calliope mini",
        "zh-TW": "連接 Calliope mini"
    };
    const CONNECT_USB_STEP: pxt.Map<string> = {
        "en": "Connect your Calliope mini to the computer with the USB cable.",
        "ar": "وصّل Calliope mini بالحاسوب باستخدام كابل USB.",
        "de": "Verbinde deinen Calliope mini mit dem USB-Kabel und dem Computer.",
        "es": "Conecta tu Calliope mini al ordenador con el cable USB.",
        "fr": "Branche ton Calliope mini à l'ordinateur avec le câble USB.",
        "ga": "Ceangail do Calliope mini leis an ríomhaire leis an gcábla USB.",
        "it": "Collega il tuo Calliope mini al computer con il cavo USB.",
        "ja": "USB ケーブルで Calliope mini をコンピューターに接続します。",
        "ko": "USB 케이블로 Calliope mini를 컴퓨터에 연결하세요.",
        "nl": "Verbind je Calliope mini met de USB-kabel en de computer.",
        "ru": "Подключи Calliope mini к компьютеру с помощью USB-кабеля.",
        "zh-CN": "用 USB 线将 Calliope mini 连接到电脑。",
        "zh-TW": "用 USB 線將 Calliope mini 連接到電腦。"
    };
    // text of the "Failed to connect" dialog without the "Help" part ({1} = "Try Again",
    // {2} = "Download as File", as in pxt's text)
    const PAIR_FAILED_STRING = 'Click "{0}" for more info, "{1}" to retry pairing, or "{2}" for drag-and-drop flashing.';
    const PAIR_FAILED_TEXT: pxt.Map<string> = {
        "en": 'Click "{1}" to retry pairing or "{2}" for drag-and-drop flashing.',
        "ar": 'انقر على "{1}" لإعادة محاولة الاقتران أو على "{2}" للنقل بالسحب والإفلات.',
        "de": 'Klicke auf "{1}" um das Koppeln zu wiederholen, oder "{2}" zum Flashen per Drag-and-Drop.',
        "es": 'Haz clic en "{1}" para volver a intentar el emparejamiento o en "{2}" para transferir arrastrando y soltando.',
        "fr": 'Clique sur « {1} » pour réessayer l\'appairage ou sur « {2} » pour transférer par glisser-déposer.',
        "ga": 'Cliceáil "{1}" chun an péireáil a athdhéanamh nó "{2}" chun splancadh le tarraing agus scaoil.',
        "it": 'Fai clic su "{1}" per ripetere l\'associazione o su "{2}" per trasferire con il trascinamento.',
        "ja": '「{1}」をクリックしてペアリングをやり直すか、「{2}」をクリックしてドラッグ＆ドロップで書き込みます。',
        "ko": '"{1}"을 클릭하여 페어링을 다시 시도하거나 "{2}"를 클릭하여 끌어서 놓기로 플래시하세요.',
        "nl": 'Klik op "{1}" om het koppelen opnieuw te proberen of op "{2}" om via slepen en neerzetten te flashen.',
        "ru": 'Нажми «{1}», чтобы повторить сопряжение, или «{2}», чтобы прошить перетаскиванием.',
        "zh-CN": '点击“{1}”重试配对，或点击“{2}”通过拖放方式烧录。',
        "zh-TW": '按一下「{1}」重試配對，或按一下「{2}」以拖放方式燒錄。'
    };
    // menu entry next to "Download" and the button of the legacy pairing dialog
    const CONNECT_MENU_STRINGS = ["Connect Device", "Connect device"];
    // headers of the pairing dialogs, shown without their step numbers
    const PAIR_DIALOG_HEADERS = ["1. Connect your {0} to your computer", "2. Pair your {0} to your browser"];

    function localized(texts: pxt.Map<string>) {
        const lang = pxt.Util.userLanguage() || "en";
        return texts[lang] || texts[lang.split("-")[0]] || texts["en"];
    }

    // adds a first paragraph to the step list ("description") of a pairing dialog
    function prependToDescription(el: any, text: string): any {
        if (!el || typeof el != "object" || !el.props) return el;
        const children = el.props.children;
        if (/\bdescription\b/.test(el.props.className || "")) {
            const p = { $$typeof: el.$$typeof, type: "p", key: "calliope-usb", ref: null as any, props: { children: text }, _owner: null as any };
            return { ...el, props: { ...el.props, children: [p].concat(children || []) } };
        }
        if (children === undefined) return el;
        const mapped = Array.isArray(children) ? children.map(c => prependToDescription(c, text)) : prependToDescription(children, text);
        return { ...el, props: { ...el.props, children: mapped } };
    }

    // pxt's pairing dialog: step 1 ("connect to your computer") is skipped, its text is the
    // first line of step 2 instead
    function wrapPairDialog(pairDialog: typeof pxt.commands.webUsbPairDialogAsync): typeof pxt.commands.webUsbPairDialogAsync {
        return (pairAsync, confirmAsync, implicitlyCalled) => {
            const board = pxt.appTarget.appTheme.boardName || lf("device");
            const confirm = (options: any): Promise<any> => {
                if (options && options.header == lf("1. Connect your {0} to your computer", board) && options.buttons && options.buttons.length) {
                    options.buttons[0].onclick();
                    return Promise.resolve();
                }
                if (options && options.header == lf("2. Pair your {0} to your browser", board) && options.jsxd) {
                    const jsxd = options.jsxd;
                    options = { ...options, jsxd: () => prependToDescription(jsxd(), localized(CONNECT_USB_STEP)) };
                }
                return confirmAsync(options);
            };
            return pairDialog(pairAsync, confirm, implicitlyCalled);
        };
    }

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading arcade target extensions...')

        const res: pxt.editor.ExtensionResult = {
            blocklyPatch: patchBlocks
        };

        // Calliope edition: the hardware is always the Calliope mini V3 (nRF52833, "n3").
        // Pinning the variant up front means the "Choose Hardware" dialog never opens and
        // every download compiles to the n3 .hex instead of a PNG/UF2.
        pxt.setHwVariant("n3", "Calliope mini");

        // WebUSB flashing over DAPLink CMSIS-DAP v2 (Calliope mini V3, VID 0x0D28). The
        // pxt-core default filter only matches HF2 consoles (class 0xFF / subclass 42), so
        // we replace it with the DAPLink interfaces and use the DAPLink packet-io wrapper
        // vendored from pxt-microbit (editor/flash.ts).
        if (pxt.usb && pxt.usb.setFilters) {
            pxt.usb.setFilters([
                { vendorId: 0x0D28, productId: 0x0204, classCode: 0xff, subclassCode: 0x03 },
                { vendorId: 0x0D28, productId: 0x0204, classCode: 0xff, subclassCode: 0x00 }
            ]);
            res.mkPacketIOWrapper = pxt.editor.flash.mkDAPLinkPacketIOWrapper;
        }

        // Calliope edition: shared projects point to the server the editor runs on and are
        // stored by our share server (server/server.js, see CLOUD_API_ROOT). pxt builds the
        // link as shareUrl + "/" + id, so it becomes <editor>#pub:/<id>; it works on any
        // static host and pxt.Cloud.parseScriptId (kiosk, multiplayer) still understands it.
        // homeUrl is used for links and the URL printed on shared screenshots.
        // pxt rebuilds pxt.appTarget from a saved copy (e.g. when the hardware variant is
        // set), so apply this to every new appTarget.
        const editorUrl = location.origin + location.pathname.replace(/[^/]*$/, "");
        const apiRoot = cloudApiRoot(editorUrl);
        const patchShareUrls = (t: pxt.TargetBundle) => {
            if (!t || !t.appTheme) return;
            t.appTheme.homeUrl = editorUrl;
            t.appTheme.shareUrl = editorUrl + "#pub:";
            // pxt copies appTarget.cloud.apiRoot to pxt.Cloud.apiRoot when the editor starts
            if (t.cloud) t.cloud.apiRoot = apiRoot;
        };
        pxt.Cloud.apiRoot = apiRoot;

        // Calliope edition: the editor tour comes in all languages of this edition from
        // editor/tour.ts (the MakeCode cloud has it only partly translated, the static
        // version not at all)
        const markdownAsync = pxt.Cloud.markdownAsync;
        (pxt.Cloud as any).markdownAsync = (docid: string, locale?: string, ...rest: any[]) => {
            if (docid && docid.replace(/^\//, "") == pxt.editor.tour.DOC_ID.slice(1)) {
                const md = pxt.editor.tour.markdown(locale || pxt.Util.userLanguage());
                if (md) return Promise.resolve(md);
            }
            return (markdownAsync as any)(docid, locale, ...rest);
        };

        // pxt collects the C++ files of all packages here (also for the simulator), so a
        // blocked extension stops compiling; pxt does not show that error, so we do (once)
        const getExtensionInfo = pxt.cpp.getExtensionInfo;
        let shownCppError = "";
        (pxt.cpp as any).getExtensionInfo = (mainPkg: pxt.MainPackage) => {
            try {
                checkCppExtensions(mainPkg);
                shownCppError = "";
            } catch (e) {
                if (e.message != shownCppError) {
                    shownCppError = e.message;
                    opts.showNotification(e.message);
                }
                throw e;
            }
            return getExtensionInfo(mainPkg);
        };

        // Calliope edition: "Connect Calliope mini" instead of "Connect device", pairing
        // dialog headers without step numbers
        const localize = pxt.Util._localize;
        (pxt.Util as any)._localize = (s: string) => {
            if (CONNECT_MENU_STRINGS.indexOf(s) >= 0) return localized(CONNECT_MENU_LABEL);
            if (s == PAIR_FAILED_STRING) return localized(PAIR_FAILED_TEXT);
            const text = localize(s);
            return PAIR_DIALOG_HEADERS.indexOf(s) >= 0 ? text.replace(/^\s*\d+\s*[.)、．]\s*/, "") : text;
        };
        // pxt sets its pairing dialog after loading the extension: wrap whatever is set
        let pairDialog = pxt.commands.webUsbPairDialogAsync && wrapPairDialog(pxt.commands.webUsbPairDialogAsync);
        Object.defineProperty(pxt.commands, "webUsbPairDialogAsync", {
            configurable: true,
            get: () => pairDialog,
            set: (f: typeof pxt.commands.webUsbPairDialogAsync) => { pairDialog = f && wrapPairDialog(f); }
        });
        let appTarget = pxt.appTarget;
        patchShareUrls(appTarget);
        Object.defineProperty(pxt, "appTarget", {
            configurable: true,
            enumerable: true,
            get: () => appTarget,
            set: (t: pxt.TargetBundle) => {
                appTarget = t;
                patchShareUrls(t);
            }
        });
        // ... and open such links: "#pub:/<id>" -> "#pub:<id>"
        if (/^#pub:\//.test(location.hash))
            history.replaceState(null, "", location.href.replace("#pub:/", "#pub:"));

        // Calliope edition: the Calliope logo top left leads to the home screen, like
        // "MakeCode Arcade" next to it. pxt renders the organization logo as a plain image,
        // so we forward the click to the brand button (only present outside the home screen).
        document.addEventListener("click", ev => {
            const target = ev.target as HTMLElement;
            if (!target || !target.closest || !target.closest(".ui.item.logo.organization")) return;
            const brand = document.querySelector(".ui.item.logo.brand .menu-button") as HTMLElement;
            if (brand) brand.click();
        });

        // Calliope edition: pxt looks up the list for "show simulator keyboard shortcuts"
        // by appTheme.boardName, which is "Calliope mini" here, so its panel stays empty.
        // Fill it with the list pxt has for "arcade" (same strings, so pxt's translations
        // apply; same keys as the keymap in sim/simulator.ts).
        const keymapLists = document.getElementsByClassName("keymap");
        // Calliope edition: pxt writes the step counter of tours as "1 of 6" with a fixed
        // English "of" (and "7 of 6" on the closing step); show "1 / 6" instead and nothing
        // on the closing step. React owns the text, so theme/style.less hides it and shows
        // data-calliope-steps instead.
        const tourCounters = document.getElementsByClassName("teaching-bubble-steps");
        // Calliope edition: "Learn more" on extension cards opens the page in the editor
        // language (editor/localizeddocs.ts)
        const extensionCards = document.getElementsByClassName("common-extension-card");
        new MutationObserver(() => {
            for (let i = 0; i < extensionCards.length; ++i) {
                const links = extensionCards[i].querySelectorAll("a[href^='/reference/']");
                for (let j = 0; j < links.length; ++j) {
                    const href = links[j].getAttribute("href");
                    const localized = pxt.editor.localizedDocs.localize(href);
                    if (localized != href) links[j].setAttribute("href", localized);
                }
            }
            for (let i = 0; i < keymapLists.length; ++i)
                fillKeymap(keymapLists[i] as HTMLElement);
            for (let i = 0; i < tourCounters.length; ++i) {
                const counter = tourCounters[i] as HTMLElement;
                const m = /^(\d+) of (\d+)$/.exec(counter.textContent.trim());
                const steps = !m ? counter.textContent : +m[1] > +m[2] ? "" : m[1] + " / " + m[2];
                if (counter.getAttribute("data-calliope-steps") != steps)
                    counter.setAttribute("data-calliope-steps", steps);
            }
        }).observe(document.body, { childList: true, subtree: true, characterData: true });

        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }

    function replaceToggle(valueName: string, shadowType: string, fieldName: string, fieldValue: string) {
        const newValue = document.createElement("value");
        newValue.setAttribute("name", valueName);

        const shadow = document.createElement("shadow");
        shadow.setAttribute("type", shadowType);

        const field = document.createElement("field");
        field.setAttribute("name", fieldName);
        field.textContent = fieldValue;

        shadow.appendChild(field);
        newValue.appendChild(shadow);
        return newValue;
    }
}