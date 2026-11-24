# setze Kachel an

Ersetze eine Kachel in der Kachelkarte durch eine andere Kachel.

```sig
scene.setTileAt(null, 0)
```

Eine Kachel aus der Kachelkarte hat den Typ [Kachel](/reference/color-coded-tilemap/tile). Du kannst diese Kachel ändern, indem du ihr Objekt vom Typ [Kachel](/reference/color-coded-tilemap/tile) und den Index einer anderen Kachel angibst. Die Kachelkarte wird so geändert, dass die neue Kachel die Position einnimmt, an der die alte war.

## Parameter

* **tile**: das [Kachel](/reference/color-coded-tilemap/tile)-Objekt, das ersetzt werden soll.
* **index**: der Farbindex der Kachel, die die vorherige ersetzt.

## Beispiel #example

Erstelle eine Szene mit einer Kachelkarte mit Randkacheln und zwei Kacheln in der Mitte. Ersetze die Kacheln in der Mitte durch die Kacheln des Rands.

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

## Siehe auch #seealso

[setze Kachel](/reference/color-coded-tilemap/set-tile), [hole Kachel](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```