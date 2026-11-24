# füllen

Setze alle Pixel eines Bildes auf eine Farbe.

```sig
image.create(0,0).fill(0)
```

## Parameter

* **c**: die [Zahl](/types/number) der Farbe, auf die alle Pixel im Bild gesetzt werden. Farbnummern sind Werte zwischen `0` und `15`, die eine Farbe aus der aktuellen Farbpalette auswählen.

## Beispiel #example

Fülle ein ganzes Bild mit blauen Pixeln. Fülle ein kleines Rechteck in der Mitte des Bildes mit gelben Pixeln.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.fillRect(8, 8, 16, 16, 14)
showBlue = sprites.create(blueRect)
```

## Siehe auch #seealso

[Rechteck füllen](/reference/images/image/fill-rect),
[ersetzen](/reference/images/image/replace)
