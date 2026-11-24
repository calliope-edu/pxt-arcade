# définir la couleur du chiffre

Définit la couleur des segments d'un afficheur de chiffre.

```sig
sevenseg.createDigit().setDigitColor(0)
```

La couleur des segments du chiffre est choisie parmi les couleurs de la palette actuelle.

## Paramètres

* **color** : un [nombre](/types/number) de couleur de la palette actuelle à utiliser pour les segments de l'afficheur de chiffre.

## Exemple

Crée deux chiffres à sept segments et définis une couleur différente pour chacun.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
let myDigit2 = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.x += myDigit.width * -2 / 3
myDigit2.x += myDigit2.width * 2 / 3
myDigit.setDigitColor(5)
myDigit2.setDigitColor(7)
```
## Voir Aussi

[propriétés](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
