# brightness

Obtiens la luminosité des pixels de la bande (ou de la carte).

```sig
light.createStrip().brightness()
```

## Retourne

* un [nombre](/types/number) entre 0 (pas de lumière) et 255 (super lumineux). 

## Exemple

Règle tous les pixels sur ``blanc``. Diminue la luminosité des pixels quand le bouton `A` est pressé et
augmente-la quand le bouton `B` est pressé.

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

## Voir aussi

[``||setBrightness||``](/reference/light/neopixelstrip/set-brightness)

```package
light
```
