# platzieren

Setze einen Sprite in die Mitte einer Kachel in der Szene.

```sig
scene.getTile(0, 0).place(null)
```

Du kannst einen Sprite genau auf eine Kachel setzen. Wenn du ein [Kachel](/reference/color-coded-tilemap/tile)-Objekt aus der Kachelkarte hast, benutze einfach **place**, um einen Sprite darauf zu setzen.

## Parameter

* **sprite**: der Sprite, der auf die Kachel gesetzt wird.

## Beispiel #example

Erstelle eine Kachelkarte mit mehreren verschiedenen Kacheln. Erstelle einen runden Sprite. Wähle die Kachel an Position (1, 1) in der Kachelkarte und setze den Sprite darauf.

```blocks
let meinSprite: Sprite = null
scene.setTileMap(img`
. . . . . . . . 3 . 
. 2 . . . . . . . . 
. . . . . 8 . . . . 
. . . . . . . b . . 
. . 8 . 6 . . . . . 
. . . . . . 4 . . . 
. a . . . . . . . . 
. . . . . . . . e . 
`)
meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
pause(1000)
let tileDock = scene.getTile(1, 1)
tileDock.place(meinSprite)
```

## Siehe auch #seealso

[hole Kachel](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```