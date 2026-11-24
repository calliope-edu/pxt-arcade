# index Of

Obtenez l'indice (position) du premier élément dans le tableau qui correspond à l'élément recherché.

```sig
["Bonjour"].IndexOf ("Bonjour")
```

## Paramètres

* **Item**: l'élément à trouver dans le tableau.
* **from**: un [nombre](/types/number) qui est l'indice dans le tableau pour commencer la recherche. Vous l'utilisez si vous voulez que la recherche commence à un endroit la première position.

## Valeur retournée

* un [nombre](/types/number) qui est la position dans le tableau où l'élément est trouvé. Ce numéro est `-1` si un élément correspondant n'est pas présent dans le tableau.

## Exemple

Obtenez l'indice de "Popcorn" dans une liste de friandises.

```blocks
let movieSnacks = ["mints", "cola", "pretzel", "popcorn", "peanuts"];
let popcorn = movieSnacks.indexOf("popcorn");
```