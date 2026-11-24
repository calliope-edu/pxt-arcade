# wenn Punktestand

Führe Code einmal aus, wenn der Punktestand des Spielers den angegebenen Wert erreicht. Dieser Code wird auch einmal ausgeführt, wenn der Punktestand den angegebenen Wert "überspringt", weil er um mehr als 1 geändert wurde.

```sig
info.onScore(100, function () {})
```

## Parameter

* **score**: der Ziel-Punktestand, bei dem dieses Ereignis ausgeführt wird
* **handler**: der Code, der ausgeführt wird, wenn der Punktestand den Zielwert erreicht oder überschreitet.

## Beispiel #example

### Klickspiel #ex1

Ändere den Punktestand des Spielers bei jedem Tastendruck um 1 und zeige einen Text an, wenn der Punktestand 100 erreicht!

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onScore(100, function () {
    game.splash("Score is " + info.score())
})

```

### Mehrspieler #ex2

Gib bei jeder Spielaktualisierung zufällig Spieler 1 oder Spieler 2 einen Punkt. Wer zuerst 100 erreicht, gewinnt!

```blocks
info.player2.onScore(100, function () {
    game.splash("Player 2 wins!")
    game.reset()
})
info.player1.onScore(100, function () {
    game.splash("Player 1 wins!")
    game.reset()
})
game.onUpdate(function () {
    if (Math.percentChance(50)) {
        info.player1.changeScoreBy(1)
    } else {
        info.player2.changeScoreBy(1)
    }
})

```

### Den Ziel-Punktestand überschreiten #ex3

Dieses Beispiel zeigt, was passiert, wenn der Punktestand um einen Wert größer als 1 geändert wird. Wenn die Taste A gedrückt wird, ändert sich der Punktestand
des Spielers um 10. Das Ereignis wird trotzdem ausgeführt, obwohl es auf einen Punktestand von 5 wartet!

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(10)
})
info.onScore(5, function () {
    game.splash("Score is " + info.score())
})

```

## Siehe auch #seealso

[Punktestand](/reference/info/score),
[Punktestand festlegen](/reference/info/set-score),
[ändere Punktestand um](/reference/info/change-score-by)