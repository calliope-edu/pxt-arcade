# horizontal spiegeln

Spiegle die Pixel horizontal von einer Seite auf die andere.

```sig
image.create(0, 0).flipX()
```

Die Pixel jeder Bildhälfte werden auf die andere Hälfte verschoben. Das passiert in horizontaler Richtung. Sie werden an einer gedachten Linie "gespiegelt", die senkrecht durch die Mitte des Bildes verläuft. In einem Bild der Größe 10 x 10 wandert also ein Pixel an der Position (3, 4) nach (6, 4), und das Pixel, das ursprünglich bei (6, 4) war, wandert nach (3, 4).

Wenn ein Bild eine ungerade Anzahl von Spalten hat, verläuft die "Mittellinie" durch eine Pixelspalte. Wenn diese Pixel "gespiegelt" werden, behalten sie ihre Position und bewegen sich nicht.

## Beispiel #example

Spiegle ein Pfeilbild `3`-mal horizontal.

```blocks
let showArrow: Sprite = null
let leftArrow: Image = null
leftArrow = img`
. . . a . . . . . . . . . . 
. . a a . . . . . . . . . . 
. a a a a a a a a a a a a a 
a a . . . . . . . . . . . a 
. a a a a a a a a a a a a a 
. . a a . . . . . . . . . . 
. . . a . . . . . . . . . . 
`
showArrow = sprites.create(leftArrow)
for (let i = 0; i < 3; i++) {
    pause(500)
    leftArrow.flipX()
}
```

## Siehe auch #seealso

[vertikal spiegeln](/reference/images/image/flip-y),
[verschieben](/reference/images/image/scroll)