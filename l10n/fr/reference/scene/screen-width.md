# largeur de l'écran

Obtiens la largeur de l'écran en pixels.

```sig
scene.screenWidth()
```

## Retours

* un [nombre](/types/number) qui correspond à la largeur de l'écran de la console de jeu ou du simulateur.

## Exemple #example

Dessine une ligne épaisse sur toute la largeur de l'écran.

```blocks
let showLine: Sprite = null
let wideLine: Image = null
wideLine = image.create(scene.screenWidth(), 3)
wideLine.fill(5)
showLine = sprites.create(wideLine)
```

## Voir aussi #seealso

[hauteur de l'écran](/reference/scene/screen-height)

