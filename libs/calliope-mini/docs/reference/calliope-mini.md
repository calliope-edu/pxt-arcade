# Calliope mini

Pins of the Calliope mini 3 (nRF52833) in MakeCode Arcade, found in the blocks under "Pins".

| Pin | nRF52833 | Function |
|---|---|---|
| P0, P1, P2 (`pins.PAD0` … `pins.PAD2`) | P0.02, P0.03, P0.04 | analog, PWM, touch |
| P3 (`pins.PAD3`) | P1.03 | digital, PWM, touch |
| C4 | P0.28 | analog, PWM (LED matrix column 1) |
| C5 | P0.14 | button A |
| C6 | P1.05 | digital, PWM (LED matrix column 4) |
| C7 | P0.11 | digital, PWM (LED matrix column 2) |
| C10 | P0.30 | analog, PWM (LED matrix column 5) |
| C11 | P0.23 | button B |
| C16 | P0.29 | analog, PWM (Grove A1 RX) |
| C18 | P0.31 | analog, PWM (LED matrix column 3) |

C8, C9, C12 to C15, C17, C19 and C20 are used by the GameKit for the display, buttons and Jacdac, so they are not available.

In JavaScript, P0 to P3 are called `pins.PAD0` to `pins.PAD3` (as in the Calliope pinout), in the blocks "P0" to "P3". If you write `pins.P0`, the micro:bit extension "edge-connector" is added automatically.

```blocks
forever(function () {
    pins.PAD0.digitalWrite(!pins.C5.digitalRead())
})
```

## See also

[Jacdac multiplayer mode](/reference/jacdac-multiplayer)

```package
calliope-mini
```
