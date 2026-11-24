# set Player Sprite

Weise einem Spieler ein Figuren-Sprite zu.

```sig
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img``))
```

Das für einen [Spieler](/types/player) festgelegte Sprite wird bewegt, wenn die Controllertasten für den Spieler aktiviert sind. Außerdem werden Spieler[anzeigen]() mit dem Sprite angezeigt.

## Parameter

* **player**: der [Spieler](/types/player), dem ein Sprite zugewiesen wird.
* **sprite**: das Sprite, das als Figuren-Sprite für **player** festgelegt wird.

## Beispiel #example

Lege ein Figuren-Sprite für `player 2` fest und lass es sich mit den Controllertasten bewegen.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
```

## Siehe auch #seealso

[Spieler-Sprite abrufen](/reference/multiplayer/get-player-sprite),
[Spieleranzeigen sichtbar machen](/reference/multiplayer/set-player-indicators-visible)

```package
multiplayer
```