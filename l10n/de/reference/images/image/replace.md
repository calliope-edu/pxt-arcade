# ersetzen

Ersetze alle Pixel einer Farbe durch Pixel einer anderen Farbe.

```sig
image.create(0, 0).replace(0, 0)
```

## Parameter

* **from**: die Farb[nummer](/types/number) der Pixel, die geändert werden sollen.
* **to**: die Farb[nummer](/types/number) der Ersatzpixel.

## Beispiel #example

Erstelle ein Quadrat aus zufälligen Farben und ersetze dann zufällig die Farben, bis das Quadrat nur noch eine Farbe hat.

```blocks
let colorBlock = image.create(32, 32)
for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
        colorBlock.setPixel(x, y, Math.randomRange(0, 15))
    }
}
let showBlock = sprites.create(colorBlock)
game.onUpdateInterval(500, function () {
    colorBlock.replace(Math.randomRange(0, 15), Math.randomRange(0, 15))
})
```

## Siehe auch #seealso

[füllen](/reference/images/image/fill)