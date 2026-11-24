# définir la tilemap actuelle

Définis une tilemap comme tilemap actuelle de la scène du jeu.

```sig
tiles.setCurrentTilemap(null)
```

Une [tilemap](/reference/tiles/tilemap) est un objet de données qui contient les dimensions, les calques et la liste des tuiles d'un pavage à utiliser comme scène d'un jeu. Un programme de jeu peut définir plusieurs tilemaps, et la scène ou le _niveau_ du jeu peut changer si tu définis une autre tilemap à certains moments du jeu.

Les tilemaps ne sont pas codées par l'utilisateur mais créées avec un éditeur de tilemap. Chaque tilemap d'un projet de jeu est une ressource nommée et fait partie de la collection **assets** du projet. Dans le code, une tilemap particulière est indiquée par son nom de ressource, comme ceci :

```typescript
tiles.setCurrentTilemap(tilemap`level1`)
```

## Paramètres

* **tilemap** : les données de [tilemap](/reference/tiles/tilemap) contenant la disposition et les tuiles à définir pour la scène du jeu. La tilemap peut être indiquée par son nom de ressource, par exemple : `` tilemap`level1` ``.

## Exemple #example

Crée une tilemap en forme de labyrinthe qu'un sprite pourra parcourir. Définis la tilemap comme scène du jeu. Crée un sprite et fais-le avancer dans le labyrinthe.

```blocks
tiles.setCurrentTilemap(tilemap`level1`)
let monSprite = sprites.create(img`
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
monSprite.setPosition(0, 104)
monSprite.vx = 16
```

## Voir aussi #seealso

[tilemap](/reference/tiles/tilemap),
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