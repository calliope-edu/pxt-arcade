# Kachel an Position ist Wand

Prüfe, ob eine Kachel an einer Position in der Kachelkarte auch eine Wandkachel ist.

```sig
tiles.tileAtLocationIsWall(null)
```

Die Kachel an der gewählten Position in der Kachelkarte wird darauf geprüft, ob sie als Wand festgelegt ist. Nachdem Kacheln mit dem Kachelkarten-Editor in die Kachelkarte gesetzt wurden, können sie als _Wand_kacheln festgelegt werden.

## Parameter

* **location**: das [Positions](/reference/scene/location)-Objekt der Kachel, die darauf geprüft werden soll, ob sie eine Wand ist.

## Rückgabewert

* ein [boolescher](/types/boolean) Wert, der `true` ist, wenn die Kachel an **location** eine Wand ist. Der Wert ist `false`, wenn die Kachel keine Wand ist.

## Beispiel #example

Lege eine Kachelkarte mit zwei Spalten aus derselben Kachel fest. Mache eine der Spalten komplett zu Wandkacheln. Schicke ein Geister-Sprite durch beide Spalten, damit es erkennt, welche davon die Wand ist.

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (tiles.tileAtLocationIsWall(location)) {
        meinSprite.sayText("That's a wall!")
    } else {
        meinSprite.sayText("Not a wall.")
    }
})
let meinSprite: Sprite = null
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level1`)
meinSprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
meinSprite.left = 0
meinSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
meinSprite.vx = 30
```

## Siehe auch #seealso

[Position](/reference/scene/location),
[Kachelposition abrufen](/reference/scene/get-tile-location)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABmZmZmZmZmZmZvZmZmb2ZmZmZm9mZm9mZmZm9mb2ZmZvZmZmZmZm9mZmZmZmZmZmZmZmZmZmZmZmb2ZvZmb2Zm9mZmZmZm9mZmZmZmZmZmZmb2b2b2ZmZmZmZmZmZmZm9mZmb2ZmZmZmb2ZmZm9mZvZmZmZvZmZvZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAxMDAwMDAxMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMTAwMDAwMTAwMDAwMDAwMDAwMDAxMDAwMDAxMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMTAwMDAwMTAwMDAwMDAwMDAwMDAxMDAwMDAxMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMA==",
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