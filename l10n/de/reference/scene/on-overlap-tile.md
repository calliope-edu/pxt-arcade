# wenn Kachel überlappt

Führt Code aus, wenn ein Sprite eine Kachel überlappt.

```sig
scene.onOverlapTile(SpriteKind.Player, null, function (sprite, location) {})
```

Du kannst erkennen, wann ein bewegtes Sprite eine Kachel in der Kachelkarte überlappt. Wenn sich dein Sprite über eine Kachel bewegt, kannst du Code ausführen lassen. Du wählst die Sprite-Art (**kind**), die geprüft werden soll.

Wenn ein Sprite der gewählten Art eine Kachel überlappt, bekommst du es im Parameter **sprite** von **handler**, zusammen mit der Position (**location**) der überlappten Kachel.

Eine Überlappung wird erkannt, sobald die Außenkanten des Sprite-Bilds beginnen, die Kachel zu überlappen.

## Parameter

* **kind**: die Art von Sprite, bei der auf eine Überlappung geprüft wird.
* **handler**: der Code, der ausgeführt wird, wenn das Sprite eine Kachel überlappt. Dem Handler werden diese Parameter übergeben:
>* **sprite**: das Sprite, das die Kachel überlappt hat.
>* **location**: die Position der Kachel in der Kachelkarte, die das Sprite überlappt hat.

## Beispiel #example

Erstelle eine Kachelkarte mit einem Kachelbereich in der Mitte der Szene. Setze ein Sprite in Bewegung und lass es von Wänden abprallen. Wenn das Sprite die Kacheln überlappt, lass es eine Spur über die Kacheln ziehen.

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprite.startEffect(effects.trail, 100)
})
tiles.setTilemap(tilemap`level1`)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 1 1 2 2 2 2 2 2 1 1 . . . 
    . . . 1 2 2 2 2 2 2 2 2 1 . . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . . 1 2 2 2 2 2 2 2 2 1 . . . 
    . . . 1 1 2 2 2 2 2 2 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite.setBounceOnWall(true)
meinSprite.vx = 80
meinSprite.vy = 70
```

## Siehe auch #seealso

[Kachelposition abrufen](/reference/scene/get-tile-location),
[wenn Wand getroffen](/reference/scene/on-hit-wall)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAADu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7g==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
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