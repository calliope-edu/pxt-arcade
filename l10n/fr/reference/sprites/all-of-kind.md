# tous les sprites du type

Obtiens tous les sprites d'un certain type.

```sig
sprites.allOfKind(SpriteKind.Player)
```

Tu peux obtenir un tableau des sprites actuels d'un type particulier. Par exemple, si tu veux savoir où se trouvent tous les sprites `Enemy` de ton jeu, tu peux en obtenir un tableau et vérifier leur position.

## Paramètres

* **kind** : le type des sprites dont tu veux un tableau, comme `Player` ou `Enemy`.

## Exemple #example

Place un joueur au centre de l'écran. Fais apparaître plein de blobs à des positions aléatoires. Si des blobs sont trop proches du joueur, fais-les détruire lorsque le bouton `A` est pressé.

```blocks
namespace SpriteKind {
    export const Blob = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let icky of sprites.allOfKind(SpriteKind.Blob)) {
        x2 = (icky.x - monSprite.x) ** 2
        y2 = (icky.y - monSprite.y) ** 2
        if (Math.sqrt(x2 + y2) < monSprite.width * 2) {
            sprites.destroy(icky, effects.disintegrate, 500)
        }
    }
})
let y2 = 0
let x2 = 0
let blob: Sprite = null
let monSprite: Sprite = null
monSprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 40; index++) {
    blob = sprites.create(img`
        . 2 2 2 . 2 2 . 
        2 2 5 2 2 2 2 2 
        2 f 2 2 5 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 f 2 f 2 2 2 
        . 2 2 2 2 2 2 . 
        . 2 . 2 2 5 2 . 
        `, SpriteKind.Blob)
    blob.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
```

## Voir aussi #seealso

[détruire tous les sprites d'un type](/reference/sprites/sprite/destroy-all-sprites-of-kind)
