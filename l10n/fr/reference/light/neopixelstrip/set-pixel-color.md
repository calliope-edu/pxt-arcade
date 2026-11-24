# définir la couleur du pixel

Change la couleur du pixel à cette position.

```sig
light.createStrip().setPixelColor(0, 0)

```

## Paramètres

* **pixelOffset** : la position sur la bande (ou la carte) du pixel dont
tu veux changer la couleur.
* **color** : une couleur [RVB](/reference/light/rgb#rgbdesc) à donner au pixel.

## Exemple #exsection

Quand on clique sur le bouton ``B``, affiche la couleur ``rose`` au pixel ``0``.

```blocks
let strip = light.createStrip()
input.buttonB.onEvent(ButtonEvent.Click, () => {
    strip.setPixelColor(0, 0xff007f)
})
```

## Voir aussi
[``||couleur du pixel||``](/reference/light/neopixelstrip/pixel-color), [``||rvb||``](/reference/light/rgb)

```package
light
```
