# Constante

Une valeur constante mathématique courante.

```sig
Math._constant(Math.PI)
```

Plusieurs valeurs constantes sont importantes pour les calculs en sciences et en ingénierie. Le bloc ``||math.constant||`` en fournit plusieurs que tu peux utiliser dans tes formules et expressions mathématiques.

## π

La valeur de Pi (π), qui est le rapport entre la circonférence d'un cercle et son diamètre.

```block
Math._constant(Math.PI)
```

### Exemple

Calcule l'aire d'un cercle de rayon `4`.

```block
let circle_area = Math.PI * 4**2
```

## e

Le nombre d'Euler (e), qui est la base du logarithme naturel et de la fonction exponentielle.

```block
Math._constant(Math.E)
```

### Exemple

Trouve la demi-vie, en années, de la désintégration radioactive du carbone 14.

```block
let time = 0
let decay = 0.000121
let carbon14 = 1
while (carbon14 > 0.5) {
    carbon14 = Math.E ** (-1 * decay * time)
    time += 1
}
```

## ln(2)

Logarithme naturel de 2.

```block
Math._constant(Math.LN2)
```

### Exemple

Découvre combien d'années il faut pour doubler un investissement avec des intérêts composés en continu à 5 %.

```block
let years = Math.LN2 / 0.05
```

## ln(10)

Logarithme naturel de 10.

```block
Math._constant(Math.LN10)
```

### Exemple

Combien de jours faut-il pour que les bactéries d'une culture atteignent 10 fois la quantité de départ si leur nombre double chaque jour ?

```block
let days = Math.LN10
```

## log₂(e)

Convertir un logarithme naturel en logarithme de base 2.

```block
Math._constant(Math.LOG2E)
```

La constante log₂(e) est égale à ln(e) / ln(2), soit aussi 1 / ln(2).

## log₁₀(e)

Convertir un logarithme naturel en logarithme de base 10.

```block
Math._constant(Math.LOG10E)
```

La constante log₁₀(e) est égale à 1 / ln(10), soit aussi 1 / ln(10).

## √½

La racine carrée de un demi (1/2).

```block
Math._constant(Math.SQRT1_2)
```

### Exemple

Trouve la longueur des côtés d'un carré dont la diagonale mesure 9.

```block
let side = 9 * Math.SQRT1_2
```

## √2

La racine carrée de 2.

```block
Math._constant(Math.SQRT2)
```

### Exemple

Découvre combien de chemin tu gagnes en traversant un parking carré au coin d'une rue plutôt qu'en suivant le trottoir le long des côtés. Chaque côté du parking mesure 50 mètres.

```block
let walk_diff = 2 * 50 - 50 * Math.SQRT2
```
