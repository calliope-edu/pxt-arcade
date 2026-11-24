# type de tuile à

Vérifie si la tuile à côté d'un sprite est celle que tu cherches.

```sig
sprites.create(null).tileKindAt(TileDirection.Right, null)
```

Une tuile à côté d'un sprite peut être comparée à la tuile que tu veux vérifier. Tu choisis la direction dans laquelle vérifier si la tuile se trouve à côté du sprite. Si la tuile dans cette direction correspond à celle que tu cherches, elle est détectée lorsque le sprite se trouve à moins de la moitié de sa dimension dans cette direction.

## Paramètres

* **direction** : la direction, à partir du sprite, dans laquelle vérifier la tuile : `left`, `right`, `top` ou `bottom`.
* **tile** : une [image](/types/image) qui correspond à la tuile que tu cherches.

## Retours

* une valeur [booléenne](/types/boolean) qui est `true` si la tuile près du sprite dans la direction **direction** correspond à la tuile **tile** que tu veux vérifier. Sinon, `false` est renvoyé.

## Exemple #example

Crée une carte de tuiles avec trois colonnes de tuiles, chacune d'une couleur différente. Mets un sprite en mouvement de gauche à droite. Lorsque le sprite s'approche d'une tuile, vérifie de quelle couleur elle est.

```blocks
tiles.setTilemap(tilemap`level1`)
let monSprite = sprites.create(img`
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
monSprite.x = 0
game.onUpdateInterval(100, function () {
    if (monSprite.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
        monSprite.sayText("red", 100, false)
    } else if (monSprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        monSprite.sayText("green", 100, false)
    } else if (monSprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        monSprite.sayText("yellow", 100, false)
    } else if (monSprite.right >= scene.screenWidth()) {
        monSprite.x = 0
    }
    monSprite.x += 2
})
```

## Voir aussi #seealso

[touche la tuile](/reference/scene/is-hitting-tile)

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