# supprimer à (sans valeur retournée)

Supprime un élément d'un tableau à une position donnée.

```sig
[""]._removeAtStatement(0)
```

La taille du tableau est réduite de 1. L'élément est supprimé du tableau à la position souhaitée. Tous les autres éléments après lui seront déplacés (décalés) d'un rang en arrière. Ainsi, un tableau qui contient les nombres
`4, 5, 9, 3, 2` deviendra `4, 5, 3, 2` si `9` est supprimé du tableau à l'index `2`. Ça ressemblera à ceci avec des blocs:

```block
let myNumbers = [4, 5, 9, 3, 2]
myNumbers.removeAt(2)
```

## Paramètres

- **index** : la position dans le tableau de l'élément à supprimer.

## Exemple

Supprime le plus grand animal de la liste des primates.

```block
let primates = ["chimpanzee", "baboon", "gorilla", "macaque"]
let largest = primates.indexOf("gorilla")
primates.removeAt(largest)
```

## Voir Aussi

[supprimer à](/reference/arrays/remove-at), [insérer à](/reference/arrays/insert-at)