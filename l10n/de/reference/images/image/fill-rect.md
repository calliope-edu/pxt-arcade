# Rechteck füllen

Setze alle Pixel innerhalb eines rechteckigen Bereichs eines Bildes auf eine Farbe.

```sig
image.create(0,0).fillRect(0,0,0,0,0)
```

Du kannst alle Pixel in einem rechteckigen Bereich auf einmal mit einer Farbe füllen. Das Füllrechteck kann entweder die gesamte Bildfläche oder ein kleinerer Teil davon sein.

## Parameter

* **x**: eine [Zahl](/types/number), die die horizontale Pixelposition der oberen linken Ecke des Füllrechtecks ist.
* **y**: eine [Zahl](/types/number), die die vertikale Pixelposition der oberen linken Ecke des Füllrechtecks ist.
* **w**: eine [Zahl](/types/number), die die Breite des Füllrechtecks in Pixeln ist.
* **h**: eine [Zahl](/types/number), die die Höhe des Füllrechtecks in Pixeln ist.
* **c**: die [Zahl](/types/number) der Farbe, auf die alle Pixel im Rechteck gesetzt werden. Farbnummern sind Werte zwischen `0` und `15`, die eine Farbe aus der aktuellen Farbpalette auswählen.

## Beispiele #example

### Quadrat in der Mitte #ex1

Fülle ein ganzes Bild mit blauen Pixeln. Fülle ein kleines Rechteck in der Mitte des Bildes mit gelben Pixeln.

```blocks
let showBlue: Sprite = null
let blueRect: Image = null
blueRect = image.create(32, 32)
blueRect.fill(3)
blueRect.fillRect(8, 8, 16, 16, 14)
showBlue = sprites.create(blueRect)
```

### Schachbrett

Erstelle ein Schachbrett, indem du dunkle Felder auf einen weißen Hintergrund füllst.

```blocks
let showBoard: Sprite = null
let chessBoard: Image = null
chessBoard = image.create(64, 64)
chessBoard.fill(1)
for (let row = 0; row <= 7; row++) {
    for (let col = 0; col <= 3; col++) {
        if (row % 2 == 1) {
            chessBoard.fillRect(col * 16, row * 8, 8, 8, 8)
        } else {
            chessBoard.fillRect(col * 16 + 8, row * 8, 8, 8, 8)
        }
    }
}
showBoard = sprites.create(chessBoard)
```

## Siehe auch #seealso

[füllen](/reference/images/image/fill),
[Rechteck zeichnen](/reference/images/image/draw-rect)
