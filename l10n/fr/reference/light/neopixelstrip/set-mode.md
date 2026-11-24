# set Mode

Définit le mode d'encodage des couleurs envoyé aux lumières programmables.

```sig
light.createStrip().setMode(NeoPixelMode.RGB)
```

La plupart des bandes lumineuses utilisent l'encodage Vert Rouge Bleu (``NeoPixelMode.RGB``), certaines utilisent Rouge Vert Bleu (``NeoPixelMode.RGB_RGB``).
Certaines bandes de LED ont aussi une LED blanche (``NeoPixelMode.RGBW``).

## Paramètres

* **mode** : le mode souhaité

## Exemple

Règle le mode d'une bande de LED NeoPixel sur `RGBW`.

```blocks
let strip = light.createStrip()
strip.setMode(NeoPixelMode.RGBW)
```

```package
light
```


