# percent Chance

Retourne une valeur booléenne qui est vraie un pourcentage donné du temps.

```sig
Math.percentChance(0)
```

## Paramètres

* **percentage** : un [nombre](/types/number) qui est le pourcentage de chance que la valeur retournée soit `true`. Le pourcentage est une valeur entre `0` et `100`.

## Valeur retournée

* un [booléen](/types/boolean) qui est `true` selon le **percentage** de chance donné.

## Exemple #example

Simule le tirage du nombre `1` en lançant un dé. Utilise un pourcentage de chance pour voir
si ton nombre est tiré.

```blocks
let isOne = Math.percentChance(100 / 6)
```

## Voir aussi

[nombre aléatoire dans une plage](/reference/math/random-range)
