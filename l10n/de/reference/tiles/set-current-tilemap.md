# setze aktuelle Tilemap

Legt eine Tilemap als aktuelle Tilemap für die Spielszene fest.

```sig
tiles.setCurrentTilemap(null)
```

Eine [Tilemap](/reference/tiles/tilemap) ist ein Datenobjekt mit den Abmessungen, Ebenen und der Kachelliste einer Kachelanordnung, die als Szene für ein Spiel festgelegt wird. Ein Spielprogramm kann mehrere Tilemaps enthalten, und die Szene oder das _Level_ des Spiels kann sich ändern, indem zu bestimmten Zeitpunkten eine andere Tilemap festgelegt wird.

Tilemaps werden nicht programmiert, sondern mit einem Tilemap-Editor erstellt. Jede Tilemap in einem Spielprojekt ist eine benannte Ressource und gehört zur **Assets**-Sammlung des Projekts. Im Code wird eine bestimmte Tilemap so über ihren Ressourcennamen angegeben:

```typescript
tiles.setCurrentTilemap(tilemap`level1`)
```

## Parameter

* **tilemap**: die [Tilemap](/reference/tiles/tilemap)-Daten mit dem Layout und den Kacheln, die für die Spielszene festgelegt werden. Die Tilemap kann über ihren Ressourcennamen angegeben werden, zum Beispiel: `` tilemap`level1` ``.

## Beispiel #example

Erstelle eine Labyrinth-Tilemap, durch die ein Sprite wandern kann. Lege die Tilemap als Szene für das Spiel fest. Erstelle ein Sprite und lass es durch das Labyrinth laufen.

```blocks
tiles.setCurrentTilemap(tilemap`level1`)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite.setPosition(0, 104)
meinSprite.vx = 16
```

## Siehe auch #seealso

[Tilemap](/reference/tiles/tilemap),
[setze Kachel an](/reference/scene/set-tile-at)

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
        "displayName": "myTile0"
    },
    "tile2": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDIwMjAyMDAwMjAyMDAwMTAxMDAwMjAwMDIwMDAyMDIwMDAwMDEwMDAyMDAwMjAwMDIwMDAwMDEwMTAwMDIwMDAyMDIwMjAwMDIwMTAwMDAwMDAwMDAwMDAyMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEyMjIyMjIyMjIyMDIwMDAwMDAyMDAyMjIwMjIyMjAwMjAyMDIyMjAwMDIwMjAyMDIyMDAyMDIyMjAyMjIwMDAwMDAwMjIwMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile2"
        ],
        "displayName": "maze"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```