# Kachelart an

Prüfe, ob die Kachel neben einem Sprite die gesuchte Kachel ist.

```sig
sprites.create(null).tileKindAt(TileDirection.Right, null)
```

Eine Kachel neben einem Sprite kann mit einer Kachel verglichen werden, nach der du suchst. Du wählst die Richtung, in der geprüft werden soll, ob sich die Kachel neben dem Sprite befindet. Wenn die Kachel in dieser Richtung der gesuchten entspricht, wird sie erkannt, sobald das Sprite weniger als die Hälfte seiner Größe in dieser Richtung entfernt ist.

## Parameter

* **direction**: die Richtung vom Sprite aus für die Kachelprüfung: `left` (links), `right` (rechts), `top` (oben) oder `bottom` (unten).
* **tile**: ein [Bild](/types/image), das der gesuchten Kachel entspricht.

## Rückgabewert

* ein [boolescher](/types/boolean) Wert, der `true` ist, wenn die Kachel neben dem Sprite in Richtung **direction** der zu prüfenden **tile** entspricht. Andernfalls wird `false` zurückgegeben.

## Beispiel #example

Erstelle eine Kachelkarte mit drei Kachelspalten in jeweils einer anderen Farbe. Setze ein Sprite von links nach rechts in Bewegung. Wenn das Sprite in die Nähe einer Kachel kommt, prüfe, welche Farbe die Kachel hat.

```blocks
tiles.setTilemap(tilemap`level1`)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 1 1 9 9 9 9 9 9 1 1 . . . 
    . . . 1 9 9 9 9 9 9 9 9 1 . . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
    . . . 1 9 9 9 9 9 9 9 9 1 . . . 
    . . . 1 1 9 9 9 9 9 9 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite.x = 0
game.onUpdateInterval(100, function () {
    if (meinSprite.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
        meinSprite.sayText("red", 100, false)
    } else if (meinSprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        meinSprite.sayText("green", 100, false)
    } else if (meinSprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        meinSprite.sayText("yellow", 100, false)
    } else if (meinSprite.right >= scene.screenWidth()) {
        meinSprite.x = 0
    }
    meinSprite.x += 2
})
```

## Siehe auch #seealso

[berührt Kachel](/reference/scene/is-hitting-tile)

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
    "tile2": {
        "data": "hwQQABAAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "tile3": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "tile4": {
        "data": "hwQQABAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile2"
    },
    "tile5": {
        "data": "hwQQABAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile3"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMTAwMDAwMzAwMDAwMjAwMDAwMDAxMDAwMDAzMDAwMDAyMDAwMDAwMDEwMDAwMDMwMDAwMDIwMDAwMDAwMTAwMDAwMzAwMDAwMjAwMDAwMDAxMDAwMDAzMDAwMDAyMDAwMDAwMDEwMDAwMDMwMDAwMDIwMDAwMDAwMTAwMDAwMzAwMDAwMjAwMDAwMDAxMDAwMDAzMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5"
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