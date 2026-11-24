# lancer une animation d'images

Lance dans un sprite une animation de frames à partir d'un tableau d'images.

```sig
animation.runImageAnimation(null, null)
```

Une animation crée l'effet d'un objet qui se déplace dans la zone d'une _frame_.
Une frame est une image fixe d'un objet à un moment donné de son mouvement.
Afficher différentes frames avec une courte pause entre elles crée l'effet de mouvement d'un objet.

## Animations de sprites

Les animations sont affichées dans un [sprite](/types/sprite). Ainsi, quel que soit l'endroit où le sprite est placé,
l'animation s'y déroulera. Tu crées ton animation en plaçant deux images ou plus dans le tableau **frames** attribué au sprite. Tu peux régler le temps entre les frames pour rendre l'animation rapide ou lente. Si tu veux que l'animation se répète en continu, tu peux la faire _boucler_.

### ~ hint

#### Tailles des frames et des images

La taille de la frame est ajustée pour montrer le contenu de chaque frame. Si certaines images du tableau de frames ne correspondent pas entre elles, la taille de frame de l'animation
est agrandie pour pouvoir les montrer toutes.

Il vaut mieux que toutes les images de ton tableau de frames aient la même taille afin que
les changements de position et le mouvement de ton objet paraissent corrects.

### ~

## Paramètres

* **sprite** : le sprite dans lequel l'animation se déroulera.
* **frames** : un tableau d'images qui créent l'animation.
* **frameInterval** : le [nombre](/types/number) de millisecondes à attendre avant d'afficher la frame suivante.
* **loop** : une valeur [booléenne](/types/boolean) qui, si elle vaut ``true``, fait répéter l'animation. Si elle vaut ``false``, l'animation ne s'exécute qu'une fois.

## Exemple #example

### Animation de marcheur

Crée et lance une animation d'une personne qui marche. Définis les frames de l'animation sous forme de tableau
d'images montrant une personne à différentes positions du mouvement.

```blocks
scene.setBackgroundColor(13)
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
animation.runImageAnimation(
monSprite,
[img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
`, img`
    . . . . . . . . . . . .
    . . . f f f f f f . . .
    . f f f e e e e f f f .
    f f f e e e e e e f f f
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d 4 e f e
    f f f e 4 4 4 4 d d 4 e
    e 4 f b 1 1 1 e d d e .
    . . f 6 6 6 6 f e e . .
    . . f f f f f f f . . .
    . . f f f . . . . . . .
`, img`
    . . . . . . . . . . . .
    . . . f f f f f f . . .
    . f f f e e e e f f f .
    f f f e e e e e e f f f
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    e f e 4 d b b d d e f .
    e 4 d d 4 4 4 4 e f f f
    . e d d e 1 1 1 b f 4 e
    . . e e f 6 6 6 6 f . .
    . . . f f f f f f f . .
    . . . . . . . f f f . .
`, img`
    . . . f f f f f . . . .
    . . f e e e e e f f . .
    . f e e e e e e e f f .
    f e e e e e e e f f f f
    f e e 4 e e e f f f f f
    f e e 4 4 e e e f f f f
    f f e 4 4 4 4 4 f f f f
    f f e 4 4 f f 4 e 4 f f
    . f f d d d d 4 d 4 f .
    . . f b b d d 4 f f f .
    . . f e 4 4 4 e e f . .
    . . f 1 1 1 e d d 4 . .
    . . f 1 1 1 e d d e . .
    . . f 6 6 6 f e e f . .
    . . . f f f f f f . . .
    . . . . . f f f . . . .
`],
500,
true
)
```

### Trampoline

Lance une animation de mouvement sur un sprite qui a aussi une animation d'images. Crée un
effet de personne sautant sur un trampoline.

```blocks
scene.setBackgroundColor(1)
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
animation.runImageAnimation(
monSprite,
[img`
    . . . . . . . . . . . . .
    . . . . . f f f f . . . .
    . . . f f f f f f f f . .
    . . f f f f f f c f f f .
    f f f f f f f c c f f f c
    f f f f c f f f f f f f c
    . c c c f f f e e f f c c
    . f f f f f e e f f c c f
    . f f f b f e e f b f f f
    . f f 4 1 f 4 4 f 1 4 f f
    . . f e 4 4 4 4 4 e e f e
    . f e f b 7 7 7 e 4 4 4 e
    . e 4 f 7 7 7 7 e 4 4 e .
    . . . f 6 6 6 6 6 e e . .
    . . . f f f f f f f . . .
    . . . f f f . . . . . . .
`, img`
    . . . . . . . . . . . . .
    . . . . f f f f . . . . .
    . . f f f f f f f f . . .
    . f f f c f f f f f f . .
    c f f f c c f f f f f f f
    c f f f f f f f c f f f f
    c c f f e e f f f c c c .
    f c c f f e e f f f f f .
    f f f b f e e f b f f f .
    f f 4 1 f 4 4 f 1 4 f f .
    e f e e 4 4 4 4 4 e f . .
    e 4 4 4 e 7 7 7 b f e f .
    . e 4 4 e 7 7 7 7 f 4 e .
    . . e e 6 6 6 6 6 f . . .
    . . . f f f f f f f . . .
    . . . . . . . f f f . . .
`],
500,
true
)
animation.runMovementAnimation(
monSprite,
animation.animationPresets(animation.bobbing),
1000,
true
)
```

## Voir aussi #seealso

[lancer une animation de mouvement](/reference/animation/run-movement-animation),
[arrêter l'animation](/reference/animation/stop-animation)

```package
animation
```