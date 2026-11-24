# horizontale Bewegung

Aktiviere die horizontale Bewegung des Corgis mit den Pfeiltasten links und rechts.

```sig
corgio.create().horizontalMovement()
```

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert: Bei `true` bewegt sich der Corgi-Sprite mit den Pfeiltasten links und rechts horizontal.

## Beispiel #example

Erstelle einen neuen Corgi an der Standardposition auf dem Bildschirm und lass ihn sich bewegen.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## Siehe auch #seealso

[vertikale Bewegung](/reference/corgio/vertical-movement), [Kamera folgt](/reference/corgio/camera-follow)

```package
corgio
```