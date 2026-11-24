# platzieren

Setzt ein Sprite in die Mitte einer ausgewählten Kachel.

```sig
tiles.getTileLocation(0, 0).place(null)
```

Du kannst ein Sprite direkt auf eine Kachel setzen. Wenn du eine [Kachel](/types/tile)-Position aus der Tilemap hast, verwende einfach **platzieren**, um ein Sprite daraufzusetzen.

## Parameter

* **sprite**: das Sprite, das auf die Kachel gesetzt wird.

## Beispiel #example

Erstelle eine Tilemap mit mehreren verschiedenen Kacheln. Erstelle ein kreisförmiges Sprite. Wähle die Kachel an Position (1, 1) in der Tilemap und platziere das Sprite darauf.

```blocks
let meinSprite: Sprite = null
// TODO tiles.setTilemap(tiles.createTilemap(null, 0, 8 ** 8, 9)); 
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
let tileDock = tiles.getTileLocation(1, 1)
tileDock.place(meinSprite)
```

## Siehe auch #seealso

[Kachelposition abrufen](/reference/tiles/get-tile-location)