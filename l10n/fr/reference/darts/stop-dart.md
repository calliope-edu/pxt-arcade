# arrêter la fléchette

Arrête le mouvement de la fléchette.

```sig
darts.create().stopDart()
```

La fléchette s'arrête à sa position actuelle.

## Exemple

Lance une fléchette sur un sprite cible. Arrête la fléchette quand elle atteint la cible.

```blocks
let myDart: Dart = null
myDart = darts.create(img`
    . . 8 . . . . . . . . . . . . . 
    8 . . 8 . . . . . . . . . . . . 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    8 . . 8 . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    `, SpriteKind.Player, 10, 10)
myDart.controlWithArrowKeys(true)
let target = sprites.create(img`
    .......11.......
    ......1111......
    .....111111.....
    .....111111.....
    ....11111111....
    ....11111111....
    ....11111111....
    ...1111221111...
    ...1112112111...
    ..111121121111..
    ..111211112111..
    .11112111121111.
    .11121111112111.
    .11121111112111.
    .11121122112111.
    .11121122112111.
    .11121122112111.
    .11121122112111.
    ..111211112111..
    ..111211112111..
    ..111211112111..
    ...1121111211...
    ...1112112111...
    ...1112112111...
    ...1111221111...
    ....11111111....
    ....11111111....
    ....11111111....
    .....111111.....
    .....111111.....
    ......1111......
    .......11.......
    `, SpriteKind.Enemy)
target.right = scene.screenWidth()
myDart.throwDart()
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, autreSprite) {
    myDart.stopDart()
})
```
## Voir aussi

[lancer la fléchette](/reference/darts/throw-dart)

```package
darts
```