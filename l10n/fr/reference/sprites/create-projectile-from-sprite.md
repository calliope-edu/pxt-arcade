# créer un projectile depuis un sprite

Crée un nouveau sprite en mouvement qui part du centre d'un autre sprite.

```sig
sprites.createProjectileFromSprite(img`.`, null, 50, 50)
```

Un projectile est un sprite en mouvement qui se déplace à partir de l'endroit où il est créé. Il se déplace avec des vitesses (`vx` et `vy`) que tu définis dans les directions horizontale et verticale.

Le sprite projectile part du centre d'un `sprite` que tu lui indiques. Les vitesses `vx` et `vy` ont des valeurs positives ou négatives qui déterminent la direction dans laquelle le projectile se déplace.

Le projectile possède beaucoup des mêmes propriétés qu'un sprite immobile. Il peut chevaucher d'autres sprites, heurter des tuiles et les chevaucher.

Les projectiles sont détruits lorsqu'ils sortent de l'écran.

## Paramètres

* **img** : une [image](/types/image) pour le sprite projectile.
* **sprite** : le [sprite](/types/sprite) d'où part le projectile.
* **vx** : la vitesse à laquelle le sprite se déplace dans la direction horizontale.
* **vy** : la vitesse à laquelle le sprite se déplace dans la direction verticale.

## Retour

* un nouveau [sprite](/types/sprite) projectile qui se déplace avec les vitesses définies.

## Exemples #example

### Envoyer des projectiles hors de la boîte #ex1

Crée un sprite en forme de boîte. Envoie des projectiles dans des directions aléatoires depuis le centre de la boîte.

```blocks
let projectile: Sprite = null
let monSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 a a 8 8 . . . . . 
        . . . . . 8 8 a a 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, monSprite, randint(-50, 50), randint(-50, 50))
})
```

### Canon à photons #ex2

Envoie des photons depuis un vaisseau spatial lorsque le bouton ``B`` est pressé.

```blocks
let photon: Sprite = null
let target = sprites.create(img`
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    `, SpriteKind.Enemy)
let ship = sprites.create(img`
    .....bbbbbbbbbb...........
    bbbbbbddddddddbbbb........
    bbdddddddddddddddbbbb.....
    .bdddddffffffdddddddbbbb..
    .bdddddddddddddddffddddbb.
    .bbddddddddddddddffdddddbb
    ..bdddfffffffffddddddddbb.
    ..bddddddddddddddddbbbbb..
    .bbdddddddddddddbbbb......
    .bddddddddddbbbb..........
    bbddbbbbbdbbb.............
    bbbbb...bbb...............
    `, SpriteKind.Player)
ship.x = 20
target.x = scene.screenWidth() - 10
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    photon = sprites.createProjectileFromSprite(img`
        . . . . . . 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 1 1 1 1 . 
        . . . . . . 1 1 1 . . 
        `, ship, 150, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    sprite.startEffect(effects.disintegrate, 100)
})
```

## Voir aussi #seealso

[créer](/reference/sprites/create), [créer un projectile depuis le côté](/reference/sprites/create-projectile-from-side)