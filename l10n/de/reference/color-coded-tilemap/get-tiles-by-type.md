# Kacheln nach Typ abrufen

Rufe eine Liste der Kacheln in der Kachelkarte ab, die denselben Farbindex haben.

```sig
scene.getTilesByType(0)
```

Alle Kacheln der Kachelkarte mit dem gewählten **index** werden in einem Array von [Kacheln](/reference/color-coded-tilemap/tile) zurückgegeben. Mit diesem Array kannst du die Kacheln als Gruppe ändern oder ersetzen.

## Parameter

* **index**: der Farbindex der Kacheln, für die eine Liste erstellt wird.

## Rückgabewert

* ein [Array](/types/array) von [Kacheln](/reference/color-coded-tilemap/tile) aus der Kachelkarte, die denselben Farb-**index** haben.

## Beispiel #example

Rufe eine Liste aller Kacheln in der Mitte der Kachelkarte ab. Ersetze sie alle durch den Kacheltyp des Rands.

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

## Siehe auch #seealso

[Kachel abrufen](/reference/color-coded-tilemap/get-tile),
[setze Kachel an](/reference/color-coded-tilemap/set-tile-at)

```package
color-coded-tilemap
```