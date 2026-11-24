# anzeigen

Sag dem Pixelstreifen, dass er alle gepufferten Pixeländerungen anzeigen soll, die bereitstehen.

```sig
light.createStrip().show()
```

Du verwendest **show**, wenn du Pixeländerungen hast, die **[gepuffert](/reference/light/neopixelstrip/set-buffered)** sind. Alle Änderungen an den Pixeln durch andere Lichtoperationen erscheinen, wenn du **show** verwendest. 

## Beispiel

Setze die Farbe von zwei Pixeln, aber puffere jede Lichtänderung. Lass alle Änderungen gleichzeitig erscheinen.

```blocks
let strip = light.createStrip()
strip.setBuffered(true)
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(2, 0xff0000)
strip.show()
```

## Siehe auch

[gepuffert festlegen](/reference/light/neopixelstrip/set-buffered)

```package
light
```

