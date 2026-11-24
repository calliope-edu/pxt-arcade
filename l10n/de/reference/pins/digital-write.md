# digital Write

Schreibe einen Wert `false` oder `true` an einen digitalen Pin.

```sig
pins.A0.digitalWrite(false)
```
Digitale Pins schreiben einen von zwei Werten: `false` oder `true`. Oft bedeutet `false`, dass etwas, das
am Pin angeschlossen ist, **aus** ist oder den Status `false` hat. Genauso bedeutet `true`, dass etwas,
das am Pin angeschlossen ist, **an** ist oder den Status `true` hat.

Der Wert des letzten ``||pins:digital write||`` bleibt am Pin, bis ein weiteres ``||pins:digital write||``
ausgeführt wird.

## Parameter

* **value**: ein [boolescher](types/boolean) Wert, der entweder `false` oder `true` ist. Was der Wert bedeutet, hängt davon ab, wie sich das am Pin angeschlossene Bauteil verhält, wenn es den neuen Wert bekommt.

## Beispiel #example

Schalte eine LED auf deinem Steckbrett ein, die an Pin `D4` angeschlossen ist. Dazu schreibst du den Wert `true` an den Pin.

```blocks
pins.D4.digitalWrite(true)
```

## Siehe auch #seealso

[digital read](/reference/pins/digital-read)
