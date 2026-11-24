# auf Prozent skalieren

Skaliere einen Sprite auf einen Prozentsatz seiner ursprünglichen Größe in eine Richtung von einem Ankerpunkt aus.

```sig
scaling.scaleToPercent(null, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Ein Sprite kann auf einen Prozentsatz seiner ursprünglichen Größe in eine Richtung von einem Ankerpunkt aus skaliert werden. Die Skalierung kann nur in eine Richtung erfolgen oder der Sprite kann gleichmäßig skaliert werden.

## Gleichmäßige Skalierung

Wenn die Skalierungsrichtung **direction** auf `uniformly` gesetzt ist, wird der Sprite so skaliert, dass sich Breite und Höhe auf denselben Prozentwert **value** ändern. Wenn ein Sprite ursprünglich `64` x `32` groß ist und gleichmäßig auf `50` Prozent skaliert wird, ist die neue Breite `32` und die neue Höhe `16`.

## Parameter

* **sprite**: der Sprite, der auf einen Prozentsatz seiner ursprünglichen Größe skaliert wird.
* **value**: die [Zahl](/types/number), die den Prozentsatz angibt, auf den der Sprite skaliert wird.
* **direction**: die Richtung der Skalierung:
>* `horizontally`
>* `vertically`
>* `uniformly`
* **anchor**: ein Ankerpunkt, von dem aus der Sprite skaliert wird:
>* `middle`
>* `top`
>* `left`
>* `right`
>* `bottom`
>* `top left`
>* `top right`
>* `bottom right`
>* `bottom left`

## Beispiel #example

### Skalierungstester #ex1

Erstelle ein Programm, das das Vergrößern und Verkleinern eines Sprites in beide Richtungen testet. Verwende die Controller-Tasten, um die Skalierung auf einen Prozentsatz des ursprünglichen Sprites je Richtung zu erhöhen und zu verringern. Verwende die Taste `A`, um den Sprite wieder auf seine ursprüngliche Größe zu setzen.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(meinSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(meinSprite, 200, ScaleDirection.Vertically, ScaleAnchor.Middle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(meinSprite, 50, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(meinSprite, 200, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(meinSprite, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
})
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
    22222222222222222222222222222222
    25557777777777777777777777775552
    25577777777777777777777777777552
    25777777777777777777777777777752
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777888877777777777772
    27777777777777888877777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    25777777777777777777777777777752
    25577777777777777777777777777552
    25557777777777777777777777775552
    22222222222222222222222222222222
    `, SpriteKind.Player)
```

## Siehe auch #seealso

[um Prozent skalieren](/reference/sprites/scaling/scale-by-percent)

```package
sprite-scaling
```
