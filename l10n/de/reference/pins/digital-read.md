# digital Read

Liest ein digitales `false` oder `true` von einem Pin.

```sig
pins.A0.digitalRead()
```

Digitale Pins lesen einen von zwei Werten: `false` oder `true`. Oft bedeutet `false`, dass etwas, das
am Pin angeschlossen ist, **aus** ist oder den Status `false` hat. Genauso bedeutet `true`, dass etwas,
das am Pin angeschlossen ist, **an** ist oder den Status `true` hat.

## Rückgabewert

* ein [boolescher](types/boolean) Wert, der entweder `false` oder `true` ist. Was der Wert bedeutet, hängt davon ab, wie das am Pin angeschlossene Bauteil entscheidet, welchen Wert es liefert.

## Beispiel #example

Prüfe, ob ein Schalter auf deinem Steckbrett an oder aus ist. Der Schalter ist an Pin `D4` angeschlossen. Schreibe die Stellung des Schalters in die Konsole.

```blocks
let mySwitchOn = pins.D4.digitalRead();

if (mySwitchOn) {
    console.log("Switch at D4 is ON")
} else {
    console.log("Switch at D4 is OFF")
}
```

## Siehe auch #seealso

[digital write](/reference/pins/digital-write)
