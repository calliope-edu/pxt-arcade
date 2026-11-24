# repeat Delay (propriété)

Obtient ou définit le délai avant la première occurrence de l'événement
`ControllerButtonEvent.Repeated` lorsqu'un bouton est maintenu.

## Obtenir

Obtiens le délai actuel du bouton ``||controller:A||``.

```typescript-ignore
controller.A.repeatDelay
```

### Retourne

* Un [nombre](/types/number) qui est le délai actuel avant que le premier événement
`ControllerButtonEvent.Repeated` se produise lorsque le bouton ``||controller:A||`` est maintenu

## Définir

```typescript-ignore
controller.A.repeatDelay = 0
```

### Paramètre

* **value** : le nouveau délai avant que le premier événement `ControllerButtonEvent.Repeated` se produise
lorsque le bouton ``||controller:A||`` est maintenu

## Exemples #example

Déplace un bonhomme vers la gauche et la droite tant que les boutons ``||controller:left||`` et ``||controller:right||``
sont maintenus, sans délai supplémentaire avant le premier mouvement.

```typescript
let monSprite = sprites.create(img`
    . 6 6 6 6 6 .
    6 6 . . . 6 6
    6 . . . . . 6
    6 . . . . . 6
    6 6 . . . 6 6
    . 6 6 6 6 6 .
    . . . 6 . . .
    . . . 6 . . .
    . 6 6 6 6 6 .
    . . . 6 . . .
    . . . 6 . . .
    . . 6 . 6 . .
    . 6 . . . 6 .
`);

controller.left.repeatDelay = 0;
controller.right.repeatDelay = 0;

controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    monSprite.x--;
});

controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    monSprite.x++;
});
```

## Voir aussi #seealso

[repeatInterval](/reference/controller/button/repeat-interval),
[onEvent](/reference/controller/button/on-event)