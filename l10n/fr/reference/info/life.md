# vies

Obtiens le nombre de vies du joueur.

```sig
info.life()
```

Ton programme possède un compteur de vies que tu peux définir pour enregistrer le nombre de vies restantes d'un joueur dans ton jeu.

## Retourne

* un [nombre](/types/number) qui est le nombre actuel de vies.

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

[définir les vies](/reference/info/set-life),
[modifier les vies de](/reference/info/change-life-by)
