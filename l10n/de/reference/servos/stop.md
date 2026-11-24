# stoppen

Sende keine Befehle mehr an das Servo, damit seine Drehung in der aktuellen Stellung anhält.

```sig
servos.P0.stop()
```

Ein Servo wird gestoppt, indem keine weiteren Befehle zur Steuerung des Drehwinkels gesendet werden. So kannst du ein Servo in seiner aktuellen Stellung anhalten, was nützlich ist, um ein kontinuierlich drehendes Servo zu stoppen. Der Servoantrieb ist gestoppt, aber auf seine Welle wirkt keine Kraft, die die aktuelle Stellung festhält.

## Beispiel

Schließe ein Servo an Pin `P0` an. Drehe das Servo im Uhrzeigersinn mit `75` Prozent der vollen Geschwindigkeit. Warte `3` Sekunden und stoppe dann das Servo.

```blocks
servos.P0.run(75)
basic.pause(3000)
servos.P0.stop()
```

## Siehe auch

[laufen](/reference/servos/run),
[Winkel setzen](/reference/servos/set-angle)

[Kurzanleitung zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```
