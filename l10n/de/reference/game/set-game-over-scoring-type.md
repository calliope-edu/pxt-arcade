# Game-Over-Wertungsart festlegen

Lege die Wertungsart fest, mit der der beste Punktestand über mehrere Spiele bestimmt wird.

```sig
game.setGameOverScoringType(game.ScoringType.HighScore)
```

Wenn mit deinem Spielprogramm mehrere Spiele gespielt werden, kannst du festlegen, wie der beste Punktestand gespeichert wird. Du kannst den höchsten, den niedrigsten oder gar keinen Punktestand als besten Punktestand verwenden.

## Parameter

* **type**: die Wertungsart, mit der der beste Punktestand über mehrere Spiele gespeichert wird:
>* `highest`: der höchste Punktestand wird als bester Punktestand verwendet.
>* `lowest`: der niedrigste Punktestand wird als bester Punktestand verwendet.
>* `none`: es wird kein bester Punktestand gespeichert.

## Beispiel #example

Setze die Wertungsart auf `lowest`. Bewege das Spieler-Sprite nach oben oder unten, um den Projektilen auszuweichen. Wenn dein Spieler von Projektilen getroffen wird, erhöht sich dein Punktestand. Der niedrigste Punktestand aller gespielten Spiele wird gespeichert.

```blocks
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
})
let projektil: Sprite = null
game.setGameOverScoringType(game.ScoringType.LowScore)
let meinSprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
meinSprite.left = 10
controller.moveSprite(meinSprite, 0, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projektil = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -60, randint(-30, 30))
})
```

## Siehe auch #seealso

[Game-Over-Effekt festlegen](/reference/game/set-game-over-effect),
[Game-Over-Sound festlegen](/reference/game/set-game-over-playable),
[Game-Over-Nachricht festlegen](/reference/game/set-game-over-message)