# définir la base

Définis la base (radix) d'un afficheur de chiffre.

```sig
sevenseg.createDigit().setRadix(SegmentScall.Half)
```

La base du chiffre définit la base numérique de l'affichage. La valeur par défaut est `decimal`, c'est-à-dire la base 10, qui peut représenter les nombres de `0` à `9`. Il existe une base spéciale appelée `alpha` qui permet à l'afficheur de montrer certains caractères alphanumériques pouvant être représentés avec sept segments, comme `P` ou `Y`.

## Paramètres

* **radix** : la base de l'afficheur à segments, ou base numérique :
>* `decimal` : affiche des nombres décimaux - `0` à `9`.
>* `hex` : affiche des nombres hexadécimaux, en base 16 - `0` à `F`.
>* `octal` : affiche des nombres octaux, en base 8 - `0` à `7`.
>* `alpha` : affiche les valeurs sous forme de chiffres alphanumériques, comme `J`, `U`, `L` ou `Y`.

## Exemple

Crée un afficheur de chiffre à sept segments et règle sa base sur `hex`. Choisis au hasard une valeur hexadécimale à afficher comme chiffre.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setRadix(DigitRadix.Hex)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 15)
})
```
## Voir aussi

[propriétés](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
