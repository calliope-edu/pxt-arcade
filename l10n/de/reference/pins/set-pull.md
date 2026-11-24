# set Pull

Lege fest, ob ein digitaler Pin hohe oder niedrige Spannung als „Eingangssignal aus“ verwendet.

```sig
pins.A0.setPull(PinPullMode.PullDown)
```

Wenn du einen digitalen Pin verwendest, um ein Eingangssignal zu empfangen, hat der Pin normalerweise
eine _Pull_-Richtung. Das bedeutet: Solange am Pin kein Eingangssignal anliegt, liest er `true`, wenn
die Pull-Richtung `up` ist. Ist die Pull-Richtung aber `down`, liest der Pin `false`.

Um die Pull-Richtung festzulegen, entscheidest du, welche Spannung (hohe oder niedrige Spannung) bedeuten soll,
dass das Eingangssignal am Pin ausgeschaltet ist. Der Mikroprozessor auf deinem Board verbindet den Pin mit hoher
Spannung, wenn du ihn auf `up` setzt, und mit niedriger Spannung, wenn du ihn auf `down` setzt.

Wenn du nun ein Signal am Pin auslösen willst, schließt du deinen Schalter oder Sensor so an, dass er
den Pin mit der entgegengesetzten Spannung zur eingestellten Pull-Richtung verbindet. Wenn du zum Beispiel
Pin `D7` auf `up` setzt, verbindest du ein Bein eines Schalters mit dem Pin und das andere
Bein mit niedriger Spannung (GND). Wenn du den Schalter drückst, wird Pin `D7` jetzt auf `low` gezogen,
weil er mit der niedrigen Spannung verbunden wird. Wir sagen dann, der Pin ist _signalisiert_.

Wenn die Pull-Richtung des Pins auf `down` gesetzt ist, wird der Pin natürlich signalisiert, wenn er
mit hoher Spannung verbunden wird (auf `high` gezogen).

Du kannst Code schreiben, der darauf wartet, dass ein Pin von `high` auf `low` oder von `low` auf `high` wechselt. Das
nennt man ein _Puls_-Ereignis.

## Parameter

*  **pull**: die Pull-Richtung für den Pin
> * `up`: Der Pin wird nach oben gezogen (auf hohe Spannung gesetzt), wenn er nicht signalisiert ist, und liest `true`.
> * `down`: Der Pin wird nach unten gezogen (auf niedrige Spannung gesetzt), wenn er nicht signalisiert ist, und liest `false`.
> * `none`: Der Pin ist weder mit hoher noch mit niedriger Spannung verbunden. Ein externer Widerstand oder andere
Elektronik bestimmt die Pull-Richtung.

## Beispiel #example

Setze die Pull-Richtung für den digitalen Pin `D4` auf `up`. Lass die LED an Pin `D13` für
eine Viertelsekunde aufleuchten, wenn an Pin `D4` ein Puls auf `low` erkannt wird.

```blocks
pins.D4.setPull(PinPullMode.PullUp)

pins.D4.onPulsed(PulseValue.Low, () => {
    pins.D13.digitalWrite(true)
    pause(250)
    pins.D13.digitalWrite(false)
})
```

## Siehe auch #seealso

[digital read](/reference/pins/digital-read),
[on pulsed](/reference/pins/on-pulsed),
[pulse in](/reference/pins/pulse-in)
