# Skalierung setzen

Setze den Skalierungsfaktor eines Sprites ausgehend von einem Ankerpunkt.

```sig
sprites.create(null).setScale(1, ScaleAnchor.Middle)
```

Du kannst einen Sprite von seiner aktuellen Größe auf eine neue Größe vergrößern oder verkleinern, indem du einen Skalierungswert setzt. Wenn die Skalierung eines Sprites auf `2` gesetzt ist, ist der Sprite danach doppelt so groß wie seine ursprüngliche Größe. Der Sprite wird kleiner, wenn du einen negativen Wert angibst. Wenn du `-3` als Skalierungswert verwendest, wird der Sprite dreimal kleiner als seine ursprüngliche Größe.

Der **anchor** (Anker) bestimmt, in welche Richtung der Sprite wächst oder schrumpft. Wenn du die Skalierung von der Mitte (`middle`) aus vergrößerst, wächst der Sprite gleichmäßig von seinem Mittelpunkt aus. Wenn du von unten links (`bottom left`) aus skalierst, wächst der Sprite in Richtung der oberen rechten Ecke des Bildschirms.

## Parameter

* **value**: eine [Zahl](/types/number), die der Skalierungsfaktor für den Sprite ist.
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

## Beispiele #example

### In 4 Richtungen skalieren

Erstelle einen Sprite mit einem quadratischen Bild. Lass den Sprite in jede der 4 Eckrichtungen um `3` wachsen und schrumpfen.

```blocks
let scaleZone = 0
let meinSprite = sprites.create(img`
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
game.onUpdateInterval(500, function () {
    if (scaleZone == 0) {
        meinSprite.setScale(3, ScaleAnchor.TopLeft)
    } else if (scaleZone == 1) {
        meinSprite.setScale(1, ScaleAnchor.TopLeft)
    } else if (scaleZone == 2) {
        meinSprite.setScale(3, ScaleAnchor.TopRight)
    } else if (scaleZone == 3) {
        meinSprite.setScale(1, ScaleAnchor.TopRight)
    } else if (scaleZone == 4) {
        meinSprite.setScale(3, ScaleAnchor.BottomRight)
    } else if (scaleZone == 5) {
        meinSprite.setScale(1, ScaleAnchor.BottomRight)
    } else if (scaleZone == 6) {
        meinSprite.setScale(3, ScaleAnchor.BottomLeft)
    } else if (scaleZone == 7) {
        meinSprite.setScale(1, ScaleAnchor.BottomLeft)
    } else {
        scaleZone = -1
    }
    scaleZone += 1
})
```

## Siehe auch #seealso

[ändere Skalierung](/reference/sprites/sprite/change-scale)
