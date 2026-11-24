# get Tiles By Type

Obtenir la liste des tuiles de la carte de tuiles qui ont le même index de couleur.

```sig
scene.getTilesByType(0)
```

Toutes les tuiles de la carte avec l'**index** choisi sont renvoyées dans un tableau de [tuiles](/reference/color-coded-tilemap/tile). Tu peux utiliser ce tableau pour modifier ou remplacer les tuiles en un seul groupe.

## Paramètres

* **index** : l'index de couleur des tuiles à lister.

## Valeur retournée

* un [tableau](/types/array) de [tuiles](/reference/color-coded-tilemap/tile) de la carte qui ont le même **index** de couleur.

## Exemple #example

Obtiens la liste de toutes les tuiles au centre de la carte de tuiles. Remplace-les toutes par le type de tuile utilisé pour la bordure.

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
2 8 . . . 8 . . . 2 
2 . 8 . 8 . 8 . 8 2 
2 . . 8 . . . 8 . 2 
2 . 8 . 8 . 8 . 8 2 
2 8 . . . 8 . . . 2 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
`)
for (let tile of scene.getTilesByType(8)) {
    scene.setTileAt(tile, 2)
    pause(500)
}
```

## Voir aussi #seealso

[obtenir la tuile](/reference/color-coded-tilemap/get-tile),
[définir la tuile à](/reference/color-coded-tilemap/set-tile-at)

```package
color-coded-tilemap
```