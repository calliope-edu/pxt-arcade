# set Tile At

Remplacer une tuile de la carte de tuiles par une autre tuile.

```sig
scene.setTileAt(null, 0)
```

Une tuile de la carte a le type [tuile](/reference/color-coded-tilemap/tile). Tu peux changer cette tuile en utilisant son objet [tuile](/reference/color-coded-tilemap/tile) et l'index d'une autre tuile. La carte est modifiée pour que la nouvelle tuile prenne la place de l'ancienne.

## Paramètres

* **tile** : l'objet [tuile](/reference/color-coded-tilemap/tile) à remplacer.
* **index** : l'index de couleur de la tuile qui remplace la précédente.

## Exemple #example

Crée une scène avec une carte de tuiles composée de tuiles de bordure et de deux tuiles au centre. Remplace les tuiles du centre par celles utilisées pour la bordure.

```blocks
scene.setTile(2, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`)
scene.setTileMap(img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . 1 1 . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
`)
pause(1000)
scene.setTileAt(scene.getTile(4, 3), 2)
pause(1000)
scene.setTileAt(scene.getTile(5, 3), 2)
```

## Voir aussi #seealso

[définir la tuile](/reference/color-coded-tilemap/set-tile), [obtenir la tuile](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```