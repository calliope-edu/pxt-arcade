// Calliope mini 3 (nRF52833) pin mapping, from the Calliope CODAL fork
// (calliope-edu/codal-microbit-v2, branch v0.3.2-calliope-3, model/MicroBitIO.cpp).
// Pin Cn uses the config key PIN_Pn; PIN_P0-PIN_P2 are already set in hw---n3.
// Pins used by the GameKit (display, buttons, Jacdac: C8, C9, C12-C15, C17, C19, C20)
// are not exposed, see pins.d.ts. Numbers instead of DAL.Px_y: the DAL pin names only
// exist with the nRF52 hardware, and the library is also checked on its own.
namespace config {
    export const PIN_P3 = 35 // P1.03
    export const PIN_P4 = 28 // P0.28
    export const PIN_P5 = 14 // P0.14
    export const PIN_P6 = 37 // P1.05
    export const PIN_P7 = 11 // P0.11
    export const PIN_P10 = 30 // P0.30
    export const PIN_P11 = 23 // P0.23
    export const PIN_P16 = 29 // P0.29
    export const PIN_P18 = 31 // P0.31
}
