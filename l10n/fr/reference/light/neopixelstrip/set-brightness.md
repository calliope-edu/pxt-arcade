# set Brightness

Règle la luminosité de tous les pixels de la bande.

```sig
light.createStrip().setBrightness(0)
```

## Paramètres

* **brightness** : la nouvelle luminosité de tous les pixels de la bande. C'est un [nombre](/types/number) entre 0 (pas de lumière) et 255 (super lumineux). 

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

[``||brightness||``](/reference/light/neopixelstrip/brightness),
[``||set pixel white led||``](/reference/light/neopixelstrip/set-pixel-white-led)

```package
light
```
