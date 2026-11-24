# analog Write

Schreibe einen Wert zwischen `0` und `1023`, um ein Signal an einem analogen Pin zu erzeugen.

```sig
pins.A0.analogWrite(0)
```
Ein analoger Ausgang an einem Pin hat eine Spannung, die von dem Ausgabewert abhängt,
den du an ``||pins:analog write||`` übergibst. Du legst damit die Stärke des _Signals_ am Pin fest.
Du verwendest Werte zwischen `0` (kein Signal) und `1023` (volles Signal). Die tatsächliche Spannung
am Pin folgt dem Wert, den du ausgibst. `0` bedeutet also keine Spannung und `1023`
die maximale Spannung. Welche Spannung deinem Signalwert entspricht, hängt vom
Spannungsbereich deines Boards ab.

## Parameter

*  **value**: eine [Zahl](types/number) zwischen `0` (kein Signal) und `1023` (volles Signal)


## Beispiel #example

Erzeuge ein Sägezahnsignal an Pin `A0`.

```blocks
let i = 0
forever(() => {
    i = 0
    while (i <= 1023) {
        pins.A0.analogWrite(i)
        pause(100)
        if (i > 0) {
            i += 128
        } else {
            i += 127
        }
    }
})

```

## Siehe auch #seealso

[analog read](/reference/pins/analog-read)
