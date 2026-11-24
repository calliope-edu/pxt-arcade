# starte Countdown

Starte den Countdown-Timer für die Spielzeit. Das aktuelle Spiel dauert so lange.

```sig
info.startCountdown(0)
```

Die Spielzeit wird in Sekunden angegeben. Wenn die Spielzeit abgelaufen ist, erscheint eine „Game Over“-Meldung und das aktuelle Spiel endet.

## Parameter

* **duration**: die [Anzahl](/types/number) Sekunden, die das Spiel dauern soll.

## Beispiel #example

Setze die Spielzeit auf `30` Sekunden.

```blocks
info.startCountdown(30)
```

## Siehe auch #seealso

[setze Punktestand](/reference/info/set-score),
[stoppe Countdown](/reference/info/stop-countdown),
[wenn Countdown endet](/reference/info/on-countdown-end)
