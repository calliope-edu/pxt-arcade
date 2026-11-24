# set Length

Legt die Anzahl der LEDs fest, die in einem NeoPixel-Streifen verwendet werden.

```sig
light.createStrip().setLength(1)
```

Der Streifen hat eine maximale Länge an adressierbaren LEDs. Du kannst eine Länge festlegen, die kleiner oder gleich der maximalen Länge ist. Mit LEDs jenseits dieser Länge passiert nichts, wenn du versuchst, sie zu steuern.

## Parameter

* **numLeds**: eine [Zahl](/types/number), die die aktuelle Länge ist, die für den LED-Streifen festgelegt wird.

## Beispiel

Setze die Länge des LED-Streifens auf `8`.

```blocks
let strip = light.createStrip()
strip.setLength(8)
```

[Länge](/reference/light/neopixelstrip/length)

```package
light
```


