# pulse In

Warte auf einen Puls an einem digitalen Pin und gib an, wie lange der Puls gedauert hat.

```sig
pins.A0.pulseIn(PulseValue.High)
```

Ein Puls ist eine Spannungsänderung am Eingang eines digitalen Pins. Das kann passieren, wenn ein Schalter,
der mit dem Pin verbunden ist, gedrückt wird oder ein Sensor am Pin ein Signal geben will. Ein Puls ist ein
Wechsel der Spannung von hoch nach niedrig oder von niedrig nach hoch. Der Eingang eines Pins wird normalerweise
auf einer hohen oder niedrigen Spannung gehalten, wenn er nicht gepulst wird (sein _Ruhezustand_). Du kannst
festlegen, auf welchem Eingangswert der Pin gehalten wird, wenn er nicht gepulst wird. Das machst du, indem du ihm
mit [``||pins:set pull||``](/reference/pins/set-pull) eine _Pull_-Richtung gibst.

Du wartest auf einen Puls an einem Pin, entweder von `high` nach `low` oder von `low` nach `high`. Ein Puls-**value** von `high`
wird verwendet, wenn du auf einen Wechsel des Eingangs von `low` nach `high` wartest. Ein Puls-**value** von `low` wird verwendet, um auf
einen Wechsel des Eingangs von `high` nach `low` zu warten.

Wenn ``||pins:pulse in||`` einen Puls in der erwarteten Richtung bemerkt, hört es auf zu warten und sagt dir,
wie lange der Puls gedauert hat. Es wartet aber nicht ewig. Es gibt ein Zeitlimit von 2 Sekunden, um auf
den Puls zu warten, und 2 Sekunden für das Ende des Pulses. Wenn der Puls zu lange auf sich warten lässt oder zu
lange dauert, gibt ``||pins:pulse in||`` einfach an, dass der Puls keine Zeit gedauert hat, also 0 Mikrosekunden. Wenn du nicht
2 Sekunden warten willst, kannst du in **maxDuration** eine kürzere Zeit angeben. Die Zeit
wird in Mikrosekunden angegeben (1 Sekunde = 1000000 Mikrosekunden).

## Parameter

* **value**: der Pulswert, auf den gewartet wird, entweder `high` oder `low`.
* **maxDuration**: die längste Zeit, die auf den Puls gewartet wird, in Mikrosekunden, zum Beispiel: 50000.

## Rückgabewert

* eine [Zahl](/types/number), die angibt, wie lange der Puls gedauert hat. Die Pulsdauer ist eine Anzahl von Mikrosekunden.

## Beispiel #example

Prüfe jede halbe Sekunde, ob an Pin `D5` ein `low`-Puls auftritt. Schreibe in die Konsole, wenn es einen Puls gab.

```blocks
let pulseTime = 0;
pins.D5.setPull(PinPullMode.PullUp)

forever(function() {
    pulseTime = pins.D5.pulseIn(PulseValue.Low)
    if (pulseTime > 0) {
        console.logValue("pulse-time", pulseTime)
    }
    pause(500)
})
```

## Siehe auch #seealso

[digital read](/reference/pins/digital-read), [set pull](/reference/pins/set-pull),
[on pulsed](/reference/pins/on-pulsed)
