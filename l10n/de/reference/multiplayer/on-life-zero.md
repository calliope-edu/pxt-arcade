# on Life Zero

Führe Code aus, wenn die Lebenspunkte eines Spielers null erreichen.

```sig
mp.onLifeZero(function (player) {})
```

## Parameter

* **handler**: der Code, der ausgeführt wird, wenn die Lebenspunkte eines Spielers den Wert `0` erreichen.

## Beispiel #example

Lass das Sprite des Spielers einen Notruf anzeigen, wenn seine Lebenspunkte null erreichen.

```blocks
mp.onLifeZero(function (player) {
    mp.getPlayerSprite(player).sayText("Medic, help!!!")
})
```
## Siehe auch #seealso

[bei Punktestand](/reference/multiplayer/on-score)

```package
multiplayer
```
