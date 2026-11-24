# stoppe Countdown

Stoppt den Countdown-Timer, aber das Spiel läuft weiter.

```sig
info.stopCountdown()
```

Wenn du den Spieltimer stoppst, läuft das Spiel weiter, aber es gibt kein Zeitlimit mehr. Du kannst den Countdown nicht an der vorherigen Zeit fortsetzen. Du musst den Countdown neu starten, um wieder ein Zeitlimit für das Spiel festzulegen.

## Beispiel #example

Setze die Spielzeit auf `30` Sekunden. Warte `5` Sekunden, stoppe den Countdown, warte `2` Sekunden und beende das Spiel.

```blocks
info.startCountdown(30)
pause(5000)
info.stopCountdown()
pause(2000)
game.gameOver(false)
```

## Siehe auch #seealso

[starte Countdown](/reference/info/start-countdown),
[wenn Countdown endet](/reference/info/on-countdown-end)
