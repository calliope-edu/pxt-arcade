# set Gradient

Legt einen Farbverlauf zwischen zwei RGB-Farben fest.

```sig
light.createStrip().setGradient(0, 0)
```

Der Standard-Farbverlauf für einen LED-Streifen geht von `schwarz` nach `weiß`, also zwischen `0x000000` und `0xffffff` in RGB-Werten. Du kannst diesen Verlauf ändern, indem du zwei andere Farben als Anfang und Ende des Verlaufs auswählst.

## Parameter

* **startColor**: eine [Zahl](/types/number), die ein RGB-Wert für die Anfangsfarbe des Verlaufs ist.
* **endColor**: eine [Zahl](/types/number), die ein RGB-Wert für die Endfarbe des Verlaufs ist.

## Beispiel

Lege für einen Streifen einen Farbverlauf zwischen `blau` und `rot` fest.

```blocks
let strip = light.createStrip()
strip.setGradient(0x0000cc, 0x880000)
```

## Siehe auch

[Pixelfarbe](/reference/light/neopixelstrip/pixel-color), [rgb](/reference/light/rgb)

```package
light
```
