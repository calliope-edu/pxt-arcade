# reverse

Inverser tous les éléments d'un tableau.

```sig
["hello", "goodbye"].reverse();
```

Tous les éléments du tableau changent de position. Les éléments de la plus petite position à la plus grande se retrouve dans un nouvel ordre. L'élément avec la position la plus haute est maintenant dans la position la plus basse et ainsi de suite. Le tableau `9, 8, 3, 5, 9, 8, 7, 2` devient `2, 7, 8, 9, 5, 3, 8, 9` une fois inversé.

Tu remarqueras peut-être que si ton tableau a un nombre impair d'éléments, l'élément du milieu conserve sa position lorsque le tableau est inversé.

# Valeur retournée

* le même tableau, mais avec l'ordre de ses éléments inversé.

# Exemple

Inverse les couleurs de l'arc-en-ciel. Tu pourrais appeler un arc-en-ciel inversé un « ciel-ne-cra ».

```blocks
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
rainbow.reverse();
```