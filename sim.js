/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/built/common-sim.d.ts"/>
// Calliope edition: shims that common-sim (pxt-common-packages) does not provide.
// Everything else (images, screen, sound, controller, settings, ...) comes from common-sim.
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        function pressureLevelByButtonId(btnId, codalId) {
            return 0;
        }
        pxtcore.pressureLevelByButtonId = pressureLevelByButtonId;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
// no system (browser) keyboard: game.askForString() uses the on-screen keyboard
(function (pxsim) {
    var Keyboard;
    (function (Keyboard) {
        function isSystemKeyboardSupported() {
            return false;
        }
        Keyboard.isSystemKeyboardSupported = isSystemKeyboardSupported;
        function promptForText(maxLength, numbersOnly) { }
        Keyboard.promptForText = promptForText;
        function cancelTextPrompt() { }
        Keyboard.cancelTextPrompt = cancelTextPrompt;
        function getTextPromptString() {
            return "";
        }
        Keyboard.getTextPromptString = getTextPromptString;
        function getTextPromptSelectionStart() {
            return 0;
        }
        Keyboard.getTextPromptSelectionStart = getTextPromptSelectionStart;
        function getTextPromptSelectionEnd() {
            return 0;
        }
        Keyboard.getTextPromptSelectionEnd = getTextPromptSelectionEnd;
        function getLocalizedInstructions() {
            return "";
        }
        Keyboard.getLocalizedInstructions = getLocalizedInstructions;
    })(Keyboard = pxsim.Keyboard || (pxsim.Keyboard = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var browserEvents;
    (function (browserEvents) {
        function _setCursorVisible(visible) {
            const canvas = document.getElementById("paint-surface");
            if (canvas)
                canvas.style.cursor = visible ? "" : "none";
        }
        browserEvents._setCursorVisible = _setCursorVisible;
    })(browserEvents = pxsim.browserEvents || (pxsim.browserEvents = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/built/common-sim.d.ts"/>
// Calliope edition: own simulator for the Calliope mini GameKit (the official Arcade
// simulator, pxt-arcade-sim, is not public). Based on the open source sim that was
// part of pxt-arcade until January 2019 (MIT). The console graphic is the SVG in
// public/simulator.html: the "Screen" rect is covered by the game screen, the
// "Button_..." groups are the buttons.
var pxsim;
(function (pxsim) {
    var Key = pxsim.keymap.Key;
    // DAL ids (libs/core---nrf52/dal.d.ts)
    const DEVICE_ID_SCHEDULER = 15;
    const DEVICE_SCHEDULER_EVT_IDLE = 2;
    const DEVICE_ID_NOTIFY_ONE = 1022;
    const DEVICE_ID_NOTIFY = 1023;
    // pxt-common-packages/libs/game/constants.ts
    const INTERNAL_KEY_UP = 2050;
    const INTERNAL_KEY_DOWN = 2051;
    // SVG ids are "Button_<name>" (Illustrator exports "_" as "_x5F_")
    const BUTTON_NAMES = {
        "up": Key.Up,
        "down": Key.Down,
        "left": Key.Left,
        "right": Key.Right,
        "a": Key.A,
        "b": Key.B,
        "menu": Key.Menu,
        "menü": Key.Menu
    };
    let windowHandlersSet = false;
    // button elements of the console graphic; bound once, the page is reused between runs
    let buttonEls;
    /**
     * Called each time the program (re)starts
     */
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
        if (!windowHandlersSet) {
            windowHandlersSet = true;
            window.onkeydown = e => {
                const b = gameKit();
                if (b)
                    b.setKey(e.keyCode, true, e);
            };
            window.onkeyup = e => {
                const b = gameKit();
                if (b)
                    b.setKey(e.keyCode, false, e);
            };
            window.oncontextmenu = e => {
                e.preventDefault();
                return false;
            };
            // take the keyboard focus when the mouse is over the console (like the original
            // Arcade simulator), so the keys work without clicking into the screen first
            document.addEventListener("mouseover", () => {
                if (!document.hasFocus())
                    window.focus();
            });
        }
    };
    function gameKit() {
        return pxsim.runtime && pxsim.runtime.board;
    }
    class Board extends pxsim.CoreBoard {
        constructor() {
            super();
            this.bus = new pxsim.EventBus(pxsim.runtime, this);
            this.bus.setNotify(DEVICE_ID_NOTIFY, DEVICE_ID_NOTIFY_ONE);
            this.bus.setIdle(DEVICE_ID_SCHEDULER, DEVICE_SCHEDULER_EVT_IDLE);
            this.screenState = new pxsim.ScreenState(null);
            this.audioState = new pxsim.AudioState();
            this.keymapState = new pxsim.KeymapState();
            this.multiplayerState = new pxsim.MultiplayerState();
            this.controlMessageState = new pxsim.ControlMessageState(this);
            this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            this.storageState = new pxsim.StorageState();
            this.buttonState = new pxsim.CommonButtonState();
            // all nRF52833 GPIOs (P0.00-P1.15), so every pin from the config
            // (e.g. the calliope-mini extension) exists in the simulator
            const gpios = [];
            for (let i = 0; i < 48; i++)
                gpios.push(i);
            this.edgeConnectorState = new pxsim.EdgeConnectorState({ pins: gpios });
        }
        getDefaultPitchPin() {
            return undefined;
        }
        initAsync(msg) {
            this.runOptions = msg;
            this.id = msg.id;
            const canvas = document.getElementById("paint-surface");
            this.view = new ScreenView(this.screenState, canvas);
            this.bindButtons();
            return Promise.resolve();
        }
        setKey(keyCode, isPressed, e) {
            const key = this.keymapState.getKey(keyCode);
            if (key) {
                this.handleKeyEvent(key, isPressed);
                e.preventDefault();
            }
        }
        handleKeyEvent(key, isPressed) {
            // system keys
            switch (key) {
                case Key.Reset:
                    if (isPressed)
                        pxsim.Runtime.postMessage({ type: "simulator", command: "restart" });
                    return;
                case Key.Screenshot:
                    if (isPressed)
                        pxsim.Runtime.postScreenshotAsync();
                    return;
                case Key.Gif:
                    if (isPressed)
                        pxsim.Runtime.requestToggleRecording();
                    return;
                case Key.TogglePause:
                    return;
            }
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key);
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, 0); // "any" key
            this.showPressed(key, isPressed);
        }
        screenshotAsync(width) {
            return Promise.resolve(this.view.imageData());
        }
        // the buttons of the console graphic (player 1)
        bindButtons() {
            if (buttonEls)
                return;
            buttonEls = {};
            const groups = document.querySelectorAll("#console svg g[id^='Button']");
            groups.forEach(g => {
                const m = /^Button(?:_x5F_|_)(.+)$/.exec(g.id);
                const key = m && BUTTON_NAMES[m[1].toLowerCase()];
                if (!key)
                    return;
                (buttonEls[key] || (buttonEls[key] = [])).push(g);
                g.classList.add("sim-button");
                let pressed = false;
                const down = (ev) => {
                    ev.preventDefault(); // also prevents the focus change, so focus explicitly
                    window.focus();
                    if (pressed)
                        return;
                    pressed = true;
                    g.setPointerCapture(ev.pointerId);
                    const b = gameKit();
                    if (b)
                        b.handleKeyEvent(key, true);
                };
                const up = (ev) => {
                    if (!pressed)
                        return;
                    pressed = false;
                    const b = gameKit();
                    if (b)
                        b.handleKeyEvent(key, false);
                };
                g.addEventListener("pointerdown", down);
                g.addEventListener("pointerup", up);
                g.addEventListener("pointercancel", up);
                g.addEventListener("lostpointercapture", up);
            });
        }
        showPressed(key, isPressed) {
            const els = buttonEls && buttonEls[key];
            if (els)
                els.forEach(el => el.classList.toggle("pressed", isPressed));
        }
    }
    pxsim.Board = Board;
    // draws the game screen into the canvas that covers the "Screen" rect
    class ScreenView {
        constructor(state, canvas) {
            this.state = state;
            this.canvas = canvas;
            this.requested = false;
            this.context = canvas.getContext("2d");
            state.onChange = () => {
                if (this.requested)
                    return;
                this.requested = true;
                window.requestAnimationFrame(() => {
                    this.requested = false;
                    this.redraw();
                });
            };
        }
        redraw() {
            const s = this.state;
            if (!s.width || !s.height || !s.screen)
                return;
            if (this.canvas.width != s.width || this.canvas.height != s.height) {
                this.canvas.width = s.width;
                this.canvas.height = s.height;
            }
            const img = this.context.createImageData(s.width, s.height);
            new Uint32Array(img.data.buffer).set(s.screen);
            this.context.putImageData(img, 0, 0);
        }
        imageData() {
            return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        }
    }
})(pxsim || (pxsim = {}));
