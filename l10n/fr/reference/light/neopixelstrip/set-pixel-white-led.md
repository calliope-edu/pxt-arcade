# définir la LED blanche du pixel

Règle la luminosité blanche d'un pixel dans une bande NeoPixel de LED RVB+B.

```sig
light.createStrip().setPixelWhiteLED(0,0);
```
Si la bande de pixels a des LED de type RVB+B, tu peux régler la luminosité de la LED blanche
à une position de pixel dans la bande. Les bandes de LED RVB+B combinent des LED RVB et blanches pour
plus de luminosité et des effets lumineux.

## Paramètres

* **pixeloffset** : le [nombre](/types/number) de la position du pixel dans la bande pour la LED blanche, comme : 14
* **white** : un [nombre](/types/number) pour la luminosité de la LED blanche. La luminosité est
comprise entre 0 (complètement éteinte) et 255 (très lumineuse).

## Exemple

Règle le pixel blanc à la position `5` d'une bande NeoPixel RVB+B à mi-luminosité.

```blocks
let rgbwStrip = light.createStrip(null, 24, NeoPixelMode.RGBW)
rgbwStrip.setPixelWhiteLED(5, 128)
```

## Voir aussi

[``||créer une bande||``](/reference/light/create-strip), [``||définir le mode||``](/reference/light/neopixelstrip/set-mode)

```package
light
```



