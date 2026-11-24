# Trigonométrie

Fonctions pour trouver les valeurs d'angles, les côtés des triangles, et les positions sur un cercle. Ces fonctions sont également utilisées pour calculer des informations sur des signaux.

## Quel est votre mesure d'angle? Degrés ou radians

Une boussole montre où est le nord et sa direction est de 0 degrés (qui est également de 360 degrés). Si vous marchez directement à l'est, alors votre direction sera de 90 degrés sur la boussole. C'est aussi la mesure de l'angle entre le chemin de votre direction et le chemin vers le Nord. Si vous vous dirigez vers le Nord et tournez vers la droite (dans le sens des aiguilles d'une montre) dans un endroit, vous verrez le changement de boussole de 0 degrés, aller jusqu'à 359 degrés, et revenir à 0 degrés. Donc, une rotation complète est de 360 degrés.

Une autre façon de mesurer les angles est d'utiliser des nombres qui sont spécifiques à la taille des cercles. Un cercle a deux grandeurs importantes qui le caractérisent. Ils sont appelés le *rayon* et *pi*. Le rayon est la distance entre le centre du cercle et son bord extérieur. Il y a longtemps, les gens ont appris que peu importe la taille d'un cercle, si vous divisez la longueur de son bord extérieur par la longueur de son rayon, vous obtenez toujours le même nombre. Ils ont décidé d'appeler ce nombre ***pi***. C'est **2** fois ***pi*** en fait, parce qu'ils ont utilisé toute la longueur de cercle (le diamètre) qui mesure deux fois la longueurs du rayon.

Maintenant, nous n'avons plus à nous soucier du rayon, nous pouvons simplement utiliser une partie de **2_pi_** pour dire où n'importe quelle point sur le bord d'un cercle est situé. Toute partie de **2_pi_** est appelé *Radian*s. Nous pouvons utiliser les radians pour mesurer un angle et sa direction, tout comme avec la boussole. Sauf que maintenant, nous tournons **2_pi_** radians autour du cercle au lieu de 360 degrés.

### ~hint

#### Quel est la valeur de *pi*?

Il s'avère, ***pi*** est un nombre *irrationnel* . Cela signifie qu'il a une partie fractionnaire qui utilise plus de chiffres que nous pouvons afficher. Il est donc préférable d'utiliser une constante dans le code pour la valeur de ***pi***. Dans le cas où vous êtes curieux, les 32 premiers chiffres de ***pi*** sont: **3.1415926535897932384626433832795**.

Heureusement, vous pouvez utiliser la constante **Math. pi** pour ne pas avoir besoin de vous en souvenir.

### ~

Dans le code, vous utilisez les *radians* pour les mesures angulaires. Toutes les fonctions trigonométriques utilisent des radians.

### ~hint

#### Transformation des degrés en radians

C'est quoi, 60 degrés en radians? Eh bien, un radian est *(2 \* Math.pi/360)* radians. Ou, pour simplifier, *(Math. PI/180)* radians. Ainsi, 60 degrés est *(60 \* Math.PI/180)* radians.

### ~

## Sinus

Obtenez la longueur du côté vertical (vers le haut ou vers le bas) d'un triangle rectangle. Mais, la valeur du *sinus* d'un angle est la longueur du côté vertical divisé par la longueur du côté le plus long, son *hypoténuse*.

Quel est le sinus de 60 degrés? **Math. Sin (60 \* Math.PI/180)** est égal à 0.5. Le côté vertical d'un triangle droit est une moitié de la longueur du côté le plus long lorsque l'angle opposé est de 60 degrés.

```typescript-ignore
let ySide = Math.sin(60 * Math.PI / 180)
```

## Cosinus

Obtenez la longueur du côté horizontal (gauche ou droit) d'un triangle rectangle. Mais, la valeur *sinus* est la longueur du côté horizontal divisé par la longueur du côté le plus long, son *hypoténuse*.

Quel est le cosinus de 45 degrés? **Math.cos (45 \* Math.PI/180)** est égal à 0,707. La longueur du côté horizontal d'un triangle droit est d'environ 70 pour cent de la longueur du côté le plus long lorsque l'angle entre eux est de 45 degrés.

```typescript-ignore
let xSide = Math.cos(45 * Math.PI / 180)
```

## Tangente

La tangente d'un angle est son sinus **divisé** par son cosinus. Pour trouver la tangente d'un angle de 30 degrés :

```typescript-ignore
let tangent = Math.tan(30 * Math.PI / 180)
```

C'est la même valeur que :

```typescript-ignore
let tangent = Math.sin(30 * Math.PI / 180) / Math.sin(30 * Math.PI / 180)
```

## Fonctions arc

Les fonctions arc fonctionnent à l'inverse des autres fonctions trigonométriques. Au lieu de retourner la longueur d'un côté à partir d'un angle, les fonctions arc te donnent la valeur d'un angle à partir de la longueur d'un côté d'un triangle rectangle.

### ~ hint

#### Valeurs du cercle unité

Les fonctions arc travaillent sur des longueurs des côtés vertical et horizontal d'un triangle rectangle qui sont inférieures ou égales à `1`. La valeur `1` représente le rayon d'un cercle qui a toujours une longueur de `1`, appelé *cercle unité*. Cela signifie que, dans un triangle rectangle dont le rayon (l'hypoténuse) vaut `1`, les côtés vertical et horizontal auront toujours des valeurs entre `0` et `1`. Ces valeurs sont nécessaires pour les fonctions **Math.asin()** et **Math.acos()**.

### ~

### asin

Pour obtenir un angle du triangle rectangle à partir de la longueur du côté vertical, utilise la fonction **Math.asin()**. Une valeur de `30` degrés est retournée pour une longueur de `0.5` du côté vertical.

```typescript-ignore
let arcSine = Math.asin(0.5)* 180 / Math.PI
```

### acos

Pour obtenir un angle du triangle rectangle à partir de la longueur du côté horizontal, utilise la fonction **Math.acos()**. Une valeur de `60` degrés est retournée pour une longueur de `0.5` du côté horizontal.

```typescript-ignore
let arcCosine = Math.acos(0.5)* 180 / Math.PI
```

### atan

L'arc tangente retourne un angle pour la valeur du côté vertical divisée par la valeur du côté horizontal. On sait qu'un triangle dont les côtés vertical et horizontal sont égaux a un angle de 45 degrés. Donc, si on donne la même valeur aux côtés `x` et `y` du triangle, **Math.atan()** devrait nous donner une valeur en radians qui correspond à 45 degrés.

```typescript-ignore
let x = 1
let y = 1
let arcTangent = Math.atan(y / x) * 180 / Math.PI
```

### atan2

Math.atan2() ressemble beaucoup à Math.atan(), sauf que les valeurs des côtés vertical et horizontal sont données séparément au lieu d'être déjà divisées. Pour des côtés égaux, la valeur en radians correspondant à 45 degrés s'obtient en utilisant les mêmes valeurs `x` et `y`.

```typescript-ignore
let x = 1
let y = 1
let arcTangent2 = Math.atan2(y, x) * 180 / Math.PI
```
