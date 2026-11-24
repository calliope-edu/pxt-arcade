# Pfeil werfen

Starte die Bewegung eines Pfeils.

```sig
darts.create().throwDart()
```

Der Pfeil beginnt sich zu bewegen. Seine Flugbahn wird durch die festgelegten Kraft-[Eigenschaften](/reference/darts/properties) bestimmt.

## Beispiel

Erstelle einen Pfeil auf dem Bildschirm und wirf ihn, wenn die Taste `A` gedrückt wird.

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
    `, SpriteKind.Player, 10, 50)
```

## Siehe auch

[Pfeil stoppen](/reference/darts/stop-dart), [Eigenschaften](/reference/darts/properties)

```package
darts
```