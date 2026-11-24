# frage nach Zahl

Fragt die Spielerin oder den Spieler nach einer Zahl.

```sig
game.askForNumber("")
```

Die Spielerin oder der Spieler wird aufgefordert, eine Zahl einzugeben. Deine Nachricht wird angezeigt, und mit dem Ziffernfeld wird die Zahl ausgewählt, die zurückgegeben werden soll. Jede Ziffer der Antwort wird mit dem Knopf **A** ausgewählt. Du kannst die Anzahl der Ziffern begrenzen, die eingegeben werden können.

Um die Eingabe abzuschließen, wird **OK** ausgewählt und der Knopf **A** gedrückt. Die Antwort wird dann an dein Programm zurückgegeben.

## Parameter

* **message**: ein [Text](/types/string) mit der Aufforderung, die nach einer Antwort fragt.
* **answerLength**: die [Anzahl](/types/number) der Ziffern, die eingegeben werden dürfen. Das Maximum ist `10`, der Standardwert ist `6`.

## Rückgabewert

* eine [Zahl](/types/number), die eingegebene Antwort.

## Beispiel #example

Frage, wie oft der Code wiederholt werden soll.

```blocks
let numOfRepeats = game.askForNumber("How many times should this repeat?")
for (let i = 0; i < numOfRepeats; i++) {
    game.splash("repeated");
}
```

## Siehe auch #seealso

[frage](/reference/game/ask),
[frage nach Text](/reference/game/ask-for-string)