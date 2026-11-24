# set All

Lässt alle Pixel auf dem Streifen eine Farbe anzeigen.

```sig
light.createStrip().setAll(0xff0000);
```

## Parameter

* **rgb**: eine [Zahl](/types/number), die die RGB-Farbe für alle Pixel ist.

## Beispiel

Setze alle Pixel auf `pink`.

```blocks
let strip = light.createStrip()
strip.setAll(0xff007f)
```

[``||rgb||``](/reference/light/rgb)

```package
light
```


