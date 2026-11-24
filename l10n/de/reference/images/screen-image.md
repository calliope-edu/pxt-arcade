# Bildschirmbild

Ruft ein Bild von allem ab, was auf dem Bildschirm angezeigt wird.

```sig
image.screenImage()
```

## Rückgabewert

* ein [Bild](/types/image) von allem, was auf dem Bildschirm angezeigt wird.

## Beispiel #example

Platziere einen Kuchen-Sprite auf dem Bildschirm mit einer Hintergrundfarbe. Wenn die Taste **A** gedrückt wird, rufe das Bildschirmbild ab und zerstöre dann den Kuchen-Sprite. Drehe das Bild auf den Kopf und lege es als Hintergrund fest.

```blocks
let meinSprite: Sprite = null
let screenCap: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    screenCap = image.screenImage()
    screenCap.flipY()
    meinSprite.destroy()
    pause(100)
    scene.setBackgroundImage(image.screenImage())
})
meinSprite = sprites.create(img`
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

## Siehe auch

[Hintergrundbild festlegen](/reference/scene/set-background-image)