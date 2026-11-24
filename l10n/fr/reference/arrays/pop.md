# pop

Supprimer et retourner le dernier élément d'un tableau.

```sig
["Bonjour"].pop()
```

Le dernier élément dans le tableau est supprimé, de sorte que la taille du tableau soit réduit d'un élément.

Si vous avez un tableau avec quatre nombres, comme 1, 2, 3 et 4, vous supprimez le dernier numéro du tableau en le faisant *sauter* de la fin. Pour faire apparaître le numéro qui a sauté du tableau avec des blocs, faites ceci:

```block
let thoseNumbers = [1, 2, 3, 4];
let lastNumber = thoseNumbers.pop();
```

## Valeur retournée

* Dernier élément dans le tableau.

## Exemple

Nettoyez votre poubelle, mais vérifiez si les ciseaux sont là. Pour ce faire, supprimez les éléments les un après les autres en vérifiant si vous ne tombez pas sur les ciseaux.

```blocks
let trouve = false;
let poubelle = ["trombone", "crayon", "bloc-notes", "colle", "ciseaux", "tournevis"];
while (poubelle.length > 0) {
    if (poubelle.pop() == "ciseaux") {
        trouve = true;
    }
}
```

## Voir aussi

[push](/reference/arrays/push), [shift](/reference/arrays/shift)