# définir la couleur des chiffres

Définit la couleur des segments d'un afficheur compteur.

```sig
sevenseg.createCounter().setDigitColor(0)
```

La couleur des chiffres du compteur est choisie parmi les couleurs de la palette actuelle.

## Paramètres

* **color** : un [nombre](/types/number) de couleur de la palette actuelle à utiliser pour les segments de l'afficheur compteur.

## Exemple

Crée un compteur à plusieurs chiffres et change la couleur des chiffres.

```blocks
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 3)
myCounter.setDigitColor(5)
game.onUpdateInterval(1000, function () {
    myCounter.count += 1
})
```
## Voir aussi

[propriétés](/reference/sevenseg/digitcounter/properties)

```package
sevenseg
```
