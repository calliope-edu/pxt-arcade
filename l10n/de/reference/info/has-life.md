# hat Leben

```sig
info.player2.hasLife()
```

Gibt ``true`` zurück, wenn die Anzahl der Leben des Spielers größer als null ist.

## Rückgabewert

* ein [boolescher Wert](/types/boolean), der ``true`` ist, wenn der Spieler noch Leben übrig hat. Andernfalls wird ``false`` zurückgegeben.

## Beispiel #Example

Ziehe dem Spieler alle `100` Millisekunden ein Leben ab. Wenn die Leben des Spielers 0 erreichen, beende das Spiel vorzeitig.

```blocks
info.player2.setLife(20)
game.onUpdate(function () {
    if (info.player2.hasLife() == false) {
        game.gameOver(false)
    }
}) 

game.onUpdateInterval(100, function () {
    info.player2.changeLifeBy(-1)
})
```

## Siehe auch

[ändere Leben um](/reference/info/change-life-by),
[wenn Leben null](/reference/info/on-life-zero)