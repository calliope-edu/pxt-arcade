# Kacheln

Platziere Kacheln und ändere ihre Einstellungen.

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

## Siehe auch

[setze Kachel an](/reference/tiles/set-tile-at),
[setze Wand an](/reference/tiles/set-wall-at),
[Kachelposition abrufen](/reference/tiles/get-tile-locatioin),
[Kacheln nach Typ abrufen](/reference/tiles/get-tiles-by-type),
[platzieren](/reference/tiles/place),
[auf zufälliger Kachel platzieren](/reference/tiles/place-on-random-tile),
[wenn Wand getroffen](/reference/scene/on-hit-wall),
[wenn Kachel überlappt](/reference/scene/on-overlap-tile)
