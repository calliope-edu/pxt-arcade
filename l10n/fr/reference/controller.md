# Contrôleur

Réagir aux boutons du contrôleur de jeu.

## ~ hint

Les boutons de la manette sont assignés aux touches lorsqu'un jeu @boardname@ est joué sur un appareil doté d'un clavier. Sur un clavier au format **QWERTY**, les touches assignées aux boutons du contrôleur pour un seul joueur sont affichées dans le diagramme **Joueur #1**. Lorsque deux joueurs utilisent le même appareil, les touches indiquées **Joueur #2** sont utilisées.

![Correspondance des touches du clavier avec les boutons](https://cdn.makecode.com/blob/d3103fbe8ee470984cc0e45d0efb543ce6bebc42/static/hardware/key-assign.jpg)

## ~

## Un joueur

```cards
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
controller.A.isPressed()
controller.moveSprite(null, 0, 0)
controller.dx(100)
controller.dy(100)
```

## Multijoueur

```cards
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.moveSprite(null)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.dx()
controller.player2.dy()
```

## Configuration

* [Intervalle de répétition des boutons](/reference/controller/button/repeat-interval)
* [Délai de répétition des boutons](/reference/controller/button/repeat-delay)

## Voir aussi

[on event](/reference/controller/button/on-event), [is pressed](/reference/controller/button/is-pressed), [on button event](/reference/controller/button/on-button-event), [move sprite](/reference/controller/move-sprite), [dx](/reference/controller/dx), [dy](/reference/controller/dy)