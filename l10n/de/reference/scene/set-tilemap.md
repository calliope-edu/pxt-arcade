# Kachelkarte festlegen

Lege eine Kachelkarte als aktuelle Kachelkarte für die Spielszene fest.

```sig
tiles.setTilemap(null)
```

Eine Kachelkarte ist ein komplexes Datenobjekt, das die Abmessungen, Ebenen und die Kachelliste für eine Kachelanordnung enthält, die als Szene für ein Spiel festgelegt wird. Ein Spielprogramm kann mehr als eine Kachelkarte definieren, und die Szene oder das _Level_ des Spiels kann sich ändern, indem zu bestimmten Zeitpunkten im Spiel eine andere Kachelkarte festgelegt wird.

Kachelkarten werden nicht programmiert, sondern mit einem Kachelkarten-Editor erstellt. Jede Kachelkarte in einem Spielprojekt ist eine benannte Ressource und befindet sich in der **Assets**-Sammlung des Projekts. Eine bestimmte Kachelkarte wird so mit ihrem Ressourcennamen angegeben:

```typescript
tiles.setTilemap(tilemap`level1`)
```

## Parameter

* **tilemap**: die Kachelkartendaten mit dem Layout und den Kacheln, die für die Spielszene festgelegt werden sollen. Die Kachelkarte kann über ihren Ressourcennamen angegeben werden, zum Beispiel: `` tilemap`level1` ``.

## Beispiel #example

Erstelle eine Labyrinth-Kachelkarte, durch die sich ein Sprite bewegen kann. Lege die Kachelkarte als Szene für das Spiel fest. Erstelle ein Sprite und lass es durch das Labyrinth wandern.

```blocks
tiles.setTilemap(tilemap`level1`)
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

[Kachel setzen an](/reference/scene/set-tile-at)

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