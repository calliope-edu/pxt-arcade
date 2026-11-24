# um Pixel skalieren

Skaliere einen Sprite um eine Anzahl Pixel in eine Richtung von einem Ankerpunkt aus.

```sig
scaling.scaleByPixels(null, 1, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Ein Sprite kann um eine Anzahl Pixel in eine Richtung von einem Ankerpunkt aus skaliert werden. Die Skalierung kann nur in der gewählten Richtung erfolgen oder der Sprite kann auch in der anderen Richtung proportional skaliert werden. 

## Proportionale Skalierung

Wenn die Skalierungsrichtung `vertically` oder `horizontally` ist, **proportional** aber auf `false` steht, wird der Sprite nur in der gewählten Richtung um die in **value** angegebene Anzahl Pixel skaliert. Der Sprite wird höher, während die Breite gleich bleibt, oder er wird breiter, während die Höhe gleich bleibt.

Wenn die Skalierungsrichtung `vertically` ist und der Parameter `proportional` auf `true` steht, wird auch die Breite im gleichen Verhältnis wie die Höhe vergrößert. Mit dieser Einstellung wird bei einem `32` x `16` großen Sprite, der vertikal um `16` Pixel vergrößert wird, auch die Breite um `32` vergrößert. Dieselbe Skalierung im Verhältnis passiert mit der Höhe, wenn die Richtung `horizontally` ist.

## Gleichmäßige Skalierung

Wenn die Skalierungsrichtung **direction** auf `uniformly` gesetzt ist, wird der Sprite so skaliert, dass sich Breite und Höhe um denselben Betrag ändern. Wenn ein Sprite aktuell `64` x `16` groß ist und gleichmäßig um `64` skaliert wird, ist die neue Breite `128` und die neue Höhe `80`.

## Parameter

* **sprite**: der Sprite, der um eine Anzahl Pixel skaliert wird.
* **value**: die [Anzahl](/types/number) Pixel, um die der Sprite skaliert wird.
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
* **proportional**: ein [boolescher](/types/boolean) Wert, der den Sprite bei `true` proportional skaliert. Bei `false` wird der Sprite nur in Richtung **direction** skaliert. Dieser Parameter hat keine Wirkung, wenn **direction** auf `uniformly` gesetzt ist.

## Beispiel #example

### Skalierungstester #ex1

Erstelle ein Programm, das das Vergrößern und Verkleinern eines Sprites in beide Richtungen testet. Verwende die Controller-Tasten, um die Skalierung zu erhöhen und zu verringern. Verwende Tasten, um **proportional** auf `true` oder `false` zu setzen.

```blocks
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(meinSprite, pixelMin, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = false
    game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = true
    game.showLongText("Proportional = TRUE", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (meinSprite.width > pixelMin) {
        scaling.scaleByPixels(meinSprite, pixelMin * -1, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(meinSprite, pixelMin, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (meinSprite.width > pixelMin) {
        scaling.scaleByPixels(meinSprite, pixelMin * -1, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
    }
})
let proportion = false
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
let pixelMax = pixelMin * 5
game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
```

### Gleichmäßigkeitstester #ex2

Teste das gleichmäßige Skalieren eines nicht quadratischen Sprites. Verwende die Controller-Tasten, um die Skalierung zu vergrößern oder zu verkleinern.

```blocks
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(meinSprite, pixelMax, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(meinSprite.width)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (my)
    scaling.scaleByPixels(meinSprite, pixelMin * -1, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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

[auf Pixel skalieren](/reference/sprites/scaling/scale-to-pixels)

```package
sprite-scaling
```
