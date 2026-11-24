# afficher

Demande à la bande de pixels d'afficher toutes les modifications de pixels en mémoire tampon qui sont prêtes.

```sig
light.createStrip().show()
```

Tu utilises **afficher** si tu as des modifications de pixels **[en mémoire tampon](/reference/light/neopixelstrip/set-buffered)**. Toutes les modifications des pixels faites par d'autres opérations lumineuses apparaîtront quand tu utilises **afficher**. 

## Exemple

Définis la couleur de deux pixels en mettant chaque changement en mémoire tampon. Fais apparaître tous les changements en même temps.

```blocks
let strip = light.createStrip()
strip.setBuffered(true)
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(2, 0xff0000)
strip.show()
```

## Voir aussi

[définir la mémoire tampon](/reference/light/neopixelstrip/set-buffered)

```package
light
```



