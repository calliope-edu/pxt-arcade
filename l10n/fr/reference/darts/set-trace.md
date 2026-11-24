# définir la trace

Si c'est activé, affiche la trajectoire estimée d'un lancer de fléchette.

```sig
darts.create().setTrace()
```

Quand le traçage est **activé**, la trajectoire prévue de la fléchette, si elle était lancée, s'affiche sur l'écran. La trajectoire dépend des [propriétés](/reference/darts/properties) de force réglées pour la fléchette.

## Paramètres

* **on**: a [boolean](/type/boolean) qui, lorsqu'elle vaut `true`, affiche la trajectoire estimée de la fléchette quand elle est lancée. Si elle vaut `false`, la trajectoire n'est pas affichée.

## Exemple

Utilise le bouton `B` pour afficher la trajectoire de la fléchette. Utilise les touches fléchées pour ajuster la trajectoire afin que la fléchette touche le ballon quand elle est lancée.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.setTrace(true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myDart.setTrace(false)
})
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
    `, SpriteKind.Player, 10, 50)
let balloon = sprites.create(img`
    . . . . . 7 7 . 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    `, SpriteKind.Enemy)
balloon.right = scene.screenWidth()
myDart.controlWithArrowKeys(true)
```

## Voir aussi

[contrôler avec les flèches](/reference/darts/control-with-arrow-keys), [propriétés](/reference/darts/properties), [couleur de la trace](/reference/darts/properties#tracecolor)

```package
darts
```