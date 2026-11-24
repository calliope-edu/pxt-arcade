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

## Opération arithmétique binaire (+,-, \ *,/)

Les opérations de base pour l'arithmétique sont : ajouter, soustraire, multiplier et diviser.

```block
let more = 0+1;
let less = 0-1;
let twice = 1*2;
let divide = 8/4;
```

### Reste de division entière (%)

Il s'agit d'un opérateur supplémentaire pour la Division. Vous pouvez connaitre le reste de la division si un nombre n'est pas divisible par un autre nombre.

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

## Racine carrée

La racine carrée d'un nombre est un autre nombre qui, lorsqu'il est multiplié par lui-même, devient le nombre d'origine. Vous savez que `2 * 2` est égal à `4` de sorte que la racine carrée de `4` est `2`. On l'appelle *racine carrée* parce que l'aire d'un *carré* est la longueur de deux côtés égaux multipliés entre eux. La *racine* est la longueur d'un côté.

```block
let side = 5
let square = side * side
let root = Math.sqrt(side)
```

## Valeur absolue

Lorsque vous voulez savoir la valeur d'un nombre sans son *signe* (+/-). La valeur absolue de-5 est 5 et la valeur absolue de 5 est également 5. La valeur absolue est parfois appelée *magnitude*.

```block
let item = Math.abs(-5);
```

## Minimum et maximum de deux valeurs

Vous pouvez obtenir le plus petit ou le plus grand de deux nombres avec les fonctions min() et max().

* Le minimum de 2 et 9: **Math.min(2, 9)** est égal à 2.
* Le maximum de 3 et 9: **Math.max(3, 9)** est égal à 9.

```block
let minval = Math.min(0, 1);
let maxval = Math.max(8, 2);
```

## Arrondir

Si un nombre a une partie fractionnaire, tu peux le transformer en la valeur entière la plus proche. C'est ce qu'on appelle *arrondir*. Arrondir le nombre `6.78` donne `7` et arrondir `9.3` donne `9`. Si la partie fractionnaire d'un nombre est supérieure ou égale à `0.5`, le nombre est arrondi à l'entier supérieur suivant. Sinon, il est arrondi à l'entier inférieur suivant.

Les nombres négatifs sont arrondis selon leur valeur absolue (la valeur absolue de `-8` est `8`). Ainsi, `-5.23` est arrondi à `-5` et `-2.68` à `-3`.

```block
let rounded = Math.round(5.5)
```

## Plafond

Pour transformer un nombre en l'entier supérieur suivant, prends sa valeur *plafond*. Le plafond de `1.234` est `2`, car c'est l'entier supérieur suivant. Pour le nombre négatif `-3.63`, le plafond est `-3`, car c'est l'entier supérieur suivant.

```block
let nextup = Math.ceil(8.435)
```

## Plancher

Pour transformer un nombre en l'entier inférieur suivant, prends sa valeur *plancher*. Le plancher de `8.76` est `8`, car c'est l'entier inférieur suivant. Pour le nombre négatif `6.17`, le plancher est `-7`, car c'est l'entier inférieur suivant.

```block
let nextdown = Math.floor(4.97)
```

## Tronquer

On supprime la partie fractionnaire d'un nombre en le *tronquant*. Si un nombre vaut `54.234`, sa valeur tronquée est `54`. La troncature fonctionne de la même façon pour un nombre négatif : la valeur tronquée de `-34.913` est `-34`.

```block
let nonfraction = Math.trunc(87.23455)
```

## Valeur aléatoire

Créer n'importe quel nombre situé entre une valeur minimum et une valeur maximum. Si vous voulez un nombre aléatoire jusqu'à 100, dites: **Math.randomRange (0, 100)**.

```block
let myRandom = Math.randomRange(0, 5);
```

## Trigonométrie

Des fonctions pour calculer des angles, des côtés de triangles et des positions sur un cercle. Ces fonctions servent aussi à créer des signaux d'onde.

### Quel est votre mesure d'angle? Degrés ou radians

