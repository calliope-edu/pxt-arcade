# folgen

Lege fest, dass sich ein Sprite immer zur Position eines anderen Ziel-Sprites bewegt.

```sig
sprites.create(null).follow(null, 0)
```

Wenn du einen Sprite einem Ziel-Sprite folgen lässt, bewegt er sich auf das Ziel zu, indem er es mit einer bestimmten Geschwindigkeit "verfolgt". Wenn der Sprite das Ziel erreichen kann, bevor es sich wieder bewegt, bleibt der Sprite stehen und nimmt dieselbe Position wie der Ziel-Sprite ein. Wenn sie sich nicht bewegen, überlappen sich die Sprites an ihren Mittelpunkten.

## Parameter

* **target**: der Ziel-[Sprite](/types/sprite), dem gefolgt werden soll.
* **speed**: die maximale Verfolgungsgeschwindigkeit nach dem Beschleunigen in Pixeln pro Sekunde, wenn sich der Sprite auf den Ziel-Sprite zubewegt.
* **turnRate**: (optional) die Zeit, die für eine Drehung in Richtung des Ziel-Sprites benötigt wird. Mit dem Standardwert `400` erreicht der Sprite zum Beispiel die Geschwindigkeit **speed** in 125 Millisekunden, wenn er sich um 180 Grad dreht, um das Ziel zu verfolgen. 

## Beispiel

Erstelle 2 Sprites. Lass den zweiten Sprite dem ersten folgen. Ändere jede Sekunde zufällig die Position des ersten Sprites auf dem Bildschirm, sodass der zweite Sprite ihn weiter verfolgt.

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
meinSprite2.follow(meinSprite, 50,)
game.onUpdateInterval(1000, function () {
    meinSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
```

## Siehe auch

[nicht mehr folgen](/reference/sprites/sprite/unfollow),
[überlappt mit](/reference/sprites/sprite/overlaps-with)