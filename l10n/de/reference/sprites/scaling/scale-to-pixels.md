# auf Pixel skalieren

Skaliere einen Sprite von einem Ankerpunkt aus in eine Richtung auf eine Anzahl von Pixeln.

```sig
scaling.scaleToPixels(null, 1, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Ein Sprite kann von einem Ankerpunkt aus in eine Richtung auf eine Anzahl von Pixeln skaliert werden. Die Skalierung kann nur in der gewählten Richtung erfolgen, oder der Sprite kann auch in der anderen Richtung proportional mitskaliert werden. 

## Proportionale Skalierung

Wenn die Skalierungsrichtung `vertically` oder `horizontally` ist, **proportional** aber auf `false` gesetzt ist, wird der Sprite nur in der gewählten Richtung auf die in **value** angegebene Pixelanzahl skaliert. Der Sprite wird in der Höhe größer, während die Breite gleich bleibt, oder er wird in der Breite größer, während die Höhe gleich bleibt.

Wenn die Skalierungsrichtung `vertically` ist und der Parameter `proportional` `true` ist, wird auch die Breite im gleichen Verhältnis wie die Höhe vergrößert. Mit dieser Einstellung wird bei einem `32` x `16` großen Sprite, der vertikal auf `32` Pixel vergrößert wird, auch die Breite auf `64` vergrößert. Dieselbe proportionale Skalierung passiert mit der Höhe, wenn die Richtung `horizontally` ist.

## Gleichmäßige Skalierung

Wenn die Skalierungsrichtung (**direction**) auf `uniformly` gesetzt ist, wird der Sprite so skaliert, dass Breite und Höhe in der neuen Größe gleich sind. Wenn ein Sprite aktuell `64` x `16` groß ist und gleichmäßig auf `128` skaliert wird, sind die neue Breite und Höhe beide `128`.

## Parameter

* **sprite**: der Sprite, der auf eine Pixelanzahl skaliert werden soll.
* **value**: die [Anzahl](/types/number) der Pixel, auf die der Sprite skaliert werden soll.
* **direction**: die Richtung, in die skaliert werden soll:
>* `horizontally` (horizontal)
>* `vertically` (vertikal)
>* `uniformly` (gleichmäßig)
* **anchor**: ein Ankerpunkt, von dem aus der Sprite skaliert wird:
>* `middle` (Mitte)
>* `top` (oben)
>* `left` (links)
>* `right` (rechts)
>* `bottom` (unten)
>* `top left` (oben links)
>* `top right` (oben rechts)
>* `bottom right` (unten rechts)
>* `bottom left` (unten links)
* **proportional**: ein [boolescher](/types/boolean) Wert, der den Sprite bei `true` proportional skaliert. Bei `false` wird der Sprite nur in Richtung **direction** skaliert. Dieser Parameter hat keine Wirkung, wenn **direction** auf `uniformly` gesetzt ist.

## Beispiel #example

### Skalierungstester #ex1

Schreibe ein Programm, das das Skalieren von Sprites in beide Richtungen zum Vergrößern und Verkleinern testet. Benutze die Controller-Tasten, um die Skalierung zu vergrößern und zu verkleinern. Benutze Tasten, um **proportional** auf `true` oder `false` zu setzen.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = false
    game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = true
    game.showLongText("Proportional = TRUE", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMin, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMax, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMax, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMin, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
})
let proportion = false
let pixelMax = 0
let pixelMin = 0
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
pixelMin = meinSprite.width
pixelMax = pixelMin * 5
game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
```

### Gleichmäßigkeitstester #ex2

Teste das gleichmäßige Skalieren eines nicht quadratischen Sprites. Benutze die Controller-Tasten `up` und `down`, um die Skalierung zu vergrößern und zu verkleinern.

```blocks
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMax, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(meinSprite.width)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPixels(meinSprite, pixelMin, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(meinSprite.width)
})
let pixelMax = 0
let pixelMin = 0
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
pixelMin = meinSprite.height
pixelMax = pixelMin * 5
info.setScore(meinSprite.width)
```

## Siehe auch #seealso

[um Pixel skalieren](/reference/sprites/scaling/scale-by-pixels)

```package
sprite-scaling
```
