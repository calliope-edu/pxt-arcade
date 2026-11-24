# setze Kachel

Füge eine Bildkachel zu den Kacheln der Szene hinzu.

```sig
scene.setTile(0, null)
```

Eine Kachel ist ein [Bild](/types/image), das zur Szene hinzugefügt wird, um es in der Kachelkarte der Szene zu verwenden. Mit Kacheln kann die Szene dasselbe Bild mehrmals an verschiedenen Stellen anzeigen.

Kacheln bekommen eine _Indexnummer_, die einer Farbnummer in Bildern entspricht. Die Indexnummer wird an eine Stelle im Bild der Kachelkarte gesetzt.

```block
scene.setTile(3, img`8`)
```

Der Block oben verwendet die Farbnummer `3` als Index für eine einfarbige Bildkachel. Diese Kachel wird in der Szene angezeigt, indem du den Wert `3` an jede Stelle der Kachelkarte setzt, an der sie erscheinen soll.

```blocks
scene.setTileMap(img`
. . . .
. 3 3 .
6 3 3 6
9 9 9 9
`)
```

Die Kachel mit dem Index `3` wird an vier Stellen in der Mitte der Karte gesetzt und erscheint in diesem Teil der Szene. Die anderen Nummern in der Karte stehen für andere Kacheln der Szene. Wenn für eine Farbnummer keine Kachel festgelegt ist, wird an dieser Kachelposition die Farbe selbst angezeigt.

## Parameter

* **index**: die Farbnummer, mit der diese Kachel gekennzeichnet wird.
* **img**: das Bild, das für die Kachel verwendet wird.
* **collisions**: ein optionaler [Wahrheitswert](/types/boolean), der Kollisionen mit der Kachel erlaubt. Bei `true` kollidiert ein Sprite mit der Kachel. Bei `false` gehen Sprites hindurch. Der Standardwert ist `false`. 

## Beispiel #example

Lege zwei Kacheln in der Szene fest und setze sie in die Kachelkarte.

```blocks
let solidTile = image.create(7, 7)
solidTile.fill(7)
scene.setTile(1, solidTile)
scene.setTile(2, img`
9 9 9 9 9 9 9
9 4 . . . 4 9
9 . 4 . 4 . 9
9 . . 4 . . 9
9 . 4 . 4 . 9
9 4 . . . 4 9
9 9 9 9 9 9 9
`)
scene.setTileMap(img`
1 1 1 1 1 1
1 2 2 2 2 1
1 2 2 2 2 1
1 1 1 1 1 1
`)
```

## Siehe auch #seealso

[Kachelkarte](/reference/color-coded-tilemap/tile-map), [setze Kachelkarte](/reference/color-coded-tilemap/set-tile-map)

```package
color-coded-tilemap
```