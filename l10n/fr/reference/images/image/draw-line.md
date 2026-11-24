# dessiner une ligne

Dessine une ligne d'un point d'une image à un autre point.

```sig
image.create(0,0).drawLine(0,0,0,0,0)
```

Les pixels se trouvent à des points de l'image. Un point est une _coordonnée_, composée de deux valeurs : une position horizontale et une position verticale. Une ligne est dessinée en définissant la couleur des pixels situés directement entre deux coordonnées. La ligne a une épaisseur d'un pixel.

## Paramètres

* **x0** : un [nombre](/types/number) qui est la position horizontale en pixels de la première coordonnée.
* **y0** : un [nombre](/types/number) qui est la position verticale en pixels de la première coordonnée.
* **x1** : un [nombre](/types/number) qui est la position horizontale en pixels de la deuxième coordonnée.
* **y1** : un [nombre](/types/number) qui est la position verticale en pixels de la deuxième coordonnée.
* **c** : le [numéro](/types/number) de la couleur des pixels de la ligne. Les numéros de couleur sont des valeurs entre `0` et `15` qui sélectionnent une couleur dans la palette de couleurs actuelle.

## Exemple #example

Dessine un grand `X` dans une image en traçant deux lignes diagonales.

```blocks
let showBigX: Sprite = null
let drawBigX: Image = null
drawBigX = image.create(32, 32)
drawBigX.fill(1)
drawBigX.drawLine(0, 0, 31, 31, 10)
drawBigX.drawLine(0, 31, 31, 0, 10)
showBigX = sprites.create(drawBigX)
```

## Voir aussi #seealso

[dessiner un rectangle](/reference/images/image/draw-rect)

