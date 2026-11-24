# tourner la molette

Émule une rotation de la molette de la souris dans l'une ou l'autre direction.

```sig
mouse.turnWheel(0);
```

## ~ hint

La @boardname@ doit être reliée à un ordinateur ou à un autre appareil hôte par un câble USB pour émuler des actions de souris. Cette fonction ne marche pas dans le simulateur.

## ~

## Paramètres

* **w** : un [nombre](/types/number) de crans de molette à émuler. Utilise un nombre négatif pour simuler une rotation vers l'avant et un nombre positif pour une rotation vers l'arrière.

## Exemple #example

Envoie des rotations de molette à un ordinateur relié à la @boardname@. Une rotation vers l'avant est émulée quand la carte est inclinée vers le haut, et une rotation vers l'arrière quand elle est inclinée vers le bas.

```blocks
input.onGesture(Gesture.TiltUp, function () {
    mouse.turnWheel(-5)
})
input.onGesture(Gesture.TiltDown, function () {
    mouse.turnWheel(5)
})
```

## Voir aussi #seealso

[définir bouton](/reference/mouse/set-button), [déplacer](/reference/mouse/move)

```package
mouse
```