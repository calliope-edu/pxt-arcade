# Spiel beenden

Beendet das Spiel und zeigt den Punktestand.

```sig
game.gameOver(false)
```

Wenn du das Spiel beendest, stoppt die gesamte Spielsteuerung, und es erscheint eine Meldung, dass das Spiel vorbei ist. Die letzte Szene bleibt auf dem Bildschirm stehen, und der aktuelle sowie der höchste Punktestand werden angezeigt. Das Spielprogramm startet neu, wenn du eine Taste oder einen Knopf drückst.

Wenn eine Game-over-Nachricht für Sieg oder Niederlage festgelegt ist, wird sie angezeigt. Ist ein Game-over-Effekt festgelegt, wird er ebenfalls gezeigt, und auch ein Game-over-Sound, falls einer festgelegt ist. Ist für Sieg oder Niederlage keine Nachricht, kein Effekt und kein Sound festgelegt, wird ein Standard verwendet.

## Parameter

* **win**: ein optionaler [Wahrheitswert](/types/boolean), der angibt, ob das Spiel gewonnen wurde.

## Beispiel #example

### Keine Leben mehr? Game Over #ex1

Prüfe jede Sekunde, ob noch Leben übrig sind. Wenn nicht, beende das Spiel!

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.setGameOverEffect(false, effects.dissolve)
        game.gameOver(false)
    }
})
```

### Game-over-Effekt zeigen #ex2

Wenn der Punktestand `20` erreicht, beende das Spiel und zeige den ``bubbles``-Effekt.

```blocks
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (info.score() > 20) {
        game.setGameOverEffect(false, effects.bubbles)
        game.gameOver(false)
    }
})
```

## Siehe auch #seealso

[starte Countdown](/reference/info/start-countdown),
[setze Game-over-Effekt](/reference/game/set-game-over-effect),
[setze Game-over-Nachricht](/reference/game/set-game-over-message),
[setze Game-over-Sound](/reference/game/set-game-over-playable)
