// P0-P3 are called PAD0-PAD3 here (blocks still show "P0"-"P3"): the missingPackage
// patch in pxtarget.json would otherwise add edge-connector for every "pins.P0".
declare namespace pins {
    /**
     * Pin P0 on the Calliope mini (analog, PWM, touch)
     */
    //% fixedInstance block="P0" shim=pxt::lookupPinCfg(CFG_PIN_P0)
    const PAD0: PwmPin;

    /**
     * Pin P1 on the Calliope mini (analog, PWM, touch)
     */
    //% fixedInstance block="P1" shim=pxt::lookupPinCfg(CFG_PIN_P1)
    const PAD1: PwmPin;

    /**
     * Pin P2 on the Calliope mini (analog, PWM, touch)
     */
    //% fixedInstance block="P2" shim=pxt::lookupPinCfg(CFG_PIN_P2)
    const PAD2: PwmPin;

    /**
     * Pin P3 on the Calliope mini (digital, PWM, touch)
     */
    //% fixedInstance block="P3" shim=pxt::lookupPinCfg(CFG_PIN_P3)
    const PAD3: PwmOnlyPin;

    /**
     * Pin C4 on the Calliope mini pin header (analog, PWM, LED matrix column 1)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P4)
    const C4: PwmPin;

    /**
     * Pin C5 on the Calliope mini pin header (button A)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P5)
    const C5: DigitalInOutPin;

    /**
     * Pin C6 on the Calliope mini pin header (digital, PWM, LED matrix column 4)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P6)
    const C6: PwmOnlyPin;

    /**
     * Pin C7 on the Calliope mini pin header (digital, PWM, LED matrix column 2)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P7)
    const C7: PwmOnlyPin;

    /**
     * Pin C10 on the Calliope mini pin header (analog, PWM, LED matrix column 5)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P10)
    const C10: PwmPin;

    /**
     * Pin C11 on the Calliope mini pin header (button B)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P11)
    const C11: DigitalInOutPin;

    /**
     * Pin C16 on the Calliope mini pin header (analog, PWM, Grove A1 RX)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P16)
    const C16: PwmPin;

    /**
     * Pin C18 on the Calliope mini pin header (analog, PWM, LED matrix column 3)
     */
    //% fixedInstance shim=pxt::lookupPinCfg(CFG_PIN_P18)
    const C18: PwmPin;
}
