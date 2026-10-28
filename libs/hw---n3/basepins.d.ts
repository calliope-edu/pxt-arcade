// Calliope edition: replaces ../hw/basepins.d.ts for the Calliope mini. Same pins, but
// without fixedInstance, so they do not show up in the pin dropdowns of the blocks (the
// calliope-mini extension provides the pins); they stay usable from JavaScript.
//% advanced=true
declare namespace pins {
    //% shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;

    //% shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    //% shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;

    //% shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;
    //% shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;

    //% shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;
}
