# créer un compteur

Crée un afficheur compteur avec un ou plusieurs chiffres à sept segments.

```sig
sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
```

## Paramètres

* **thickness** : l'épaisseur des segments de l'afficheur compteur :
>* `thick` : largeur de pixels épaisse
>* `medium` : largeur de pixels moyenne
>* `narrow` : largeur de pixels étroite
>* `thin` : largeur de pixels fine
>* `blank` : les segments sont masqués
* **scale** : l'échelle de la taille des chiffres, `full` (pleine) ou `half` (moitié).
* **numDigits** : le nombre de chiffres de l'afficheur compteur, au maximum `5`.

## Exemple

Crée un compteur à `5` chiffres et ajoute un à la valeur actuelle toutes les `100` millisecondes.

```blocks
let myCounter: DigitCounter = null
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Full, 5)
myCounter.count = 54321
game.onUpdateInterval(100, function () {
    myCounter.count += 1
})
```

```package
sevenseg
```
