/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/built/common-sim.d.ts"/>

// Calliope edition: shims that common-sim (pxt-common-packages) does not provide.
// Everything else (images, screen, sound, controller, settings, ...) comes from common-sim.

namespace pxsim.pxtcore {
    export function pressureLevelByButtonId(btnId: number, codalId: number): number {
        return 0
    }
}

// no system (browser) keyboard: game.askForString() uses the on-screen keyboard
namespace pxsim.Keyboard {
    export function isSystemKeyboardSupported() {
        return false
    }
    export function promptForText(maxLength: number, numbersOnly: boolean) { }
    export function cancelTextPrompt() { }
    export function getTextPromptString() {
        return ""
    }
    export function getTextPromptSelectionStart() {
        return 0
    }
    export function getTextPromptSelectionEnd() {
        return 0
    }
    export function getLocalizedInstructions() {
        return ""
    }
}

namespace pxsim.browserEvents {
    export function _setCursorVisible(visible: boolean) {
        const canvas = document.getElementById("paint-surface")
        if (canvas) canvas.style.cursor = visible ? "" : "none"
    }
}
