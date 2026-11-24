# Bewegungsanimation ausführen

Wende einen Bewegungsanimationseffekt auf einen Sprite an.

```sig
animation.runMovementAnimation(null, "")
```

Eine Bewegungsanimation ist ein Bewegungseffekt, der auf einen Sprite angewendet wird. Das Bild im
Sprite scheint sich mit der von dir gewählten Bewegungsart zu bewegen. Dir stehen mehrere
Bewegungsarten zur Verfügung, die du aus der Liste im Block auswählen kannst.

Die Animation läuft so lange, wie du festlegst. Wenn sie endet, kehrt der Sprite an seine ursprüngliche Position zurück. Du kannst die Animation wiederholen lassen, indem du den Parameter **loop** auf **AN** setzt.

## Parameter

* **sprite**: ein Sprite, an den die Animation angehängt wird.
* **pathString**: der Name eines Bewegungspfads, der auf den Sprite angewendet wird.
* **duration**: die [Anzahl](/types/number) der Millisekunden, die die Animation läuft.
* **loop**: ein [boolescher](/types/boolean) Wert; bei ``true`` kehrt der Sprite an seine ursprüngliche Position zurück und die Animation beginnt von vorn. Bei ``false`` läuft die Animation nur einmal und der Sprite bleibt an der letzten Position der Animation.

## Beispiel #example

Erstelle einen großen Taco-Sprite. Führe eine Bewegungsanimation auf dem Taco aus, damit er
`5` Sekunden lang nach rechts über den Bildschirm „hüpft“.

```blocks
scene.setBackgroundColor(1)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . .
    . . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . .
    . . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . .
    . . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . .
    . . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . .
    . . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . .
    . . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . .
    . . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . .
    . . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . .
    . . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 .
    . . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4
    . . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4
    . . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e
    . e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e
    . e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e
    . e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e
    e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e .
    e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . .
    e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . .
    e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . .
    e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . .
    e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . .
    e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . .
    e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . .
    e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . .
    e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . .
    . e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . .
    . e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . .
    . . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . .
    . . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . .
    . . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
animation.runMovementAnimation(
meinSprite,
animation.animationPresets(animation.bobbingRight),
5000,
true
)
```

## Siehe auch #seealso

[Bildanimation ausführen](/reference/animation/run-image-animation),
[Animation stoppen](/reference/animation/stop-animation)

```package
animation
```
