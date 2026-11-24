# créer un chiffre

Crée un chiffre à sept segments et affiche-le à l'écran.

```sig
sevenseg.createDigit(SegmentStyle.Thick, 0)
```

Un chiffre à sept segments affiche un caractère numérique, ou certains caractères alphabétiques, en utilisant des segments pour représenter le caractère. Cela permet aux programmes de simuler des afficheurs électroniques de chiffres dans les jeux.

L'afficheur à segments est créé en choisissant la largeur en pixels, ou épaisseur, des segments. L'afficheur peut aussi avoir deux tailles, pleine échelle ou demi-échelle. La valeur par défaut est `full`.

## Paramètres

* **thickness** : l'épaisseur des segments de l'afficheur de chiffre :
>* `thick` : largeur de pixels épaisse
>* `medium` : largeur de pixels moyenne
>* `narrow` : largeur de pixels étroite
>* `thin` : largeur de pixels fine
>* `blank` : les segments sont masqués
* **value** : la valeur initiale du chiffre à afficher.

## Exemple

Crée un chiffre à sept segments et règle la couleur du chiffre sur vert. Toutes les demi-secondes, règle la valeur du chiffre sur un nombre aléatoire entre `0` et `9`.

```blocks
let myDigit = sevenseg.createDigit()
myDigit.setDigitColor(7)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 9)
})
```
## Voir aussi

[définir l'échelle](/reference/sevenseg/sevensegdigit/set-scale)

```package
sevenseg
```
