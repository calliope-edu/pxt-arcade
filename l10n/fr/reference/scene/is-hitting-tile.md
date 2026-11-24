# touche une tuile

Vérifie si un sprite touche actuellement un mur.

```sig
sprites.create(null).isHittingTile(CollisionDirection.Right)
```

Un mur est soit une tuile définie comme mur, soit le bord de la scène si une carte de tuiles est définie.

## Paramètres

* **direction** : la direction vers laquelle le sprite se déplace pour détecter une collision avec un mur : `left`, `right`, `top` ou `bottom`.

## Valeur renvoyée

* une valeur [booléenne](/types/boolean) qui vaut `true` si le sprite touche un mur du côté choisi, ou `false` sinon.

## Exemple #example

Crée une carte de tuiles avec un mur allant du haut vers le bas. Mets un sprite en mouvement et fais-lui dire « Ouch! » quand il touche le mur de son côté droit (`right`).

```blocks
tiles.setTilemap(tilemap`level1`)
let monSprite = sprites.create(img`
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
monSprite.vx = 80
monSprite.vy = 70
forever(function () {
    if (monSprite.isHittingTile(CollisionDirection.Right)) {
        monSprite.sayText("Ouch!", 200, false)
    }
})
```

## Voir aussi #seealso

[type de tuile à](/reference/scene/tile-kind-at),
[définir la tuile à](/reference/scene/set-tile-at)

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
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMA==",
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