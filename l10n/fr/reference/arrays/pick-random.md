# choisir au hasard

Choisis au hasard un élément d'un tableau.

```sig
[""]._pickRandom()
```

Plutôt que de générer toi-même un index aléatoire pour sélectionner un élément d'un tableau, tu peux obtenir un élément du tableau au hasard en une seule opération. L'élément est choisi à un index aléatoire dans la longueur du tableau.

```block
let list: number[] = []
let item = list._pickRandom()
```

C'est une façon plus pratique d'obtenir un élément au hasard. Sinon, tu dois d'abord générer un index aléatoire avant d'accéder à l'élément du tableau.


```block
let list: number[] = []
let item = list[Math.randomRange(0, list.length - 1)]
```

## Valeur retournée

* Un élément du tableau sélectionné au hasard.

## Exemple #example

Choisis au hasard un nom pour ton nouvel animal de compagnie dans un tableau de noms.

```blocks
let petNames = ["sparky", "fido", "spots", "fluffy", "muffin"]
let newName = petNames._pickRandom()
```

## Voir Aussi

[supprimer à](/reference/arrays/remove-at), [obtenir](/reference/arrays/get), [retirer le dernier](/reference/arrays/pop), [retirer le premier](/reference/arrays/shift)