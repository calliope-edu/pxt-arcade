# pixel Color

Obtiens la couleur du pixel à la position portant ce numéro.

```sig
light.createStrip().pixelColor(0)
```

## Paramètres

* **pixelOffset** : la position sur la bande (ou sur la carte) du pixel dont
tu veux connaître la couleur.

## Retourne

* un [nombre](/types/number) qui est la valeur [**RVB**](/reference/light/rgb#rgbdesc) de la couleur actuelle du pixel.

## Exemple #exsection

Obtiens la couleur du pixel à la position ``3`` et donne la même couleur au pixel à la position ``4``.

```blocks
let strip = light.createStrip()
strip.setPixelColor(4, strip.pixelColor(3))
```

## Voir aussi
[``||set pixel color||``](/reference/light/neopixelstrip/set-pixel-color), [``||rgb||``](/reference/light/rgb)

```package
light
```
