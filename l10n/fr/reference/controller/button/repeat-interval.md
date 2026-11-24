# repeat Interval (propriété)

Obtient ou définit l'intervalle entre chaque occurrence de l'événement
`ControllerButtonEvent.Repeated` lorsqu'un bouton est maintenu.

## Obtenir

Obtiens l'intervalle de répétition actuel du bouton ``||controller:A||``.

```typescript-ignore
controller.A.repeatInterval
```

### Retourne

* Un [nombre](/types/number) qui est l'intervalle actuel entre chaque événement
`ControllerButtonEvent.Repeated` lorsque le bouton ``||controller:A||`` est maintenu

## Définir

```typescript-ignore
controller.A.repeatInterval = 0
```

### Paramètre

* **value** : le nouveau délai entre les occurrences de l'événement `ControllerButtonEvent.Repeated`
lorsque le bouton ``||controller:A||`` est maintenu

## Exemples #example

Crée un ``||sprites:projectile||`` canard chaque seconde pendant que le bouton ``||controller:A||``
est maintenu enfoncé.

```typescript
controller.A.repeatInterval = 1000;
controller.A.repeatDelay = 0;

controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    let myProjectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b c . . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        b d d d b b d 5 5 5 4 4 4 4 4 b
        b b d 5 5 5 b 5 5 4 4 4 4 4 b .
        b d c 5 5 5 5 d 5 5 5 5 5 b . .
        c d d c d 5 5 b 5 5 5 5 5 5 b .
        c b d d c c b 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `, 50, 0);
});
```

## Voir aussi #seealso

[repeatDelay](/reference/controller/button/repeat-delay),
[onEvent](/reference/controller/button/on-event)