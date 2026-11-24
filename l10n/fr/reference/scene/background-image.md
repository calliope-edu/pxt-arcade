# image d'arrière-plan

Obtiens l'image d'arrière-plan de l'écran.

```sig
scene.backgroundImage()
```

Tu peux obtenir l'image actuelle de l'arrière-plan de l'écran. L'image d'arrière-plan est toujours derrière les autres images affichées à l'écran.

## Valeur renvoyée

* l'[image](/types/image) définie pour l'arrière-plan de l'écran.

## Exemple #example

Crée une image vide de la taille de l'écran. Remplis l'image avec quatre carrés colorés. Définis l'image comme arrière-plan de l'écran et fais tourner les couleurs toutes les `2` secondes.

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

## Voir aussi #seealso

[définir l'image d'arrière-plan](/reference/scene/set-background-image)