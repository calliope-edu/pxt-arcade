# Game-Over-Effekt festlegen

Lege einen Effekt fest, der angezeigt wird, wenn das Spiel vorbei ist.

```sig
game.setGameOverEffect(true, effects.confetti)
```

## Parameter

* **win**: ein [boolescher](/types/boolean) Wert. Setze ihn auf `true`, um den Effekt zu starten, wenn der Spieler das Spiel gewinnt. Setze ihn auf `false`, um den Effekt zu starten, wenn der Spieler verliert.
* **effect**: der Effekt, der angezeigt wird, wenn das Spiel vorbei ist, z. B. `confettti`, `hearts` oder `smiles`.

## Beispiel #example

Beende das Spiel, wenn das Kätzchen-Sprite den linken Bildschirmrand berührt. Zeige den Spritzer-Effekt, wenn das Spiel vorbei ist.

```blocks
game.setGameOverEffect(true, effects.splatter)
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

[Game-Over-Nachricht festlegen](/reference/game/set-game-over-message),
[Game-Over-Sound festlegen](/reference/game/set-game-over-playable)
