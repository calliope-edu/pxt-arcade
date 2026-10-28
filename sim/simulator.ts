/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/built/common-sim.d.ts"/>

// Calliope edition: own simulator for the Calliope mini GameKit (the official Arcade
// simulator, pxt-arcade-sim, is not public). Based on the open source sim that was
// part of pxt-arcade until January 2019 (MIT). The console graphic is the SVG in
// public/simulator.html: the "Screen" rect is covered by the game screen, the
// "Button_..." groups are the buttons.

namespace pxsim {
    import Key = pxsim.keymap.Key;

    // DAL ids (libs/core---nrf52/dal.d.ts)
    const DEVICE_ID_SCHEDULER = 15;
    const DEVICE_SCHEDULER_EVT_IDLE = 2;
    const DEVICE_ID_NOTIFY_ONE = 1022;
    const DEVICE_ID_NOTIFY = 1023;

    // pxt-common-packages/libs/game/constants.ts
    const INTERNAL_KEY_UP = 2050;
    const INTERNAL_KEY_DOWN = 2051;

    // SVG ids are "Button_<name>" (Illustrator exports "_" as "_x5F_")
    const BUTTON_NAMES: Map<Key> = {
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
    let buttonEls: Map<Element[]>;

    /**
     * Called each time the program (re)starts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();

        if (!windowHandlersSet) {
            windowHandlersSet = true;
            window.onkeydown = e => {
                const b = gameKit();
                if (b) b.setKey(e.keyCode, true, e);
            };
            window.onkeyup = e => {
                const b = gameKit();
                if (b) b.setKey(e.keyCode, false, e);
            };
            window.oncontextmenu = e => {
                e.preventDefault();
                return false;
            };
            // take the keyboard focus when the mouse is over the console (like the original
            // Arcade simulator), so the keys work without clicking into the screen first
            document.addEventListener("mouseover", () => {
                if (!document.hasFocus()) window.focus();
            });
        }
    };

    function gameKit(): Board {
        return runtime && runtime.board as Board;
    }

    export class Board extends pxsim.CoreBoard {
        public bus: EventBus;
        public screenState: ScreenState;
        public audioState: AudioState;
        public keymapState: KeymapState;
        public multiplayerState: MultiplayerState;
        public controlMessageState: ControlMessageState;
        public accelerometerState: AccelerometerState;
        public storageState: StorageState;
        public buttonState: CommonButtonState;
        public edgeConnectorState: EdgeConnectorState;

        private view: ScreenView;

        constructor() {
            super();
            this.bus = new EventBus(runtime, this);
            this.bus.setNotify(DEVICE_ID_NOTIFY, DEVICE_ID_NOTIFY_ONE);
            this.bus.setIdle(DEVICE_ID_SCHEDULER, DEVICE_SCHEDULER_EVT_IDLE);
            this.screenState = new ScreenState(null);
            this.audioState = new AudioState();
            this.keymapState = new KeymapState();
            this.multiplayerState = new MultiplayerState();
            this.controlMessageState = new ControlMessageState(this as any);
            this.accelerometerState = new AccelerometerState(runtime);
            this.storageState = new StorageState();
            this.buttonState = new CommonButtonState();
            // all nRF52833 GPIOs (P0.00-P1.15), so every pin from the config
            // (e.g. the calliope-mini extension) exists in the simulator
            const gpios: number[] = [];
            for (let i = 0; i < 48; i++) gpios.push(i);
            this.edgeConnectorState = new EdgeConnectorState({ pins: gpios });
        }

        getDefaultPitchPin(): Pin {
            return undefined;
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            this.runOptions = msg;
            this.id = msg.id;

            const canvas = document.getElementById("paint-surface") as HTMLCanvasElement;
            this.view = new ScreenView(this.screenState, canvas);
            this.bindButtons();

            return Promise.resolve();
        }

        setKey(keyCode: number, isPressed: boolean, e: KeyboardEvent) {
            const key = this.keymapState.getKey(keyCode);
            if (key) {
                this.handleKeyEvent(key, isPressed);
                e.preventDefault();
            }
        }

        handleKeyEvent(key: Key, isPressed: boolean) {
            // system keys
            switch (key) {
                case Key.Reset:
                    if (isPressed)
                        Runtime.postMessage(<SimulatorCommandMessage>{ type: "simulator", command: "restart" });
                    return;
                case Key.Screenshot:
                    if (isPressed)
                        Runtime.postScreenshotAsync();
                    return;
                case Key.Gif:
                    if (isPressed)
                        Runtime.requestToggleRecording();
                    return;
                case Key.TogglePause:
                    return;
            }

            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key);
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, 0); // "any" key
            this.showPressed(key, isPressed);
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return Promise.resolve(this.view.imageData());
        }

        // the buttons of the console graphic (player 1)
        private bindButtons() {
            if (buttonEls) return;
            buttonEls = {};

            const groups = document.querySelectorAll("#console svg g[id^='Button']");
            groups.forEach(g => {
                const m = /^Button(?:_x5F_|_)(.+)$/.exec(g.id);
                const key = m && BUTTON_NAMES[m[1].toLowerCase()];
                if (!key) return;

                (buttonEls[key] || (buttonEls[key] = [])).push(g);
                g.classList.add("sim-button");

                let pressed = false;
                const down = (ev: PointerEvent) => {
                    ev.preventDefault(); // also prevents the focus change, so focus explicitly
                    window.focus();
                    if (pressed) return;
                    pressed = true;
                    (g as any).setPointerCapture(ev.pointerId);
                    const b = gameKit();
                    if (b) b.handleKeyEvent(key, true);
                };
                const up = (ev: PointerEvent) => {
                    if (!pressed) return;
                    pressed = false;
                    const b = gameKit();
                    if (b) b.handleKeyEvent(key, false);
                };
                g.addEventListener("pointerdown", down);
                g.addEventListener("pointerup", up);
                g.addEventListener("pointercancel", up);
                g.addEventListener("lostpointercapture", up);
            });
        }

        private showPressed(key: Key, isPressed: boolean) {
            const els = buttonEls && buttonEls[key];
            if (els) els.forEach(el => el.classList.toggle("pressed", isPressed));
        }
    }

    // draws the game screen into the canvas that covers the "Screen" rect
    class ScreenView {
        private context: CanvasRenderingContext2D;
        private requested = false;

        constructor(private state: ScreenState, private canvas: HTMLCanvasElement) {
            this.context = canvas.getContext("2d");
            state.onChange = () => {
                if (this.requested) return;
                this.requested = true;
                window.requestAnimationFrame(() => {
                    this.requested = false;
                    this.redraw();
                });
            };
        }

        redraw() {
            const s = this.state;
            if (!s.width || !s.height || !s.screen) return;
            if (this.canvas.width != s.width || this.canvas.height != s.height) {
                this.canvas.width = s.width;
                this.canvas.height = s.height;
            }
            const img = this.context.createImageData(s.width, s.height);
            new Uint32Array(img.data.buffer).set(s.screen);
            this.context.putImageData(img, 0, 0);
        }

        imageData(): ImageData {
            return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}
