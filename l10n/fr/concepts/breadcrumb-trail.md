# Piste de miettes

## {Introduction @unplugged}

En plaçant des ``||sprites:sprites||`` sur un ``||scene:plan des tuiles||``, tu peux construire de super niveaux
à explorer. Ces ``||sprites:sprites||`` peuvent servir de décoration
ou être des objets avec lesquels le joueur peut interagir.

Ici, tu vas créer une scène de forêt avec des miettes de pain posées sur l'herbe.

![Une piste de miettes apparaît](/static/concepts/breadcrumb-trail/breadcrumb-trail.gif)

## {Étape 1}

Trouve ``||scene:définir plan des tuiles à||`` dans ``||scene:Scène||``
et fais-le glisser dans ``||loops:au démarrage||``.
Ouvre l'éditeur de tuiles et remplis la surface d'un fond d'herbe avec le pot de peinture.

```blocks
tiles.setTilemap(tilemap`level_0`)
```

## {Étape 2}

Ouvre à nouveau l'éditeur du ``||scene:plan des tuiles||``.
Avec une autre tuile, dessine un chemin d'**en haut à gauche** jusqu'**en bas à droite**.

```blocks
tiles.setTilemap(tilemap`level_1`)
```

## {Étape 3}

Trouve ``||loops:pour l'élément value de list||``
et place-le sous le bloc ``||scene:définir plan des tuiles à||``.

```blocks
let list: number[] = []
tiles.setTilemap(tilemap`level_1`)
for (let value of list) {

}
```

## {Étape 4}

Trouve ``||scene:tableau des emplacements de||`` dans ``||scene:Scène||``.
Place-le sur ``||variables:list||`` dans le bloc ``||loops:pour l'élément value de list||``.
Choisis la tuile avec laquelle tu as dessiné la diagonale sur la carte.
La boucle s'exécute maintenant une fois pour chaque tuile de ce type dans le plan des tuiles.

```blocks
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {

}
```

## {Étape 5}

Trouve ``||variables(sprites):définir mySprite à sprite de type Player||`` dans ``||sprites:Sprites||``
et fais-le glisser dans la boucle ``||loops:pour l'élément||``.
Dessine des miettes de pain comme image du sprite.
Ainsi, pour chacune des
``||scene:tuiles||`` choisies du ``||scene:plan des tuiles||``, un nouveau ``||sprites:sprite||`` est créé.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
}
```

## {Étape 6}

Trouve ``||scene:placer mySprite sur plan des tuiles col ligne||``
et place-le sous ``||variables(sprites):définir mySprite à||``.
Fais glisser ``||variables:value||`` de la ``||loops:boucle pour||`` sur ``||variables:plan des tuiles col ligne||``.
Vérifie que ``||variables(noclick):mySprite||`` est bien la ``||variables:variable||`` du
``||sprites:sprite||`` que tu viens de créer.
Ainsi, les miettes se retrouvent sur chaque ``||scene:tuile||`` de la diagonale.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
}
```

## {Étape 7}

Si tu veux que la tuile sous le sprite ressemble aux autres,
pour qu'elle ne se remarque pas,
trouve ``||scene:définir à plan des tuiles col ligne||`` dans ``||scene:Scène||``
et place-le sous ``||variables(sprites):définir mySprite à||``.
Fais glisser ``||variables:value||`` sur ``||scene:plan des tuiles col ligne||``
et choisis la tuile qu'elle doit devenir (ici, la même que les autres tuiles).

![Exemple pour terminer cette étape](/static/concepts/breadcrumb-trail/removing-placer-tiles.gif)

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
}
```

## {Terminé}

Bravo, ta forêt est terminée ! Si tu veux voir les miettes apparaître l'une après l'autre,
ajoute une ``||loops:pause||`` dans la boucle ``||loops:pour l'élément||``.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    pause(350)
}
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3",
            "sprites.castle.tileDarkGrass2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```