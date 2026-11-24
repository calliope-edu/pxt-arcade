# move

Émule un déplacement de la souris dans les directions X et Y.

```sig
mouse.move(0, 0);
```

## ~ hint

La @boardname@ doit être reliée à un ordinateur ou à un autre appareil hôte par un câble USB pour émuler des actions de souris. Cette fonction ne marche pas dans le simulateur.

## ~

## Paramètres

* **x** : un [nombre](/types/number) de distance dans la direction horizontale pour déplacer le curseur de la souris. Utilise un nombre négatif pour simuler un déplacement vers la gauche et un nombre positif pour simuler un déplacement vers la droite.
* **y** : un [nombre](/types/number) de distance dans la direction verticale pour déplacer le curseur de la souris. Utilise un nombre négatif pour simuler un déplacement vers le haut et un nombre positif pour simuler un déplacement vers le bas.

## Exemple #example

Envoie des déplacements de souris à un ordinateur relié à la @boardname@. Un déplacement de `10` vers la gauche est émulé quand la carte est inclinée à gauche, et un déplacement de `10` vers la droite quand elle est inclinée à droite.

```blocks
input.onGesture(Gesture.TiltLeft, function () {
    mouse.move(-10, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    mouse.move(10, 0)
})
```

## Voir aussi #seealso

[régler le bouton](/reference/mouse/set-button), [tourner la molette](/reference/mouse/turn-wheel)

```package
mouse
```
