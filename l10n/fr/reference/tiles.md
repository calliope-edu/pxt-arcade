# Tiles

Place des tuiles et modifie leurs paramètres.

```cards
tiles.getTileLocation(0, 0)
tiles.getTilesByType(0)
scene.onHitWall(0, 0, function (sprite) {
	
})
scene.onOverlapTile(0, 0, function (sprite) {
	
})
tiles.getTileLocation(0, 0).place(null)
tiles.setTileAt(null, 0)
tiles.setWallAt(null, false)
tiles.placeOnRandomTile(null, 0)
```

## Voir aussi

[définir la tuile à](/reference/tiles/set-tile-at),
[définir le mur à](/reference/tiles/set-wall-at),
[obtenir l'emplacement de la tuile](/reference/tiles/get-tile-locatioin),
[obtenir les tuiles par type](/reference/tiles/get-tiles-by-type),
[placer](/reference/tiles/place),
[placer sur une tuile aléatoire](/reference/tiles/place-on-random-tile),
[lorsque touche un mur](/reference/scene/on-hit-wall),
[lorsque chevauche une tuile](/reference/scene/on-overlap-tile)
