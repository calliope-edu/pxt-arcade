# is Button Pressed

Prüfe, ob eine Controllertaste eines Spielers gedrückt ist oder nicht.

```sig
mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)
```

## Parameter

* **player**: der Spieler, dessen Tastenzustand geprüft wird.
* **button**: die Controllertaste, die auf gedrückt geprüft wird.

## Rückgabewert

* ein [boolescher](/types/boolean) Wert für den Zustand der Taste **button** von **player**. Er ist `true`, wenn die Taste gedrückt ist, und `false`, wenn sie nicht gedrückt ist.

## Beispiel #example

Wenn `player 2` die Pfeiltaste nach oben zu lange drückt, gewinnt `player 1`.

```blocks
let pressCount = 0
game.onUpdateInterval(500, function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        pressCount += 1
        if (pressCount > 1) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
        }
    } else {
        pressCount = 0
    }
})
```

## Siehe auch #seealso

[wenn Taste gedrückt](/reference/multiplayer/on-button-pressed),
[mit Tasten bewegen](/reference/multiplayer/move-with-buttons)


```package
multiplayer
```