# set All

Fait afficher une seule couleur à tous les pixels de la bande.

```sig
light.createStrip().setAll(0xff0000);
```

## Paramètres

* **rgb** : un [nombre](/types/number) qui est la couleur RVB de tous les pixels.

## Exemple

Règle tous les pixels sur `rose`.

```blocks
let strip = light.createStrip()
strip.setAll(0xff007f)
```

[``||rgb||``](/reference/light/rgb)

```package
light
```


