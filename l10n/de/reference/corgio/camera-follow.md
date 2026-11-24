# Kamera folgt

Lass die Szenenkamera dem Corgi-Sprite folgen.

```sig
corgio.create().cameraFollow(true)
```

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert: Bei `true` folgt die Szenenkamera dem Corgi-Sprite.

## Beispiel #example

Lass die Ansicht der Szenenkamera dem Corgi folgen.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.cameraFollow()
```

## Siehe auch #seealso

[horizontale Bewegung](/reference/corgio/horizontal-movement), [vertikale Bewegung](/reference/corgio/vertical-movement)

```package
corgio
```