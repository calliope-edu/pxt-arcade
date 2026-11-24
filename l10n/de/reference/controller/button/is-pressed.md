# is Pressed

Prüfe, ob eine Taste gerade gedrückt wird oder nicht.

```sig
controller.A.isPressed()
```

## Rückgabewert

* ein [Wahrheitswert](types/boolean): `true`, wenn die Taste gedrückt ist, `false`, wenn die Taste nicht gedrückt ist.

## Beispiel #example

Bewege ein gelbes Quadrat zufällig über den Bildschirm, solange die Taste ``A`` gedrückt ist.

### Einzelspieler

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
        yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
    }
})
```

### Mehrspieler

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
game.onUpdate(function () {
    if (controller.player2.isPressed(ControllerButton.A)) {

        yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
        yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
    }
})
```

## Siehe auch #seealso

[bei Ereignis](/reference/controller/button/on-event)
