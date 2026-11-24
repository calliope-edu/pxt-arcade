# Labyrinthe

### ~button /#tutorial:/tutorials/maze

Essaie ce tutoriel !

### ~

## {Introduction @unplugged}

Bienvenue dans @boardname@ ! Commençons par créer un jeu où ton joueur doit sortir d'un labyrinthe avant la fin du temps !

![Le jeu du labyrinthe en action](/static/tutorials/maze/maze-game.gif)

## {Étape 1}

Commençons par créer notre joueur. Trouve le bloc ``||variables(sprites):définir monSprite à||`` dans ``||sprites:Sprites||``. Fais-le glisser dans ``||loops:au démarrage||``.

```blocks
let monSprite: Sprite = sprites.create(img`
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

## {Étape 2 @fullscreen}

Clique sur la case grise dans ``||variables(sprites):définir monSprite à||`` et dessine l'image de ton joueur. Ça peut être n'importe quoi, un carré plein ou un personnage.

![Dessine un personnage pour le sprite](/static/tutorials/maze/draw-sprite-figure.gif)

```blocks
let monSprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
```

## {Étape 3}

Maintenant, faisons bouger notre personnage avec les flèches de la manette. Prends ``||controller:déplacer monSprite avec les boutons||`` dans ``||controller:Contrôleur||`` et place-le sous ``||variables(sprites):définir monSprite à||``.

```blocks
let monSprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
```

## {Étape 4}

Ensuite, crée un plan de tuiles qui servira de labyrinthe. Fais glisser ``||scene:définir plan des tuiles à||`` de ``||scene:Scène||`` dans ``||loops:au démarrage||``.
Clique sur la case grise pour ouvrir le plan de tuiles, choisis des tuiles et utilise les outils pour dessiner ton propre labyrinthe.
Pense à laisser un chemin du départ jusqu'à l'arrivée, pour que le joueur puisse s'échapper.
Laisse une tuile vide à l'endroit du départ et à celui de l'arrivée.

![Dessine le plan de tuiles du labyrinthe](/static/tutorials/maze/draw-maze.gif)

```blocks
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
```

## {Étape 5}

Remplis les deux cases vides que tu as laissées à l'étape précédente avec deux nouvelles tuiles :
une qui ressemble à quelque chose qui permet de s'échapper (par exemple une porte ou un escalier),
et une autre qui marque l'endroit du départ (par exemple une échelle).
Vérifie que ces tuiles ne sont utilisées nulle part ailleurs dans le plan de tuiles.

```blocks
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
```

## {Étape 6}

Trouve ``||scene:placer monSprite sur une tuile aléatoire||`` dans ``||scene:Scène||``,
et fais-le glisser dans ``||loops:au démarrage||`` après ``||scene:définir plan des tuiles à||``.
Cela place le personnage que tu as créé sur l'une des tuiles choisies ;
clique sur la tuile en damier et choisis la tuile que tu as prévue comme point de départ du joueur.

```blocks
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
```

## {Étape 7}

Le joueur est maintenant hors de l'écran, ce qui rend le jeu un peu trop difficile ;
trouve ``||scene:camera suit sprite monSprite||`` dans ``||scene:Scène||``,
et fais-le glisser à la fin de ``||loops:au démarrage||``.
Ainsi, la caméra suit le personnage du joueur quand il se déplace sur l'écran.

```blocks
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(monSprite)
```

## {Étape 8}

Trouve ``||scene:lorsque sprite de type player chevauche à||`` dans ``||scene:Scène||``.
Cet événement se produit chaque fois que le joueur se trouve sur une tuile du type indiqué ;
clique sur la case en damier et remplace-la par la tuile choisie pour la sortie du labyrinthe.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {

})
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(monSprite)
```

## {Étape 9}

Trouve ``||game:jeu terminé||`` dans ``||game:Jeu||`` et fais-le glisser dans ``||scene:lorsque sprite de type player chevauche à||``.
Clique sur ``LOSE`` (perdu) pour le changer en ``WIN`` (gagné).
Ainsi, le joueur gagne quand il touche la sortie.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(monSprite)
```

## {Étape 10}

Trouve ``||info:démarrer compte à rebours 10 (s)||`` dans ``||info:Info||`` et fais-le glisser dans ``||loops:au démarrage||``.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(monSprite)
info.startCountdown(10)
```

## {Étape 11 @unplugged}

Maintenant, tu as un jeu avec un objectif et une limite de temps... mais le joueur peut traverser tous les murs !
Rouvre l'éditeur de plan de tuiles
et utilise l'outil ``Draw walls`` (dessiner des murs) pour placer des murs sur tout ce qui doit bloquer le joueur dans le plan de tuiles,
pour qu'il ne puisse pas les traverser.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(monSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(monSprite)
info.startCountdown(10)
```

## {Terminé}

Bravo, ton jeu de labyrinthe est terminé ! Tu peux maintenant jouer à ton premier jeu. Arriveras-tu à sortir du labyrinthe ?

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
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcwMDBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjAwMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "myTiles.transparency16"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcxMzBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjFjMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "sprites.dungeon.stairLadder"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```