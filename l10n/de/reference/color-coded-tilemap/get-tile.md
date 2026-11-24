# Kachel abrufen

Rufe eine Bildkachel von einer Position in der Kachelkarte ab.

```sig
scene.getTile(0, 0)
```

## Parameter

* **col**: die Spalte der Kachel in der Kachelkarte.
* **row**: die Zeile der Kachel in der Kachelkarte.

## Rückgabewert

* eine [Kachel](/reference/color-coded-tilemap/tile) von einer Position in der Kachelkarte.

## Beispiel #example

Erstelle eine Szene mit einer Kachelkarte mit Randkacheln und zwei Kacheln in der Mitte. Ersetze die Kacheln in der Mitte durch die Randkacheln.

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

[setze Kachel](/reference/color-coded-tilemap/set-tile),
[setze Kachel an](/reference/color-coded-tilemap/set-tile-at)

```package
color-coded-tilemap
```