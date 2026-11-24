# remplir

Donne une même couleur à tous les pixels d'une image.

```sig
image.create(0,0).fill(0)
```

## Paramètres

* **c** : le [numéro](/types/number) de la couleur à donner à tous les pixels de l'image. Les numéros de couleur sont des valeurs entre `0` et `15` qui sélectionnent une couleur dans la palette de couleurs actuelle.

## Exemple #example

Remplis toute une image de pixels bleus. Remplis un petit rectangle au centre de l'image avec des pixels jaunes.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.fillRect(8, 8, 16, 16, 14)
showBlue = sprites.create(blueRect)
```

## Voir aussi #seealso

[remplir un rectangle](/reference/images/image/fill-rect),
[remplacer](/reference/images/image/replace)
