# set Button

Émule l'appui ou le relâchement d'un bouton de souris.

```sig
mouse.setButton(MouseButton.Right, false)
```

## ~ hint

La @boardname@ doit être reliée à un ordinateur ou à un autre appareil hôte par un câble USB pour émuler des actions de souris. Cette fonction ne marche pas dans le simulateur.

## ~

## Paramètres

* **button** : le bouton pour lequel simuler un appui ou un relâchement. Les boutons sont ``left``, ``middle`` et ``right``.
* **down** : un [booléen](/types/boolean) qui vaut soit ``true`` pour un appui, soit ``false`` pour un relâchement.

## Exemple #example

Simule des clics gauche et droit de la souris avec les boutons de la carte.

```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
    mouse.setButton(MouseButton.Left, true)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    mouse.setButton(MouseButton.Right, false)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    mouse.setButton(MouseButton.Right, true)
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    mouse.setButton(MouseButton.Right, false)
})
```

## Voir aussi #seealso

[déplacer](/reference/mouse/move), [tourner la molette](/reference/mouse/turn-wheel)

```package
mouse
```
