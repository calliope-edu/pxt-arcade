# repeat Delay (Eigenschaft)

Ruft die Verzögerung vor dem ersten Auftreten des Ereignisses `ControllerButtonEvent.Repeated`
ab oder legt sie fest, wenn eine Taste gedrückt gehalten wird.

## Abrufen

Ruft die aktuelle Verzögerung für die Taste ``||controller:A||`` ab.

```typescript-ignore
controller.A.repeatDelay
```

### Rückgabewert

* Eine [Zahl](/types/number), die die aktuelle Verzögerung ist, bevor das erste
Ereignis `ControllerButtonEvent.Repeated` eintritt, wenn die Taste ``||controller:A||`` gedrückt gehalten wird

## Festlegen

```typescript-ignore
controller.A.repeatDelay = 0
```

### Parameter

* **value**: die neue Verzögerung, bevor das erste Ereignis `ControllerButtonEvent.Repeated` eintritt,
wenn die Taste ``||controller:A||`` gedrückt gehalten wird

## Beispiele #example

Bewege eine Strichfigur nach links und rechts, solange die Tasten ``||controller:left||`` und ``||controller:right||``
gedrückt gehalten werden, ohne zusätzliche Verzögerung vor der ersten Bewegung.

```typescript
let meinSprite = sprites.create(img`
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
    meinSprite.x--;
});

controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    meinSprite.x++;
});
```

## Siehe auch #seealso

[repeatInterval](/reference/controller/button/repeat-interval),
[onEvent](/reference/controller/button/on-event)