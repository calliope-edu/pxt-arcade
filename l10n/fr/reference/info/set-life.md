# définir les vies

Règle le nombre de vies du joueur sur cette valeur.

```sig
info.setLife(0)
```

Ton programme possède un compteur de vies que tu peux définir pour enregistrer le nombre de vies restantes d'un joueur dans ton jeu.

## Paramètres

* **score** : un [nombre](/types/number) auquel régler le nombre de vies.

## Exemple #example

Règle le nombre de vies du joueur sur `9` avant de commencer le jeu.

### Un joueur

```blocks
info.setLife(9)
```

### Multijoueur

```blocks
info.player2.setLife(9)
```

## Voir aussi #seealso

[modifier les vies de](/reference/info/change-life-by)
