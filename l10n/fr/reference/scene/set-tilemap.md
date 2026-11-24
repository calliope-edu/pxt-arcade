# définir la carte de tuiles

Définit une carte de tuiles comme carte de tuiles actuelle de la scène du jeu.

```sig
tiles.setTilemap(null)
```

Une carte de tuiles est un objet de données complexe qui contient les dimensions, les calques et la liste des tuiles d'une disposition de tuiles à utiliser comme scène d'un jeu. Un programme de jeu peut définir plusieurs cartes de tuiles, et la scène ou le _niveau_ du jeu peut changer en définissant une autre carte de tuiles à certains moments du jeu.

Les cartes de tuiles ne sont pas codées par l'utilisateur, mais créées avec un éditeur de cartes de tuiles. Chaque carte de tuiles d'un projet de jeu est une ressource nommée contenue dans la collection **assets** du projet. Une carte de tuiles précise est indiquée par son nom de ressource, comme ceci :

```typescript
tiles.setTilemap(tilemap`level1`)
```

## Paramètres

* **tilemap** : les données de la carte de tuiles contenant la disposition et les tuiles à définir pour la scène du jeu. La carte de tuiles peut être indiquée par son nom de ressource, par exemple : `` tilemap`level1` ``.

## Exemple #example

Crée une carte de tuiles en forme de labyrinthe que le sprite doit traverser. Définis la carte de tuiles comme scène du jeu. Crée un sprite et fais-le se déplacer dans le labyrinthe.

```blocks
tiles.setTilemap(tilemap`level1`)
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