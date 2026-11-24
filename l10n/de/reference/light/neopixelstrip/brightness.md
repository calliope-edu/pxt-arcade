# brightness

Gibt die Helligkeit der Pixel auf dem Streifen (oder auf dem Board) zurück.

```sig
light.createStrip().brightness()
```

## Rückgabewert

* eine [Zahl](/types/number) zwischen 0 (kein Licht) und 255 (super hell). 

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

[``||setBrightness||``](/reference/light/neopixelstrip/set-brightness)

```package
light
```
