# créer

Créez un nouveau tableau pour stocker une ou plusieurs valeurs.

## Créer un tableau

### Tableau vide

Vous pouvez créer des tableaux sans éléments. Si vous faites cela, vous aurez besoin de dire quel sera le [type](/types) du tableau. Il s'agit d'un tableau vide:

```typescript
let empty: string[] = []
```

```blocks
let empty: string[] = []
```

### Un tableau d'un seul élément

Vous pouvez créer et *initialiser* un tableau avec un seul élément. Les tableaux créés avec au moins un élément ont automatiquement le [type](/types) de l'élément. C'est ce qu'on appelle une *inférence de type*.

```block
let oneItem = ["item"]
```

### Tableau de plusieurs éléments

Créez des tableaux avec plus d'un seul élément si vous le souhaitez.

```block
let twoItems = [1, 2]
```

## Exemples

Faire un tableau vide de nombres. Ensuite, ajoutez deux nombres au tableau.

```blocks
let scores: number[] = [];
scores.push(98);
scores.push(75);
let lastScore = scores.pop();
```

Faites un tableau avec deux mots, puis permutez-les dans le tableau.

```blocks
let words = ["Hello", "there"]
let swap = words[0];
words[0] = words[1];
words[1] = swap;
```