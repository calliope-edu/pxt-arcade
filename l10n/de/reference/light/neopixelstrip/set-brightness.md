# set Brightness

Legt die Helligkeit aller Pixel auf dem Pixelstreifen fest.

```sig
light.createStrip().setBrightness(0)
```

## Parameter

* **brightness**: die neue Helligkeit aller Pixel im Streifen. Das ist eine [Zahl](/types/number) zwischen 0 (kein Licht) und 255 (super hell). 

## Beispiel

Setze alle Pixel auf ``weiß``. Dimme die Pixel, wenn Knopf `A` gedrückt wird, und
mache sie heller, wenn Knopf `B` gedrückt wird.

```blocks
let strip = light.createStrip()
strip.setAll(0xffffff)

input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setBrightness(strip.brightness() - 1)
})

input.buttonB.onEvent(ButtonEvent.Click, () => {
    strip.setBrightness(strip.brightness() + 1)
})
```

## Siehe auch

[``||brightness||``](/reference/light/neopixelstrip/brightness),
[``||set pixel white led||``](/reference/light/neopixelstrip/set-pixel-white-led)

```package
light
```
