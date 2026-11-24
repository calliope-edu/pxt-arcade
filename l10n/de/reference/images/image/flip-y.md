# vertikal spiegeln

Spiegle die Pixel vertikal von einer Seite auf die andere.

```sig
image.create(0, 0).flipY()
```

Die Pixel jeder Bildhälfte werden auf die andere Hälfte verschoben. Das passiert in vertikaler Richtung. Sie werden an einer gedachten Linie "gespiegelt", die waagerecht durch die Mitte des Bildes verläuft. In einem Bild der Größe 10 x 10 wandert also ein Pixel an der Position (3, 2) nach (3, 8), und das Pixel, das ursprünglich bei (3, 8) war, wandert nach (3, 2).

Wenn ein Bild eine ungerade Anzahl von Zeilen hat, verläuft die "Mittellinie" durch eine Pixelzeile. Wenn diese Pixel "gespiegelt" werden, behalten sie ihre Position und bewegen sich nicht.

## Beispiel #example

Spiegle ein Pfeilbild `3`-mal vertikal.

```blocks
let showArrow: Sprite = null
let upArrow: Image = null
upArrow = img`
. . . a . . .
. . a a a . .
. a a . a a .
a a a . a a a
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a a a . .
`
showArrow = sprites.create(upArrow)
for (let i = 0; i < 3; i++) {
    pause(500)
    upArrow.flipY()
}
```

## Siehe auch #seealso

[horizontal spiegeln](/reference/images/image/flip-x),
[verschieben](/reference/images/image/scroll)