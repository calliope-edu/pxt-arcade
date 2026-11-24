# dessiner un rectangle

Dessine le contour d'un rectangle avec une couleur de pixel.

```sig
image.create(0,0).drawRect(0,0,0,0,0)
```

Un contour rectangulaire est dessiné dans une image. Le contour a une épaisseur d'un pixel et est dessiné avec la couleur que tu choisis.

## Paramètres

* **x** : un [nombre](/types/number) qui est la position horizontale en pixels du coin supérieur gauche du rectangle à dessiner.
* **y** : un [nombre](/types/number) qui est la position verticale en pixels du coin supérieur gauche du rectangle à dessiner.
* **w** : un [nombre](/types/number) qui est la largeur du rectangle en pixels.
* **h** : un [nombre](/types/number) qui est la hauteur du rectangle en pixels.
* **c** : le [numéro](/types/number) de la couleur avec laquelle dessiner le contour rectangulaire. Les numéros de couleur sont des valeurs entre `0` et `15` qui sélectionnent une couleur dans la palette de couleurs actuelle.

## Exemple #example

Remplis toute une image de pixels bleus. Dessine un contour rouge autour de l'image.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.drawRect(0, 0, 32, 32, 10)
showBlue = sprites.create(blueRect)
```

## Voir aussi #seealso

[remplir un rectangle](/reference/images/image/fill-rect),
[dessiner une ligne](/reference/images/image/draw-line)


