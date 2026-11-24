# Tuile

Une tuile est une image affichée comme une portion rectangulaire de la scène du jeu. La scène du jeu est créée avec des tuiles placées à une ligne et une colonne dans une carte de tuiles. La carte de tuiles contient toutes les tuiles affichées dans la scène.

## Le type tuile

Une **tuile** est un type complexe qui contient une [image](/types/image) et une position dans une carte de tuiles. La scène du jeu possède une collection de tuiles, qui sont ajoutées à la scène avec la fonction [setTile](/reference/color-coded-tilemap/set-tile). Les tuiles peuvent aussi être définies comme des murs pour empêcher les sprites de les traverser.

## Définir des tuiles

Tu définis des tuiles dans la scène en créant une image et en lui attribuant un index de tuile.

```blocks
scene.setTile(2, img`
a a a a a a a a
a a a a a a a a
a a a a a a a a
a a a a a a a a
a a a a a a a a
a a a a a a a a
a a a a a a a a
a a a a a a a a
`)
scene.setTile(3, img`
b b b b b b b b
b b b b b b b b
b b b b b b b b
b b b b b b b b
b b b b b b b b
b b b b b b b b
b b b b b b b b
b b b b b b b b
`)
```

La scène enregistre les images dans une collection de tuiles en utilisant un numéro de couleur comme index. L'index de tuile sert à placer la tuile dans la carte de la scène actuelle.

```blocks
scene.setTileMap(img`
2 2 3 3 2 2 3 3 2 2
2 2 3 3 2 2 3 3 2 2
3 3 2 2 3 3 2 2 3 3
3 3 2 2 3 3 2 2 3 3
2 2 3 3 2 2 3 3 2 2
2 2 3 3 2 2 3 3 2 2
3 3 2 2 3 3 2 2 3 3
3 3 2 2 3 3 2 2 3 3
`)
```

La carte de tuiles utilise les index de couleur dans sa propre image de correspondance, mais ce sont les vraies tuiles de ces index qui sont montrées quand la scène s'affiche à l'écran.

## Récupérer des tuiles

Les tuiles de la scène te sont renvoyées avec le type **tuile**. On accède aux tuiles par leur position dans la carte de tuiles :

```blocks
let topTile: tiles.Tile = null
topTile = scene.getTile(4, 0)
```

Tu peux aussi obtenir une liste de toutes les tuiles de la carte qui ont le même index de couleur :

```blocks
let tileList: tiles.Tile[] = []
tileList = scene.getTilesByType(4)
```

## Voir aussi

[définir tuile](/reference/color-coded-tilemap/set-tile),
[définir carte de tuiles](/reference/color-coded-tilemap/set-tile-map),
[obtenir tuile](/reference/color-coded-tilemap/get-tile),
[obtenir tuiles par type](/reference/color-coded-tilemap/get-tiles-by-type)

```package
color-coded-tilemap
```
