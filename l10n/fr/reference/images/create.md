# créer

Crée une image en pixels d'une certaine taille.

```sig
image.create(0, 0)
```

Une image rectangulaire vide est créée avec le nombre de pixels en largeur et en hauteur que tu demandes. Vide signifie que l'image ne contient que des pixels transparents. Les couleurs des pixels de l'image se définissent avec les fonctions d'[image](/reference/images).

Tu peux créer une image de taille nulle (``width = 0`` et ``height = 0``), mais la fonction créera en réalité une image de taille par défaut.

## Paramètres

* **width** : le [nombre](/types/number) de pixels en largeur (dimension x) de l'image.
* **height** : le [nombre](/types/number) de pixels en hauteur (dimension y) de l'image.

## Valeur renvoyée

* une [image](/types/image) vide (transparente) de la taille souhaitée.

## Exemple #example

Crée une image de 32 x 32 et dessine une bordure orange autour.

```blocks
let orangeBox = image.create(32, 32)
for (let i = 0; i < 32; i++) {
    orangeBox.setPixel(0, i, 13)
    orangeBox.setPixel(i, 0, 13)
    orangeBox.setPixel(i, 31, 13)
    orangeBox.setPixel(31, i, 13)
}
let boxSprite = sprites.create(orangeBox)
```

## Voir aussi #seealso

[image](/reference/images)