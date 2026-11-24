# click

Émule un clic de bouton de souris.

```sig
mouse.click(MouseButton.Left)
```

Un clic de bouton de souris est une suite rapide d'événements `on` et `off` du bouton. Avec **click()**, les deux sont simulés en une seule action.

## ~ hint

La @boardname@ doit être reliée à un ordinateur ou à un autre appareil hôte par un câble USB pour émuler des actions de souris. Cette fonction ne marche pas dans le simulateur.

## ~

## Paramètres

* **button** : l'identifiant du bouton pour lequel émuler un clic de souris : `left`, `right` ou `middle`.

## Exemple #example

Envoie un clic droit de souris à un ordinateur relié à la @boardname@.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function() {
    mouse.click(MouseButton.Right)
})
```

## Voir aussi #seealso

[régler le bouton](/reference/mouse/set-button),
[tourner la molette](/reference/mouse/turn-wheel)

```package
mouse
```
