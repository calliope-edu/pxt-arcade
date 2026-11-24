# fade

Atténue une couleur selon une quantité de luminosité.

```sig
light.fade(128, 128);
```

La luminosité vers laquelle tu atténues la couleur va de 0 (totalement sombre, plus de couleur) à 255
(toute la couleur actuelle, aucun changement de luminosité). Quelque part entre ces deux nombres se trouve
la nuance vers laquelle tu veux atténuer la couleur.

## Paramètres

* **color** : un [nombre](/types/number) qui est la couleur RVB à atténuer, par exemple : 0x0000ff
* **brightness** : un [nombre](/types/number) entre `0` (totalement sombre) et `255` (pleine luminosité, aucune atténuation)

## Retourne

* un [nombre](/types/number) qui est la valeur RVB de la couleur atténuée.

## Exemple

Atténue la lumière `verte` des pixels à la moitié de la luminosité quand le bouton `A` est pressé.
Le nombre `128` correspond à peu près à la moitié de la pleine luminosité (255).

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(light.fade(0x00ff00, 128))
})
```

[``||rgb||``](/reference/light/rgb)

```package
light
```


