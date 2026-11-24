# Beim Stoppen auf neutral setzen

Lege fest, dass ein Servo beim Stoppen in die Neutralstellung zurückkehrt.

```sig
servos.P0.setStopOnNeutral(false)
```

Wenn du ein Servo stoppst, kannst du es, statt einfach beim aktuellen Drehwinkel anzuhalten, beim Stoppen in die Neutralstellung (`90` Grad) zurückkehren lassen.

## Parameter

* **enabled**: ein [Wahrheitswert](types/boolean), der bei `true` festlegt, dass das Servo beim Stoppen in die Neutralstellung zurückkehrt. Bei `false` bleibt das Servo beim Stoppen in seiner aktuellen Stellung.

## Beispiel

Schließe ein Servo an Pin `P0` an. Lege fest, dass das Servo beim Stoppen in die Neutralstellung geht. Drehe das Servo im Uhrzeigersinn mit `75` Prozent der vollen Geschwindigkeit. Warte `3` Sekunden und stoppe dann das Servo.

```blocks
servos.P0.setStopOnNeutral(true)
servos.P0.run(75)
basic.pause(3000)
servos.P0.run(0)
```

## Siehe auch

[laufen](/reference/servos/run),
[stoppen](/reference/servos/stop)

[Kurzanleitung zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```
