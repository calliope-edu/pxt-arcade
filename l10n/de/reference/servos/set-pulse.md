# Servopuls setzen

Sende einen Puls mit deiner eigenen Pulsdauer an ein Servo.

```sig
servos.P0.setPulse(2000)
```

Ein Servo dreht eine Welle um einen Winkel oder mit einer Geschwindigkeit, die es aus einem Pulssignal liest. Ein digitales
Pulssignal kann nur zwei Werte haben: high und low. Wie sagst du dem Servo, wie weit es die Welle
drehen soll, wenn es nur zwei Werte gibt?

### Servowinkel

Der Trick ist, die Dauer (die Zeit, in der der Puls an ist) zu nutzen, um dem Servo zu sagen, wie weit es die Welle drehen soll. Servos verwenden unterschiedliche, aber sehr kurze Zeitspannen, um anzugeben, wie weit sich die Welle dreht oder wie schnell sie sich in eine Richtung dreht. Die meisten Hobby-Servos verwenden einen Puls, der zwischen 1 Millisekunde und 2 Millisekunden dauert, um anzugeben, wie weit sie drehen sollen. Die Hälfte dieser Zeitspanne ist 0,5 Millisekunden. Ein Puls von 0,5 Millisekunden ist die Zeit, die dem Servo sagt, in seiner Neutralstellung zu bleiben. Ein Puls von 1 Millisekunde bedeutet, dass die Servowelle ganz nach links gedreht wird, meist 0-Grad-Stellung genannt. Ein Puls von 2 Millisekunden sagt dem Servo, ganz nach rechts zu drehen, in die 180-Grad-Stellung.

Damit du die Servowelle sehr genau bewegen kannst, gibst du die Pulsdauer in Mikrosekunden an. Denk daran, die Millisekundenwerte mit 1000 zu multiplizieren, wenn du einen Puls an das Servo sendest. Die Neutralstellung ist zum Beispiel 1500 Mikrosekunden. Mit einem Puls von 1000 Mikrosekunden dreht das Servo die Welle ganz nach links. Ganz nach rechts ist ein Puls von 2000 Mikrosekunden.

### Kontinuierliche Drehung

Es gibt eine weitere Art von Servo, das _kontinuierlich drehende_ Servo, das genauso aussehen kann wie ein normales Servo. Es ist anders, weil die Welle nicht an einer bestimmten Stellung anhält. In diesem Fall bedeutet der Puls, den du an das Servo sendest, keine Stellung, sondern eine Geschwindigkeit. Die Welle dreht sich weiter, wenn du einen anderen Pulswert als `1500` Mikrosekunden an das Servo sendest. Statt eines Drehwinkels ist die Dauer eine Geschwindigkeitsangabe in eine der Richtungen. `1000` Mikrosekunden bedeuten volle Geschwindigkeit nach links und `2000` Mikrosekunden volle Geschwindigkeit nach rechts. Ein Wert von `1500` Mikrosekunden bedeutet keine Drehung in irgendeine Richtung.

#### ~hint

Die meisten, aber nicht alle Hobby-Servos verwenden eine Pulsdauer von 1 bis 2 Millisekunden, um die Drehung der Welle zu steuern. Manche haben einen kleineren Drehbereich oder verwenden andere Pulsdauern für Stellung und Geschwindigkeit. Wenn du so ein Servo hast, finde heraus, welche Pulsdauern die Welle dorthin bewegen, wo du sie haben willst, und verwende sie in ``||servos:set servo pulse||``.

#### ~

## Parameter

* **micros**: eine [Zahl](types/number), die die Länge des an das Servo gesendeten Pulses in Mikrosekunden angibt. Für die verschiedenen Servoarten bedeutet die Pulsdauer:
> * _normales Servo_: wie weit die Welle gedreht wird.
>>Meistens ist `1000` volle Drehung nach links, `2000` volle Drehung nach rechts und `1500` die Neutralstellung.
> * _kontinuierliche Drehung_: die Geschwindigkeit, mit der sich die Welle in die eine oder andere Richtung dreht.
>>Meistens ist `1000` volle Geschwindigkeit nach links, `2000` volle Geschwindigkeit nach rechts und `1500` Stillstand.

## Beispiel #example

Drehe ein normales Servo, das an Pin `P0` angeschlossen ist, auf 135 Grad. Warte 3 Sekunden und setze es dann zurück in die Neutralstellung.

```blocks
servos.P0.setPulse(1750)
basic.pause(3000)
servos.P0.setAngle(90)
```

## ~ hint

Wie bewegen Servos ihre Motoren, um die Stellung ihres Arms oder ihrer Welle zu ändern? Finde es in diesem MakeCode-Hardware-Video heraus:

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Siehe auch

[Winkel setzen](/reference/servos/set-angle),
[laufen](/reference/servos/run)

[Kurzanleitung zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```
