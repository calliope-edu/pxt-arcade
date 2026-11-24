# millis

Ruft die Anzahl der Millisekunden ab, die vergangen sind, seit das Board eingeschaltet wurde.

```sig
control.millis()
```

## Rückgabewert

* die [Anzahl](/types/number) der Millisekunden seit dem Einschalten des Boards.

## Beispiel #example

Finde heraus, wie viele Tage, Stunden, Minuten und Sekunden der @boardname@ schon läuft.

```blocks
let msecs = control.millis()
let seconds = msecs / 1000
let mins = seconds / 60
let hours = mins / 60
let days = hours / 24
```

## #seealso
