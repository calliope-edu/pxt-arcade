# erstellen

Erstelle einen Corgi-Sprite für ein Plattformspiel.

```sig
corgio.create()
```

## Parameter

* **kind**: die [Art](/reference/sprites/sprite/kind) des Sprites für den Corgi.
* **x**: die anfängliche horizontale Position des Corgi-Sprites auf dem Bildschirm.
* **y**: die anfängliche vertikale Position des Corgi-Sprites auf dem Bildschirm.

## Rückgabewert

* ein [Sprite](/types/sprite), der den neuen Corgi darstellt.

## Beispiel #example

Erstelle einen neuen Corgi an der Standardposition auf dem Bildschirm und lass ihn sich bewegen.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement()
myCorg.horizontalMovement()
```

## Siehe auch #seealso

[erstellen](/reference/sprites/create)

```package
corgio
```