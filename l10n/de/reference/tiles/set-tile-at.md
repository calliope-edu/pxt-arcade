# setze Kachel an

Setzt eine Kachel an eine Position in der Tilemap.

```sig
tiles.setTileAt(tiles.getTileLocation(0, 0), null)
```

Mit einem Kachelpositions-Objekt kannst du eine Kachel an eine bestimmte Spalte und Zeile der Tilemap setzen. Gib eine Kachel und eine Position dafür an.

## Parameter

* **loc**: eine Kachel-[Position](/reference/tiles/location) in der Tilemap.
* **tile**: die Kachel, die in der Tilemap gesetzt wird.

## Beispiel #example

Erstelle eine leere Tilemap und eine einfarbige Kachel. Setze die einfarbige Kachel an verschiedene Stellen der Tilemap und ersetze ihre vorherige Position durch eine transparente Kachel.

```blocks
tiles.setTilemap(tilemap`level1`)
let spot = tiles.getTileLocation(0, 0)
forever(function () {
    tiles.setTileAt(spot, assets.tile`transparency16`)
    spot = tiles.getTileLocation(randint(0, 9), randint(0, 6))
    tiles.setTileAt(spot, assets.tile`myTile`)
    pause(1000)
})
```

## Siehe auch #seealso

[Kachelposition abrufen](/reference/tiles/get-tile-location),
[auf Kachel platzieren](/reference/tiles/place-on-tile)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
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