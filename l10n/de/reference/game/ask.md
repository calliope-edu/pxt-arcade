# frage

Stellt eine Ja/Nein-Frage, die mit dem Knopf **A** oder **B** beantwortet wird.

```sig
game.ask("")
```

Du stellst eine Frage, die durch Drücken von Knopf **A** oder **B** beantwortet wird. Wird **A** gedrückt, ist das Ergebnis `true`. Wird **B** gedrückt, ist das Ergebnis `false`. Du kannst optional einen Untertitel als zweiten Teil deiner Frage angeben.

## Parameter

* **title**: ein [Text](/types/string) mit deiner Frage.
* **subtitle**: ein [Text](/types/string) als optionaler zweiter Teil deiner Frage.

## Rückgabewert

* ein [Wahrheitswert](/types/boolean): `true`, wenn als Antwort **A** gedrückt wurde, und `false`, wenn **B** gedrückt wurde.

## Beispiel #example

Frage, ob die nächste Spielstufe gespielt werden soll. Wenn ja, setze den Punktestand auf `0`. Andernfalls beende das Spiel.

```blocks
if (game.ask("Ready to play?", "Next: advanced level")) {
    info.setScore(0)
} else {
    game.gameOver(false)
}
```

## Siehe auch #seealso

[frage nach Text](/reference/game/ask-for-string),
[frage nach Zahl](/reference/game/ask-for-number)