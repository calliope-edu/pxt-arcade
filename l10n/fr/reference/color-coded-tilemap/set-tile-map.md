# set Tile Map

Disposer des tuiles images selon un motif dans la scène.

```sig
scene.setTileMap(null)
```

Ta scène de jeu contient une [carte de tuiles](/reference/color-coded-tilemap/tile-map). Une carte de tuiles est une disposition (un motif) de tuiles images qui remplissent une partie de la scène. Au départ, la scène a une carte vide et aucun motif n'est affiché. Pour construire ta scène, tu dois créer des tuiles, les ajouter à la scène, puis indiquer à la scène où placer les tuiles.

La carte de tuiles utilise une image pour disposer les tuiles de la scène. Les numéros de couleur dans l'image sont des identifiants (un index) des tuiles images ajoutées à la scène. Les index de tuiles sont placés à différents endroits de la carte pour créer ce qui s'affiche dans la scène. Si aucune tuile n'a un index correspondant à un numéro de couleur de la carte, c'est la couleur elle-même qui remplit la scène à cet emplacement.

Les tuiles sont placées dans la scène selon leur position dans la carte. Voici une tuile de couleur unie avec l'index `3` :

```block
scene.setTile(3, img`7`)
```

Quatre de ces tuiles sont placées au centre de la carte en utilisant le numéro de couleur comme index correspondant :

```typescript
scene.setTileMap(img`
. a . 9
. 3 3 2
2 3 3 .
9 . a .
`)
```

Ainsi, au lieu d'afficher la couleur `3` à cet endroit de la scène, c'est l'image de la tuile associée à l'index `3` qui y est affichée.

## Paramètres

* **map** : une [image](/types/image) dont les pixels contiennent les index des tuiles images à afficher dans la scène.

## Exemple #example

### Carte en damier #ex1

Crée une petite carte en damier avec deux tuiles de couleur unie.

```blocks
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
a a
a a
`)
scene.setTileMap(img`
1 2
2 1
`)
```
### Numéros de couleur sans correspondance #ex2

Crée une carte de tuiles avec des numéros de couleur sans correspondance et des tuiles de tailles différentes.

```blocks
scene.setTile(1, img`
d d d d
d d b b
d d b b
b b b b
`)
scene.setTile(2, img`
a a
a a
`)
scene.setTileMap(img`
1 2 7
2 1 7
7 7 7
`)
```

## Voir aussi #seealso

[carte de tuiles](/reference/color-coded-tilemap/tile-map),
[définir la tuile](/reference/color-coded-tilemap/set-tile)

```package
color-coded-tilemap
```