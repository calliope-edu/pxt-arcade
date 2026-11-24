# Booléens

Quelque chose qui est vrai ou faux.

Un booléen peut prendre deux valeurs: `true` ou `false`. Les opérateurs booléens (logiques) (*and*, *or*, *not*) prennent des booléens en entrée et retourne une nouvelle valeur booléenne. Les opérateurs de comparaison sur d'autres types ([Number](/types/number)s, [String](/types/string)s) retourne aussi des valeurs booléennes.

Ces blocs représentent les valeurs booléennes `true` et `false`, qui peuvent se placer dans n'importe quel endroit où une valeur booléenne est attendue:

```blocks
let on = true;
let off = false;
off = false;
```

Vous pouvez définir et comparer d'autres valeurs booléennes:

```blocks
let on = true;
let off = !on;
let switcher = on;
let lights = off;

if (switcher) {
    lights = on;
} else {
    lights = off;
}
```

Comparez d'autres types:

```blocks
let cool = 50;
let temp = 65;
let warming = temp > cool;

if (warming) {
    let message = "It's warming up."
}
```

### Voir aussi

[booléen(Blocs)](/blocks/logic/boolean)