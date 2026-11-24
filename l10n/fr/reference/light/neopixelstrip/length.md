# length

Le nombre de pixels d'une bande de pixels.

```sig
light.createStrip().length()
```

## Retourne

* Le [nombre](/types/number) de pixels de la bande.

## Exemple

Décale un pixel `orange` du début à la fin de la bande de pixels.

```blocks
let strip = light.createStrip()
strip.setPixelColor(0, 0xff7f00)
for (let i = 0; i < strip.length() - 1; i++) {
    pause(500)
    strip.move(LightMove.Shift, 1)
}
```
## Voir aussi

[``||range||``](/reference/light/neopixelstrip/range)

```package
light
```


