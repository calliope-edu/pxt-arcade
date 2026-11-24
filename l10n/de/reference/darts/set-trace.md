# Flugbahn anzeigen

Wenn aktiviert, wird die geschätzte Flugbahn für einen Pfeilwurf angezeigt.

```sig
darts.create().setTrace()
```

Wenn die Flugbahnanzeige **an** ist, wird die voraussichtliche Bahn des Pfeils, falls er geworfen würde, auf dem Bildschirm angezeigt. Die Flugbahn hängt von den Kraft-[Eigenschaften](/reference/darts/properties) ab, die für den Pfeil festgelegt sind.

## Parameter

* **on**: ein [boolescher](/type/boolean) Wert: Bei `true` wird die geschätzte Flugbahn des Pfeils beim Wurf angezeigt. Bei `false` wird die Flugbahn nicht angezeigt.

## Beispiel

Zeige mit der Taste `B` die Flugbahn des Pfeils an. Passe die Flugbahn mit den Pfeiltasten so an, dass der Pfeil beim Wurf den Ballon trifft.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, anderesSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.setTrace(true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myDart.setTrace(false)
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
    `, SpriteKind.Player, 10, 50)
let balloon = sprites.create(img`
    . . . . . 7 7 . 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    `, SpriteKind.Enemy)
balloon.right = scene.screenWidth()
myDart.controlWithArrowKeys(true)
```

## Siehe auch

[mit Pfeiltasten steuern](/reference/darts/control-with-arrow-keys), [Eigenschaften](/reference/darts/properties), [Farbe der Flugbahn](/reference/darts/properties#tracecolor)

```package
darts
```