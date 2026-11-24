# erstellen

Erstelle ein Pixelbild in einer bestimmten Größe.

```sig
image.create(0, 0)
```

Es wird ein leeres rechteckiges Bild mit der angegebenen Breite und Höhe in Pixeln erstellt. Leer bedeutet, dass alle Pixel des Bildes transparent sind. Die Pixelfarben setzt du mit den [Bild](/reference/images)-Funktionen.

Du kannst ein Bild der Größe null erstellen (``width = 0`` und ``height = 0``), die Funktion erstellt dann aber tatsächlich ein Bild in einer Standardgröße.

## Parameter

* **width**: die [Anzahl](/types/number) der Pixel in der Breite (x-Richtung) des Bildes.
* **height**: die [Anzahl](/types/number) der Pixel in der Höhe (y-Richtung) des Bildes.

## Rückgabewerte

* ein leeres (transparentes) [Bild](/types/image) in der gewünschten Größe.

## Beispiel #example

Erstelle ein 32 x 32 großes Bild und zeichne einen orangefarbenen Rand darum.

```blocks
let orangeBox = image.create(32, 32)
for (let i = 0; i < 32; i++) {
    orangeBox.setPixel(0, i, 13)
    orangeBox.setPixel(i, 0, 13)
    orangeBox.setPixel(i, 31, 13)
    orangeBox.setPixel(31, i, 13)
}
let boxSprite = sprites.create(orangeBox)
```

## Siehe auch #seealso

[Bild](/reference/images)