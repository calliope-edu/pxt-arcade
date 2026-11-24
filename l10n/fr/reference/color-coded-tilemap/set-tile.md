# set Tile

Ajouter une tuile image à l'ensemble des tuiles de la scène.

```sig
scene.setTile(0, null)
```

Une tuile est une [image](/types/image) ajoutée à la scène pour être utilisée dans sa carte de tuiles. Grâce aux tuiles, la scène peut afficher la même image plusieurs fois à différents endroits.

Chaque tuile reçoit un numéro d'_index_ qui correspond à un numéro de couleur des images. Ce numéro d'index est placé à un emplacement dans l'image de la carte de tuiles.

```block
scene.setTile(3, img`8`)
```

Le bloc ci-dessus utilise le numéro de couleur `3` comme index pour une tuile de couleur unie. Cette tuile est placée dans la scène en mettant la valeur `3` dans la carte à chaque endroit où tu veux qu'elle apparaisse.

```blocks
scene.setTileMap(img`
. . . .
. 3 3 .
6 3 3 6
9 9 9 9
`)
```

La tuile associée à `3` est placée à quatre endroits au centre de la carte et s'affichera dans cette partie de la scène. Les autres numéros de la carte correspondent à d'autres tuiles ajoutées à la scène. Si aucune tuile n'est définie pour un numéro de couleur, c'est la couleur elle-même qui s'affiche à cet emplacement.

## Paramètres

* **index** : le numéro de couleur qui identifie cette tuile.
* **img** : l'image à utiliser pour la tuile.
* **collisions** : une valeur [booléenne](/types/boolean) facultative qui autorise les collisions avec la tuile. Un sprite entre en collision avec la tuile si elle vaut `true`. Les sprites passent à travers si elle vaut `false`. La valeur par défaut est `false`.

## Exemple #example

Définis deux tuiles dans la scène et place-les dans la carte de tuiles.

```blocks
let solidTile = image.create(7, 7)
solidTile.fill(7)
scene.setTile(1, solidTile)
scene.setTile(2, img`
9 9 9 9 9 9 9
9 4 . . . 4 9
9 . 4 . 4 . 9
9 . . 4 . . 9
9 . 4 . 4 . 9
9 4 . . . 4 9
9 9 9 9 9 9 9
`)
scene.setTileMap(img`
1 1 1 1 1 1
1 2 2 2 2 1
1 2 2 2 2 1
1 1 1 1 1 1
`)
```

## Voir aussi #seealso

[carte de tuiles](/reference/color-coded-tilemap/tile-map), [définir la carte de tuiles](/reference/color-coded-tilemap/set-tile-map)

```package
color-coded-tilemap
```