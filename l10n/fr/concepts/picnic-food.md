# Pique-nique

## {Introduction @unplugged}

Les ``||sprites:sprites||`` peuvent être placés à différents endroits de l'écran. Pour cela, tu définis leur position ``||sprites:x||`` et ``||sprites:y||``.

Une position ``||sprites:x||`` de 0 place le sprite sur le **bord gauche** de l'écran – imagine « à 0 pixel du bord gauche ».

Une position ``||sprites:y||`` de 0 place le sprite sur le **bord supérieur** de l'écran.

## {Étape 1}

Trouve ``||variables(sprites):définir mySprite à||`` dans ``||sprites:Sprites||``. Fais glisser le bloc dans ``||loops:au démarrage||``. Clique sur ``||variables(noclick):mySprite||``, choisis ``Renommer la variable...`` et change le nom ``||variables(noclick):mySprite||`` en ``||variables(noclick):cherry||``.

```blocks
let cherry = sprites.create(img`
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

Ouvre l'éditeur d'images de ``||variables(noclick):cherry||``. Tu peux dessiner une cerise toi-même ou ouvrir la galerie et y choisir une image toute prête.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
```

## {Étape 3 @fullscreen}

Trouve ``||sprites:définir la position de mySprite à x 0 y 0||`` dans ``||sprites:Sprites||``. Remplace ``||variables(noclick):mySprite||`` par ``||variables(noclick):cherry||`` et mets ``||sprites:x||`` à 25.

La ``||variables(noclick):cherry||`` se retrouve alors en haut de l'écran, un peu (25 pixels) à l'écart du bord gauche.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 0)
```

## {Étape 4 @fullscreen}

Dans ``||sprites:définir la position de mySprite à x 0 y 0||``, mets la valeur ``||sprites:y||`` à 45.

Le sprite descend alors de 45 pixels **vers le bas**.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
```

## {Étape 5}

Crée un autre ``||sprites:sprite||`` et nomme-le ``||variables(noclick):chicken||``. Trouve (ou dessine) une image de poulet pour lui.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
```

## {Étape 6}

Mets la position ``||sprites:x||`` de ``||variables(noclick):chicken||`` à 120 et la position ``||sprites:y||`` à 80.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
chicken.setPosition(120, 80)
```

## {Terminé}

Super, ton pique-nique est prêt – avec des ``||sprites:sprites||`` à différents endroits de l'écran.
