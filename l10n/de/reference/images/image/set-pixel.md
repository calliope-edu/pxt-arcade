# Pixel setzen

Setze die Farbe an einer Pixelposition in einem Bild.

```sig
image.create(0,0).setPixel(0,0,0)
```

Pixel sind einzelne Farbpunkte in einem [Bild](/types/image). Pixel sind in Spalten (ihr ``x``-Wert) und Zeilen (ihr ``y``-Wert) angeordnet. Alle Pixel zusammen bilden das Rechteck des Bildes. Manche Pixel haben vielleicht keine Farbe (transparent), andere haben einen Farbwert.

## Parameter

* **x**: die Spalten[nummer](/types/number) der Pixelposition.
* **y**: die Zeilen[nummer](/types/number) der Pixelposition.
* **c**: die [Nummer](/types/number) der neuen Farbe für die Pixelposition **x** und **y**. Farbnummern sind Werte zwischen `0` und `15`, die eine Farbe aus der aktuellen Farbpalette auswählen.

## Beispiel #example

Erstelle ein "Schraffur"-Muster in einem Bild, indem du in jeder Zeile die Farbe jedes zweiten Pixels setzt.

```blocks
let hatch: Image = null
let patch: Sprite = null
hatch = image.create(32, 32)
for (let y = 0; y <= 31; y++) {
    for (let x = 0; x <= 15; x++) {
    	if (y % 2 > 0)
        {
            hatch.setPixel(x * 2 + 1, y, 10)
        } else {
            hatch.setPixel(x * 2, y, 10)        
        }
    }
}
patch = sprites.create(hatch)
```

## Siehe auch #seealso

[Bild](/types/image),
[Pixel abrufen](/reference/images/image/get-pixel)