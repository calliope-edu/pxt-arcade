# map

Convertit une valeur d'une plage de nombres en une valeur d'une autre plage de nombres.

```sig
Math.map(0, 0, 0, 0, 0)
```

Une *correspondance* (map) est la conversion d'une étendue de nombres en une autre. Si un chien peut vivre jusqu'à 16 ans et une personne jusqu'à 87 ans, comment faire pour qu'une durée de vie de 16 ans ressemble à une durée de vie de 87 ans ? Tu dis qu'une année de chien équivaut à un certain nombre d'années humaines. C'est une *mise en correspondance* des années de chien avec les années humaines.

Fahrenheit et Celsius sont deux façons différentes de mesurer la température. Celsius n'utilise pas le même nombre de degrés que Fahrenheit. Il y a donc plus d'énergie dans un degré Celsius. Si tu veux convertir une température en Fahrenheit (quelque part entre le gel et l'ébullition, par exemple) en Celsius, tu peux utiliser `Math.map(50, 32, 212, 0, 100)`. La correspondance transforme `50` degrés Fahrenheit en `10` degrés Celsius.

## Paramètres

* **value** : un [nombre](/types/number) à convertir d'une plage à une autre.
* **fromLow** : le [nombre](/types/number) bas de la plage *de départ*.
* **fromHigh** : le [nombre](/types/number) haut de la plage *de départ*
* **toLow** : le [nombre](/types/number) bas de la plage *d'arrivée*.
* **toHigh** : le [nombre](/types/number) haut de la plage *d'arrivée*.

## Valeur retournée

* une nouvelle valeur, un [nombre](/types/number) converti à partir de la **value** d'origine en faisant correspondre la plage **from** à la plage **to**.

# Exemple #example

Utilise une correspondance de durée de vie pour trouver l'âge en « années humaines » d'un chien de `7` ans.

```block 
let dogsAge = 7 
let peoplesAge = Math.map(dogsAge, 1, 16, 15, 87) 
```

## Voir aussi

[constrain](/reference/math/constrain)
