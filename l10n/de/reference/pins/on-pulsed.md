# on Pulsed **veraltet**

### ~hint

Verwende stattdessen [pins.onEvent](/reference/pins/on-event).

### ~

Führe Code aus, wenn ein Pin mit `high` (true) oder `low` (false) gepulst wird.

```sig
pins.A0.onPulsed(PulseValue.High, () => {})
```

Ein Puls ist eine Spannungsänderung am Eingang eines digitalen Pins. Das kann passieren, wenn ein Schalter,
der mit dem Pin verbunden ist, gedrückt wird oder ein Sensor am Pin ein Signal geben will. Ein Puls ist ein
Wechsel der Spannung von hoch nach niedrig oder von niedrig nach hoch. Der Eingang eines Pins wird normalerweise
auf einer hohen oder niedrigen Spannung gehalten, wenn er nicht gepulst wird (sein _Ruhezustand_). Du kannst
festlegen, auf welchem Eingangswert der Pin gehalten wird, wenn er nicht gepulst wird. Das machst du, indem du ihm
mit [``||pins:set pull||``](/reference/pins/set-pull) eine _Pull_-Richtung gibst.

Dein Code steht in einem Ereignisblock, der startet, wenn sich die Eingangsspannung am Pin ändert. Du gibst die
Pulsrichtung an, für die der Code laufen soll. Setze den Wert für **pulse** auf `high`, wenn der Code starten soll,
wenn der Pin von einer niedrigen auf eine hohe Spannung wechselt. Verwende `low` für **pulse**, wenn dein Code
laufen soll, wenn die Spannung am Pin von hoch auf niedrig geht.

## Parameter

* **pulse**: der Pulswert, für den der Code laufen soll.
* **body**: der Code, der ausgeführt wird, wenn der Pin gepulst wird.

## Beispiel #example

Wenn Pin `D4` mit `low` gepulst wird, führe Code aus, der eine LED an Pin `D13` aufblinken lässt.

```blocks
pins.D4.setPull(PinPullMode.PullUp)

pins.D4.onPulsed(PulseValue.Low, () => {
    pins.D13.digitalWrite(true)
    pause(250)
    pins.D13.digitalWrite(false)
})
```

## Siehe auch #seealso

[pulse in](/reference/pins/pulse-in), [set pull](/reference/pins/set-pull)
