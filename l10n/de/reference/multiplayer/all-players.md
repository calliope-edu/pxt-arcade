# all Players

Rufe alle Spieler in der Spielerliste des Mehrspielerspiels ab.

```sig
mp.allPlayers()
```

Wenn du auf die Liste aller Spieler im Spiel zugreifen möchtest, kannst du die gesamte Spielerliste als Array erhalten.

## Rückgabewert

* eine [Spieler](/types/player)-Liste aller Spieler im Mehrspielerspiel.

## Beispiel #example

Finde alle Spieler, deren Punktestand größer als `20` ist, und gib ihnen einen Bonus von `5` Punkten.

```blocks
for (let player of mp.allPlayers()) {
    if (mp.getPlayerState(player, MultiplayerState.score) > 20) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 5)
    }
}
```

## Siehe auch #seealso

[Spielerauswahl](/reference/multiplayer/player-selector),
[Spieler nach Nummer abrufen](/reference/multiplayer/get-player-by-number)

```package
multiplayer
```