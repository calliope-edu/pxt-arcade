# set Gradient

Définit un dégradé entre deux couleurs RVB.

```sig
light.createStrip().setGradient(0, 0)
```

Le dégradé par défaut d'une bande de LED va du `noir` au `blanc`, c'est-à-dire de `0x000000` à `0xffffff` en valeurs RVB. Tu peux changer ce dégradé en choisissant deux autres couleurs pour le début et la fin.

## Paramètres

* **startColor** : un [nombre](/types/number) qui est la valeur RVB de la couleur de début du dégradé.
* **endColor** : un [nombre](/types/number) qui est la valeur RVB de la couleur de fin du dégradé.

## Exemple

Définis un dégradé de couleur entre `bleu` et `rouge` sur la bande.

```blocks
let strip = light.createStrip()
strip.setGradient(0x0000cc, 0x880000)
```

## Voir aussi

[pixel color](/reference/light/neopixelstrip/pixel-color), [rgb](/reference/light/rgb)

```package
light
```
