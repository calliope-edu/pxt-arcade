# get Player State

Hole den Wert eines Spielerzustands.

```sig
mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score)
```

Informationen wie Punktestand und Leben des Spielers sind im Spielobjekt [Spieler](/types/player) enthalten. Das Spieler-Objekt hat die Zustände ``||mp:score||`` und ``||mp:life||`` bereits hinzugefügt.

## Parameter

* **player**: der [Spieler](/types/player), dessen Zustandswert abgerufen wird.
* **state**: der [Zustand](/reference/multiplayer/multiplayer-state), dessen **Wert** abgerufen wird, z. B. `score` oder `life`.

## Rückgabewert

* **value**: eine [Zahl](/types/number), die der Wert von **state** ist.

## Beispiel #example

Hole die Eigenschaft ``||mp:number||`` für `player 3`.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("I'm player " + mp.getPlayerProperty(mp.playerSelector(mp.PlayerNumber.One), mp.PlayerProperty.Number))
```

## Siehe auch #seealso

[Spielerzustand festlegen](/refernece/multiplayer/set-player-state),
[Spielerzustand ändern um](/reference/multiplayer/change-player-state-by),
[Spielereigenschaft abrufen](/reference/multiplayer/get-player-property)

```package
multiplayer
```