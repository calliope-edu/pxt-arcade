# Kachelbild an Position

Hole das Bild der Kachel an einer Position in der Kachelkarte.

```sig
tiles.tileImageAtLocation(tiles.getTileAtLocation(0, 0))
```

## Parameter

* **location**: das [Positions](/reference/tiles/location)-Objekt der Kachel, deren Bild zurückgegeben werden soll.

## Rückgabewerte

* das [Bild](/types/image) der Kachel an **location** in der Kachelkarte.

## Beispiel #example

Erstelle eine Kachelkarte mit einigen Smiley-Kacheln. Erstelle einen neuen Sprite mit dem Bild einer der Smiley-Kacheln. Lass den neuen Sprite über den Bildschirm und wieder zurück laufen.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.startEffect(effects.bubbles, 500)
})
tiles.setCurrentTilemap(tilemap`level1`)
let tileImage = tiles.tileImageAtLocation(tiles.getTileLocation(0, 0))
let meinSprite = sprites.create(tileImage, SpriteKind.Player)
meinSprite.setBounceOnWall(true)
meinSprite.vx = 50
```

## Siehe auch #seealso

[Position](/reference/tiles/location)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABERERERERERERERERERERERPT/RET/RERE9PRERERPRET0/0RERPRERERERERE9ERERERERET0RERERPRPRPRERERE9E9E9ERERERERET0RERERERERPRERPT/RERE9ERE9PRERERPRET0/0RE/0RERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDAwMTAwMDEwMDAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMTAwMDEwMDAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1"
        ],
        "displayName": "level1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```