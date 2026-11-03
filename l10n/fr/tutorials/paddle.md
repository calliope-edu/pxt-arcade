# Raquette

## {Introduction @unplugged}

**Raquette** est une variante à 2 joueurs du célèbre jeu de pong !

![Une balle qui rebondit sur des raquettes](/static/tutorials/paddle.gif)

## {Étape 1}

Commençons par créer la balle. Utilise ``||variables(sprites):définir mySprite à sprite||`` pour créer un sprite de balle. Change le nom de la variable ``||variables(noclick):mySprite||`` en ``||variables(noclick):ball||``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
```

## {Étape 2}

Ajoute du code pour ``||sprites:définir la vitesse de ball||`` avec ``||sprites:vx||`` à ``100`` et ``||sprites:vy||`` à ``100``. Ajoute aussi ``||sprites:définir ball rebondir sur les murs||``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
```

## {Étape 3}

Avec un peu plus de code, définis ``||sprites:y||`` de ``||variables(noclick):ball||`` avec ``||math:choisir aléatoirement||`` pour obtenir une valeur entre ``0`` et ``120``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
ball.y = randint(0, 120)
```

## {Étape 4}

Crée une ``||functions:fonction||`` appelée ``create_ball`` et déplace le code que tu as ajouté aux étapes
précédentes depuis ``||loops:au démarrage||`` dans cette fonction. Ensuite, place ``||functions:appel create_ball||`` dans ``||loops:au démarrage||``.

```blocks
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let ball: Sprite = null
create_ball()
```

## {Étape 5}

Occupons-nous de la raquette gauche. Ajoute un nouveau ``||variables(sprites):définir mySprite à sprite||`` dans ``||loops:au démarrage||`` et renomme la variable en ``||variables(noclick):left_paddle||``. Change le type en ``||sprites:LeftPaddles||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
```

## {Étape 6}

Fais monter et descendre ``||variables(noclick):left_paddle||`` avec 
``||controller:déplacer left_paddle avec les boutons||``. Utilise la vitesse `0` pour ``||controller:vx||`` et `150`
pour ``||controller:vy||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
```

## {Étape 7}

Ajoute du code pour ``||sprites:définir left_paddle gauche||`` à la position ``0``.
Tu veux aussi ``||sprites:définir left_paddle rester dans l'écran||`` pour que la raquette ne disparaisse pas.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
left_paddle.left = 0
left_paddle.setStayInScreen(true)
```

## {Étape 8}

Crée une ``||functions:fonction||`` appelée ``create_left_paddle`` et déplace le code que tu as ajouté dans ``||loops:au démarrage||`` dans cette fonction. Ensuite, ajoute ``||functions:appel create_left_paddle||`` dans ``||loops:au démarrage||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle: Sprite = null
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
create_left_paddle()
```

## {Étape 9}

Crée une autre ``||functions:fonction||`` appelée ``create_right_paddle``. Elle contiendra le code pour ``||variables(noclick):right_paddle||``.
Copie tout le code de la fonction ``create_left_paddle`` et mets-le dans cette nouvelle
fonction. Remplace toutes les variables ``||variables(noclick):left_paddle||`` de la fonction par
``||variables(noclick):right_paddle||``. Ensuite, ajoute ``||functions:appel create_right_paddle||`` dans ``||loops:au démarrage||``.


```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(right_paddle, 0, 150)
    right_paddle.left = 0
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Étape 10}

Faisons encore quelques changements dans ``create_right_paddle``. Change le type du sprite de la raquette en ``||sprites:RightPaddles||``. Change le réglage de position de la raquette de ``||sprites:gauche||`` à
``||sprites:droite||`` et mets la valeur à `160`. Pour en faire un jeu à 2 joueurs, remplace le code
``||controller:déplacer||`` ``||variables(noclick):right_paddle||`` par le bloc multijoueur ``||controller:joueur 2 déplacer||`` pour
``||variables(noclick):right_paddle||``. Utilise les mêmes valeurs pour ``||controller:vx||`` et ``||controller:vy||``.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Étape 11}

Vérifie que tu appelles les 3 fonctions ``||functions:appel create_ball||``, ``||functions:appel create_left_paddle||`` et ``||functions:appel create_right_paddle||`` dans ``||loops:au démarrage||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
```

## {Étape 12}

Ajoute un événement qui exécute du code quand ``||variables(noclick):ball||`` chevauche ``||variables:left_paddle||``. C'est le cas ``||sprites:quand||`` ``||variables(noclick):sprite||`` ``||sprites:de type Player chevauche||`` ``||variables(noclick):otherSprite||`` ``||sprites:de type LeftPaddles||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
})
```

## {Étape 13}

Dans l'événement, inverse la vitesse horizontale de ``||variables(noclick):sprite||`` pour simuler le rebond sur la raquette. Pour cela, tu ``||sprites:définis sprite vx (vitesse selon x) à||`` la valeur négative de la vitesse horizontale, c'est-à-dire ``||variables(noclick):sprite||`` ``||sprites:vx (vitesse selon x)||`` multiplié par ``-1``. Ajoute aussi ``||info:modifier le score de||`` ``1`` pour le joueur qui utilise ``||variables(noclick):left_paddle||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
```

## {Étape 14}

Copie l'événement et tout son code de l'étape précédente. Dans cet événement, change le type de ``||variables(noclick):otherSprite||`` de ``||sprites:LeftPaddles||`` à ``||sprites:RightPaddles||``. Remplace ``||info:modifier le score de||`` par le bloc multijoueur ``||info:modifier le score du joueur 2 de||`` pour le joueur qui utilise ``||variables(noclick):right_paddle||``. Garde la même augmentation du score de ``1``.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
```
