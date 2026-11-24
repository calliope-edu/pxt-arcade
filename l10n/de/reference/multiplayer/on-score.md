# on Score

Führe Code aus, wenn der Punktestand eines Spielers einen bestimmten Wert erreicht.

```sig
mp.onScore(100, function (player) {})
```

## Parameter

* **score**: eine [Zahl](/types/number), die der Punktestand ist, der das Ereignis auslöst.
* **handler**: der Code, der ausgeführt wird, wenn der Punktestand eines Spielers den Wert in **score** erreicht.

## Beispiel #example

Belohne jeden Spieler, der einen Punktestand von `100` erreicht, mit `1` zusätzlichen Lebenspunkt.

```blocks
mp.onScore(100, function (player) {
    mp.changePlayerStateBy(player, MultiplayerState.score, 1)
})
```

## Siehe auch #seealso

[wenn Leben null](/reference/multiplayer/on-life-zero)

```package
multiplayer
```
