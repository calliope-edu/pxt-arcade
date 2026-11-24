# shift

Supprimer et retourner le premier élément d'un tableau.

```sig
[""].shift()
```

Le premier élément du tableau est supprimé, de sorte que le tableau ait sa taille qui diminue de 1.

Si vous avez un tableau avec quatre nombres, comme 1, 2, 3 et 4, vous supprimez le premier nombre du tableau en le faisant *glisser* depuis le début. Pour faire apparaître le numéro qui a glissé du tableau avec des blocs, faites ceci:

```block
let thoseNumbers = [1, 2, 3, 4];
let firstNumber = thoseNumbers.shift();
```

## Valeur retournée

* premier élément du tableau.

## Exemple

Découvrez combien de nombres impairs sont contenus dans un tableau en les faisant glisser les éléments les un après les autres.

```blocks
let odds = 0;
let ints = [45, 78, 98, 3, 5, 6, 12, 643, 0, 34, 4];
while (ints.length > 0) {
    if ((ints.shift() % 2) > 0) {
        odds++;
    }
}
```

## Voir aussi

[unshift](/reference/arrays/unshift), [pop](/reference/arrays/pop)