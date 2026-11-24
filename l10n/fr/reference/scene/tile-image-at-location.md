# image de la tuile à l'emplacement

Obtiens l'image de la tuile à un emplacement de la carte de tuiles.

```sig
tiles.tileImageAtLocation(tiles.getTileAtLocation(0, 0))
```

## Paramètres

* **location** : l'objet d'[emplacement](/reference/scene/location) de la tuile dont l'image doit être renvoyée.

## Retours

* l'[image](/types/image) de la tuile à l'emplacement **location** dans la carte de tuiles.

## Exemple #example

Crée une carte de tuiles avec quelques tuiles smiley. Crée un nouveau sprite à partir de l'image de l'une des tuiles smiley. Fais traverser l'écran au nouveau sprite, aller et retour.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.startEffect(effects.bubbles, 500)
})
tiles.setCurrentTilemap(tilemap`level1`)
let tileImage = tiles.tileImageAtLocation(tiles.getTileLocation(0, 0))
let monSprite = sprites.create(tileImage, SpriteKind.Player)
monSprite.setBounceOnWall(true)
monSprite.vx = 50
```

## Voir aussi #seealso

[emplacement](/reference/scene/location)

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