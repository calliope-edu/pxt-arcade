# um Prozent skalieren

Skaliere einen Sprite um einen Prozentsatz seiner aktuellen Größe in eine Richtung von einem Ankerpunkt aus.

```sig
scaling.scaleByPercent(null, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Ein Sprite kann um einen Prozentsatz seiner ursprünglichen Größe in eine Richtung von einem Ankerpunkt aus skaliert werden. Die Skalierung kann nur in eine Richtung erfolgen oder der Sprite kann gleichmäßig skaliert werden.

## Gleichmäßige Skalierung

Wenn die Skalierungsrichtung **direction** auf `uniformly` gesetzt ist, wird der Sprite so skaliert, dass sich Breite und Höhe um denselben Prozentwert **value** ändern. Wenn ein Sprite aktuell `64` x `32` groß ist und gleichmäßig um `50` Prozent skaliert wird, ist die neue Breite `32` und die neue Höhe `16`.

## Parameter

* **sprite**: der Sprite, der um einen Prozentsatz seiner ursprünglichen Größe skaliert wird.
* **value**: die [Zahl](/types/number), die den Prozentsatz angibt, um den der Sprite skaliert wird.
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

Erstelle ein Programm, das die Skalierung eines Sprites testet, indem es ihn gleichmäßig vergrößert und verkleinert. Verwende die Controller-Tasten, um die Skalierung eines Sprites um einen Prozentsatz seiner aktuellen Größe zu erhöhen und zu verringern.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPercent(meinSprite, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(meinSprite.width)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPercent(meinSprite, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(meinSprite.width)
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
info.setScore(meinSprite.width)
```

## Siehe auch #seealso

[auf Prozent skalieren](/reference/sprites/scaling/scale-to-percent)

```package
sprite-scaling
```
