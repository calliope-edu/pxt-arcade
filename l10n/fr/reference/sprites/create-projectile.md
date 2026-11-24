# créer un projectile

Crée un nouveau sprite en mouvement à partir d'une image en pixels.

```sig
sprites.createProjectile(img``, 0, 0, 0)
```

Un projectile est un sprite qui se déplace à partir de l'endroit où il est créé. Il se déplace avec une vitesse que tu définis dans les directions horizontale et verticale. Le sprite démarre aux coordonnées d'écran (0, 0), sauf si tu lui dis de partir d'un autre sprite. Dans ce cas, le projectile part du centre du sprite que tu as défini comme source.

Le projectile possède toutes les mêmes propriétés qu'un sprite immobile. Il peut chevaucher d'autres sprites et entrer en collision avec des tuiles.

Les projectiles sont détruits lorsqu'ils sortent de l'écran.

## Paramètres

* **img** : une [image](/types/image) pour laquelle créer un sprite.
* **vx** : la vitesse à laquelle le sprite se déplace dans la direction horizontale.
* **vy** : la vitesse à laquelle le sprite se déplace dans la direction verticale.
* **kind** : le type de sprite à créer - ``Player``, ``Enemy``, etc.
* **sprite** : un [sprite](/types/sprite) optionnel depuis lequel lancer le projectile.

## Retour

* un nouveau [sprite](/types/sprite) de jeu qui se déplace avec une vitesse définie.

## Exemples #example

### Course du smiley #ex1

Envoie un sprite smiley d'un coin de l'écran à l'autre.

```blocks
let smiley: Sprite = null
let xSpeed = 50
let ySpeed = xSpeed * scene.screenHeight() / scene.screenWidth()
smiley = sprites.createProjectile(img`
. . . . . f f f f f f f . . . . 
. . . f f e e e e e e e f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
f e e e e f f e e e f f e e e f 
f e e e e f f e e e f f e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e f e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e f e e e e e f e e e f 
f e e e e e f f f f f e e e e f 
. f e e e e e e e e e e e e f . 
. . f e e e e e e e e e e f . . 
. . . f f e e e e e e e f . . . 
. . . . . f f f f f f f . . . . 
`, xSpeed, ySpeed, SpriteKind.Player)
```

### Canon à photons

Envoie des photons depuis un vaisseau spatial lorsque le bouton ``B`` est pressé.

```blocks
namespace SpriteKind {
    export const Photon = SpriteKind.create()
}
let photon: Sprite = null

let ship = sprites.create(img`
. . . . . b b b b b b b b b b . . . . . . . . . . .
b b b b b b d d d d d d d d b b b b . . . . . . . .
b b d d d d d d d d d d d d d d d b b b b . . . . .
. b d d d d d f f f f f f d d d d d d d b b b b . .
. b d d d d d d d d d d d d d d d f f d d d d b b .
. b b d d d d d d d d d d d d d d f f d d d d d b b
. . b d d d f f f f f f f f f d d d d d d d d b b .
. . b d d d d d d d d d d d d d d d d b b b b b . .
. b b d d d d d d d d d d d d d b b b b . . . . . .
. b d d d d d d d d d d b b b b . . . . . . . . . .
b b d d b b b b b d b b b . . . . . . . . . . . . .
b b b b b . . . b b b . . . . . . . . . . . . . . .
`, SpriteKind.Player)
ship.x = 20
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    photon = sprites.createProjectile(img`
. . . . . . 1 1 1 . .
. . . 1 1 1 1 1 1 1 .
1 1 1 1 1 1 1 1 1 1 1
. . . 1 1 1 1 1 1 1 .
. . . . . . 1 1 1 . .
`, 150, 0, SpriteKind.Photon, ship)
})
```

## Voir aussi #seealso

[créer](/reference/sprites/create)