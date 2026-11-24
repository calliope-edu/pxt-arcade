# clear

Éteint toutes les LED des pixels.

```sig
light.createStrip().clear()

```

## Exemple

Éteins tous les pixels quand le bouton `A` est pressé.

```blocks
let strip = light.createStrip()
strip.setAll(0x00ff00)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.clear()
})
```

## Voir aussi

[``||set All||``](/reference/light/neopixelstrip/set-all)

```package
light
```
