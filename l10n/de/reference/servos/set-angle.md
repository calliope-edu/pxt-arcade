# set Angle

Lass einen Servo auf einen bestimmten Winkel drehen.

```sig
servos.P0.setAngle(90)
```

Servos drehen eine Welle in eine von zwei Richtungen um einen Winkel in Grad. Mit einem Servo nutzt du nur 180 Grad, um einen Arm, ein Zahnrad oder ein Rad zu positionieren, das mit der Welle verbunden ist. Die Position bei 90 Grad ist die Grund- oder Neutralstellung. Um die Servowelle nach links (gegen den Uhrzeigersinn) zu drehen, schreibst du eine Gradzahl zwischen 0 und 90. Die Stelle bei `0` Grad ist ganz links, und jede andere Zahl bis `90` liegt irgendwo zwischen ganz links und der Neutralstellung. Genauso funktioniert es nach rechts (im Uhrzeigersinn). Ganz rechts sind `180` Grad.

### Endlosdrehung

Es gibt noch eine andere Art von Servo, den sogenannten _Endlos-Servo_ (Continuous Rotation), der genauso aussehen kann wie ein normaler Servo. Er ist anders, weil die Welle nicht an einer bestimmten Gradposition stehen bleibt. Hier ist die Zahl, die du an den Servo schreibst, keine Gradzahl, sondern eine Geschwindigkeit. Die Welle dreht sich weiter, wenn du eine andere Zahl als `90` schreibst. Statt eines Winkels ist die Zahl eine Geschwindigkeitsangabe in eine der beiden Richtungen. Die Zahl `0` bedeutet volle Geschwindigkeit nach links und `180` volle Geschwindigkeit nach rechts. Die Zahl `90` bedeutet keine Drehung in irgendeine Richtung.

Einfacher kannst du einen Endlos-Servo mit der Funktion [run](/reference/servos/run) und einem prozentualen Geschwindigkeitswert laufen lassen.

## Parameter

* **degrees**: eine [Zahl](types/number) für den Wellenwinkel oder die Servogeschwindigkeit, je nach Servotyp:
> * _normaler Servo_: die Gradzahl, um die die Welle gedreht wird.

>> * `90` ist die Neutral- oder Mittelstellung.
>> * `90` bis `0`: Die Welle dreht sich in eine Position nach links.
>> * `0` ist ganz nach links gedreht.
>> * `90` bis `180`: Die Welle dreht sich in eine Position nach rechts.
>> * `180` ist ganz nach rechts gedreht.

> * _Endlos-Servo_: die Geschwindigkeit, mit der sich die Welle in die eine oder andere Richtung dreht.
>> * `0` volle Geschwindigkeit nach _links_.
>> * `90` bis `0`: Die Welle dreht sich schneller nach _links_, je näher die Zahl an `0` kommt.
>> * `90` keine Geschwindigkeit, die Welle dreht sich nicht.
>> * `90` bis `180`: Die Welle dreht sich schneller nach _rechts_, je näher die Zahl an `180` kommt.
>> * `180` volle Geschwindigkeit nach _rechts_.

## Beispiel

Schließe einen Servo an Pin `P0` an. Lass den Arm auf der Servowelle 5-mal um 45 Grad in jede Richtung wackeln (nach rechts und links drehen).

```blocks
for (let i = 0; i < 5; i++) {
    servos.P0.setAngle(135)
    basic.pause(500)
    servos.P0.setAngle(45)
    basic.pause(500)
}
```

## ~ hint

Wie treiben Servos ihre Motoren an, um die Position ihres Arms oder ihrer Welle zu ändern? Finde es in diesem MakeCode-Hardware-Video heraus:

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Siehe auch

[setze Puls](/reference/servos/set-pulse),
[laufen](/reference/servos/run)

[Kurzleitfaden zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```
