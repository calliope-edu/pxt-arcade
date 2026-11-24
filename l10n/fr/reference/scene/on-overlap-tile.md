# lorsque chevauche une tuile

Exécute du code lorsqu'un sprite chevauche une tuile.

```sig
scene.onOverlapTile(SpriteKind.Player, null, function (sprite, location) {})
```

Tu peux détecter quand un sprite en mouvement chevauche une tuile dans la carte de tuiles. Si ton sprite passe sur une tuile, tu peux faire exécuter du code à ce moment-là. Tu choisis le **type** de sprite à vérifier.

Lorsqu'un chevauchement est détecté pour un sprite du type demandé, ce sprite t'est donné dans le paramètre **sprite** du **handler**, avec l'**emplacement** (**location**) de la tuile chevauchée.

Un chevauchement est détecté lorsque les bords extérieurs de l'image du sprite commencent à chevaucher la tuile.

## Paramètres

* **kind** : le type de sprite pour lequel vérifier un chevauchement.
* **handler** : le code à exécuter lorsque le sprite chevauche une tuile. Le handler reçoit ces paramètres :
>* **sprite** : le sprite qui a chevauché la tuile.
>* **location** : l'emplacement dans la carte de tuiles de la tuile chevauchée par le sprite.

## Exemple #example

Crée une carte de tuiles avec une zone de tuiles au centre de la scène. Mets un sprite en mouvement et fais-le rebondir sur les murs. Lorsque le sprite chevauche les tuiles, fais-lui laisser une traînée sur les tuiles.

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprite.startEffect(effects.trail, 100)
})
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
```

## Voir aussi #seealso

[obtenir l'emplacement de la tuile](/reference/scene/get-tile-location),
[lorsque touche un mur](/reference/scene/on-hit-wall)

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
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
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