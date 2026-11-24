# push

Ajouter un élément à la fin d'un tableau.

```sig
[""].push ("Bonjour")
```

Si vous avez un tableau avec trois nombres, comme 1, 2 et 3. Pour ajouter un autre nombre à la fin, vous le *poussez* sur le tableau. Vous le faites comme ceci:

```block
let thoseNumbers = [1, 2, 3];
thoseNumbers.push(4);
```

## Paramètres

* **Item**: élément à ajouter à la fin du tableau.

## Exemple

Ajouter un autre animal à la fin de votre liste d'animaux de compagnie préférés.

```blocks
let pets = ["chat", "chien", "perroquet", "poisson rouge"];
pets.push ("cobaye");
```

## Voir Aussi

[pop](/reference/arrays/pop), [unshift](/reference/arrays/unshift)