Une boussole montre où est le nord et sa direction est de 0 degrés (qui est également de 360 degrés). Si vous marchez directement à l'est, alors votre direction sera de 90 degrés sur la boussole. C'est aussi la mesure de l'angle entre le chemin de votre direction et le chemin vers le Nord. Si vous vous dirigez vers le Nord et tournez vers la droite (dans le sens des aiguilles d'une montre) dans un endroit, vous verrez le changement de boussole de 0 degrés, aller jusqu'à 359 degrés, et revenir à 0 degrés. Donc, une rotation complète est de 360 degrés.

Une autre façon de mesurer les angles est d'utiliser des nombres qui sont spécifiques à la taille des cercles. Un cercle a deux grandeurs importantes qui le caractérisent. Ils sont appelés le *rayon* et *pi*. Le rayon est la distance entre le centre du cercle et son bord extérieur. Il y a longtemps, les gens ont appris que peu importe la taille d'un cercle, si vous divisez la longueur de son bord extérieur par la longueur de son rayon, vous obtenez toujours le même nombre. Ils ont décidé d'appeler ce nombre ***pi***. C'est **2** fois ***pi*** en fait, parce qu'ils ont utilisé toute la longueur de cercle (le diamètre) qui mesure deux fois la longueurs du rayon.

Maintenant, nous n'avons plus à nous soucier du rayon, nous pouvons simplement utiliser une partie de **2_pi_** pour dire où n'importe quelle point sur le bord d'un cercle est situé. Toute partie de **2_pi_** est appelé *Radian*s. Nous pouvons utiliser les radians pour mesurer un angle et sa direction, tout comme avec la boussole. Sauf que maintenant, nous tournons **2_pi_** radians autour du cercle au lieu de 360 degrés.

### ~indice

**Quel est la valeur de *pi*?**

Il s'avère, ***pi*** est un nombre *irrationnel* . Cela signifie qu'il a une partie fractionnaire qui utilise plus de chiffres que nous pouvons afficher. Il est donc préférable d'utiliser une constante dans le code pour la valeur de ***pi***. Dans le cas où vous êtes curieux, les 32 premiers chiffres de ***pi*** sont: **3.1415926535897932384626433832795**.

Heureusement, vous pouvez utiliser la constante **Math. pi** pour ne pas avoir besoin de vous en souvenir.

### ~

Dans le code, vous utilisez les *radians* pour les mesures angulaires. Toutes les fonctions trigonométriques utilisent des radians.

### ~indice

**Transformation des degrés en radians**

C'est quoi, 60 degrés en radians? Eh bien, un degré vaut *(2 \* Math.PI / 360)* radians. Ou, pour simplifier, *(Math. PI/180)* radians. Ainsi, 60 degrés est *(60 \* Math.PI/180)* radians.

### ~

### Sinus

Obtenez la longueur du côté vertical (vers le haut ou vers le bas) d'un triangle rectangle. Mais, la valeur du *sinus* d'un angle est la longueur du côté vertical divisé par la longueur du côté le plus long, son *hypoténuse*.

Quel est le sinus de 60 degrés? **Math. Sin (60 \* Math.PI/180)** est égal à 0.5. Le côté vertical d'un triangle droit est une moitié de la longueur du côté le plus long lorsque l'angle opposé est de 60 degrés.

```typescript-ignore
let ySide = Math.sin(60 * Math.PI / 180)
```

### Cosinus

Obtenez la longueur du côté horizontal (gauche ou droit) d'un triangle rectangle. Mais, la valeur *sinus* est la longueur du côté horizontal divisé par la longueur du côté le plus long, son *hypoténuse*.

Quel est le cosinus de 45 degrés? **Math.cos (45 \* Math.PI/180)** est égal à 0,707. La longueur du côté horizontal d'un triangle droit est d'environ 70 pour cent de la longueur du côté le plus long lorsque l'angle entre eux est de 45 degrés.

```typescript-ignore
let xSide = Math.cos(45 * Math.PI / 180)
```

## Voir aussi

[randomRange](/reference/math/random-range)