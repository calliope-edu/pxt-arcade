# on Event

Exécute du code lorsqu'un bouton est appuyé ou relâché.

```sig
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

});
```

## Paramètres

* **event** : l'action du bouton à attendre. Les actions du bouton (événements) sont :
> * ``pressed`` : le bouton a été appuyé
> * ``released`` : le bouton est relâché après avoir été appuyé
> * ``repeated`` : cet événement se répète tant que le bouton est appuyé
* **handler** : le code que tu veux exécuter lorsque quelque chose arrive à un bouton

## Exemple #example

Déplace une boîte jaune à un endroit aléatoire de l'écran lorsqu'un bouton est appuyé.

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
    yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
})
```

## Voir aussi #seealso

[est appuyé](/reference/controller/button/is-pressed),
[repeatDelay](/reference/controller/button/repeat-delay),
[repeatInterval](/reference/controller/button/repeat-interval)