# get

Obtenez la valeur situé à un indice particulier dans le tableau.

```block
let item = [""][0]
```

## Paramètres

* **index**: un [nombre](/types/number) qui est l'emplacement (l'indice) dans le tableau de la valeur que l'on souhaite récupérer.

## Valeur retournée

* la valeur du tableau qui se trouve à l'indice passé en paramètre. La valeur a le [type](/types) qui est celui des éléments du tableau.

### ~hint

**Hors limites !**

Si vous essayez d'obtenir une valeur dont l'indice est supérieur à la longueur actuelle du tableau, la valeur retournée est le [nombre](/types/number) `0`.

### ~

## Exemple

```blocks
let directions = ["North", "South", "East", "West"];
let path = "Turn to the " + directions[3];
```

## Voir aussi

[index of](/reference/arrays/index-of)