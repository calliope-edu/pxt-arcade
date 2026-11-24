# score

Obtiens le score actuel du joueur.

```sig
info.score()
```

Ton programme possède un compteur de score que tu peux définir pour enregistrer le score actuel d'un joueur.

## Retourne

* un [nombre](/types/number) qui est le score actuel du joueur.

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

[définir le score](/reference/info/set-score),
[modifier le score de](/reference/info/change-score-by),
[quand le score atteint](/reference/info/on-score)
