# Calliope mini

Pins des Calliope mini 3 (nRF52833) in MakeCode Arcade. Du findest sie in den Blöcken unter "Pins".

| Pin | nRF52833 | Funktion |
|---|---|---|
| P0, P1, P2 (`pins.PAD0` … `pins.PAD2`) | P0.02, P0.03, P0.04 | analog, PWM, Touch |
| P3 (`pins.PAD3`) | P1.03 | digital, PWM, Touch |
| C4 | P0.28 | analog, PWM (LED-Matrix Spalte 1) |
| C5 | P0.14 | Taste A |
| C6 | P1.05 | digital, PWM (LED-Matrix Spalte 4) |
| C7 | P0.11 | digital, PWM (LED-Matrix Spalte 2) |
| C10 | P0.30 | analog, PWM (LED-Matrix Spalte 5) |
| C11 | P0.23 | Taste B |
| C16 | P0.29 | analog, PWM (Grove A1 RX) |
| C18 | P0.31 | analog, PWM (LED-Matrix Spalte 3) |

C8, C9, C12 bis C15, C17, C19 und C20 werden vom GameKit für Display, Tasten und Jacdac verwendet und stehen daher nicht zur Verfügung.

In JavaScript heißen P0 bis P3 `pins.PAD0` bis `pins.PAD3` (wie in der Calliope-Pinbelegung), in den Blöcken "P0" bis "P3". Wenn du `pins.P0` schreibst, wird automatisch die micro:bit-Erweiterung "edge-connector" hinzugefügt.

```blocks
forever(function () {
    pins.PAD0.digitalWrite(!pins.C5.digitalRead())
})
```

## Siehe auch

[Jacdac-Mehrspielermodus](/reference/jacdac-multiplayer)

```package
calliope-mini
```
