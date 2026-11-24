# définir le score

Règle le score d'un joueur sur cette valeur.

```sig
info.setScore(0)
```

Ton programme possède un compteur de score que tu peux définir pour enregistrer le score actuel d'un joueur.

## Paramètres

* **score** : un [nombre](/types/number) auquel régler le score actuel.

## Exemple #example

Donne `110` points au joueur avant de commencer le jeu.

### Un joueur

```blocks
info.setScore(110)
```

### Multijoueur

```blocks
info.player2.setScore(110)
```

## Voir aussi #seealso

[modifier le score de](/reference/info/change-score-by),
[score](/reference/info/score),
[quand le score atteint](/reference/info/on-score)
