# hsv

Convertit un nombre de couleur TSV (teinte, saturation, valeur) en un nombre de couleur RVB.

```sig
light.hsv(255, 255, 255);
```
### Qu'est-ce que TSV ? #hsvdesc

Dans tes programmes, la couleur est connue par des nombres [RVB](/reference/light/rgb#rgbdesc).
Une autre façon de créer une couleur est la méthode **TSV** (HSV). TSV signifie **teinte**, **saturation** et
**valeur**. Ça a l'air compliqué, mais il y a peut-être une façon simple d'y penser.

La première partie, la **teinte**, est la couleur. Une teinte de `0` signifie rouge et une teinte de `255`
signifie violet. Toutes les autres couleurs se trouvent entre ces nombres.

Le nombre suivant, la **saturation**, est la quantité de lumière blanche mélangée à la _teinte_. Si ce
nombre est `0`, la couleur de la _teinte_ est complètement délavée et tu obtiens une nuance de gris ou peut-être
juste du blanc. Mais quand tu le règles sur `255`, tu as toute la couleur de la _teinte_.

Le dernier nombre, la **valeur**, indique à quel point la couleur sera sombre ou claire. Avec `0`, chaque couleur devient
noire et avec `255`, chaque couleur devient blanche. Un nombre entre les deux donne ta couleur avec un certain
degré d'obscurité. Bien sûr, `128` est une obscurité moyenne et tu verras clairement ta
couleur avec la _valeur_ réglée ainsi.

Pour obtenir un bleu pur, les réglages TSV sont :

```block
let pureBlue = light.hsv(170, 255, 128)
```
Si tu aimes la couleur menthe, utilise ces réglages TSV :
```block
let mint = light.hsv(85, 128, 217)
```

## Paramètres

* **hue** : un [nombre](/types/number) qui est la couleur (entre 0 et 255), par exemple : 92 pour le vert
* **sat** : un [nombre](/types/number) qui est la quantité de blanc dans la couleur (entre 0 et 255), par exemple : 51
* **val** : un [nombre](/types/number) qui est l'obscurité de la couleur (entre 0 et 255), par exemple : 128

## Retourne

* un [nombre](/types/number) qui est la valeur RVB correspondant aux réglages TSV.

## Exemple

Crée une nouvelle couleur jaune à utiliser sur tes pixels. Essaie la nouvelle couleur quand tu appuies sur le bouton ``A``.

```blocks
let strip = light.createStrip()
let myYellow = light.hsv(43, 228, 217)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(myYellow)
})
```
## Voir aussi

[``||rgb||``](/reference/light/rgb)

```package
light
```


