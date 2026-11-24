# servo Set Pulse

Sende einen Puls mit deiner eigenen Pulsdauer an einen Servo.

```sig
pins.A1.servoSetPulse(2000)
```

Ein Servo dreht eine Welle um einen Winkel oder mit einer Geschwindigkeit, die er aus einem Pulssignal liest. Ein digitales
Pulssignal kann nur zwei Werte haben, hoch und niedrig. Wie sagst du dem Servo, wie weit er
die Welle drehen soll, wenn es nur zwei Werte gibt?

### Servowinkel

Der Trick ist, die Dauer (die Zeit, die der Puls an ist) zu nutzen, um dem Servo zu sagen,
wie weit er die Welle drehen soll. Servos verwenden unterschiedliche, aber sehr kurze Zeiten, die angeben, wie weit
sich die Welle dreht oder wie schnell sie in eine Richtung rotiert. Die meisten Hobby-Servos verwenden einen Puls, der
zwischen 1 Millisekunde und 2 Millisekunden dauert, um anzugeben, wie weit sie drehen sollen. Die Hälfte dieser
Zeitspanne sind 0,5 Millisekunden. Ein Puls von 0,5 Millisekunden ist die Zeit, die dem
Servo sagt, in seiner Neutralstellung zu bleiben. Ein Puls von 1 Millisekunde bedeutet, dass die Servowelle
ganz nach links gedreht wird, meist 0-Grad-Stellung genannt. Ein Puls von 2 Millisekunden sagt dem
Servo, sich ganz nach rechts zu drehen, in die 180-Grad-Stellung.

Damit du die Servowelle sehr genau bewegen kannst, verwendest du Mikrosekunden für die Pulsdauer.
Denk daran, die Millisekunden-Werte mit 1000 zu multiplizieren, wenn du den Servo pulst. Die Neutralstellung
ist zum Beispiel 1500 Mikrosekunden. Der Servo dreht die Welle mit einem Puls von 1000 Mikrosekunden
ganz nach links. Ganz nach rechts ist ein Puls von 2000 Mikrosekunden.

### Dauerrotation

Es gibt eine andere Art von Servo, den _Dauerrotations_-Servo, der genauso aussehen kann wie ein normaler
Servo. Er ist anders, weil die Welle nicht an einer bestimmten Position stoppt. In diesem Fall
bedeutet der Puls, den du an den Servo sendest, keine Position, sondern eine Geschwindigkeit. Die Welle dreht sich weiter, wenn
du einen anderen Pulswert als `1500` Millisekunden an den Servo sendest. Statt eines Drehwinkels ist die Dauer eine Geschwindigkeitsangabe in eine der Richtungen. `1000` Mikrosekunden bedeuten volle Geschwindigkeit nach links und
`2000` Mikrosekunden volle Geschwindigkeit nach rechts. Der Wert `1500` Mikrosekunden bedeutet keine Drehung in irgendeine Richtung.

#### ~hint
Die meisten, aber nicht alle Hobby-Servos verwenden eine Pulsdauer von 1 bis 2 Millisekunden, um die Drehung der Welle zu steuern. Manche
haben einen kleineren Drehbereich oder verwenden andere Pulsdauern für Positionen und Geschwindigkeit. Wenn du einen
solchen Servo hast, finde heraus, welche Pulsdauern die Welle dorthin bewegen, wo du sie haben willst, und verwende sie in
``||pins:servo set pulse||``.
#### ~

### PWM

Der Block ``||set servo pulse||`` ist auch nützlich, um andere [PWM](/reference/pins/what-is-pwm)-Signale zu senden, solange
du eine Signalperiode von 20 Millisekunden verwendest.

## Parameter

* **duration**: eine [Zahl](types/number), die die Länge des an den Servo gesendeten Pulses in Mikrosekunden angibt:
> * _normaler Servo_: wie weit die Welle gedreht werden soll.
>> * Meistens ist `1000` volle Drehung nach links, `2000` volle Drehung nach rechts und `1500` die Neutralstellung.
> * _Dauerrotation_: die Geschwindigkeit, mit der sich die Welle in die eine oder andere Richtung dreht.
>> * Meistens ist `1000` volle Geschwindigkeit nach links, `2000` volle Geschwindigkeit nach rechts und `1500` Stillstand.

## Beispiel #example

Drehe einen normalen Servo an Pin `A1` auf 135 Grad. Warte 3 Sekunden und stelle ihn wieder auf neutral.

```blocks
pins.A1.servoSetPulse(1750)
pause(3000)
pins.A1.servoWrite(1500)
```

## Siehe auch #seealso

[servo write](/reference/pins/servo-write)

[Was ist PWM](/reference/pins/what-is-pwm)
