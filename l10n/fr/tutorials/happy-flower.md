# Fleur joyeuse

### ~button /#tutorial:/tutorials/happy-flower

Essaie ce tutoriel !

### ~

## {Introduction @unplugged}

Les fleurs rendent tout le monde autour d'elles plus heureux, surtout les abeilles qui y récoltent du nectar. Pour le montrer, nous allons créer une fleur qui renvoie de joyeuses petites abeilles vers la ruche.

![Pensées joyeuses](/static/tutorials/happy-flower/happy-thoughts.gif)

## {Étape 1}

Trouve ``||scene:définir couleur d'arrière-plan à||`` dans ``||scene:Scène||`` et place-le dans ``||loops:au démarrage||``. Choisis **bleu clair** comme couleur d'arrière-plan. Prends un ``||variables(sprites):définir monSprite à||`` dans ``||sprites:Sprites||`` et fais-le glisser lui aussi dans ``||loops:au démarrage||``. Clique sur l'image vide du sprite pour ouvrir l'éditeur d'images et dessine une fleur.

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
```

## {Étape 2}

Trouve ``||game:quand mise à jour du jeu chaque 500 ms||`` dans ``||game:Jeu||`` et fais-le glisser dans l'espace de travail. Règle la durée sur **1000** millisecondes (ms).

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {

})
```

## {Étape 3}

Trouve ``||variables(sprites):définir projectile à||`` ``||sprites:projectile depuis monSprite||`` dans ``||sprites:Sprites||``. Sors-le et place-le dans ``||game:quand mise à jour du jeu chaque 1000 ms||``.

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
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
`, monSprite, 0, 100)
})
```

## {Étape 4}

Clique sur l'image vide dans ``||sprites:projectile||`` pour ouvrir l'éditeur d'images. Dessine une jolie petite abeille comme image du ``||sprites:projectile||``.

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, 0, 100)
})
```

## {Étape 5}

Va chercher ``||Math:choisir aléatoirement entre 0 et 10||`` dans ``||math:Maths||``. Place-le dans l'emplacement ``||sprites:vx||`` de ``||sprites:projectile||``. Dans ``||Math:choisir aléatoirement entre 0 et 10||``, change la première valeur de **0** à **-25** et la deuxième valeur de **10** à **25**.

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), 100)
})
```

## {Étape 6}

Duplique le bloc ``||Math:choisir aléatoirement entre -25 et 25||`` et place-le dans l'emplacement ``||sprites:vy||`` de ``||sprites:projectile||``.

```blocks
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), randint(-25, 25))
})
```

## {Étape 7 @fullscreen}

Trouve ``||sprites:définir monSprite x à 0||`` dans ``||sprites:Sprites||``, place-le après ``||variables(sprites):définir projectile à||`` et remplace ``||variables(noclick):monSprite||`` par ``||variables(noclick):projectile||``. Clique sur ``||sprites:x||`` et choisis ``||sprites:durée de vie||`` dans la liste des propriétés. Mets sa valeur à **3000** au lieu de **0**.

![Ajouter la durée de vie](/static/tutorials/happy-flower/life-span.gif)

```blocks
let projectile: Sprite = null
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
```

## {Étape 8}

Bravo, ta fleur joyeuse est terminée ! Elle envoie maintenant plein de joyeuses petites abeilles. Lance ton programme dans le simulateur et regarde les abeilles s'envoler. As-tu remarqué que certaines abeilles volent à reculons ? Tu veux essayer autre chose ? Nous pouvons faire en sorte que certaines abeilles regardent dans l'autre direction quand elles s'envolent. Continue simplement à l'étape suivante.

## {Étape 9}

Les abeilles doivent regarder vers la gauche quand elles s'envolent dans cette direction.
Prends un ``||logic:si alors||`` dans ``||logic:Logique||`` et place-le après ``||sprites:définir projectile durée de vie||``. Remplace la condition ``||logic:vrai||`` dans ``||logic:si alors||`` par ``||logic:0 < 0||``.

```blocks
let projectile: Sprite = null
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (0 < 0) {
    }
})
```

## {Étape 10}

Remplace le premier **0** de la condition ``||logic:0 < 0||`` par ``||sprites:monSprite x||``. Remplace ``||variables(noclick):monSprite||`` par ``||variables(noclick):projectile||`` et change ``||sprites:x||`` en ``||sprites:vx (vitesse selon x)||``.

```blocks
let projectile: Sprite = null
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
    }
})
```

## {Étape 11}

Va dans la boîte à outils et ouvre les catégories **Avancé**. Dans ``||images:Images||``, trouve le bloc ``||images:retourner l'image horizontalement||``. Sors-le et place-le dans ``||logic:si alors||``. Retourne ensuite dans ``||sprites:Sprites||``, prends un ``||sprites:image monSprite||`` et dépose-le sur la variable ``||variables(noclick):picture||`` pour la remplacer dans ``||images:retourner l'image horizontalement||``. Remplace ``||variables(noclick):monSprite||`` par ``||variables(noclick):projectile||``.

![Retourner l'image de l'abeille](/static/tutorials/happy-flower/bee-flip.gif)

```blocks
let projectile: Sprite = null
let monSprite: Sprite = null
scene.setBackgroundColor(9)
monSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, monSprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
```

## {Terminé}

Super, maintenant tes abeilles s'envolent joyeusement dans les deux directions !
