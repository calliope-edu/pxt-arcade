# Pixel abrufen

Ruft die Farbnummer eines Pixels an einer Position in einem Bild ab.

```sig
image.create(0, 0).getPixel(0, 0)
```

# Parameter

* **x**: eine [Zahl](/types/number), die die horizontale Position des Pixels ist.
* **y**: eine [Zahl](/types/number), die die vertikale Position des Pixels ist.

## Rückgabewert

* eine [Zahl](/types/number), die die Farbe des Pixels an der Position **x** und **y** im Bild ist. Die Farbnummer ist ein Wert zwischen `0` und `15`.

## Beispiel #example

Fülle ein Bild zufällig mit verschiedenen Farben. Ändere die Farbe eines Pixels in der Mitte, wenn es gelb ist.

```blocks
let showColors: Sprite = null
let randoColors: Image = null
randoColors = image.create(16, 16)
for (let y = 0; y <= 15 - 1; y++) {
    for (let x = 0; x <= 15 - 1; x++) {
        randoColors.setPixel(x, y, Math.randomRange(0, 15))
    }
}
if (randoColors.getPixel(8, 8) == 14) {
    randoColors.setPixel(8, 8, 1)
}
```

## Siehe auch #seeaslo

[Bild](/types/image),
[Pixel setzen](/reference/images/image/set-pixel)