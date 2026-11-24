# randomRange

Retourne une valeur Pseudo-aléatoire dans une plage de nombres.

```sig
Math.randomRange(0, 10)
```

## ~ indice

**Deprecated**

This API has been deprecated! Use [randint](/reference/math/randint) instead.

## ~

Returns a pseudo-random number in the range `[min, max];` that is, from `0` (inclusive) up to including `1` (inclusive), which you can then scale to your desired range.

## Paramètres

* **min**: le plus petit nombre pseudo-aléatoire à retourner.
* **max**: le plus grand nombre pseudo-aléatoire à retourner.

## Valeur retournée

* a pseudo-random [number](types/number) between `min` (inclusive) and `max` (inclusive).

## Exemple

Générer un nombre aléatoire entre `0` et `100`.

```blocks
let centoRandom = Math.randomRange(0, 100);
```

## Voir Aussi

[random](/reference/math/random)