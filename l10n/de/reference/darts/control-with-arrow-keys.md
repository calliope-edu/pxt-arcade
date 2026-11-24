# mit Pfeiltasten steuern

Wenn aktiviert, stellst du die Kraft-Eigenschaften für einen Pfeilwurf mit den Pfeiltasten ein.

```sig
darts.create().controlWithArrowKeys()
```

Um die Kraft-Eigenschaften eines Pfeils während des Spiels einzustellen, kannst du sie mit den Pfeiltasten ändern.

Der Wurf-[Winkel](/reference/darts/properties#angle) wird mit den links und rechts Pfeiltasten gesteuert. Die rechte Pfeiltaste erhöht den Winkel und die linke Pfeiltaste verringert den Winkel.

Der Wurf-[Stärke](/reference/darts/properties#pow) wird mit den oben und unten Pfeiltasten gesteuert. Die oben Pfeiltaste erhöht die Stärke und die unten Pfeiltaste verringert die Stärke.

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert: Bei `true` kannst du die Kraft-Eigenschaften des Pfeils mit den Pfeiltasten ändern. Bei `false` werden die Kräfte nur über [Eigenschaften](/reference/darts/properties) im Programm festgelegt.

## Beispiel

Erstelle einen Pfeil und wirf ihn mit der Taste `A`. Erlaube Anpassungen der Flugbahn mit den Pfeiltasten.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
let myDart: Dart = null
myDart = darts.create(img`
    . . 8 . . . . . . . . . . . . . 
    8 . . 8 . . . . . . . . . . . . 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    8 . . 8 . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myDart.controlWithArrowKeys()
```

## Siehe auch

[Eigenschaften](/reference/darts/properties)

```package
darts
```