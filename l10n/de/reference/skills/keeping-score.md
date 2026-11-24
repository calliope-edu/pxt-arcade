## Punkte zählen

Punkte zu zählen gehört zu fast jedem Spiel dazu. Punkte gibt es für Erfolge, für das Ausschalten von Gegnern oder für Treffer gegen einen anderen Spieler.

Punkte werden normalerweise gezählt, wenn ein bestimmtes Ereignis passiert. Solche Ereignisse sind zum Beispiel, wenn ein Projektil ein anderes Sprite berührt oder wenn ein Sprite eine bestimmte Kachel in der Spielszene erreicht.

Der Punktestand des Spiels wird mit den Blöcken ``||info:setze Punktestand||`` und ``||info:ändere Punktestand um||`` gesetzt und geändert.

```block
info.setScore(0)
info.changeScoreBy(1)
```

Sobald die Blöcke ``||info:setze Punktestand||`` oder ``||info:ändere Punktestand um||`` verwendet werden, wird der aktuelle Punktestand auf dem Bildschirm angezeigt. Mit ``||info:setze Punktestand||`` kannst du einen Anfangspunktestand festlegen oder ihn auf einen anderen Wert zurücksetzen. Der Block ``||info:ändere Punktestand um||`` addiert einen bestimmten Betrag zum Punktestand; wenn du willst, kann er den Punktestand um mehr als nur `1` Punkt ändern. Punktestände können auch negativ sein, und du kannst Punkte mit einem negativen Wert in ``||info:ändere Punktestand um||`` abziehen.

### Beispiel

Als einfaches Beispiel für das Zählen von Punkten schießt der Spieler im folgenden Spiel ein Projektil auf ein gegnerisches Sprite. Wenn das Projektil das gegnerische Sprite trifft, was im Überlappungsereignis der Sprites erkannt wird, erhöht sich der Punktestand um `1` Punkt.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projektil = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, blaster, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
    sprite.startEffect(effects.confetti, 500)
    sprite.x = randint(100, 150)
    sprite.y = randint(0, scene.screenHeight())
})
let projektil: Sprite = null
let blaster: Sprite = null
info.setScore(0)
blaster = sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(blaster, 0, 100)
blaster.left = 0
let ball = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Enemy)
ball.x = 140
```

### Den aktuellen Punktestand abfragen

Wenn du in deinem Spielcode auf den aktuellen Punktestand zugreifen möchtest, liefert dir der Block ``||info:Punktestand||`` den aktuellen Wert.

```blocks
let bonus = 0
game.onUpdateInterval(500, function () {
    if (info.score() == 20) {
        info.changeScoreBy(bonus)
    }
})
```

### Wie hoch ist der Highscore?

Manchmal möchtest du vielleicht verkünden, dass ein neuer Highscore erreicht wurde. Dein Spiel merkt sich den höchsten erreichten Punktestand, und du bekommst ihn mit dem Block ``||info.Highscore||``.

```blocks
let showOnce = true
let meinSprite = sprites.create(img`
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 
    . 5 5 5 5 5 f f f f f 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, anderesSprite) {
	if ((info.score() == info.highScore()) && showOnce) {
        meinSprite.say("High score!")
        showOnce = false
    }
    info.changeScoreBy(1)
})
```
