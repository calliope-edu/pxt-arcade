# Animationsbilder

Eine Folge von Einzelbildern für eine Animation.

```sig
animation._animationFrames(null)
```

Die Bilder einer Animation werden als Array von Bildern festgelegt. Über den Block, der die Bilder enthält, gelangst du zum Bildeditor, um neue Bilder zu erstellen und die vorhandenen Bilder der Animation zu bearbeiten.

## Parameter

* **frames**: ein Array von Bildern, die die Animation bilden.

## Beispiel #example

Erstelle eine Animation einer laufenden Person und führe sie aus. Klicke auf den Block mit den Animationsbildern, um die Animation zu bearbeiten. Wiederhole die Animation in einer Schleife und
stoppe sie dann durch Drücken von Knopf **A**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, meinSprite)
})
let meinSprite: Sprite = null
scene.setBackgroundColor(1)
meinSprite = sprites.create(img`
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
let walker = animation._animationFrames([img`
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
    `])
animation.runImageAnimation(
meinSprite,
walker,
500,
true
)
```

## Siehe auch #seealso

[Bildanimation ausführen](/reference/animation/run-image-animation),
[Bewegungsanimation ausführen](/reference/animation/run-movement-animation)

```package
animation
```