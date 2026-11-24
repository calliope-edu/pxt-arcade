# compare

Voir comment deux chaînes de texte se comparent en se basant sur les caractères qui sont en premier.

```sig
"".compare("");
```

Deux chaînes sont comparées en fonction de l'ordre de leurs caractères. Si la chaîne `a` a la valeur `"111"` , elle sera inférieure à une chaîne avec `"512"`. A string with `"Everything"` is less than `"Nothing"` because `'N'` comes after `'E'` in the alphabet.

La chaîne `"abcdefg"` est supérieure à `"abcdefa"`. Elles sont presque les mêmes, mais la dernière lettre de la deuxième chaîne est inférieure à la dernière lettre de la première. Cela rend la deuxième chaîne comparée moins grande que la première. Dans les blocs, la comparaison de ces chaînes ressemble à ceci:

```block
let iamGreater = false;
if ("abcdefg".compare("abcdefa") > 0) {
    iamGreater = true;
}
```

## Paramètres

* **that**: la [chaîne](/types/string) qui se compare à la chaîne courante.

## Valeur retournée

* un [nombre](/types/number) qui est-1, 0 ou 1. Ces chiffres signifient que cette chaîne est:

> **-1**: cette chaîne est inférieure à la chaîne comparée.   
> **0**: cette chaîne est égale à la chaîne comparée.   
> **1**: cette chaîne est supérieure à la chaîne comparée.

## Exemples #exsection

### Quel oiseau est le même qu'un canard #ex1

Voir quel oiseau est le même qu'un `«canard»`.

```blocks
let match = false;
let bird = "duck";
if (bird.compare("crow") == 0) {
    match = true;
} else if (bird.compare("goose") == 0) {
    match = true;
} else if (bird.compare("duck") == 0) {
    match = true;
}
```

### Comparez les oiseaux #ex2

Voyez comment les autres oiseaux se comparent à un `«canard»`.

```blocks
let birds = ["crow", "DUCK", "goose", "Duck", "eagle", "osprey"];
let lesserBirds = 0;
let greaterBirds = 0;
let ducks = 0;

for (let bird of birds) {
    let result = bird.compare("duck");
    if (result < 0) {
        lesserBirds++;
    } else if (result > 0) {
        greaterBirds++;
    } else {
        ducks++;
    }
}
```