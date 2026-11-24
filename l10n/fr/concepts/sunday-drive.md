# Balade du dimanche

## {Introduction @unplugged}

Dans un jeu, beaucoup de choses doivent se répéter : il faut créer des ennemis et des objets à ramasser, vérifier si on a gagné, etc. L'événement ``||game:quand mise à jour du jeu chaque||`` te permet d'exécuter du code à intervalle régulier, pour qu'il se répète.

## {Étape 1 @fullscreen}

Supprime tout ce qui se trouve dans l'espace de travail, puis trouve ``||game:quand mise à jour du jeu chaque 500 ms||`` dans ``||game:Jeu||``. Fais-le glisser dans l'espace de travail.

```blocks
game.onUpdateInterval(500, function () {

})
```

## {Étape 2 @fullscreen}

Dans ``||game:quand mise à jour du jeu chaque 500 ms||``, remplace 500 par 1000. L'événement se produira alors une fois par seconde, car 1 ms est un millième de seconde.

```blocks
game.onUpdateInterval(1000, function () {

})
```

## {Étape 3 @fullscreen}

Trouve ``||sprites:projectile depuis bord||`` dans ``||sprites:Sprites||`` et fais-le glisser dans ``||game:quand mise à jour du jeu chaque||``. Ouvre l'éditeur d'image de ``||variables:projectile||`` et choisis ou dessine une voiture tournée vers la **droite**.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 50)
})
```

## {Étape 4 @fullscreen}

Dans ``||sprites:projectile||``, mets ``||sprites:vy||`` à `0` pour que les voitures roulent **uniquement** vers la droite.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
})
```

## {Étape 5 @fullscreen}

Trouve ``||sprites:définir monSprite x à 0||`` dans ``||sprites:Sprites||`` et fais-le glisser après ``||variables:définir projectile à||``. Remplace ``||variables:monSprite||`` par ``||variables:projectile||`` et ``||sprites:x||`` par ``||sprites:y||``.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = 0
})
```

## {Étape 6 @fullscreen}

Trouve ``||math:choisir aléatoirement entre 0 et 10||`` dans ``||math:Maths||`` et remplace avec lui le 0 dans ``||sprites:définir projectile y à 0||``.

Le ``||variables:projectile||`` sera ainsi placé à une position ``||sprites:y||`` aléatoire entre `0` et `10`.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, 10)
})
```

## {Étape 7 @fullscreen}

Trouve ``||scene:hauteur de l'écran||`` dans ``||scene:Scène||``. Remplace avec lui le 10 dans ``||math:choisir aléatoirement entre 0 et 10||``.

``||scene:hauteur de l'écran||`` est la hauteur de l'écran (120). Le ``||variables:projectile||`` sera donc placé à une position aléatoire sur le bord gauche de l'écran.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, scene.screenHeight())
})
```

## {Terminé}

Bravo, tu as fait rouler des voitures au hasard sur l'écran ! Tu peux t'en servir pour commencer ta propre version d'un jeu où il faut traverser la route -- par exemple avec une poule ou un canard. N'oublie pas que les ``||sprites:projectiles||`` sont de type ``||sprites:Projectile||`` par défaut.