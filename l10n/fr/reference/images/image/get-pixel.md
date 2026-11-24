# obtenir le pixel

Obtiens le numéro de couleur d'un pixel à une position donnée dans une image.

```sig
image.create(0, 0).getPixel(0, 0)
```

# Paramètres

* **x** : un [nombre](/types/number) qui est la position horizontale du pixel.
* **y** : un [nombre](/types/number) qui est la position verticale du pixel.

## Valeur renvoyée

* un [nombre](/types/number) qui est la couleur du pixel à la position **x** et **y** de l'image. Le numéro de couleur est une valeur entre `0` et `15`.

## Exemple #example

Remplis une image au hasard avec différentes couleurs. Change la couleur du pixel du milieu s'il est jaune.

```blocks
let showColors: Sprite = null
let randoColors: Image = null
randoColors = image.create(16, 16)
for (let y = 0; y <= 15 - 1; y++) {
    for (let x = 0; x <= 15 - 1; x++) {
        randoColors.setPixel(x, y, Math.randomRange(0, 15))
    }
}
if (randoColors.getPixel(8, 8) == 14) {
    randoColors.setPixel(8, 8, 1)
}
```

## Voir aussi #seeaslo

[image](/types/image),
[définir le pixel](/reference/images/image/set-pixel)