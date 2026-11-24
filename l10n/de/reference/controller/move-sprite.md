# bewege Sprite

Steuere die Bewegung eines Sprites mit den Richtungstasten.

```sig
controller.moveSprite(null, 0, 0)
```

Statt die Richtungstasten in einer Spiel-Aktualisierungsfunktion abzufragen und dann die Position eines Sprites zu ändern, kannst du ein Sprite automatisch bewegen lassen, wenn die Tasten gedrückt werden. Du legst nur fest, wie schnell sich das Sprite horizontal und vertikal bewegt, wenn die entsprechenden Tasten gedrückt werden.

## Parameter

* **sprite**: das [Sprite](/types/sprite), das mit den Tasten gesteuert wird.
* **vx**: eine [Zahl](/types/number), die angibt, wie schnell sich das Sprite horizontal bewegt, wenn die Taste links oder rechts gedrückt wird.
* **vy**: eine [Zahl](/types/number), die angibt, wie schnell sich das Sprite vertikal bewegt, wenn die Taste oben oder unten gedrückt wird.

## Beispiel #example

Erstelle ein Sprite mit einem runden Bild. Bewege das Sprite mit den Richtungstasten über den Bildschirm.

### Ein Spieler

```blocks
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
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
controller.moveSprite(meinSprite, 100, 100)
```

### Mehrspieler

```blocks
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
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
controller.player2.moveSprite(meinSprite, 100, 100)
```

## Siehe auch #seealso

[dx](/reference/controller/dx),
[dy](/reference/controller/dy)