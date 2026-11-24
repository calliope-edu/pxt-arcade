# wenn überlappt

Führe Code aus, wenn ein Sprite einer bestimmten Art einen anderen Sprite überlappt. 

```sig
sprites.onOverlap(0, 0, function (sprite, anderesSprite) {
	
})
```

Erkannt wird eine Überlappung mit einem Sprite derselben oder einer anderen Art. Wenn du wissen willst, wann ein ``Player``-Sprite einen ``Enemy``-Sprite überlappt, setzt du die erste Sprite-Art auf ``Player`` und die zweite Sprite-Art in **otherKind** auf ``Enemy``. Eine Überlappung zweier Spieler-Sprites erkennst du zum Beispiel, indem du **kind** und **otherKind** beide auf ``Player`` setzt.

Wenn eine Überlappung erkannt wird, bekommst du den Sprite der ersten Art im Parameter **sprite** von **handler**. Der Sprite der zweiten Art steht in **anderesSprite**.

Eine Überlappung zweier Sprites wird erkannt, wenn das erste nicht transparente Pixel im Bild des ersten Sprites das erste nicht transparente Pixel des zweiten Sprites überlappt. Wenn bei einem Sprite das Flag ``ghost`` gesetzt ist, wird keine Überlappung mit einem anderen Sprite bemerkt. Eine Überlappung tritt außerdem auch dann auf, wenn die **Z**-Werte der Sprites unterschiedlich sind.

## Parameter

* **kind**: die erste Sprite-Art, die auf Überlappung geprüft wird.
* **otherKind**: die zweite Sprite-Art, die auf Überlappung geprüft wird.
* **handler**: der Code, der ausgeführt wird, wenn sich die Sprites überlappen.
>* **sprite**: der erste überlappende Sprite.
>* **anderesSprite**: der zweite überlappende Sprite.

## Beispiel #example

Erstelle einen ``Ghost``-Sprite, der von gelben Bällen beschossen wird. Lass die Bälle durch den Sprite hindurchfliegen, bis sein Geisterstatus durch Drücken der Taste **A** entfernt wird. Wenn der ``Ghost``-Sprite ungeschützt ist, wird jeder Kontakt mit den Bällen in ``||sprites:on overlap||`` erkannt. Lass die Bälle den ``Ghost``-Sprite vom Bildschirm schieben.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.setVelocity(-50, 50)
    sprite.sayText("Ouch!", 200, false)
    sprite.setPosition(sprite.x + 2, sprite.y + 2)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.gameOver(false)
})
let projektil: Sprite = null
let ghost: Sprite = null
ghost = sprites.create(img`
    . . . . . . d d d d d . . . . . 
    . . . d d d d 1 1 1 d d d . . . 
    . . d d 1 1 1 1 1 1 1 1 d d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d d . 
    . d d 1 1 1 f 1 1 1 f 1 1 1 d . 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
    d 1 d d d 1 1 d d d d 1 d 1 1 d 
    d d d . d d d d . . d d d d d d 
    d d . . . d d . . . . d . . d d 
    `, SpriteKind.Player)
ghost.setPosition(60, 60)
ghost.setFlag(SpriteFlag.AutoDestroy, true)
ghost.setFlag(SpriteFlag.Ghost, true)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
```

## Siehe auch #seealso

[überlappt mit](/reference/sprites/sprite/overlaps-with),
[setze Flag](/reference/sprites/sprite/set-flag)
