# Hintergrundbild

Ruft das Hintergrundbild des Bildschirms ab.

```sig
scene.backgroundImage()
```

Du kannst das aktuelle Hintergrundbild des Bildschirms abrufen. Das Hintergrundbild liegt immer hinter allen anderen Bildern auf dem Bildschirm.

## Rückgabe

* das [Bild](/types/image), das als Bildschirmhintergrund eingestellt ist.

## Beispiel #example

Erstelle ein leeres Bild in der Größe des Bildschirms. Fülle das Bild mit vier farbigen Quadraten. Setze das Bild als Bildschirmhintergrund und rotiere die Farben alle `2` Sekunden.

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
    let curImage = scene.backgroundImage();
    curImage.replace(4, 0)
    curImage.replace(10, 4)
    curImage.replace(7, 10)
    curImage.replace(14, 7)
    curImage.replace(0, 14)
})
```

## Siehe auch #seealso

[setze Hintergrundbild](/reference/scene/set-background-image)