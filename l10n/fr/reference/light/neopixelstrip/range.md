# range

Crée une nouvelle bande de pixels plus petite à partir d'une partie de la bande actuelle.

```sig
light.createStrip().range(0, 4)
```
La nouvelle bande de pixels est une bande plus petite, _virtuelle_, avec une partie ou la totalité des pixels
de la bande actuelle, ou d'origine. Tu peux utiliser **range** pour créer de nouvelles mini-bandes à partir
d'une bande plus grande, pour des effets lumineux plus complexes.

Si tu as une bande de 10 pixels, tu peux créer 2 nouvelles bandes _virtuelles_ en donnant
5 pixels à chacune. Voici un exemple :

```block
let strip0 = light.createStrip()
let strip1 = strip0.range(0, 5)
let strip2 = strip0.range(5, 5)
```
Tu peux utiliser ces nouvelles bandes seules, avec leurs propres actions lumineuses :

```blocks
let strip0 = light.createStrip()
let strip1 = strip0.range(0, 5)
let strip2 = strip0.range(5, 5)
strip1.setAll(0xffff00)
strip2.setPixelColor(0, 0xff0000)
```
La bande d'origine a un pixel `rouge` à la position `5`, mais il est à la position `0` pour
la nouvelle bande virtuelle appelée `strip2`.

## Paramètres

* **start** : la position du pixel où commence la nouvelle bande, par exemple 5
* **length** : le nombre de pixels de la nouvelle bande, par exemple : 10

## Retourne

* Une nouvelle bande de pixels créée à partir de la bande actuelle, avec une partie ou la totalité des pixels.

## Exemple

Crée une bande plus petite à partir de la bande actuelle. Décale un pixel `orange` du début
à la fin de la nouvelle bande.

```blocks
let smallStrip = light.createStrip().range(0, 4)
smallStrip.setPixelColor(0, 0xff0000)
for (let i = 0; i < smallStrip.length() - 1; i++) {
    pause(500)
    smallStrip.move(LightMove.Shift, 1)
}
```
## Voir aussi

[``||create strip||``](/reference/light/create-strip)

```package
light
```


