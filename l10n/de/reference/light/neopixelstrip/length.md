# length

Die Anzahl der Pixel auf einem Pixelstreifen.

```sig
light.createStrip().length()
```

## Rückgabewert

* Die [Anzahl](/types/number) der Pixel auf dem Pixelstreifen.

## Beispiel

Schiebe ein `oranges` Pixel vom Anfang des Pixelstreifens bis zum Ende.

```blocks
let strip = light.createStrip()
strip.setPixelColor(0, 0xff7f00)
for (let i = 0; i < strip.length() - 1; i++) {
    pause(500)
    strip.move(LightMove.Shift, 1)
}
```
## Siehe auch

[``||range||``](/reference/light/neopixelstrip/range)

```package
light
```


