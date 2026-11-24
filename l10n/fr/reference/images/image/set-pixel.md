# définir le pixel

Définit la couleur d'un pixel à une position donnée dans une image.

```sig
image.create(0,0).setPixel(0,0,0)
```

Les pixels sont des points de couleur individuels dans une [image](/types/image). Les pixels sont disposés en colonnes (leur valeur ``x``) et en lignes (leur valeur ``y``). Tous les pixels ensemble forment le rectangle de l'image. Certains pixels peuvent n'avoir aucune couleur (transparents) et d'autres peuvent avoir une valeur de couleur définie.

## Paramètres

* **x** : le [numéro](/types/number) de colonne de la position du pixel.
* **y** : le [numéro](/types/number) de ligne de la position du pixel.
* **c** : le [numéro](/types/number) de la nouvelle couleur à définir pour le pixel à la position **x** et **y**. Les numéros de couleur sont des valeurs entre `0` et `15` qui sélectionnent une couleur dans la palette de couleurs actuelle.

## Exemple #example

Crée un motif « hachuré » dans une image en définissant la couleur d'un pixel sur deux dans chaque ligne.

```blocks
let hatch: Image = null
let patch: Sprite = null
hatch = image.create(32, 32)
for (let y = 0; y <= 31; y++) {
    for (let x = 0; x <= 15; x++) {
    	if (y % 2 > 0)
        {
            hatch.setPixel(x * 2 + 1, y, 10)
        } else {
            hatch.setPixel(x * 2, y, 10)        
        }
    }
}
patch = sprites.create(hatch)
```

## Voir aussi #seealso

[image](/types/image),
[obtenir le pixel](/reference/images/image/get-pixel)