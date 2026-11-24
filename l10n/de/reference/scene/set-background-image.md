# Hintergrundbild festlegen

Legt ein Bild als Hintergrund für den Bildschirm fest.

```sig
scene.setBackgroundImage(null)
```

Du kannst ein Bild als Hintergrund des Bildschirms festlegen. Das Hintergrundbild liegt immer hinter anderen Bildern, die auf dem Bildschirm angezeigt werden.

## Parameter

* **img**: das [Bild](/types/image), das als Hintergrund für den Bildschirm festgelegt werden soll.

## Beispiel #example

Erstelle ein leeres Bild in der Größe des Bildschirms. Fülle das Bild mit vier farbigen Quadraten. Lege das Bild als Bildschirmhintergrund fest und rotiere die Farben alle `2` Sekunden.

```blocks
let screenY = 0
let backImage: Image = null
let screenX = 0
screenX = scene.screenWidth()
screenY = scene.screenHeight()
backImage = image.create(screenX, screenY)
backImage.fillRect(0, 0, screenX / 2, screenY / 2, 7)
backImage.fillRect(screenX / 2, 0, screenX / 2, screenY / 2, 10)
backImage.fillRect(0, screenY / 2, screenX / 2, screenY / 2, 14)
backImage.fillRect(screenX / 2, screenY / 2, screenX / 2, screenY / 2, 4)
scene.setBackgroundImage(backImage)
game.onUpdateInterval(2000, function () {
    backImage.replace(4, 0)
    backImage.replace(10, 4)
    backImage.replace(7, 10)
    backImage.replace(14, 7)
    backImage.replace(0, 14)
})
```

## Siehe auch #seealso

[Hintergrundbild](/reference/scene/background-image),
[Hintergrundfarbe festlegen](/reference/scene/set-background-color)