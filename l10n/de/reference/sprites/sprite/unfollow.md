# nicht mehr folgen

Sorge dafür, dass ein Sprite keinem Ziel-Sprite mehr folgt.

```sig
sprites.create(null).unfollow()
```

Wenn ein Sprite nicht mehr folgen soll, bewegt er sich nicht mehr auf einen zuvor festgelegten Ziel-Sprite zu. Die Geschwindigkeit des Sprites wird auf null gesetzt, und er bleibt an seiner aktuellen Position, bis du ihn auf andere Weise wieder bewegst.

## Beispiel

Erstelle 2 Sprites. Lass den zweiten Sprite dem ersten folgen. Sorge nach 3 Sekunden dafür, dass der zweite Sprite nicht mehr folgt.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let meinSprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite2.follow(meinSprite, 50)
game.onUpdateInterval(1000, function () {
    meinSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
pause(3000)
meinSprite2.unfollow()
```

## Siehe auch

[folgen](/reference/sprites/sprite/follow)
