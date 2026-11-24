# is Connected

Prüfe, ob ein Spieler mit dem Spiel verbunden ist.

```sig
mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))
```

## Parameter

* **player**: der Spieler, dessen Verbindungszustand geprüft wird.

## Rückgabewert

* ein [boolescher](/types/boolean) Wert für den Verbindungszustand des Spielers: `true` für verbunden und `false` für getrennt.

## Beispiel #example

Wenn `player 2` nicht mehr mit dem Spiel verbunden ist, gewinnt `player 1` automatisch.

```blocks
let pressCount = 0
game.onUpdateInterval(10000, function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
})
```

## Siehe auch #seealso

[Spielerzustand abrufen](/reference/multiplayer/get-player-state)

```package
multiplayer
```