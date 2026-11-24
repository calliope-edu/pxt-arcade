# Souris

Émule des actions de souris via une connexion USB.

## ~ hint

La @boardname@ doit être reliée à un ordinateur ou à un autre appareil hôte par un câble USB pour émuler une souris. Cette fonction ne marche pas dans le simulateur.

## ~

```cards
mouse.setButton(MouseButton.Left, true);
mouse.move(0, 0);
mouse.turnWheel(0);
```

## Voir aussi

[déplacer](/reference/mouse/move), [régler le bouton](/reference/mouse/set-button), [tourner la molette](/reference/mouse/turn-wheel)

```package
mouse
```
