# lancer la fléchette

Démarre le mouvement d'une fléchette.

```sig
darts.create().throwDart()
```

La fléchette commence à se déplacer. Sa trajectoire est déterminée par les [propriétés](/reference/darts/properties) de force qui lui sont attribuées.

## Exemple

Crée une fléchette sur l'écran et lance-la quand le bouton `A` est pressé.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
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
```

## Voir aussi

[arrêter la fléchette](/reference/darts/stop-dart), [propriétés](/reference/darts/properties)

```package
darts
```