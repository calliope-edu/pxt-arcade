# image de l'écran

Obtiens une image de tout ce qui est affiché à l'écran.

```sig
image.screenImage()
```

## Valeur renvoyée

* une [image](/types/image) de tout ce qui est affiché à l'écran.

## Exemple #example

Place un sprite de gâteau à l'écran avec une couleur d'arrière-plan. Quand le bouton **A** est pressé, récupère l'image de l'écran puis détruis le sprite du gâteau. Retourne l'image à l'envers et définis-la comme arrière-plan.

```blocks
let monSprite: Sprite = null
let screenCap: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    screenCap = image.screenImage()
    screenCap.flipY()
    monSprite.destroy()
    pause(100)
    scene.setBackgroundImage(image.screenImage())
})
monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . .
    . . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . .
    . . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . .
    . . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . .
    . . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . .
    . . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . .
    . . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . .
    . . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . .
    . . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . .
    . . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . .
    . . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . .
    b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a .
    b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a .
    b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a .
    b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a
    b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a
    b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a
    b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a
    b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a
    b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a
    b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a
    b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a
    b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a
    b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a
    b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a
    b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a
    . . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a
    . . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a
    . . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a
    . . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a
    . . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a .
    . . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . .
`, SpriteKind.Player)
```

## Voir aussi

[définir l'image d'arrière-plan](/reference/scene/set-background-image)