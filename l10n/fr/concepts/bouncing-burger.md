# Burger rebondissant

## {Introduction @unplugged}

Tu peux donner aux ``||sprites:Sprites||`` une vitesse dans les directions ``||sprites:x||`` et ``||sprites:y||`` pour qu'ils se déplacent sur l'écran. Ici, un ``||sprites:sprite||`` représente un burger qui rebondit sur l'écran.

## {Étape 1 @fullscreen}

Trouve ``||variables(sprites):définir mySprite à||`` dans ``||sprites:Sprites||``. Fais glisser le bloc dans ``||loops:au démarrage||``.

```blocks
let mySprite = sprites.create(img`
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

Clique sur la case grise dans ``||variables(sprites):définir mySprite à||`` pour ouvrir l'éditeur d'images. Ouvre la galerie, fais défiler jusqu'à l'image d'un burger et clique dessus pour la choisir.

Maintenant, l'image du ``||sprites:sprite||`` est un burger. Lance le code et vérifie que tu le vois bien à l'écran !

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Étape 3 @fullscreen}

Trouve ``||sprites:définir mySprite x à 0||`` dans ``||sprites:Sprites||``. Place le bloc sous ``||variables(sprites):définir mySprite à||`` et remplace ``||sprites:x||`` par ``||sprites:vx||``. Remplace le 0 par 40.

Le sprite se déplace alors **vers la droite** sur l'écran, car sa position ``||sprites:x||`` **augmente**.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40;
```

## {Étape 4 @fullscreen}

Trouve ``||sprites:définir mySprite x à 0||`` dans ``||sprites:Sprites||``. Place le bloc sous ``||variables(sprites):définir mySprite à||`` et remplace ``||sprites:x||`` par ``||sprites:vy||``. Remplace le 0 par 60.

Le sprite se déplace alors **vers le bas** sur l'écran, car sa position ``||sprites:y||`` **augmente**.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40
mySprite.vy = 60
```

## {Étape 5 @fullscreen}

Trouve ``||sprites:définir mySprite rebondir sur mur||`` dans ``||sprites:Sprites||``. Place le bloc sous ``||variables(sprites):définir mySprite à||``.

Maintenant, quand le burger touche un mur, il « rebondit » dessus en changeant son ``||sprites:vx||`` ou son ``||sprites:vy||``.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40
mySprite.vy = 60
mySprite.setBounceOnWall(true)
```

## {Terminé}

Super, ton burger rebondit maintenant sur les murs ! Avec ça, tu peux créer plein de jeux différents.

Tu pourrais par exemple créer un jeu où tu diriges un autre ``||sprites:sprite||`` et où tu dois **éviter** le burger le plus longtemps possible.
