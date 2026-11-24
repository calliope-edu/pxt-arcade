# set Length

Définit le nombre de LED à utiliser sur une bande NeoPixel.

```sig
light.createStrip().setLength(1)
```

La bande a une longueur maximale de LED adressables. Tu peux lui donner une longueur inférieure ou égale à cette longueur maximale. Les LED au-delà de cette longueur ne réagiront pas si tu essaies de les contrôler.

## Paramètres

* **numLeds** : un [nombre](/types/number) qui est la longueur à définir pour la bande de LED.

## Exemple

Règle la longueur de la bande de LED sur `8`.

```blocks
let strip = light.createStrip()
strip.setLength(8)
```

[length](/reference/light/neopixelstrip/length)

```package
light
```


