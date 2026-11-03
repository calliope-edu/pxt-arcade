# Lance un os

## {Introduction @unplugged}

Configurer des ``||sprites:Sprites||`` avec plein de blocs différents peut vite devenir compliqué. Les ``||sprites:projectiles||`` sont des ``||sprites:Sprites||`` spéciaux, conçus pour se déplacer à travers l'écran. Ils te simplifient beaucoup ce genre de tâches.

Tu peux ainsi créer très facilement des astéroïdes qui traversent l'écran ou des lasers tirés par un vaisseau spatial.

## {Étape 1 @fullscreen}

Trouve ``||variables(sprites):définir mySprite à||`` dans ``||sprites:Sprites||`` et fais-le glisser dans ``||loops:au démarrage||``. Ouvre l'éditeur d'images pour ``||variables(noclick):mySprite||`` et choisis ou dessine l'image d'un squelette.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Étape 2 @fullscreen}

Trouve ``||sprites:projectile depuis mySprite||`` dans ``||sprites:Sprites||`` et fais-le glisser dans ``||loops:au démarrage||``, **sous** ``||variables(sprites):définir mySprite à||``.

Cela crée un ``||sprites:sprite||`` qui démarre au même endroit que ``||sprites:mySprite||``, peu importe où celui-ci se trouve sur l'écran.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
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
`, mySprite, 50, 50)
```

## {Étape 3 @fullscreen}

Ouvre l'éditeur d'images pour ``||variables(sprites):projectile||`` et dessine un os.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, 50, 50)
```

## {Étape 4 @fullscreen}

Dans ``||sprites:projectile||``, change la valeur ``||sprites:vy||`` de `50` à `-15` pour qu'il se déplace **vers le haut** au lieu de **vers le bas**.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, 50, -15)
```

## {Étape 5 @fullscreen}

Trouve ``||controller:quand bouton A est appuyé||`` dans ``||controller:Contrôleur||`` et fais-le glisser dans l'espace de travail. Déplace ``||variables(sprites):définir projectile à||`` de ``||loops:au démarrage||`` vers ``||controller:quand bouton A est appuyé||``.

Cela crée un événement qui se produit chaque fois que la personne qui joue appuie sur le bouton ``||controller:A||``. À chaque fois, ``||variables(noclick):mySprite||`` « lance » un nouvel os vers le haut à droite.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . 1 1 1 1 1 1 1 . .
    . . . . . . 1 1 1 1 . 1 1 1 . .
    . . 1 1 . 1 1 1 1 . . . . . . .
    . 1 1 1 1 1 1 . . . . . . . . .
    . 1 1 1 1 1 . . . . . . . . . .
    . . 1 1 1 1 . . . . . . . . . .
    . . . 1 1 1 . . . . . . . . . .
    . . . . 1 1 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, mySprite, 50, -15);
})
```

## {Terminé}

Bravo, ton squelette lance maintenant des os !

Si tu veux aller plus loin avec ton projet, voici quelques idées à essayer après avoir cliqué sur `Terminé` :

* Ajoute ``||controller:déplacer mySprite avec les boutons||`` dans ``||loops:au démarrage||`` pour que le squelette puisse se déplacer sur l'écran et lancer des os depuis différents endroits.
* Crée un autre sprite et utilise un événement ``||sprites:chevauche||`` pour que ce sprite puisse attraper l'os.
* Crée un effet de pulvérisation au moment du lancer en ajoutant ``||sprites:mySprite démarrer effet spray||`` dans l'événement ``||controller:quand bouton A est appuyé||``, et fais en sorte que la pulvérisation vienne de l'os.
