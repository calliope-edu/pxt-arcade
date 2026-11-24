# modifier le score de

Augmente ou diminue le score du joueur de cette valeur.

```sig
info.changeScoreBy(0)
```

Le score total augmente de la valeur de changement lorsqu'elle est supérieure à zéro (positive). Si le nombre de changement est inférieur à zéro (négatif), le score total est réduit de la valeur de ce nombre.

## Paramètres

* **value** : un [nombre](/types/number) qui est la valeur dont modifier le score actuel.

## Exemple #example

Donne au joueur un bonus de `1000` points s'il atteint `9` vies.

### Un joueur

```blocks
let giveBonus = true

if (info.life() > 8) {
    if (giveBonus) {
        info.changeScoreBy(1000)
        giveBonus = false
    }
}
```

### Multijoueur

```blocks
let giveBonus = true

if (info.player2.life() > 8) {
    if (giveBonus) {
        info.player2.changeScoreBy(1000)
        giveBonus = false
    }
}
```

## Voir aussi #seealso

[définir le score](/reference/info/set-score),
[score](/reference/info/score),
[quand le score atteint](/reference/info/on-score)
