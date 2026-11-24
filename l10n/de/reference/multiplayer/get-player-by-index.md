# get Player By Index

Hole einen Spieler aus der Spielerliste des Mehrspielerspiels anhand eines Indexwerts.

```sig
mp.getPlayerByIndex(0)
```

Du kannst ein [Spieler](/types/player)-Objekt aus dem Mehrspielermodus mit einem Indexwert für eine Position in der Liste abrufen. Indexwerte beginnen bei `0` für die erste Listenposition und reichen bis zur maximalen Spieleranzahl minus `1` (derzeit maximal `4` Spieler, also ist der größte Listenindex `4 - 1` = `3`).

## Parameter

* **index**: eine [Zahl](/types/number), die der Index des Spielers in der Mehrspielerliste ist.

## Rückgabewert

* der [Spieler](/types/player) an der Position **index** in der Mehrspielerliste.

## Beispiel #example

Finde alle Spieler mit einem Punktestand größer als `20` und gib ihnen einen Bonus von `5` Punkten.

```blocks
let player: mp.Player = null
for (let index = 0; index <= 3; index++) {
    player = mp.getPlayerByIndex(index)
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