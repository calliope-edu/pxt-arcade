# Random

Retourne un nombre Pseudo-aléatoire à virgule flottante dans la plage `[0,1[;`. La valeur est situé dans une plage partant de `0` (inclus) et allant jusqu'à `1` (exclusif). Vous pouvez ensuite redimensionner la valeur à votre plage. L'implémentation sélectionne la graine initiale dans l'algorithme de génération de nombres aléatoires; il ne peut pas être choisi ou réinitialisé par l'utilisateur.

```sig
Math.random()
```

## Valeur retournée

* un [nombre](types/number) à virgule flottante, pseudo-aléatoire compris entre `0` (inclus) et `1` (exclusif).

## Voir aussi

[`||math:pick random||`](/reference/math/random-range)