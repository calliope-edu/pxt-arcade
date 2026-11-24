# set Mode

Legt den Farbkodierungsmodus fest, der an die programmierbaren Lichter gesendet wird.

```sig
light.createStrip().setMode(NeoPixelMode.RGB)
```

Die meisten Lichtstreifen verwenden die Kodierung Grün Rot Blau (``NeoPixelMode.RGB``), manche verwenden Rot Grün Blau (``NeoPixelMode.RGB_RGB``).
Manche LED-Streifen haben außerdem eine weiße LED (``NeoPixelMode.RGBW``).

## Parameter

* **mode**: der gewünschte Modus

## Beispiel

Setze den Modus eines NeoPixel-LED-Streifens auf `RGBW`.

```blocks
let strip = light.createStrip()
strip.setMode(NeoPixelMode.RGBW)
```

```package
light
```


