# Maths

Utilisation des [nombres](/types/number), des opérateurs de nombre et des fonctions mathématiques.

## Valeurs numériques: 0, 1, 2, 6,7, 10,083...

Juste des nombres par eux-mêmes. Parfois, ils sont appelés *littéraux numériques*.

### Entiers: les nombres entiers

```block
let num = 0;
num = 0;
num = 1;
num = 2;
```

### Flottants: nombres avec une partie fractionnaire #floatingpoints

Les nombres peuvent aussi avoir une partie fractionnaire. Le point décimal se trouve entre les chiffres du nombre. Mais, les nombres à *virgule flottante* ont le point décimal à n'importe quel endroit entre les chiffres, comme: 3.14159 ou 651.75.

```block
let num = 0
num = 6.7
num = 10.083
```

### Opération arithmétique binaire (+,-, \ *,/)

Les opérations de base pour l'arithmétique sont : ajouter, soustraire, multiplier et diviser.

```block
let more = 0+1;
let less = 0-1;
let twice = 1*2;
let divide = 8/4;
```

### Reste de division entière (%)

C'est un opérateur supplémentaire pour la division. Tu peux savoir ce qui reste quand un nombre ne se divise pas exactement par l'autre.

Nous savons que 4/2 = 2, donc 2 divise 4 . Mais, 5/2 = 2 avec un reste de 1. Ainsi 5% 2 = 1, donne le reste de l'opération de division.

```block
let remainder = 7%4;
```

### Exposant (**)

L'opérateur d'exposant multiplie le nombre à gauche par lui-même le nombre de fois du nombre en exposant . C'est-à-dire, 4 ** 2 = 4 \ * 4 et 2 ** 3 = 2 \ * 2 \ * 2. L'aire d'un carré qui a des côtés avec une longueur de `5` est égale à un côté multiplié par un autre. Pour un carré, tous les côtés sont égaux, donc:

```block
let side = 5;
let area = side * side;
```

Mais à l'aide de l'opérateur d'exposant, c'est la même chose que:

```block
let side = 5;
let area = side ** 2;
```

Le volume d'un cube correspond au produit des trois côtés. Les deux volumes sont identiques:

```block
let side = 5;
let volume1 = side * side * side;
let volume2 = side ** 3;
```

## Multiplication et division entières

La multiplication et la division entières traitent les deux nombres utilisés comme des entiers. Si un nombre a une partie fractionnaire, elle est tronquée avant d'être utilisée avec l'autre nombre. Le résultat est toujours un entier lui aussi.

### imul

La multiplication entière des deux nombres `3.9` et `4.2` donne la valeur `12`, car seules les valeurs `3` et `4` des nombres multipliés sont utilisées.

```block
let myInt = Math.imul(3.9, 4.2)
let myNumber = 3.9 * 4.2
```

### idiv

La division entière des deux nombres `7.8` et `2.6` donne la valeur `3`, car seules les valeurs `7` et `2` des nombres sont utilisées.

```block
let myInt = Math.idiv(7.8, 2.6)
let myNumber = 7.8 / 2.6
```

## Racine carrée

La racine carrée d'un nombre est un autre nombre qui, lorsqu'il est multiplié par lui-même, devient le nombre d'origine. Tu sais que `2 * 2` est égal à `4` de sorte que la racine carrée de `4` est `2`. On l'appelle *racine carrée* parce que l'aire d'un *carré* est la longueur de deux côtés égaux multipliés entre eux. La *racine* est la longueur d'un côté.

```block
let side = 5
let square = side * side
let root = Math.sqrt(side)
```

## Valeur absolue

Quand tu veux savoir la valeur d'un nombre sans son *signe* (+/-). La valeur absolue de-5 est 5 et la valeur absolue de 5 est également 5. La valeur absolue est parfois appelée *magnitude*.

```block
let item = Math.abs(-5);
```

## Minimum et maximum de deux valeurs

Tu peux obtenir le plus petit ou le plus grand de deux nombres avec les fonctions [min](/reference/math/min) et [max](/reference/math/max).

* Le minimum de 2 et 9: **Math.min(2, 9)** est égal à 2.
* Le maximum de 3 et 9: **Math.max(3, 9)** est égal à 9.

```block
let minval = Math.min(0, 1);
let maxval = Math.max(8, 2);
```

## Rond

Si un nombre a une partie fractionnaire, tu peux le transformer en la valeur entière la plus proche. C'est ce qu'on appelle *arrondir*. Arrondir le nombre `6.78` donne `7` et arrondir `9.3` donne `9`. Si la partie fractionnaire d'un nombre est supérieure ou égale à `0.5`, le nombre est arrondi à l'entier supérieur. Sinon, il est arrondi à l'entier inférieur.

Les nombres négatifs sont arrondis selon leur valeur absolue (la valeur absolue de `-8` est `8`). Ainsi, `-5.23` est arrondi à `-5` et `-2.68` à `-3`.

```block
let rounded = Math.round(5.5)
```

## Plafond

Pour transformer un nombre en l'entier immédiatement supérieur, prends sa valeur *plafond*. Le plafond de `1.234` est `2`, car c'est l'entier supérieur suivant. Pour le nombre négatif `-3.63`, le plafond est `-3`, car c'est l'entier supérieur suivant.

```block
let nextup = Math.ceil(8.435)
```

## Plancher

Pour transformer un nombre en l'entier immédiatement inférieur, prends sa valeur *plancher*. Le plancher de `8.76` est `8`, car c'est l'entier inférieur suivant. Pour le nombre négatif `6.17`, le plancher est `-7`, car c'est l'entier inférieur suivant.

```block
let nextdown = Math.floor(4.97)
```

## Tronquer

On enlève la partie fractionnaire d'un nombre en le *tronquant*. Si un nombre vaut `54.234`, sa valeur tronquée est `54`. La troncature fonctionne de la même façon pour un nombre négatif : la valeur tronquée de `-34.913` est `-34`.

```block
let nonfraction = Math.trunc(87.23455)
```

## Valeur aléatoire

Créer n'importe quel nombre situé entre une valeur minimum et une valeur maximum. Si tu veux un nombre aléatoire jusqu'à 100, écris : **Math.randomRange (0, 100)**.

```block
let myRandom = Math.randomRange(0, 5);
```

## Voir aussi #seealso

[abs](/reference/math/abs), [min](/reference/math/min), [max](/reference/math/max), [randomRange](/reference/math/random-range)