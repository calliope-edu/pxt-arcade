# rvb

Combine les parties rouge, verte et bleue de la lumière en une couleur RVB.

```sig
light.rgb(255, 255, 255);
```
### Qu'est-ce que le RVB ? #rgbdesc

Dans tes programmes, la couleur de la lumière est définie par la quantité de trois couleurs séparées ajoutées
ensemble : le **rouge**, le **vert** et le **bleu**. Ces couleurs sont appelées couleurs _primaires_ et toutes les
autres couleurs sont en réalité un mélange de celles-ci.

Imagine que tu prends des peintures de différentes couleurs et que tu les mélanges. Mélange une quantité égale
de peinture rouge avec une quantité égale de peinture verte. N'utilise pas de peinture bleue. Ce
que tu obtiens avec le rouge et le vert, c'est du jaune. Dans ton programme, tu peux donc créer du jaune comme ceci :
```block
let yellow = light.rgb(255, 255, 0)
```
De la même façon, tu peux créer du rose, mais cette fois avec du bleu et sans vert :
```block
let pink = light.rgb(255, 0, 255)
```

## Paramètres

* **red** : un [nombre](/types/number) qui est la quantité de lumière rouge (entre 0 et 255), comme : 128
* **green** : un [nombre](/types/number) qui est la quantité de lumière verte (entre 0 et 255), comme : 51
* **blue** : un [nombre](/types/number) qui est la quantité de lumière bleue (entre 0 et 255), comme : 255

## Retourne

* un [nombre](/types/number) qui est la valeur RVB des trois nombres de couleur.

## Exemple

Crée une nouvelle couleur jaune pour tes pixels. Essaie la nouvelle couleur quand tu appuies sur le bouton ``A``.

```blocks
let strip = light.createStrip()
let myYellow = light.rgb(255, 228, 181)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(myYellow)
})
```
[``||tsv||``](/reference/light/hsv)

```package
light
```


