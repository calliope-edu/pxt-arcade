# créer

Crée un nouveau sprite avec une image en pixels.

```sig
sprites.create(null)
```

Les sprites fournissent toutes les opérations pour déplacer et animer des images. Tes sprites peuvent détecter les collisions et les chevauchements avec d'autres objets. Au départ, les sprites sont placés au milieu de l'écran et ne bougent pas. Tu définis la position et le mouvement d'un sprite dans ton code. Les sprites sont associés à un **type** (kind) afin de pouvoir être identifiés comme faisant partie d'un groupe ou d'une catégorie, comme ``Player`` et ``Enemy``.

## Paramètres

* **img** : une [image](/types/image) pour laquelle créer un sprite.
* **kind** : le type de sprite à créer. Il existe des types de sprites par défaut déjà définis, comme ``Player``, ``Enemy``, ``Food``, etc. Tu peux aussi ajouter ton propre type aux types `SpriteKind` (espace de noms) déjà définis.

## Retour

* un [sprite](/types/sprite) de jeu contenant une image.


## Exemples #example

### Visage souriant #ex1

Crée un sprite avec l'image d'un visage souriant et affiche-le à l'écran.

```blocks
let smiley: Sprite = null
smiley = sprites.create(img`
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . 1 1 e e e e e e e 1 . . . 
. . 1 e e e e e e e e e e 1 . . 
. 1 e e e e e e e e e e e e 1 . 
1 e e e e 1 1 e e e 1 1 e e e 1 
1 e e e e 1 1 e e e 1 1 e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e e e 1 e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e 1 e e e e e 1 e e e 1 
1 e e e e e 1 1 1 1 1 e e e e 1 
. 1 e e e e e e e e e e e e 1 . 
. . 1 e e e e e e e e e e 1 . . 
. . . 1 1 e e e e e e e 1 . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
`, SpriteKind.Player)
```

### Conduire la voiture #ex2

Définis la couleur d'arrière-plan de la scène et crée un sprite avec l'image d'une voiture. Mets la voiture en mouvement vers la droite de l'écran.

```blocks
let theCar: Sprite = null
scene.setBackgroundColor(3)
theCar = sprites.create(img`
. . . . . f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . . . f d d d d d d d d d d d d d d d d f . . . . . . . . . . 
. . . f d d d d f f f f f f d d f f f f f f f . . . . . . . . . 
. . . f d d d d f . . . . f d d f . . . . . f f . . . . . . . . 
. . . f d d d d f . . . . f d d f . . . . . . f . . . . . . . . 
. . f d d d d d f f . . . f d d f . . . f f f d f f f f f . . . 
. f d d d d d d d f f f f f d d f f f f d d d d d d d d f . . . 
. f d d d f f f d d d d d d d d d d d d d d f f f d d d f . . . 
. f d d f f f f f d d d d d d d d d d d d f f f f f d d f . . . 
. f f . f f f f f . f f f f f f f f f f . f f f f f . f f . . . 
. . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . . 

`, SpriteKind.Player)
theCar.vx = 20
game.onUpdate(function () {
    if (theCar.x > scene.screenWidth() + 16) {
        theCar.x = -16
    }
})
```

## #seealso

[créer un projectile](/reference/sprites/create-projectile)