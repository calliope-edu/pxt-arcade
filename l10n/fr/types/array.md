# Tableau

Un *Tableau* est une liste d'éléments qui ont un type de base (primitif).

## #intro

Un tableau est une liste d'éléments qui sont des nombres, des booléens ou des chaînes. Les tableaux ont une longueur qui est le nombre d'éléments qu'ils contiennent. Vous obtenez et modifiez les valeurs des éléments à différents endroits dans un tableau. Vous trouvez les éléments d'un tableau en connaissant leurs positions.

Les tableaux sont flexibles, ils peuvent croître et rétrécir en taille. Vous pouvez ajouter et supprimer des éléments à n'importe quel endroit du tableau.

## Créer un tableau

Un tableau est créé en faisant une liste d'éléments.

```blocks
let scores = [9, 8, 3, 5, 6, 8];
```

Ici, le tableau devient automatiquement un tableau de [nombres](/types/number) parce qu'il a été créé avec des éléments qui sont des nombres.

Vous pouvez utiliser des types différents, comme [string](/types/string).

```blocks
let directions = ["East", "North", "South", "West"];
```

Si vous voulez créer un tableau sans éléments (tableau vide), vous devez indiquer quel est le type du tableau. C'est parce qu'il n'y a aucun élément permet de déduire automatiquement le type.

```typescript
let scores: number[] = [];
```

## Éléments d'un tableau

Lorsqu'un élément est ajouté à un tableau, il devient un *élément* du tableau. Les éléments de tableau sont trouvés à l'aide d'un *indice*. Il s'agit de la position dans le tableau de l'élément ou de l' *ordre* de l'élément dans le tableau. Les positions d'un tableau commencent par l'indice `0`. La première place dans le tableau est `0`, la deuxième place est `1`, et ainsi de suite.

```blocks
let scores = [9, 8, 3, 5, 6, 8];
let firstScore= scores[0];
let secondScore = scores[1];
```

## Longueur du tableau

Les tableaux ont toujours une longueur. Le dernier élément d'un tableau a un index qui est *longueur du tableau -1*. Les indices commencent par `0` afin que l'index du dernier élément soit un inférieur à la longueur du tableau.

```blocks
let directions = ["East", "North", "South", "West"];
let count = directions.length;
```

## Avancé

Les tableaux sont un moyen très utile de collecter et d'organiser des informations. Il existe des opérations plus avancées et des fonctions que vous pouvez utiliser sur les tableaux.

Voici un exemple d'utilisation de [**insertAt**](/reference/arrays/insert-at) pour insérer un nombre au milieu d'un tableau.

```blocks
let scores = [8, 5, 9, 3, 2, 4];
scores.insertAt(3, 1);
```

## #examples

### Voir aussi #seealso