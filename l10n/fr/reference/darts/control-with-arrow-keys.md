# contrôler avec les flèches

Si c'est activé, règle les propriétés de force d'un lancer de fléchette avec les touches fléchées.

```sig
darts.create().controlWithArrowKeys()
```

Pour régler les propriétés de force d'une fléchette pendant le jeu, tu peux les modifier avec les touches fléchées.

L'[angle](/reference/darts/properties#angle) du lancer se contrôle avec les flèches gauche et droite. La flèche droite augmente l'angle et la flèche gauche le diminue.

La [puissance](/reference/darts/properties#pow) du lancer se contrôle avec les flèches haut et bas. La flèche haut augmente la puissance et la flèche bas la diminue.

## Paramètres

* **on**: a [boolean](/types/boolean) qui, lorsqu'elle vaut `true`, permet de modifier les propriétés de force de la fléchette avec les touches fléchées. Si elle vaut `false`, les forces ne sont réglées qu'avec les [propriétés](/reference/darts/properties) dans le programme.

## Exemple

Crée une fléchette et utilise le bouton `A` pour la lancer. Permets d'ajuster la trajectoire avec les touches fléchées.

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
    `, SpriteKind.Player)
myDart.controlWithArrowKeys()
```

## Voir aussi

[propriétés](/reference/darts/properties)

```package
darts
```