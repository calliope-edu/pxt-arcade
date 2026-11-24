# analog Set Period

Verwende diese Periodendauer für Servo-Befehle und andere PWM-Signale.

```sig
pins.A1.analogSetPeriod(20000)
```

Bei der _Pulsweitenmodulation (PWM)_ wird regelmäßig, viele Male pro Sekunde, ein Impulssignal gesendet.
Wie oft pro Sekunde ein Impuls gesendet wird, bestimmt seine Periode. Wenn ein _PWM_-Signal 50
Mal pro Sekunde gesendet wird, beträgt seine Periode 1/50 Sekunde, also 20 Millisekunden.

Die Periodendauer deines _PWM_-Signals gibst du in Mikrosekunden an. Eine Sekunde hat eine Million
Mikrosekunden und 1 Millisekunde hat 1000 Mikrosekunden.

## Parameter

* **period**: eine [Zahl](types/number), die die Periode des am Pin gesendeten Impulssignals angibt.

## Beispiel #example

Setze die Periode eines PWM-Signals auf 20 Millisekunden.

```blocks
pins.A1.analogSetPeriod(20000)
```

## Siehe auch #seealso

[servo write](/reference/pins/servo-write),
[servo set pulse](/reference/pins/servo-set-pulse)

[Was ist PWM?](/reference/pins/what-is-pwm)
