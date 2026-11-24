# définir le mode

Définit le mode d'encodage des couleurs de la bande lumineuse par défaut.

```sig
light.defaultStrip().setMode(NeoPixelMode.RGB)
```

La plupart des bandes lumineuses utilisent l'encodage Vert Rouge Bleu (``NeoPixelMode.RGB``), certaines utilisent Rouge Vert Bleu (``NeoPixelMode.RGB_RGB``).
Certaines bandes de LED ont aussi une LED blanche (``NeoPixelMode.RGBW``).

## Paramètres

* **mode** : le mode souhaité

## Exemple

Définis le mode de la bande de LED par défaut sur `RGBW`.

```blocks
light.setMode(NeoPixelMode.RGBW)
```

```package
light
```


