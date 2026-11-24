# millis

Ruft die Anzahl der Sekunden ab, die vergangen sind, seit das Board eingeschaltet oder zuletzt zurückgesetzt wurde.

```sig
control.seconds()
```

## Rückgabewert

* die [Anzahl](/types/number) der Sekunden seit dem Zurücksetzen des Boards.

## Beispiel #example

Finde heraus, wie viele Tage, Stunden, Minuten und Sekunden der @boardname@ schon läuft.

```blocks
let seconds = control.seconds()
let mins = seconds / 60
let hours = mins / 60
let days = hours / 24
```

## #seealso
