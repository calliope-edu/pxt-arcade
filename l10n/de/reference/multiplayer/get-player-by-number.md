# get Player By Number

Hole einen Spieler anhand seiner Spielernummer.

```sig
mp.getPlayerByNumber(0)
```

Statt eine [Spielerauswahl](/reference/multiplayer/player-selector) zu verwenden, wird ein [Spieler](/types/player) für eine Spieler**nummer** zurückgegeben. Spielernummern beginnen bei `1` und reichen bis zur maximalen Spieleranzahl (derzeit `4`).

## Parameter

* **number**: eine Spieler[nummer](/types/number).

## Rückgabewert

* der [Spieler](/types/player), der zu **number** passt.

## Beispiel #example

Gib `player 4` zusätzlich `5` Lebenspunkte.

```blocks
mp.changePlayerStateBy(mp.getPlayerByNumber(4), MultiplayerState.life, 5)
```

## Siehe auch #seealso

[Spielerauswahl](/reference/multiplayer/player-selector),
[Spieler nach Index abrufen](/reference/multiplayer/get-player-by-index)

```package
multiplayer
```