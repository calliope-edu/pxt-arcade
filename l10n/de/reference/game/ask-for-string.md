# frage nach Text

Fragt die Spielerin oder den Spieler nach einem Text.

```sig
game.askForString("")
```

Die Spielerin oder der Spieler wird aufgefordert, einen Text einzugeben. Deine Nachricht wird angezeigt, und darunter werden die Zeichen für die Antwort ausgewählt. Jedes Zeichen der Antwort wird mit dem Knopf **A** ausgewählt. Du kannst die Anzahl der Zeichen begrenzen, die eingegeben werden können.

Um die Eingabe abzuschließen, wird **OK** ausgewählt und der Knopf **A** gedrückt. Der Antworttext wird dann an dein Programm zurückgegeben.

## Parameter

* **message**: ein [Text](/types/string) mit der Aufforderung, die nach einer Antwort fragt.
* **answerLength**: die [Anzahl](/types/number) der Zeichen, die eingegeben werden dürfen. Das Maximum ist `24`, der Standardwert ist `12`.

## Rückgabewert

* ein [Text](/types/string), die eingegebene Antwort.

## Beispiel #example

Frage nach einem Freischaltcode, um das Spiel fortzusetzen.

```blocks
let unlock = "98745"
if (game.askForString("unlock code:", 5) != unlock) {
    game.gameOver(false)
}
```

## Siehe auch #seealso

[frage](/reference/game/ask),
[frage nach Zahl](/reference/game/ask-for-number)