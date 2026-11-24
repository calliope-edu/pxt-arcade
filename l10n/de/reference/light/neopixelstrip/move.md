# move

Lässt die Pixel so aussehen, als würden sie sich entlang des Pixelstreifens bewegen.

```sig
light.createStrip().move(LightMove.Rotate, 1)
```

Ein Pixel auf dem Streifen sieht aus, als würde es sich bewegen, wenn das nächste Pixel
dieselbe Farbe und Helligkeit annimmt. Wenn das bei jedem Pixel im Streifen passiert,
sieht es so aus, als würde sich jedes Pixel im Streifen bewegen.

Du kannst die Pixel so lange bewegen, bis sie am Ende aus dem Streifen herauslaufen, das ist ein
`shift` (Verschieben). Oder du lässt die Pixel mit `rotate` (Rotieren) im Kreis um den Streifen laufen. Die
Pixel bewegen sich um die gewünschte Anzahl an Pixelplätzen.

## Parameter

* **kind** wie sich die Pixel bewegen sollen, entweder `shift` oder `rotate`
* **offset** die [Anzahl](/types/number) der Pixelplätze, um die die Pixel bewegt werden

## Beispiel

Lass zwei blaue Pixel jeweils um einen Pixelplatz um den Streifen rotieren.

```blocks
let strip = light.createStrip()
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(1, 0x0000ff)
forever(() => {
    strip.move(LightMove.Rotate, 1)
    pause(500)
})
```

```package
light
```


