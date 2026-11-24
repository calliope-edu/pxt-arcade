# la tuile à l'emplacement est égale à

Vérifie si un emplacement de la tilemap contient la tuile que tu cherches.

```sig
tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), null)
```

## Paramètres

* **location** : un [emplacement](/reference/scene/location) dans la tilemap.
* **tile** : une [image](/types/image) qui correspond à la tuile que tu cherches.

## Retours

* une valeur [booléenne](/types/boolean) qui vaut `true` si la tuile à **location** correspond à la **tile** que tu veux vérifier. Sinon, `false` est renvoyé.

## Exemple #example

Crée une tilemap avec deux colonnes de tuiles de mur, chacune d'une couleur différente. Mets un sprite en mouvement et fais-le rebondir sur les murs. Quand le sprite touche une tuile, vérifie de quelle couleur elle est.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile0`)) {
        monSprite.sayText("Blue", 500, false)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile1`)) {
        monSprite.sayText("Green", 500, false)
    } else {
        monSprite.startEffect(effects.fire, 200)
    }
})
let monSprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
monSprite = sprites.create(img`
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
monSprite.setBounceOnWall(true)
monSprite.vx = 40
monSprite.vy = 35
```

## Voir aussi #seealso

[obtenir l'emplacement de la tuile](/reference/tiles/get-tile-location)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "tile2": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAyMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDIwMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMDIwMDAwMDAyMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile2"
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