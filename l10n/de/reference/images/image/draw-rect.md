# Rechteck zeichnen

Zeichne den Umriss eines Rechtecks in einer Pixelfarbe.

```sig
image.create(0,0).drawRect(0,0,0,0,0)
```

Ein rechteckiger Umriss wird in ein Bild gezeichnet. Die Linie ist ein Pixel breit und wird in der von dir gewählten Farbe gezeichnet.

## Parameter

* **x**: eine [Zahl](/types/number) für die horizontale Pixelposition der oberen linken Ecke des Rechtecks.
* **y**: eine [Zahl](/types/number) für die vertikale Pixelposition der oberen linken Ecke des Rechtecks.
* **w**: eine [Zahl](/types/number) für die Breite des Rechtecks in Pixeln.
* **h**: eine [Zahl](/types/number) für die Höhe des Rechtecks in Pixeln.
* **c**: die [Nummer](/types/number) der Farbe, mit der der Umriss gezeichnet wird. Farbnummern sind Werte zwischen `0` und `15`, die eine Farbe aus der aktuellen Farbpalette auswählen.

## Beispiel #example

Fülle ein ganzes Bild mit blauen Pixeln. Zeichne einen roten Umriss um das Bild.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.drawRect(0, 0, 32, 32, 10)
showBlue = sprites.create(blueRect)
```

## Siehe auch #seealso

[Rechteck füllen](/reference/images/image/fill-rect),
[Linie zeichnen](/reference/images/image/draw-line)


