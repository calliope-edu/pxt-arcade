# remove At

Supprimer et renvoyer un élément d'un tableau à une certaine position.

```sig
[""].removeAt(0)
```

La taille du tableau est réduite de 1. L'élément est supprimé du tableau à la position souhaitée. Tous les autres éléments après lui seront déplacés (décalés) d'un rang en arrière. Ainsi, un tableau qui contient les nombres `4, 5, 9, 3, 2` deviendra `4, 5, 3, 2` si `9` est supprimé du tableau à l'index `2`. Ça ressemblera à ceci avec des blocs:

```block
let myNumbers = [4, 5, 9, 3, 2]
let item = myNumbers.removeAt(2)
```

## Paramètres

* **index**: la position dans le tableau de l'élément à supprimer.

## Valeur retournée

* l'élément du tableau situé à la position donnée en paramètre.

## Exemple

Enlève le niveau de radiation le plus dangereux de la liste.

```block
let radLevels = ["alpha", "beta", "gamma"]
let level = radLevels.indexOf("gamma")
let unzapped = radLevels.removeAt(level)
```

## Voir aussi

[supprimer à (sans valeur retournée)](/reference/arrays/remove-at-statement), [insérer à](/reference/arrays/insert-at)