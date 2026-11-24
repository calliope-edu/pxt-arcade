# remplir un rectangle

Donne une même couleur à tous les pixels d'une zone rectangulaire d'une image.

```sig
image.create(0,0).fillRect(0,0,0,0,0)
```

Tu peux remplir d'un coup tous les pixels d'une zone rectangulaire avec une couleur. Le rectangle à remplir peut être toute la surface de l'image ou une partie plus petite.

## Paramètres

* **x** : un [nombre](/types/number) qui est la position horizontale en pixels du coin supérieur gauche du rectangle à remplir.
* **y** : un [nombre](/types/number) qui est la position verticale en pixels du coin supérieur gauche du rectangle à remplir.
* **w** : un [nombre](/types/number) qui est la largeur en pixels du rectangle à remplir.
* **h** : un [nombre](/types/number) qui est la hauteur en pixels du rectangle à remplir.
* **c** : le [numéro](/types/number) de la couleur à donner à tous les pixels du rectangle. Les numéros de couleur sont des valeurs entre `0` et `15` qui sélectionnent une couleur dans la palette de couleurs actuelle.

## Exemples #example

### Carré central #ex1

Remplis toute une image de pixels bleus. Remplis un petit rectangle au centre de l'image avec des pixels jaunes.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.fillRect(8, 8, 16, 16, 14)
showBlue = sprites.create(blueRect)
```

### Échiquier

Crée un échiquier en remplissant des cases sombres sur un fond blanc.

```blocks
let showBoard: Sprite = null
let chessBoard: Image = null
chessBoard = image.create(64, 64)
chessBoard.fill(1)
for (let row = 0; row <= 7; row++) {
    for (let col = 0; col <= 3; col++) {
        if (row % 2 == 1) {
            chessBoard.fillRect(col * 16, row * 8, 8, 8, 8)
        } else {
            chessBoard.fillRect(col * 16 + 8, row * 8, 8, 8, 8)
        }
    }
}
showBoard = sprites.create(chessBoard)
```

## Voir aussi #seealso

[remplir](/reference/images/image/fill),
[dessiner un rectangle](/reference/images/image/draw-rect)
