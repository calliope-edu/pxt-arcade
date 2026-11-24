# Sprite aktualisieren

Lass das Bild des Corgis sich ändern, wenn er sich bewegt.

```sig
corgio.create().updateSprite(true)
```

Wenn aktiviert, ändert sich das Bild des Corgi-Sprites bei der Bewegung, sodass er in die Bewegungsrichtung zu schauen scheint.

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert: Bei `true` ändert sich das Bild des Corgi-Sprites, wenn er sich bewegt.

## Beispiel #example

Lass das Bild des Corgis sich ändern, wenn er sich nach links oder rechts bewegt.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.updateSprite()
```

## Siehe auch #seealso

[horizontale Bewegung](/reference/corgio/horizontal-movement), [Kamera folgt](/reference/corgi/camera-follow)

```package
corgio
```