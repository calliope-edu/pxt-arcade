# définir l'image d'arrière-plan

Définit une image comme arrière-plan de l'écran.

```sig
scene.setBackgroundImage(null)
```

Tu peux définir une image comme arrière-plan de l'écran. L'image d'arrière-plan se trouve toujours derrière les autres images affichées à l'écran.

## Paramètres

* **img** : l'[image](/types/image) à définir comme arrière-plan de l'écran.

## Exemple #example

Crée une image vide de la taille de l'écran. Remplis l'image avec quatre carrés de couleur. Définis l'image comme arrière-plan de l'écran et fais tourner les couleurs toutes les `2` secondes.

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

## Voir aussi #seealso

[image d'arrière-plan](/reference/scene/background-image),
[définir la couleur d'arrière-plan](/reference/scene/set-background-color)