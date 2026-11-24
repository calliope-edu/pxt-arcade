# servo Write

Sag einem Servo, dass er sich auf einen Winkel drehen oder mit einer bestimmten Geschwindigkeit drehen soll.

```sig
pins.A1.servoWrite(90)
```

Servos drehen eine Welle in eine von zwei Richtungen um einen Winkel in Grad. Mit einem Servo
nutzt du nur 180 Grad, um einen Arm, ein Zahnrad oder ein Rad zu positionieren, das mit der Welle verbunden ist. Die Position
bei 90 Grad ist die Grund- oder Neutralstellung. Um die Servowelle nach links (gegen den Uhrzeigersinn) zu drehen,
schreibst du eine Gradzahl zwischen 0 und 90. Die `0`-Grad-Stelle ist ganz links und
jede andere Zahl bis `90` liegt irgendwo zwischen links und der Neutralstellung. Genauso funktioniert es
ganz nach rechts (im Uhrzeigersinn). Ganz rechts sind `180` Grad.

### Dauerrotation

Es gibt noch eine andere Art von Servo, den _Dauerrotations_-Servo, der genauso aussehen kann wie ein normaler
Servo. Er ist anders, weil die Welle nicht an einer bestimmten Gradposition stoppt. In diesem Fall
ist die Zahl, die du an den Servo schreibst, keine Gradzahl, sondern eine Geschwindigkeit. Die Welle dreht sich weiter, wenn
du eine andere Zahl als `90` an den Servo schreibst. Statt eines Winkels in Grad ist die Zahl
eine Geschwindigkeitsangabe in eine der Richtungen. Die Zahl `0` bedeutet volle Geschwindigkeit nach links und
`180` volle Geschwindigkeit nach rechts. Die Zahl `90` bedeutet keine Drehung in irgendeine Richtung.

## Parameter

* **value**: eine [Zahl](types/number) für den Wellenwinkel oder die Servogeschwindigkeit, je nach Servotyp:
> * _normaler Servo_: die Gradzahl, um die die Welle gedreht wird.

>> * `90` ist die Neutral- oder Mittelstellung.
>> * `90` bis `0`, die Welle dreht sich in eine Position nach links.
>> * `0` ist ganz nach links gedreht.
>> * `90` bis `180`, die Welle dreht sich in eine Position nach rechts.
>> * `180` ist ganz nach rechts gedreht.

> * _Dauerrotation_: die Geschwindigkeit, mit der sich die Welle in die eine oder andere Richtung dreht.
>> * `0` volle Geschwindigkeit nach _links_.
>> * `90` bis `0`, die Welle dreht sich schneller nach _links_, je näher die Zahl an `0` kommt.
>> * `90` keine Geschwindigkeit, die Welle dreht sich nicht.
>> * `90` bis `180`, die Welle dreht sich schneller nach _rechts_, je näher die Zahl an `180` kommt.
>> * `180` volle Geschwindigkeit nach _rechts_.

## Beispiel #example

Schließe einen Servo an Pin `A1` an. Lass den Arm an der Servowelle 5-mal um 45 Grad in jede
Richtung hin und her wackeln (nach rechts und links drehen).

```blocks
for (let i = 1; i <= 5; i++) {
    pins.A1.servoWrite(135)
    pause(500)
    pins.A1.servoWrite(45)
    pause(500)
}
```

## Siehe auch #seealso

[servo set pulse](/reference/pins/servo-set-pulse),
[analog set period](/reference/pins/analog-set-period)

[Was ist PWM](/reference/pins/what-is-pwm)
