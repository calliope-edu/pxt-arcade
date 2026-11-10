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
    // pxt's dialog of an added extension (click on its card): these texts have no
    // translation in pxt yet; pxt's own translation wins where there is one
    const EXTENSION_DIALOG: pxt.Map<pxt.Map<string>> = {
        "{0} extension": {
            "ar": "إضافة {0}",
            "de": "Erweiterung {0}",
            "es": "Extensión {0}",
            "fr": "Extension {0}",
            "ga": "Síneadh {0}",
            "it": "Estensione {0}",
            "ja": "{0} 拡張機能",
            "ko": "{0} 확장 기능",
            "nl": "Extensie {0}",
            "ru": "Расширение {0}",
            "zh-CN": "{0} 扩展",
            "zh-TW": "{0} 擴充功能"
        },
        "Up to date": {
            "ar": "محدّثة",
            "de": "Aktuell",
            "es": "Actualizada",
            "fr": "À jour",
            "ga": "Cothrom le dáta",
            "it": "Aggiornata",
            "ja": "最新です",
            "ko": "최신 상태",
            "nl": "Actueel",
            "ru": "Актуально",
            "zh-CN": "已是最新",
            "zh-TW": "已是最新"
        },
        "Update extension": {
            "ar": "تحديث الإضافة",
            "de": "Erweiterung aktualisieren",
            "es": "Actualizar extensión",
            "fr": "Mettre à jour l'extension",
            "ga": "Nuashonraigh an síneadh",
            "it": "Aggiorna estensione",
            "ja": "拡張機能を更新",
            "ko": "확장 기능 업데이트",
            "nl": "Extensie bijwerken",
            "ru": "Обновить расширение",
            "zh-CN": "更新扩展",
            "zh-TW": "更新擴充功能"
        },
        "This extension is up to date.": {
            "ar": "هذه الإضافة محدّثة.",
            "de": "Diese Erweiterung ist aktuell.",
            "es": "Esta extensión está actualizada.",
            "fr": "Cette extension est à jour.",
            "ga": "Tá an síneadh seo cothrom le dáta.",
            "it": "Questa estensione è aggiornata.",
            "ja": "この拡張機能は最新です。",
            "ko": "이 확장 기능은 최신 상태입니다.",
            "nl": "Deze extensie is actueel.",
            "ru": "Это расширение актуально.",
            "zh-CN": "此扩展已是最新版本。",
            "zh-TW": "此擴充功能已是最新版本。"
        },
        "This extension is up to date. You can remove it if you no longer need it.": {
            "ar": "هذه الإضافة محدّثة. يمكنك إزالتها إذا لم تعد بحاجة إليها.",
            "de": "Diese Erweiterung ist aktuell. Du kannst sie entfernen, wenn du sie nicht mehr brauchst.",
            "es": "Esta extensión está actualizada. Puedes quitarla si ya no la necesitas.",
            "fr": "Cette extension est à jour. Tu peux la supprimer si tu n'en as plus besoin.",
            "ga": "Tá an síneadh seo cothrom le dáta. Is féidir leat é a bhaint mura bhfuil sé de dhíth ort a thuilleadh.",
            "it": "Questa estensione è aggiornata. Puoi rimuoverla se non ti serve più.",
            "ja": "この拡張機能は最新です。不要になったら削除できます。",
            "ko": "이 확장 기능은 최신 상태입니다. 더 이상 필요하지 않으면 제거할 수 있습니다.",
            "nl": "Deze extensie is actueel. Je kunt hem verwijderen als je hem niet meer nodig hebt.",
            "ru": "Это расширение актуально. Его можно удалить, если оно больше не нужно.",
            "zh-CN": "此扩展已是最新版本。如果不再需要，可以将其移除。",
            "zh-TW": "此擴充功能已是最新版本。如果不再需要，可以將其移除。"
        },
        "A newer version ({0}) is available.": {
            "ar": "يتوفر إصدار أحدث ({0}).",
            "de": "Eine neuere Version ({0}) ist verfügbar.",
            "es": "Hay una versión más reciente ({0}) disponible.",
            "fr": "Une version plus récente ({0}) est disponible.",
            "ga": "Tá leagan níos nuaí ({0}) ar fáil.",
            "it": "È disponibile una versione più recente ({0}).",
            "ja": "新しいバージョン（{0}）があります。",
            "ko": "새 버전({0})을 사용할 수 있습니다.",
            "nl": "Er is een nieuwere versie ({0}) beschikbaar.",
            "ru": "Доступна более новая версия ({0}).",
            "zh-CN": "有更新的版本（{0}）可用。",
            "zh-TW": "有較新的版本（{0}）可用。"
        },
        "Choose whether to update or remove this extension.": {
            "ar": "اختر ما إذا كنت تريد تحديث هذه الإضافة أو إزالتها.",
            "de": "Entscheide, ob du diese Erweiterung aktualisieren oder entfernen möchtest.",
            "es": "Elige si quieres actualizar o quitar esta extensión.",
            "fr": "Choisis si tu veux mettre à jour ou supprimer cette extension.",
            "ga": "Roghnaigh cé acu a nuashonrófar nó a bhainfear an síneadh seo.",
            "it": "Scegli se aggiornare o rimuovere questa estensione.",
            "ja": "この拡張機能を更新するか削除するかを選んでください。",
            "ko": "이 확장 기능을 업데이트할지 제거할지 선택하세요.",
            "nl": "Kies of je deze extensie wilt bijwerken of verwijderen.",
            "ru": "Выбери, обновить или удалить это расширение.",
            "zh-CN": "请选择更新还是移除此扩展。",
            "zh-TW": "請選擇要更新還是移除此擴充功能。"
        },
        "Update {0} to {1}": {
            "ar": "تحديث {0} إلى {1}",
            "de": "{0} auf {1} aktualisieren",
            "es": "Actualizar {0} a {1}",
            "fr": "Mettre à jour {0} vers {1}",
            "ga": "Nuashonraigh {0} go {1}",
            "it": "Aggiorna {0} a {1}",
            "ja": "{0} を {1} に更新",
            "ko": "{0}을(를) {1}(으)로 업데이트",
            "nl": "{0} bijwerken naar {1}",
            "ru": "Обновить {0} до {1}",
            "zh-CN": "将 {0} 更新到 {1}",
            "zh-TW": "將 {0} 更新為 {1}"
        },
        "Update {0} extension to {1}": {
            "ar": "تحديث الإضافة {0} إلى {1}",
            "de": "Erweiterung {0} auf {1} aktualisieren",
            "es": "Actualizar la extensión {0} a {1}",
            "fr": "Mettre à jour l'extension {0} vers {1}",
            "ga": "Nuashonraigh an síneadh {0} go {1}",
            "it": "Aggiorna l'estensione {0} a {1}",
            "ja": "拡張機能 {0} を {1} に更新",
            "ko": "{0} 확장 기능을 {1}(으)로 업데이트",
            "nl": "Extensie {0} bijwerken naar {1}",
            "ru": "Обновить расширение {0} до {1}",
            "zh-CN": "将扩展 {0} 更新到 {1}",
            "zh-TW": "將擴充功能 {0} 更新為 {1}"
        },
        "Remove extension": {
            "ar": "إزالة الإضافة",
            "de": "Erweiterung entfernen",
            "es": "Quitar extensión",
            "fr": "Supprimer l'extension",
            "ga": "Bain an síneadh",
            "it": "Rimuovi estensione",
            "ja": "拡張機能を削除",
            "ko": "확장 기능 제거",
            "nl": "Extensie verwijderen",
            "ru": "Удалить расширение",
            "zh-CN": "移除扩展",
            "zh-TW": "移除擴充功能"
        },
        "Remove extension unavailable. {0}": {
            "ar": "لا يمكن إزالة الإضافة. {0}",
            "de": "Entfernen nicht möglich. {0}",
            "es": "No se puede quitar la extensión. {0}",
            "fr": "Impossible de supprimer l'extension. {0}",
            "ga": "Ní féidir an síneadh a bhaint. {0}",
            "it": "Impossibile rimuovere l'estensione. {0}",
            "ja": "拡張機能を削除できません。{0}",
            "ko": "확장 기능을 제거할 수 없습니다. {0}",
            "nl": "Verwijderen niet mogelijk. {0}",
            "ru": "Удалить расширение нельзя. {0}",
            "zh-CN": "无法移除扩展。{0}",
            "zh-TW": "無法移除擴充功能。{0}"
        },
        "Removing extension...": {
            "ar": "جارٍ إزالة الإضافة...",
            "de": "Erweiterung wird entfernt...",
            "es": "Quitando la extensión...",
            "fr": "Suppression de l'extension...",
            "ga": "Ag baint an tsínte...",
            "it": "Rimozione dell'estensione...",
            "ja": "拡張機能を削除しています...",
            "ko": "확장 기능을 제거하는 중...",
            "nl": "Extensie wordt verwijderd...",
            "ru": "Удаление расширения...",
            "zh-CN": "正在移除扩展...",
            "zh-TW": "正在移除擴充功能..."
        },
        "Updating extension...": {
            "ar": "جارٍ تحديث الإضافة...",
            "de": "Erweiterung wird aktualisiert...",
            "es": "Actualizando la extensión...",
            "fr": "Mise à jour de l'extension...",
            "ga": "Ag nuashonrú an tsínte...",
            "it": "Aggiornamento dell'estensione...",
            "ja": "拡張機能を更新しています...",
            "ko": "확장 기능을 업데이트하는 중...",
            "nl": "Extensie wordt bijgewerkt...",
            "ru": "Обновление расширения...",
            "zh-CN": "正在更新扩展...",
            "zh-TW": "正在更新擴充功能..."
        },
        "This extension cannot be updated or removed because blocks or code from it are used in your project. Remove them and try again.": {
            "ar": "لا يمكن تحديث هذه الإضافة أو إزالتها لأن مشروعك يستخدم كتلًا أو شيفرة منها. أزلها وحاول مرة أخرى.",
            "de": "Diese Erweiterung kann nicht aktualisiert oder entfernt werden, weil dein Projekt Blöcke oder Code daraus verwendet. Entferne sie und versuche es noch einmal.",
            "es": "Esta extensión no se puede actualizar ni quitar porque tu proyecto usa bloques o código de ella. Quítalos e inténtalo de nuevo.",
            "fr": "Cette extension ne peut pas être mise à jour ni supprimée, car ton projet utilise des blocs ou du code qui en proviennent. Supprime-les et réessaie.",
            "ga": "Ní féidir an síneadh seo a nuashonrú ná a bhaint mar go n-úsáideann do thionscadal bloic nó cód uaidh. Bain iad agus bain triail eile as.",
            "it": "Questa estensione non può essere aggiornata o rimossa perché il tuo progetto usa blocchi o codice che ne fanno parte. Rimuovili e riprova.",
            "ja": "プロジェクトでこの拡張機能のブロックやコードを使っているため、更新や削除ができません。それらを削除してから、もう一度試してください。",
            "ko": "프로젝트에서 이 확장 기능의 블록이나 코드를 사용하고 있어 업데이트하거나 제거할 수 없습니다. 그것들을 제거한 뒤 다시 시도하세요.",
            "nl": "Deze extensie kan niet worden bijgewerkt of verwijderd, omdat je project blokken of code ervan gebruikt. Verwijder die en probeer het opnieuw.",
            "ru": "Это расширение нельзя обновить или удалить, потому что в проекте используются его блоки или код. Удали их и попробуй снова.",
            "zh-CN": "无法更新或移除此扩展，因为你的项目正在使用其中的积木或代码。请先删除它们，然后重试。",
            "zh-TW": "無法更新或移除此擴充功能，因為你的專案正在使用其中的積木或程式碼。請先刪除它們，然後再試一次。"
        },
        "This extension cannot be updated or removed because {0} also depends on it. Remove {0} first.": {
            "ar": "لا يمكن تحديث هذه الإضافة أو إزالتها لأن {0} يعتمد عليها أيضًا. أزل {0} أولًا.",
            "de": "Diese Erweiterung kann nicht aktualisiert oder entfernt werden, weil {0} sie ebenfalls braucht. Entferne zuerst {0}.",
            "es": "Esta extensión no se puede actualizar ni quitar porque {0} también depende de ella. Quita primero {0}.",
            "fr": "Cette extension ne peut pas être mise à jour ni supprimée, car {0} en dépend aussi. Supprime d'abord {0}.",
            "ga": "Ní féidir an síneadh seo a nuashonrú ná a bhaint mar go bhfuil {0} ag brath air freisin. Bain {0} ar dtús.",
            "it": "Questa estensione non può essere aggiornata o rimossa perché anche {0} ne ha bisogno. Rimuovi prima {0}.",
            "ja": "{0} もこの拡張機能を使っているため、更新や削除ができません。先に {0} を削除してください。",
            "ko": "{0}도 이 확장 기능을 사용하므로 업데이트하거나 제거할 수 없습니다. 먼저 {0}을(를) 제거하세요.",
            "nl": "Deze extensie kan niet worden bijgewerkt of verwijderd, omdat {0} ervan afhankelijk is. Verwijder eerst {0}.",
            "ru": "Это расширение нельзя обновить или удалить, потому что от него зависит {0}. Сначала удали {0}.",
            "zh-CN": "无法更新或移除此扩展，因为 {0} 也依赖它。请先移除 {0}。",
            "zh-TW": "無法更新或移除此擴充功能，因為 {0} 也依賴它。請先移除 {0}。"
        },
        "This extension cannot be updated or removed because these extensions also depend on it: {0}. Remove them first.": {
            "ar": "لا يمكن تحديث هذه الإضافة أو إزالتها لأن هذه الإضافات تعتمد عليها أيضًا: {0}. أزلها أولًا.",
            "de": "Diese Erweiterung kann nicht aktualisiert oder entfernt werden, weil diese Erweiterungen sie ebenfalls brauchen: {0}. Entferne sie zuerst.",
            "es": "Esta extensión no se puede actualizar ni quitar porque estas extensiones también dependen de ella: {0}. Quítalas primero.",
            "fr": "Cette extension ne peut pas être mise à jour ni supprimée, car ces extensions en dépendent aussi : {0}. Supprime-les d'abord.",
            "ga": "Ní féidir an síneadh seo a nuashonrú ná a bhaint mar go bhfuil na síntí seo ag brath air freisin: {0}. Bain iad ar dtús.",
            "it": "Questa estensione non può essere aggiornata o rimossa perché anche queste estensioni ne hanno bisogno: {0}. Rimuovile prima.",
            "ja": "次の拡張機能もこの拡張機能を使っているため、更新や削除ができません：{0}。先にそれらを削除してください。",
            "ko": "다음 확장 기능도 이 확장 기능을 사용하므로 업데이트하거나 제거할 수 없습니다: {0}. 먼저 그것들을 제거하세요.",
            "nl": "Deze extensie kan niet worden bijgewerkt of verwijderd, omdat deze extensies ervan afhankelijk zijn: {0}. Verwijder die eerst.",
            "ru": "Это расширение нельзя обновить или удалить, потому что от него зависят эти расширения: {0}. Сначала удали их.",
            "zh-CN": "无法更新或移除此扩展，因为以下扩展也依赖它：{0}。请先移除它们。",
            "zh-TW": "無法更新或移除此擴充功能，因為下列擴充功能也依賴它：{0}。請先移除它們。"
        }
    };
    // headers of the pairing dialogs, shown without their step numbers
    const PAIR_DIALOG_HEADERS = ["1. Connect your {0} to your computer", "2. Pair your {0} to your browser"];

    // extension that builds without the SoftDevice, the DFU bootloader and the Bluetooth
    // pairing mode (DEVICE_BLE 0, libs/usb-only), added when a game is too big for them
    const USB_ONLY_PKG = "usb-only";
    const USB_ONLY_NOTICE: pxt.Map<string> = {
        "en": "This game is too big to be transferred over Bluetooth (Calliope mini app). It was built so that it can only be transferred with the USB cable.",
        "ar": "هذه اللعبة كبيرة جدًا بحيث لا يمكن نقلها عبر البلوتوث (تطبيق Calliope mini). لذلك تم إنشاؤها بحيث لا يمكن نقلها إلا باستخدام كابل USB.",
        "de": "Dieses Spiel ist zu groß, um es per Bluetooth (Calliope-mini-App) zu übertragen. Es wurde deshalb so erstellt, dass es nur per USB-Kabel übertragen werden kann.",
        "es": "Este juego es demasiado grande para transferirlo por Bluetooth (app de Calliope mini). Por eso se ha creado de forma que solo se puede transferir con el cable USB.",
        "fr": "Ce jeu est trop grand pour être transféré par Bluetooth (app Calliope mini). Il a donc été créé de façon à ne pouvoir être transféré qu'avec le câble USB.",
        "ga": "Tá an cluiche seo rómhór le haistriú thar Bluetooth (aip Calliope mini). Mar sin cruthaíodh é ionas nach féidir é a aistriú ach leis an gcábla USB.",
        "it": "Questo gioco è troppo grande per essere trasferito via Bluetooth (app Calliope mini). Per questo è stato creato in modo da poter essere trasferito solo con il cavo USB.",
        "ja": "このゲームは大きすぎるため、Bluetooth（Calliope mini アプリ）では転送できません。そのため、USB ケーブルでのみ転送できるように作成しました。",
        "ko": "이 게임은 너무 커서 Bluetooth(Calliope mini 앱)로 전송할 수 없습니다. 그래서 USB 케이블로만 전송할 수 있도록 만들었습니다.",
        "nl": "Dit spel is te groot om via Bluetooth (Calliope mini-app) over te zetten. Het is daarom zo gemaakt dat het alleen met de USB-kabel kan worden overgezet.",
        "ru": "Эта игра слишком большая для передачи по Bluetooth (приложение Calliope mini). Поэтому она собрана так, что её можно передать только по USB-кабелю.",
        "zh-CN": "这个游戏太大，无法通过蓝牙（Calliope mini 应用）传输。因此它已被构建为只能用 USB 线传输。",
        "zh-TW": "這個遊戲太大，無法透過藍牙（Calliope mini 應用程式）傳輸。因此它已被建立為只能用 USB 線傳輸。"
    };
    // card of the extension in the extensions dialog (displayName, description of its pxt.json)
    const USB_ONLY_NAME: pxt.Map<string> = {
        "en": "Without Bluetooth (USB only)",
        "ar": "بدون بلوتوث (USB فقط)",
        "de": "Ohne Bluetooth (nur USB)",
        "es": "Sin Bluetooth (solo USB)",
        "fr": "Sans Bluetooth (USB uniquement)",
        "ga": "Gan Bluetooth (USB amháin)",
        "it": "Senza Bluetooth (solo USB)",
        "ja": "Bluetooth なし（USB のみ）",
        "ko": "Bluetooth 없음 (USB 전용)",
        "nl": "Zonder Bluetooth (alleen USB)",
        "ru": "Без Bluetooth (только USB)",
        "zh-CN": "不使用蓝牙（仅 USB）",
        "zh-TW": "不使用藍牙（僅 USB）"
    };
    const USB_ONLY_DESCRIPTION: pxt.Map<string> = {
        "en": "For very big games: about 140 KB more space, but the game can only be transferred with the USB cable, not over Bluetooth (Calliope mini app).",
        "ar": "للألعاب الكبيرة جدًا: مساحة إضافية تبلغ نحو 140 كيلوبايت، لكن لا يمكن نقل اللعبة إلا بكابل USB، وليس عبر البلوتوث (تطبيق Calliope mini).",
        "de": "Für sehr große Spiele: etwa 140 KB mehr Platz, aber das Spiel kann nur per USB-Kabel übertragen werden, nicht per Bluetooth (Calliope-mini-App).",
        "es": "Para juegos muy grandes: unos 140 KB más de espacio, pero el juego solo se puede transferir con el cable USB, no por Bluetooth (app de Calliope mini).",
        "fr": "Pour les très grands jeux : environ 140 Ko de place en plus, mais le jeu ne peut être transféré qu'avec le câble USB, pas par Bluetooth (app Calliope mini).",
        "ga": "Do chluichí an-mhóra: thart ar 140 KB níos mó spáis, ach ní féidir an cluiche a aistriú ach leis an gcábla USB, ní thar Bluetooth (aip Calliope mini).",
        "it": "Per giochi molto grandi: circa 140 KB di spazio in più, ma il gioco si può trasferire solo con il cavo USB, non via Bluetooth (app Calliope mini).",
        "ja": "とても大きなゲーム向け：約 140 KB 多く使えますが、ゲームは USB ケーブルでのみ転送でき、Bluetooth（Calliope mini アプリ）では転送できません。",
        "ko": "아주 큰 게임용: 약 140KB의 공간이 더 생기지만, 게임은 Bluetooth(Calliope mini 앱)가 아닌 USB 케이블로만 전송할 수 있습니다.",
        "nl": "Voor heel grote spellen: ongeveer 140 KB meer ruimte, maar het spel kan alleen met de USB-kabel worden overgezet, niet via Bluetooth (Calliope mini-app).",
        "ru": "Для очень больших игр: примерно на 140 КБ больше места, но игру можно передать только по USB-кабелю, а не по Bluetooth (приложение Calliope mini).",
        "zh-CN": "适用于非常大的游戏：多出约 140 KB 空间，但游戏只能用 USB 线传输，不能通过蓝牙（Calliope mini 应用）传输。",
        "zh-TW": "適用於非常大的遊戲：多出約 140 KB 空間，但遊戲只能用 USB 線傳輸，不能透過藍牙（Calliope mini 應用程式）傳輸。"
    };

    // cards of the other Calliope extensions (description of their pxt.json, German there)
    const CALLIOPE_MINI_DESCRIPTION: pxt.Map<string> = {
        "en": "Pins of the Calliope mini 3 (P0–P3, C4–C18)",
        "ar": "منافذ Calliope mini 3 (P0–P3، C4–C18)",
        "de": "Pins des Calliope mini 3 (P0–P3, C4–C18)",
        "es": "Pines del Calliope mini 3 (P0–P3, C4–C18)",
        "fr": "Broches du Calliope mini 3 (P0–P3, C4–C18)",
        "ga": "Bioráin an Calliope mini 3 (P0–P3, C4–C18)",
        "it": "Pin del Calliope mini 3 (P0–P3, C4–C18)",
        "ja": "Calliope mini 3 のピン（P0〜P3、C4〜C18）",
        "ko": "Calliope mini 3의 핀 (P0–P3, C4–C18)",
        "nl": "Pinnen van de Calliope mini 3 (P0–P3, C4–C18)",
        "ru": "Контакты Calliope mini 3 (P0–P3, C4–C18)",
        "zh-CN": "Calliope mini 3 的引脚（P0–P3、C4–C18）",
        "zh-TW": "Calliope mini 3 的腳位（P0–P3、C4–C18）"
    };
    const MULTIPLAYER_DESCRIPTION: pxt.Map<string> = {
        "en": "Multiplayer mode: connect two Calliope mini with a Jacdac cable",
        "ar": "وضع اللعب الجماعي: وصّل جهازي Calliope mini بكابل Jacdac",
        "de": "Mehrspielermodus: zwei Calliope mini per Jacdac-Kabel verbinden",
        "es": "Modo multijugador: conecta dos Calliope mini con un cable Jacdac",
        "fr": "Mode multijoueur : relie deux Calliope mini avec un câble Jacdac",
        "ga": "Mód ilimreora: ceangail dhá Calliope mini le cábla Jacdac",
        "it": "Modalità multigiocatore: collega due Calliope mini con un cavo Jacdac",
        "ja": "マルチプレイヤーモード：2台の Calliope mini を Jacdac ケーブルでつなぐ",
        "ko": "멀티플레이어 모드: Calliope mini 두 대를 Jacdac 케이블로 연결",
        "nl": "Multiplayermodus: verbind twee Calliope mini's met een Jacdac-kabel",
        "ru": "Режим для двух игроков: соедини два Calliope mini кабелем Jacdac",
        "zh-CN": "多人模式：用 Jacdac 线连接两个 Calliope mini",
        "zh-TW": "多人模式：用 Jacdac 線連接兩個 Calliope mini"
    };
    // package -> texts of its card
    const EXTENSION_CARDS: pxt.Map<{ displayName?: pxt.Map<string>, description: pxt.Map<string> }> = {
        [USB_ONLY_PKG]: { displayName: USB_ONLY_NAME, description: USB_ONLY_DESCRIPTION },
        "calliope-mini": { description: CALLIOPE_MINI_DESCRIPTION },
        "jacdac-multiplayer": { description: MULTIPLAYER_DESCRIPTION }
    };

    // pxt.json of a bundled package is kept as text; the extensions dialog reads its
    // displayName and description from there
    function localizeExtensionCards(t: pxt.TargetBundle) {
        for (const pkg of Object.keys(EXTENSION_CARDS)) {
            const files = t && t.bundledpkgs && t.bundledpkgs[pkg];
            if (!files || !files[pxt.CONFIG_NAME]) continue;
            const texts = EXTENSION_CARDS[pkg];
            const config = JSON.parse(files[pxt.CONFIG_NAME]);
            if (texts.displayName) config.displayName = localized(texts.displayName);
            config.description = localized(texts.description);
            files[pxt.CONFIG_NAME] = JSON.stringify(config, null, 4);
        }
    }
    // pxt's message for compiler error 9283; it comes from the compile worker, where
    // pxt.Util._localize is not ours, so the shown text is replaced (see MutationObserver)
    const PROGRAM_TOO_BIG_RX = /program too big by (\d+) bytes!/;
    const PROGRAM_TOO_BIG: pxt.Map<string> = {
        "en": "The program is {0} bytes too big!",
        "ar": "البرنامج أكبر من اللازم بمقدار {0} بايت!",
        "de": "Das Programm ist {0} Bytes zu groß!",
        "es": "¡El programa es {0} bytes demasiado grande!",
        "fr": "Le programme est trop grand de {0} octets !",
        "ga": "Tá an clár {0} beart rómhór!",
        "it": "Il programma è troppo grande di {0} byte!",
        "ja": "プログラムが {0} バイト大きすぎます！",
        "ko": "프로그램이 {0}바이트 너무 큽니다!",
        "nl": "Het programma is {0} bytes te groot!",
        "ru": "Программа слишком большая на {0} байт!",
        "zh-CN": "程序超出 {0} 字节！",
        "zh-TW": "程式超出 {0} 位元組！"
    };

    function localizeProgramTooBig(node: Node) {
        if (node.nodeType == Node.TEXT_NODE) {
            const m = PROGRAM_TOO_BIG_RX.exec(node.nodeValue || "");
            if (m) node.nodeValue = node.nodeValue.replace(m[0], localized(PROGRAM_TOO_BIG).replace("{0}", m[1]));
        } else if (node.nodeType == Node.ELEMENT_NODE && PROGRAM_TOO_BIG_RX.test(node.textContent || "")) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            for (let t = walker.nextNode(); t; t = walker.nextNode())
                localizeProgramTooBig(t);
        }
    }

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

        // Calliope edition: embedUrl is arcade.calliope.cc (embed codes of shared projects), so
        // pxt no longer takes project links of arcade.makecode.com (gallery cards of Game Jam,
        // Community, Hall of Fame) as project ids; accept them too (same share ids)
        const parseScriptId = pxt.Cloud.parseScriptId;
        (pxt.Cloud as any).parseScriptId = (uri: string) =>
            parseScriptId(uri) || (typeof uri == "string" ? parseScriptId(uri.trim().replace(/^(https?:\/\/)?arcade\.makecode\.com\//i, "makecode.com/")) : undefined);

        // Calliope edition: skillmap cards of the start page ("link" cards, /skillmap#...)
        // open in the same tab instead of a new window, like the tutorials
        const windowOpen = window.open;
        (window as any).open = function (url?: string | URL, target?: string, ...rest: any[]) {
            if (typeof url == "string" && /^\/skillmap(\.html)?([#?]|$)/.test(url) && target == "_blank") {
                window.location.assign(url);
                return window;
            }
            return windowOpen.call(window, url, target, ...rest);
        };

        // Calliope edition: block texts of bundled packages come from the MakeCode cloud
        // (live translations), the package's own _locales/<lang> only when the cloud has
        // none; the edition's translations (e.g. libs/multiplayer/_locales/de) are added
        // over the cloud's, which are often incomplete
        const liveTranslationsAsync = pxt.Util.downloadLiveTranslationsAsync;
        (pxt.Util as any).downloadLiveTranslationsAsync = (lang: string, filename: string, ...rest: any[]) =>
            (liveTranslationsAsync as any)(lang, filename, ...rest).then((strings: pxt.Map<string>) => {
                const m = /^[^/]+\/(.+)-strings\.json$/.exec(filename || "");
                const pkg = m && pxt.appTarget.bundledpkgs && pxt.appTarget.bundledpkgs[m[1].replace(/-jsdoc$/, "")];
                const own = pkg && (pkg[`_locales/${lang}/${m[1]}-strings.json`] || pkg[`_locales/${lang.split("-")[0]}/${m[1]}-strings.json`]);
                if (!own) return strings;
                try {
                    return Object.assign({}, strings || {}, JSON.parse(own));
                } catch (e) {
                    return strings;
                }
            });

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
            if (text === s && EXTENSION_DIALOG[s]) return localized(Object.assign({ en: s }, EXTENSION_DIALOG[s]));
            return PAIR_DIALOG_HEADERS.indexOf(s) >= 0 ? text.replace(/^\s*\d+\s*[.)、．]\s*/, "") : text;
        };
        // pxt sets its pairing dialog after loading the extension: wrap whatever is set
        let pairDialog = pxt.commands.webUsbPairDialogAsync && wrapPairDialog(pxt.commands.webUsbPairDialogAsync);
        Object.defineProperty(pxt.commands, "webUsbPairDialogAsync", {
            configurable: true,
            get: () => pairDialog,
            set: (f: typeof pxt.commands.webUsbPairDialogAsync) => { pairDialog = f && wrapPairDialog(f); }
        });
        // Calliope edition: a game that does not fit next to the SoftDevice, the DFU bootloader
        // and the pairing mode is built without them (extension "usb-only"): full flash, USB
        // transfer only. pxt calls this hook when the compiler reports "program too big"
        // (9283) and recompiles if asked to. No question: the editor cannot know whether the
        // game goes over USB anyway, so the download just works and a notice explains it.
        pxt.commands.showProgramTooLargeErrorAsync = async () => {
            const projectView = (opts as any).projectView;
            const epkg = projectView && projectView.editorFile && projectView.editorFile.epkg;
            const top = epkg && (epkg.topPkg || epkg);
            const deps: pxt.Map<string> = (top && top.ksPkg && top.ksPkg.config.dependencies) || {};
            const usbOnly = pxt.appTarget.bundledpkgs[USB_ONLY_PKG];
            // already without Bluetooth: really too big
            if (!top || !usbOnly || deps[USB_ONLY_PKG])
                return { recompile: false, useVariants: [] };
            if (!await top.addDependencyAsync(JSON.parse(usbOnly[pxt.CONFIG_NAME]), "*"))
                return { recompile: false, useVariants: [] };
            await projectView.reloadHeaderAsync();
            opts.showNotification(localized(USB_ONLY_NOTICE));
            // pxt's recompile path is meant for multiVariants (micro:bit V1/V2 universal hex)
            // and computes pxt.appTarget.multiVariants.filter(...), which Arcade does not have;
            // answer that one read with an empty list (an empty array would switch pxt into
            // multi-variant mode for the recompile)
            const target = pxt.appTarget;
            Object.defineProperty(target, "multiVariants", {
                configurable: true,
                get: () => {
                    delete target.multiVariants;
                    return { filter: (): string[] => [] };
                }
            });
            return { recompile: true, useVariants: [] };
        };

        let appTarget = pxt.appTarget;
        patchShareUrls(appTarget);
        localizeExtensionCards(appTarget);
        Object.defineProperty(pxt, "appTarget", {
            configurable: true,
            enumerable: true,
            get: () => appTarget,
            set: (t: pxt.TargetBundle) => {
                appTarget = t;
                patchShareUrls(t);
                localizeExtensionCards(t);
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
        new MutationObserver(records => {
            // Calliope edition: "program too big by ... bytes!" in the editor language
            for (const record of records) {
                if (record.type == "characterData") localizeProgramTooBig(record.target);
                else record.addedNodes.forEach(localizeProgramTooBig);
            }
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