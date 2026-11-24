# random int

Retourne une valeur Pseudo-aléatoire dans une plage de nombres.

```sig
randint(0, 10)
```

Retourne un nombre pseudo-aléatoire dans la plage `[min, max];` c'est-à-dire de `min` (inclus) jusqu'à `max` (inclus).

### ~ hint

#### Qu'est-ce que le pseudo-aléatoire ?

Les nombres aléatoires générés sur un ordinateur sont souvent appelés _pseudo-aléatoires_. C'est parce que la méthode pour créer le nombre se base sur une valeur de départ obtenue par l'ordinateur lui-même. La formule du nombre aléatoire peut appliquer un certain nombre d'opérations mathématiques à une valeur issue d'un minuteur ou d'une autre entrée. Le nombre « aléatoire » obtenu n'est pas considéré comme entièrement aléatoire, car il part d'une valeur initiale et d'une suite d'opérations reproductible. C'est pourquoi on l'appelle un nombre pseudo-aléatoire.

### ~

## Paramètres

* **min** : le plus petit nombre pseudo-aléatoire possible à retourner.
* **max** : le plus grand nombre pseudo-aléatoire possible à retourner.

## Valeur retournée

* un [nombre](types/number) pseudo-aléatoire entre `min` (inclus) et `max` (inclus).

## Exemple

Générer un nombre aléatoire entre `0` et `100`.

```blocks
let centoRandom = randint(0, 100);
```

## Voir Aussi

[random](/reference/math/random)
