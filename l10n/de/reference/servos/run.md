# run

Lass einen Endlos-Servo (Continuous-Rotation-Servo) mit einer bestimmten Geschwindigkeit drehen.

```sig
servos.P0.run(50)
```

Ein Endlos-Servo kann sich sowohl im Uhrzeigersinn als auch gegen den Uhrzeigersinn drehen. Er dreht sich mit einer Geschwindigkeit zwischen Stillstand und maximaler Drehgeschwindigkeit. Normalerweise interpretiert ein Endlos-Servo einen Winkelwert als Geschwindigkeitswert. Mit ``||servos:run||`` kannst du aber einen prozentualen Geschwindigkeitswert verwenden, um den Servo von keiner bis voller Geschwindigkeit zu drehen (`0` bis `100` Prozent). Für eine Drehung im Uhrzeigersinn ist der Geschwindigkeitswert eine positive Zahl, speed > 0. Wenn du den Servo in die andere Richtung (gegen den Uhrzeigersinn) drehen willst, verwende einen negativen Prozentwert.

## Parameter

* **speed**: eine [Zahl](types/number), die den Prozentsatz (`0` bis `100`) der Geschwindigkeit angibt, mit der sich der Servo dreht. Verwende einen positiven Wert (speed > 0) für den Uhrzeigersinn und einen negativen Wert für die Drehung gegen den Uhrzeigersinn.

## Beispiel

Schließe einen Servo an Pin `P0` an. Drehe den Servo mit `75` Prozent der vollen Geschwindigkeit im Uhrzeigersinn. Warte `3` Sekunden und stoppe dann den Servo.

```blocks
servos.P0.run(75)
basic.pause(3000)
servos.P0.run(0)
```

## ~ hint

Wie treiben Servos ihre Motoren an, um die Position ihres Arms oder ihrer Welle zu ändern? Finde es in diesem MakeCode-Hardware-Video heraus:

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Siehe auch

[setze Puls](/reference/servos/set-pulse),
[setze Winkel](/reference/servos/set-angle)

[Kurzleitfaden zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```
