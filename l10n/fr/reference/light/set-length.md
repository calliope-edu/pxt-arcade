# définir la longueur

Définit le nombre de LED à utiliser dans la bande NeoPixel par défaut.

```sig
light.defaultStrip().setLength(1)
```

La bande par défaut a une longueur maximale de LED adressables. Tu peux lui donner une longueur inférieure ou égale à cette longueur maximale. Rien ne se passera pour les LED au-delà de cette longueur si tu essaies de les contrôler.

## Paramètres

* **numLeds** : un [nombre](/types/number) qui est la longueur à définir pour la bande de LED par défaut.

## Exemple

Définis la longueur de la bande de LED par défaut à `8`.

```blocks
light.setLength(8)
```

[longueur](/reference/light/range)

```package
light
```


