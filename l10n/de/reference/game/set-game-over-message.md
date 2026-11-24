# Game-Over-Nachricht festlegen

Lege eine Nachricht fest, die angezeigt wird, wenn das Spiel vorbei ist.

```sig
game.setGameOverMessage(true, "GAME OVER!")
```

## Parameter

* **win**: ein [boolescher](/types/boolean) Wert. Setze ihn auf `true`, um den **sound** zu starten, wenn der Spieler das Spiel gewinnt. Setze ihn auf `false`, um den **sound** zu starten, wenn der Spieler verliert.
* **message**: eine Nachricht als [Zeichenkette](/types/string), die angezeigt wird, wenn das Spiel vorbei ist.

## Beispiel #example

Beende das Spiel, wenn das Kätzchen-Sprite den linken Bildschirmrand berührt. Zeige eine Nachricht an, wenn der Spieler das Spiel gewinnt.

```blocks
game.setGameOverMessage(true, "Yeah, you WIN!")
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
meinSprite.vx = -20
game.onUpdateInterval(500, function () {
    if (meinSprite.left < 0) {
        game.gameOver(true)
    }
})
```

## Siehe auch #seealso

[Game-Over-Effekt festlegen](/reference/game/set-game-over-effect),
[Game-Over-Sound festlegen](/reference/game/set-game-over-playable)