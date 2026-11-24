# clear

Schaltet alle Pixel-LEDs aus.

```sig
light.createStrip().clear()

```

## Beispiel

Schalte alle Pixel aus, wenn Knopf `A` gedrückt wird.

```blocks
let strip = light.createStrip()
strip.setAll(0x00ff00)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.clear()
})
```

## Siehe auch

[``||set All||``](/reference/light/neopixelstrip/set-all)

```package
light
```
