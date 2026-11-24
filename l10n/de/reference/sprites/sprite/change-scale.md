# Skalierung ändern

Ändere den Skalierungsfaktor eines Sprites um einen Wert nach oben oder unten.

```sig
sprites.create(null).changeScale(1, ScaleAnchor.Middle)
```

Du kannst die Größe eines Sprites ausgehend von seiner aktuellen Größe um einen bestimmten Betrag vergrößern oder verkleinern. Wenn die Skalierung eines Sprites `2` ist und du sie um `1` änderst, ist der Sprite jetzt `3`-mal so groß wie seine ursprüngliche Größe. Der Sprite wird kleiner, wenn du einen negativen Wert angibst. Wenn du `-2` als Änderungswert (**value**) verwendest, ist die neue Größe des Sprites halb so groß wie vorher.

Der Ankerpunkt (**anchor**) bestimmt, in welche Richtung der Sprite wächst oder schrumpft. Wenn du die Skalierung von der Mitte (`middle`) aus vergrößerst, wächst der Sprite gleichmäßig von seinem Mittelpunkt aus. Wenn du von unten links (`bottom left`) aus skalierst, wächst der Sprite in Richtung der oberen rechten Ecke des Bildschirms.

## Parameter

* **value**: eine [Zahl](/types/number), um die die Skalierung des Sprites geändert wird.
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

## Beispiele #example

### Sprite neu skalieren

Erstelle einen Sprite mit einem quadratischen Bild. Lass den Sprite in einem Spielaktualisierungs-Ereignis ständig wachsen und schrumpfen.

```blocks
let scaleFactor = 0
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
    if (meinSprite.scale == 1) {
        scaleFactor = 1
    } else if (meinSprite.scale == 7) {
        scaleFactor = -1
    }
    meinSprite.changeScale(scaleFactor, ScaleAnchor.Middle)
})
```

## Siehe auch #seealso

[Skalierung festlegen](/reference/sprites/sprite/set-scale)
