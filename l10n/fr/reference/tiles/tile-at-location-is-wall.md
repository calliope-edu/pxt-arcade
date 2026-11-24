# la tuile à l'emplacement est un mur

Vérifie si la tuile à un emplacement de la tilemap est aussi une tuile de mur.

```sig
tiles.tileAtLocationIsWall(null)
```

La tuile de la tilemap à l'emplacement choisi est vérifiée pour savoir si elle est définie comme mur. Une fois placées dans la tilemap avec l'éditeur de tilemap, les tuiles peuvent être définies comme tuiles de _mur_.

## Paramètres

* **location** : l'objet [emplacement](/reference/tiles/location) de la tuile dont tu veux vérifier si c'est un mur.

## Retours

* une valeur [booléenne](/types/boolean) qui vaut `true` si la tuile à **location** est un mur. La valeur est `false` si la tuile n'est pas un mur.

## Exemple #example

Définis une tilemap avec deux colonnes de la même tuile. Fais de l'une des colonnes une colonne de tuiles de mur. Envoie un sprite fantôme à travers les deux colonnes pour qu'il détecte laquelle est le mur.

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (tiles.tileAtLocationIsWall(location)) {
        monSprite.sayText("That's a wall!")
    } else {
        monSprite.sayText("Not a wall.")
    }
})
let monSprite: Sprite = null
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level1`)
monSprite = sprites.create(img`
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
monSprite.left = 0
monSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
monSprite.vx = 30
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