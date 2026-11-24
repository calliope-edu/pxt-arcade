# Course à défilement horizontal : créer la voiture

## {Introduction @unplugged}

Crée un sprite en mouvement pour faire rouler une voiture de course sur un plan de tuiles en forme de circuit.

![Créer la voiture](/static/recipes/side-scroller/02-create-car.gif)

## {Étape 1 - Créer un sprite joueur}

Depuis le tiroir ``||sprites:Sprites||`` de la boîte à outils, fais glisser un bloc ``||variables(sprites):définir monSprite à||`` dans le bloc ``||loops:au démarrage||``, après le bloc ``||scene:définir plan des tuiles à||``.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```

## {Étape 2 - Dessiner ta voiture}

Dans le bloc ``||sprites:sprite||``, clique sur l'ovale gris de l'image et choisis une image dans la Galerie ou dessine ton propre sprite **Voiture**.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```

## {Étape 3 - Ajouter la gravité}

Ajoutons du code qui imite la gravité qui tire notre voiture vers le bas. Pour cela, on donne une accélération à notre voiture.

Depuis le tiroir ``||sprites:Sprites||`` de la boîte à outils, fais glisser un bloc ``||sprites:définir monSprite x à 0||`` et dépose-le après le bloc ``||variables(sprites):définir monSprite à||``.

## {Étape 4 - Régler l'accélération}

Dans le bloc ``||sprites:définir monSprite x à 0||``, clique sur le menu déroulant de la propriété ``||sprites:x||`` et choisis ``||sprites:ay (accélération selon y)||`` pour l'axe vertical. Mets la valeur à ``400``. Cela tire notre voiture vers le bas, comme la gravité.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
monSprite.ay = 400
```

## {Étape 5 - Faire avancer la voiture}

Ajoutons maintenant du code pour que notre voiture avance toute seule.

Depuis le tiroir ``||sprites:Sprites||`` de la boîte à outils, fais glisser un autre bloc ``||sprites:définir monSprite x à 0||`` dans le bloc ``||loops:au démarrage||``. Cette fois, clique sur le menu déroulant de la propriété ``||sprites:x||`` et choisis ``||sprites:vx (vitesse selon x)||`` pour l'axe horizontal X. Mets la valeur à ``100``. Ainsi, notre voiture roule vers la droite de l'écran à cette vitesse.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
monSprite.ay = 400
monSprite.vx = 100
```

## {Étape 6 - La caméra suit le sprite}

Dans le simulateur, tu vois que notre voiture sort de l'écran ! Il nous faut du code pour que la caméra suive la voiture pendant qu'elle roule.

Depuis le tiroir ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:camera suit sprite||`` et dépose-le après le dernier bloc ``||sprites:définir monSprite||``.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
monSprite.ay = 400
monSprite.vx = 100
scene.cameraFollowSprite(monSprite)
```

## {Terminé @unplugged}

Il y a des obstacles sur le chemin de la ligne d'arrivée, il faut donc pouvoir sauter par-dessus. Ajoute maintenant une commande de saut à la voiture.

|      |
|:----:|
| [![Voiture de course qui saute](/static/recipes/side-scroller/03-control-car.gif)](#recipe:/recipes/side-scroller/03-control-car) |
| [**Fais sauter ta voiture**](#recipe:/recipes/side-scroller/03-control-car) |

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAA/8z//wAAAMzP/P//wP////////8AAAD//8zM/AAAAADw////AAAAAP////8AAMz8/////8D////PzP//AAD///////8AAADw///P/wAAAADM////AAAAAPD///8AAPD//8zM/8D//8z8////AMD8//z//P8AAAAAAP/PzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAzMjAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDIyMjIyMjIyMDAyMDIyMjIyMjAwMjAyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.vehicle.roadHorizontal",
            "myTiles.tile1",
            "sprites.dungeon.greenOuterEast0"
        ]
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```