# remplacer

Remplace tous les pixels d'une couleur par des pixels d'une autre couleur.

```sig
image.create(0, 0).replace(0, 0)
```

## Paramètres

* **from** : le [numéro](/types/number) de couleur des pixels à changer.
* **to** : le [numéro](/types/number) de couleur des pixels de remplacement.

## Exemple #example

Crée un carré de couleurs aléatoires, puis remplace les couleurs au hasard jusqu'à ce que le carré n'ait plus qu'une seule couleur.

```blocks
let colorBlock = image.create(32, 32)
for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
        colorBlock.setPixel(x, y, Math.randomRange(0, 15))
    }
}
let showBlock = sprites.create(colorBlock)
game.onUpdateInterval(500, function () {
    colorBlock.replace(Math.randomRange(0, 15), Math.randomRange(0, 15))
})
```

## Voir aussi #seealso

[remplir](/reference/images/image/fill)