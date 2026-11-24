# repeat Interval (Eigenschaft)

Ruft das Intervall zwischen den einzelnen Auftreten des Ereignisses `ControllerButtonEvent.Repeated`
ab oder legt es fest, wenn eine Taste gedrückt gehalten wird.

## Abrufen

Ruft das aktuelle Wiederholungsintervall für die Taste ``||controller:A||`` ab.

```typescript-ignore
controller.A.repeatInterval
```

### Rückgabewert

* Eine [Zahl](/types/number), die das aktuelle Intervall zwischen den einzelnen
Ereignissen `ControllerButtonEvent.Repeated` ist, wenn die Taste ``||controller:A||`` gedrückt gehalten wird

## Festlegen

```typescript-ignore
controller.A.repeatInterval = 0
```

### Parameter

* **value**: die neue Verzögerung zwischen den Ereignissen `ControllerButtonEvent.Repeated`,
wenn die Taste ``||controller:A||`` gedrückt gehalten wird

## Beispiele #example

Erzeuge jede Sekunde, in der die Taste ``||controller:A||``
gedrückt gehalten wird, ein Enten-``||sprites:projektil||``.

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

## Siehe auch #seealso

[repeatDelay](/reference/controller/button/repeat-delay),
[onEvent](/reference/controller/button/on-event)