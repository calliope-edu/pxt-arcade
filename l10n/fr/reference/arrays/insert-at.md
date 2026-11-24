# insert At

Insérez un élément dans un tableau à une position donnée.

```sig
[0].insertAt(0, 0)
```

La taille du tableau augmente de 1. L'élément est ajouté au tableau à la position donnée en paramètre. S'il y a déjà un élément à cette position, alors l'élément actuel ainsi que tous ses successeurs sont déplacés (décalés) à la position suivante. Ainsi, le tableau `4, 5, 9, 3` deviendra `4, 5, 9, 2, 3` si l'élément `2` est inséré à la position 3. Ça ressemblera à ceci avec des blocs:

```block
let myNumbers = [4, 5, 9, 3];
myNumbers.insertAt(3, 2);
```

## Paramètres

* **index**: un [nombre](/types/number) qu'il faut insérer dans le tableau.
* **value**: une valeur à insérer dans le tableau à la position **index**. La valeur a le même [type](/types) que celui avec lequel le tableau a été créé : [nombre](/types/number), [booléen](/types/boolean), [chaîne](/types/string), etc.

## Exemple

Créer un tableau ordonné par ordre croisant (du plus petit au plus grand) à partir d'un tableau dans le désordre.

```blocks
let removed = 0
let jumbled = [4, 5, 2, 1, 6, 9, 0, 3, 8, 7]
let ordered = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let item of jumbled) {
    ordered.insertAt(item, item)
    removed = ordered.removeAt(item + 1)
}
```

## Voir aussi

[supprimer à](/reference/arrays/remove-at)