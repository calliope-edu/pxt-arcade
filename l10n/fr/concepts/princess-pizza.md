# Princesse Pizza

## {Introduction @unplugged}

Quand des ``||sprites:sprites||`` se déplacent, il arrive souvent que deux sprites se retrouvent l'un sur l'autre. Avec l'événement de ``||sprites:chevauchement de sprites||``, tu peux décider de ce qui se passe alors entre les ``||sprites:sprites||``.

## {Étape 1 @fullscreen}

Trouve ``||variables(sprites):définir monSprite à||`` dans ``||sprites:Sprites||``. Fais glisser le bloc dans ``||loops:au démarrage||``. Clique sur ``||variables:monSprite||``, choisis ``Renommer la variable...`` et change le nom ``||variables:monSprite||`` en ``||variables:princess||``.

```blocks
let princess = sprites.create(img`
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

Ouvre l'éditeur d'images de ``||variables:princess||`` et choisis ou dessine une image de princesse.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
```

## {Étape 3 @fullscreen}

Trouve ``||controller:déplacer monSprite avec les boutons||`` dans ``||controller:Contrôleur||``. Place le bloc sous ``||variables:définir princess à||``. Remplace ``||variables:monSprite||`` par ``||variables:princess||``.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
```

## {Étape 4 @fullscreen}

Trouve ``||variables(sprites):définir monSprite à||`` dans ``||sprites:Sprites||``. Fais glisser le bloc dans ``||loops:au démarrage||``. Renomme ``||variables:monSprite||`` en ``||variables:pizza||``. Ouvre l'éditeur d'images et choisis ou dessine une image de pizza.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Étape 5 @fullscreen}

Trouve ``||sprites:définir la position de monSprite à x 0 y 0||`` dans ``||sprites:Sprites||``. Remplace ``||variables(noclick):monSprite||`` par ``||variables(noclick):pizza||``, mets ``||sprites:x||`` à 140 et ``||sprites:y||`` à 100.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
pizza.setPosition(140, 100)
```

## {Étape 6 @fullscreen}

Dans le ``||sprites:sprite||`` ``||variables:pizza||``, sélectionne ``||sprites:type Player||`` et remplace-le par ``||sprites:type Food||``.

Le ``||sprites:type||`` d'un ``||sprites:sprite||`` indique de quelle sorte de sprite il s'agit. Tu peux ainsi regrouper différents sprites.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Étape 7 @fullscreen}

Trouve ``||sprites:quand sprite de type Player chevauche autreSprite de type Player||`` dans ``||sprites:Sprites||`` et fais glisser le bloc dans l'espace de travail. Remplace le premier ``||sprites:Player||`` par ``||sprites:Food||``.

Cet événement se produit chaque fois que deux ``||sprites:sprites||`` des ``||sprites:types||`` indiqués se chevauchent.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, autreSprite) {

})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Étape 8 @fullscreen}

Trouve ``||game:jeu terminé||`` dans ``||game:Jeu||`` et fais glisser le bloc dans l'événement de ``||sprites:chevauchement de sprites||``.

Le jeu se termine alors dès que la ``||sprites:princess||`` touche la ``||sprites:pizza||``.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, autreSprite) {
    game.gameOver(false)
})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Terminé}

Super, ton jeu est terminé ! On peut déplacer la ``||variables(noclick):princess||`` aussi longtemps qu'on veut – tant qu'on évite la ``||variables(noclick):pizza||``.
