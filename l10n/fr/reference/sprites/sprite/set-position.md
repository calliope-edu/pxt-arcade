# définir la position

Définis la position du centre d'un sprite à l'écran.

```sig
sprites.create(null).setPosition(0, 0)
```

### Paramètres

* **x** : la nouvelle position horizontale du centre du sprite à l'écran.
* **y** : la nouvelle position verticale du centre du sprite à l'écran.

## Positions des sprites

L'image du sprite forme un rectangle composé d'un certain nombre de lignes et de colonnes de pixels. La position **x** du sprite est l'emplacement horizontal de la colonne centrale des pixels du sprite à l'écran. La position **y** du sprite est l'emplacement vertical de la ligne centrale des pixels du sprite.

La position **x** du sprite peut avoir une valeur supérieure à la largeur de l'écran. Elle peut aussi avoir une valeur inférieure au côté gauche de l'écran (le côté gauche de l'écran est `0` et la valeur de la position **x** du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

De même, la position **y** du sprite peut avoir une valeur supérieure à la hauteur de l'écran. Elle peut aussi avoir une valeur inférieure au côté supérieur de l'écran (le haut de l'écran est `0` et la valeur de la position **y** du sprite est alors négative).

## Exemple #example

Place le sprite aux positions **x** et **y** `64`. Fais dire au sprite quelles sont ses valeurs **x** et **y**.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let monSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
monSprite.setPosition(64, 64)
monSprite.say("I'm centered at x:" + monSprite.x + ", y:" + monSprite.y)
```

## Voir aussi #seealso

[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y),
[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)

