# set

Stockez une valeur dans un tableau à un index.

```block
[""][0] = "objet";
```

Lorsqu'un élément existe dans le tableau à l'index que vous avez choisi, il est remplacé par une nouvelle valeur. If you use an index that is past the length of the array, the array is expanded to put the value at the location you want. Tous les emplacements entre le dernier élément précédent et le nouveau dernier élément ont des valeurs de `0`.

## Paramètres

* **index**: un [nombre](/types/number) qui est l'emplacement dans le tableau pour définir une valeur à.

## Exemple

Changez d'avis et faites une de vos couleurs préférés vert au lieu de brun.

```blocks
let favColors = ["orange", "blue", "red", "brown", "yellow"];
favColors[3] = "green";
```

## Voir aussi

[insert-at](/reference/arrays/insert-at)