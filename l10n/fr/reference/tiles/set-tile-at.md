# définir la tuile à

Définis une tuile à un emplacement de la tilemap.

```sig
tiles.setTileAt(tiles.getTileLocation(0, 0), null)
```

Tu peux définir une tuile à une colonne et une ligne précises de la tilemap à l'aide d'un objet d'emplacement de tuile. Indique la tuile à placer dans la tilemap et son emplacement.

## Paramètres

* **loc** : un [emplacement](/reference/tiles/location) de tuile dans la tilemap.
* **tile** : la tuile à définir dans la tilemap.

## Exemple #example

Crée une tilemap vide et une tuile de couleur unie. Place la tuile de couleur unie à différents endroits de la tilemap et remplace son emplacement précédent par une tuile transparente.

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

## Voir aussi #seealso

[obtenir l'emplacement de la tuile](/reference/tiles/get-tile-location),
[placer sur la tuile](/reference/tiles/place-on-tile)

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