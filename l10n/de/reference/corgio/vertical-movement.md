# vertikale Bewegung

Lass den Corgi-Sprite mit der Pfeiltaste nach oben springen.

```sig
corgio.create().verticalMovement()
```

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert: Bei `true` springt der Corgi-Sprite mit der Pfeiltaste nach oben senkrecht in die Höhe.

## Beispiel #example

Erstelle einen neuen Corgi an der Standardposition auf dem Bildschirm und lass ihn sich bewegen.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## Siehe auch #seealso

[horizontale Bewegung](/reference/corgio/horizontal-movement)

```package
corgio
```