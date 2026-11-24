# Spielende

Beendet das Spiel und zeigt den Punktestand.

```sig
game.over(false, effects.confetti)
```

Wenn du das Spiel beendest, stoppt die gesamte Spielsteuerung, und es erscheint eine Meldung, dass das Spiel vorbei ist. Die letzte Szene bleibt auf dem Bildschirm stehen, und der aktuelle sowie der höchste Punktestand werden angezeigt. Das Spielprogramm startet neu, wenn du eine Taste oder einen Knopf drückst.

Du kannst außerdem einen optionalen Bildschirmeffekt wählen, der beim Spielende angezeigt wird.

## Parameter

* **win**: ein optionaler [Wahrheitswert](/types/boolean), der angibt, ob das Spiel gewonnen wurde. Ist er `true`, wird eine Meldung angezeigt, dass das Spiel gewonnen wurde.
* **effect**: ein optionaler eingebauter Effekt, der beim Spielende angezeigt wird.

## Beispiel #example

### Keine Leben mehr? Game Over #ex1

Prüfe jede Sekunde, ob noch Leben übrig sind. Wenn nicht, beende das Spiel!

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.over(false)
    }
})
```

### Game-over-Effekt zeigen

Wenn der Punktestand `20` erreicht, beende das Spiel und zeige den ``bubbles``-Effekt.

```blocks
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (info.score() > 20) {
        game.over(false, effects.bubbles)
    }
})
```

## Siehe auch #seealso

[starte Countdown](/reference/info/start-countdown)
