# Animation stoppen

Stoppe eine Animation, die auf einem Sprite läuft.

```sig
animation.stopAnimation(0, null)
```

Du kannst auf einem Sprite eine Bild- oder Bewegungsanimation ausführen. Auf einem Sprite können sogar beide Arten gleichzeitig laufen. Du kannst eine Art von Animation oder alle Arten stoppen. Das ist nützlich, wenn eine Animation in einer Schleife oder sehr lange läuft.

## Parameter

* **type**: die Art der Animation, die gestoppt werden soll: ``all``, ``frame`` oder ``path``.
* **sprite**: der [Sprite](types/strite), auf dem die Animation gestoppt werden soll.

## Beispiel #example

Erstelle eine Animation einer laufenden Person und führe sie aus. Wiederhole die Animation in einer Schleife und
stoppe sie dann durch Drücken von Knopf **A**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, meinSprite)
})
scene.setBackgroundColor(1)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
animation.runImageAnimation(
meinSprite,
[img`
    . . . . f f f f . . . . .
    . . f f f f f f f f . . .
    . f f f f f f c f f f . .
    f f f f f f c c f f f c .
    f f f c f f f f f f f c .
    c c c f f f e e f f c c .
    f f f f f e e f f c c f .
    f f f b f e e f b f f f .
    . f 4 1 f 4 4 f 1 4 f . .
    . f e 4 4 4 4 4 4 e f . .
    . f f f e e e e f f f . .
    f e f b 7 7 7 7 b f e f .
    e 4 f 7 7 7 7 7 7 f 4 e .
    e e f 6 6 6 6 6 6 f e e .
    . . . f f f f f f . . . .
    . . . f f . . f f . . . .
`, img`
    . . . . . . . . . . . . .
    . . . . f f f f . . . . .
    . . f f f f f f f f . . .
    . f f f c f f f f f f . .
    c f f f c c f f f f f f f
    c f f f f f f f c f f f f
    c c f f e e f f f c c c .
    f c c f f e e f f f f f .
    f f f b f e e f b f f f .
    f f 4 1 f 4 4 f 1 4 f f .
    e f e e 4 4 4 4 4 e f . .
    e 4 4 4 e 7 7 7 b f e f .
    . e 4 4 e 7 7 7 7 f 4 e .
    . . e e 6 6 6 6 6 f . . .
    . . . f f f f f f f . . .
    . . . . . . . f f f . . .
`, img`
    . . . . . . . . . . . . .
    . . . . . f f f f . . . .
    . . . f f f f f f f f . .
    . . f f f f f f c f f f .
    f f f f f f f c c f f f c
    f f f f c f f f f f f f c
    . c c c f f f e e f f c c
    . f f f f f e e f f c c f
    . f f f b f e e f b f f f
    . f f 4 1 f 4 4 f 1 4 f f
    . . f e 4 4 4 4 4 e e f e
    . f e f b 7 7 7 e 4 4 4 e
    . e 4 f 7 7 7 7 e 4 4 e .
    . . . f 6 6 6 6 6 e e . .
    . . . f f f f f f f . . .
    . . . f f f . . . . . . .
`],
500,
true
)```

## See Also #seealso

[run image animation](/reference/animation/run-image-animation),
[run movement animation](/reference/animation/run-movement-animation)

```package
animation
```