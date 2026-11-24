# modifier les vies de

Augmente ou diminue le nombre de vies du joueur de cette valeur.

```sig
info.changeLifeBy(0)
```

Le nombre de vies augmente de la valeur de changement lorsqu'elle est supérieure à zéro (positive). Si le nombre de changement est inférieur à zéro (négatif), le nombre de vies est réduit de la valeur de ce nombre.

## Paramètres

* **value** : un [nombre](/types/number) dont modifier le nombre de vies. Les nombres positifs ajoutent des vies et les nombres négatifs en retirent.

## Exemple #example

Ajoute `20` au nombre de vies lorsque le joueur atteint `10000` points.

### Un joueur

```blocks
let giveLives = true

if (info.score() > 9999) {
    if (giveLives) {
        info.changeLifeBy(20)
        giveLives = false
    }
}
```

### Multijoueur

```blocks
let giveLives = true

if (info.player2.score() > 9999) {
    if (giveLives) {
        info.player2.changeLifeBy(20)
        giveLives = false
    }
}
```

## Voir aussi #seealso

[définir les vies](/reference/info/set-life),
[vies](/reference/info/life)
