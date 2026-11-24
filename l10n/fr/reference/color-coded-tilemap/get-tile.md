# get Tile

Obtenir une tuile image à un emplacement de la carte de tuiles.

```sig
scene.getTile(0, 0)
```

## Paramètres

* **col** : la colonne de la tuile dans la carte de tuiles.
* **row** : la ligne de la tuile dans la carte de tuiles.

## Valeur retournée

* une [tuile](/reference/color-coded-tilemap/tile) à un emplacement de la carte de tuiles.

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

[définir la tuile](/reference/color-coded-tilemap/set-tile),
[définir la tuile à](/reference/color-coded-tilemap/set-tile-at)

```package
color-coded-tilemap
```