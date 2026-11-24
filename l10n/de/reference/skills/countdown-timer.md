## Countdown-Timer

Bei vielen Spielen muss der Spieler ein Ziel innerhalb einer bestimmten Zeit erreichen. Diese Spiele haben einen Timer, der von einer Anfangszeit herunterzählt und eine Aktivität oder das ganze Spiel beendet, wenn der Timer null erreicht.

### Den Countdown starten

Der Countdown-Timer wird mit dem Block ``||info:starte Countdown||`` eingestellt und gestartet. Die Zeit wird in Sekunden angegeben. Der Timer wird oben auf dem Bildschirm angezeigt, bis die Zeit abgelaufen ist.

```blocks
info.startCountdown(10)
```

### Die Zeit ist um!

Wenn der Countdown-Timer null erreicht, möchtest du vielleicht zu einem neuen Level wechseln oder einfach das Spiel beenden. Das Ende des Countdowns wird im Ereignis ``||info:wenn Countdown endet||`` erfasst.

```blocks
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
```

### Warte, halte die Uhr an!

Auch wenn der Countdown einmal läuft, kannst du ihn trotzdem anhalten. Was ist, wenn der Spieler in deinem Spiel ein Ziel rechtzeitig erreicht? Dann kannst du den Countdown anhalten und im Spiel mit einer neuen Aktivität weitermachen. Das machst du mit ``||info:stoppe Countdown||``. Du könntest den Countdown zum Beispiel anhalten, wenn der Spieler ein Essens-Sprite erreicht.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
    info.stopCountdown()
})
```

### Beispiel

In diesem Beispiel wird der Countdown-Timer auf `30` Sekunden gesetzt und hält an, wenn das Spieler-Sprite sein Ziel erreicht, nämlich das Affen-Sprite. Andernfalls endet das Spiel.

```blocks
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, anderesSprite) {
    info.stopCountdown()
})
let person = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f . . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 4 4 4 f f . . . 
    . . . f f e e f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . . f d d f d d e e f f . . . . 
    . c d d d f d d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c f f f f d d d e e f c f . . . 
    . f b d f f f e e e e f . . . . 
    . f d d f e f f f e e f . . . . 
    . . f f f e e e e f f f . f f . 
    . . f e e f e e e e f f . e f . 
    . f f e e e f f f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f e e d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
person.left = 0
monkey.right = scene.screenWidth()
controller.moveSprite(person)
info.startCountdown(30)
```
