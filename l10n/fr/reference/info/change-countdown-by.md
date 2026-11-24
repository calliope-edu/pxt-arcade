# modifier le compte à rebours de

Augmente ou diminue le temps actuel du compte à rebours du jeu de cette valeur.

```sig
info.changeCountdownBy(0)
```

Le temps actuel du compte à rebours du jeu augmente de la valeur de changement lorsqu'elle est supérieure à zéro (positive). Si le nombre de changement est inférieur à zéro (négatif), le compte à rebours du jeu est réduit de la valeur de ce nombre.

## Paramètres

* **value** : un [nombre](/types/number) de secondes dont modifier le compte à rebours du jeu.

## Exemple #example

Réduis le temps du compte à rebours du jeu de `3` secondes.

```blocks
info.changeCountdown(-3)
```

## Voir aussi #seealso

[compte à rebours](/reference/info/score),
[à la fin du compte à rebours](/reference/info/on-countdown-end)
