# Länge festlegen

Lege die Anzahl der LEDs fest, die im Standard-NeoPixel-Streifen verwendet werden.

```sig
light.defaultStrip().setLength(1)
```

Der Standardstreifen hat eine maximale Länge an ansteuerbaren LEDs. Du kannst eine Länge festlegen, die kleiner oder gleich dieser maximalen Länge ist. LEDs jenseits dieser Länge reagieren nicht, wenn du versuchst, sie anzusteuern.

## Parameter

* **numLeds**: eine [Zahl](/types/number), die die aktuelle Länge des Standard-LED-Streifens festlegt.

## Beispiel

Setze die Länge des Standard-LED-Streifens auf `8`.

```blocks
light.setLength(8)
```

[Länge](/reference/light/range)

```package
light
```

