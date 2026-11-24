# includes

Détermine si une chaîne contient les caractères d'une chaîne spécifiée.

```sig
"hello world".include("world")
```

## Paramètres

* **searchValue** : l'élément à trouver quelque part dans le tableau.
* **start** : un [nombre](/types/number) qui est la position dans la chaîne où commencer la recherche. Vous l'utilisez si vous voulez que la recherche commence à un endroit la première position.

## Valeur retournée

* un [nombre](/types/number) qui est la position dans la chaîne où l'élément est trouvé. Ce nombre vaut `-1` si aucun élément correspondant n'est trouvé dans le tableau.

## Exemple

Détermine si `popcorn` est dans la liste des friandises.

```blocks
let movieSnacks = "mints cola pretzel popcorn peanuts";
let popcorn = movieSnacks.includes("popcorn");
```