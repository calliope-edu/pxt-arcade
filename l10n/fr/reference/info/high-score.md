# meilleur score

Obtiens le meilleur score enregistré pour le jeu.

```sig
info.highScore()
```

Le meilleur score enregistré par ton programme de jeu est mémorisé. Tu peux donc savoir quel a été le meilleur score du joueur pour ce jeu.

## Retourne

* un [nombre](/types/number) qui est le meilleur score du jeu.

## Exemple #example

Ajoute `9` au nombre de vies si le joueur a obtenu un meilleur score de `100000` points.

```blocks
let lifeBonus = true

if (info.highScore() >= 100000) {
    if (lifeBonus) {
        info.changeLifeBy(9)
        lifeBonus = false
    }
}
```

## Voir aussi #seealso

[définir le score](/reference/info/set-score),
[modifier le score de](/reference/info/change-score-by),
[score](/reference/info/score)
