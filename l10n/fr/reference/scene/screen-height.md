# hauteur de l'écran

Obtiens la hauteur de l'écran en pixels.

```sig
scene.screenWidth()
```

## Retours

* un [nombre](/types/number) qui correspond à la hauteur de l'écran de la console de jeu ou du simulateur.

## Exemple #example

Dessine une ligne épaisse du haut en bas de l'écran.

```blocks
let showLine: Sprite = null
let wideLine: Image = null
wideLine = image.create(3, scene.screenHeight())
wideLine.fill(5)
showLine = sprites.create(wideLine)
```

## Voir aussi #seealso

[largeur de l'écran](/reference/scene/screen-width)

