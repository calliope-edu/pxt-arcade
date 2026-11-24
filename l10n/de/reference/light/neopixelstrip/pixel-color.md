# pixel Color

Gibt die Farbe des Pixels an der Position mit dieser Nummer zurück.

```sig
light.createStrip().pixelColor(0)
```

## Parameter

* **pixelOffset**: die Position des Pixels auf dem Streifen (oder dem Board), dessen
Farbe du wissen möchtest.

## Rückgabewert

* eine [Zahl](/types/number), die der [**RGB**](/reference/light/rgb#rgbdesc)-Wert der aktuellen Farbe des Pixels ist.

## Beispiel #exsection

Hole die Farbe des Pixels an Position ``3`` und setze das Pixel an Position ``4`` auf dieselbe Farbe.

```blocks
let strip = light.createStrip()
strip.setPixelColor(4, strip.pixelColor(3))
```

## Siehe auch
[``||set pixel color||``](/reference/light/neopixelstrip/set-pixel-color), [``||rgb||``](/reference/light/rgb)

```package
light
```
