# Nombres

Une valeur numérique.

### @parent blocks/language

Un *Nombre* est une valeur numérique entière ou rationnelle. Les nombres sont stockés sur plusieurs octets au format _virgule flottante_. Ainsi, les nombres avec une partie fractionnaire peuvent être calculés avec précision.

Quelques exemples de différents types de valeurs numériques :

| Nombre | Type de valeur |
| - | - |
| 67  | entier positif |
| -345 | entier négatif |
| 0 | zéro |
| 19.43 | virgule flottante
| -45.245 | virgule flottante négative |
| 0.4567 | virgule flottante fractionnaire |
| 8.23e+21 | virgule flottante en notation exponentielle |

### Déclarer une variable numérique

Tu peux [affecter](/blocks/variables/assign) un nombre à une variable :

#### #declareexample

```block
let num = 42
```

### Opérateurs arithmétiques

Les opérateurs arithmétiques suivants fonctionnent sur les nombres et renvoient un [Nombre](/types/number) :

* addition : `1 + 3`
* soustraction : `1 - 3 `
* multiplication : `3 * 2`
* division entière : `7 / 3`
* le modulo est disponible via la [bibliothèque mathématique](/blocks/math)

### Opérateurs relationnels

Les opérateurs relationnels suivants fonctionnent sur les nombres et renvoient un [booléen](/blocks/logic/boolean) :

* égalité : `(3 + 1) = 4`
* inégalité : `3 != 4`
* inférieur ou égal à : `3 <= 4`
* inférieur à : `3 < 4`
* supérieur ou égal à : `4 >= 3`
* supérieur à : `4 > 3`

## #print

### Fonctions qui renvoient un nombre

Certaines fonctions renvoient un nombre, que tu peux stocker dans une variable. 

### #functionreturnexample

```block
let abs = Math.abs(-42)
```

### Fonctions mathématiques

La [bibliothèque mathématique](/blocks/math) contient des fonctions mathématiques. Par exemple, la fonction `min` renvoie la plus petite des deux valeurs `x` et `y` passées en paramètres :

```block
let lowest = Math.min(-42, 1000)
```

### Voir aussi

[math](/blocks/math), [var](/blocks/variables/var), [Booléen](/blocks/logic/boolean)
