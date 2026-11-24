# définir l'échelle

Définis l'échelle d'un afficheur de chiffre.

```sig
sevenseg.createDigit().setScale(SegmentScall.Half)
```

Le chiffre à sept segments a deux tailles d'affichage, `full` (pleine) et `half` (moitié). La taille du chiffre est réglée sur `full` lors de sa création.

## Paramètres

* **scale** : l'échelle de l'afficheur à segments, `full` ou `half`.

## Exemple

Crée un afficheur de chiffre à sept segments et règle-le à l'échelle `half`.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setScale(SegmentScale.Half)
```

## Voir aussi

[propriétés](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
