# Modus festlegen

Legt den Farbkodierungsmodus für den Standard-Lichtstreifen fest.

```sig
light.defaultStrip().setMode(NeoPixelMode.RGB)
```

Die meisten Lichtstreifen verwenden die Kodierung Grün Rot Blau (``NeoPixelMode.RGB``), manche verwenden Rot Grün Blau (``NeoPixelMode.RGB_RGB``).
Manche LED-Streifen haben außerdem eine weiße LED (``NeoPixelMode.RGBW``).

## Parameter

* **mode**: der gewünschte Modus

## Beispiel

Setze den Modus des Standard-LED-Streifens auf `RGBW`.

```blocks
light.setMode(NeoPixelMode.RGBW)
```

```package
light
```

