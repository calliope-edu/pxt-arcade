# alle Animationen stoppen

Stoppe die gerade laufende Pixelanimation und alle anderen Animationen, die bereitstehen.

```sig
light.createStrip().stopAllAnimations()

```

## Beispiel

Zeige beim Start die Animation ``rainbow`` für 10 Sekunden. Wenn Knopf ``A``
gedrückt wird, bevor die 10 Sekunden vorbei sind, stoppe ``rainbow``.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.stopAllAnimations()
})

strip.showAnimation(light.rainbowAnimation, 10000)
```

## Siehe auch

[``||show animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
