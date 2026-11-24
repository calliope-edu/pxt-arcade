# Kachel

Eine Kachel ist ein Bild, das als rechteckiger Teil der Spielszene angezeigt wird. Die Spielszene besteht aus Kacheln, die in einer Kachelkarte in einer Zeile und Spalte platziert sind. Die Kachelkarte enthält alle Kacheln, die in der Szene angezeigt werden.

## Der Typ Kachel

Eine **Kachel** ist ein zusammengesetzter Typ, der ein [Bild](/types/image) und eine Position in einer Kachelkarte enthält. Die Spielszene hat eine Sammlung von Kacheln, die mit der Funktion [setTile](/reference/color-coded-tilemap/set-tile) zur Szene hinzugefügt werden. Kacheln können auch als Wand festgelegt werden, damit Sprites nicht hindurchkommen.

## Kacheln festlegen

Du legst Kacheln in der Szene fest, indem du ein Bild erstellst und ihm einen Kachelindex zuweist.

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

Die Szene speichert die Bilder in einer Sammlung von Kacheln und verwendet dabei eine Farbnummer als Index. Mit dem Kachelindex wird die Kachel in der Karte der aktuellen Szene platziert.

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

Die Kachelkarte verwendet die Farbindizes in ihrem eigenen Kartenbild, aber wenn die Szene auf dem Bildschirm angezeigt wird, erscheinen die eigentlichen Kacheln für diese Indizes.

## Kacheln abrufen

Kacheln der Szene bekommst du mit dem Typ **Kachel** zurück. Du greifst über ihre Position in der Kachelkarte auf sie zu:

```blocks
let topTile: tiles.Tile = null
topTile = scene.getTile(4, 0)
```

Du kannst auch eine Liste aller Kacheln der Kachelkarte bekommen, die denselben Farbindex haben:

```blocks
let tileList: tiles.Tile[] = []
tileList = scene.getTilesByType(4)
```

## Siehe auch

[setze Kachel](/reference/color-coded-tilemap/set-tile),
[setze Kachelkarte](/reference/color-coded-tilemap/set-tile-map),
[hole Kachel](/reference/color-coded-tilemap/get-tile),
[hole Kacheln nach Typ](/reference/color-coded-tilemap/get-tiles-by-type)

```package
color-coded-tilemap
```
