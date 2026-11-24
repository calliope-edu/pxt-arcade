# Linie zeichnen

Zeichne eine Linie von einem Punkt in einem Bild zu einem anderen Punkt.

```sig
image.create(0,0).drawLine(0,0,0,0,0)
```

Die Pixel liegen an Punkten im Bild. Ein Punkt ist eine _Koordinate_, also zwei Werte für die horizontale und die vertikale Position. Eine Linie wird gezeichnet, indem die Farbe der Pixel direkt zwischen zwei Koordinaten gesetzt wird. Die Linie ist ein Pixel breit.

## Parameter

* **x0**: eine [Zahl](/types/number) für die horizontale Pixelposition der ersten Koordinate.
* **y0**: eine [Zahl](/types/number) für die vertikale Pixelposition der ersten Koordinate.
* **x1**: eine [Zahl](/types/number) für die horizontale Pixelposition der zweiten Koordinate.
* **y1**: eine [Zahl](/types/number) für die vertikale Pixelposition der zweiten Koordinate.
* **c**: die [Nummer](/types/number) der Farbe für die Pixel der Linie. Farbnummern sind Werte zwischen `0` und `15`, die eine Farbe aus der aktuellen Farbpalette auswählen.

## Beispiel #example

Zeichne ein großes `X` in ein Bild, indem du zwei diagonale Linien ziehst.

```blocks
let showBigX: Sprite = null
let drawBigX: Image = null
drawBigX = image.create(32, 32)
drawBigX.fill(1)
drawBigX.drawLine(0, 0, 31, 31, 10)
drawBigX.drawLine(0, 31, 31, 0, 10)
showBigX = sprites.create(drawBigX)
```

## Siehe auch #seealso

[Rechteck zeichnen](/reference/images/image/draw-rect)

