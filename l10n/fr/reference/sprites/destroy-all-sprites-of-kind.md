# détruire tous les sprites du type

Détruis tous les sprites d'un certain type.

```sig
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
```

Tu peux détruire tous les sprites actuels d'un type particulier. Par exemple, tu pourrais faire exploser tous les sprites `Enemy` de ton jeu en les détruisant avec un effet de particules de désintégration.

## Paramètres

* **kind** : le type des sprites que tu veux détruire, comme `Player` ou `Enemy`.
* **effect** : un effet de particules à afficher lorsqu'un sprite est détruit.
* **duration** : la durée en millisecondes pendant laquelle l'**effect** sera affiché.

## Exemple #example

Crée un jeu dans lequel ton joueur doit éviter tout contact avec les sprites `Blob` pour rester en vie. Envoie les blobs à des vitesses aléatoires depuis le côté droit de l'écran. Donne à ton joueur un superpouvoir pour pulvériser tous les blobs actuels d'une seule pression sur le bouton `A`.

```blocks
namespace SpriteKind {
    export const Blob = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Blob, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Blob, function (sprite, autreSprite) {
    info.changeLifeBy(-1)
})
let blob: Sprite = null
info.setLife(3)
let monSprite = sprites.create(img`
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
controller.moveSprite(monSprite)
monSprite.left = 10
game.onUpdateInterval(500, function () {
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
    blob.setFlag(SpriteFlag.AutoDestroy, true)
    blob.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    blob.vx = randint(-10, -50)
})
```

## Voir aussi #seealso

[démarrer l'effet](/reference/sprites/sprite/start-effect),
[détruire](/reference/sprites/sprite/destroy),
[lorsqu'un sprite est détruit](/reference/sprites/on-destroyed),
