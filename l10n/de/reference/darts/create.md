# erstellen

Erstelle einen Pfeil-Sprite an einer Position auf dem Bildschirm.

```sig
darts.create(img``, SpriteKind.Player)
```

Ein Pfeil ist ein Sprite ähnlich wie ein [Projektil](/reference/sprites/create-projectile-from-side), aber mit speziellen Aktionen, die seine Bewegung steuern, um die Kräfte auf ein geworfenes Objekt zu simulieren. Du legst das Bild für den Pfeil fest und gibst ihm eine Sprite-[Art](/reference/sprites/sprite/kind).

# Parameter

* **img**: ein Bild für den Pfeil-Sprite.
* **kind**: eine Sprite-[Art](/reference/sprites/sprite/kind) für den Pfeil-Sprite.
* **x**: eine optionale anfängliche horizontale Bildschirmposition für den Pfeil.
* **y**: eine optionale anfängliche vertikale Bildschirmposition für den Pfeil.

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
    `, SpriteKind.Player)
myDart.pow = 75
```

## Siehe auch

[Eigenschaften](/reference/darts/properties)

```package
darts
```