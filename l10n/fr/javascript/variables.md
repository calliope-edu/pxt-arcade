# Déclarations de variables

La déclaration d'une variable doit être effectuée à l'aide du mot clé `let` :

```typescript
let a = 10;
```

## `var` vs `let`

La déclaration d'une variable dans JavaScript a toujours été effectuée avec le mot clé `var` .

```typescript-ignore
var a = 10;
```

La construction `var` a quelques [problèmes](http://www.typescriptlang.org/docs/handbook/variable-declarations.html), c'est pourquoi `let` a été introduit. En dehors du mot-clé utilisé, les instructions `let` sont écrites de la même manière que les instructions `var` .

```typescript
let a = 10;
```

La différence clé n'est pas dans la syntaxe, mais dans la sémantique, que nous allons maintenant explorer.

### ~indice

Utilisez `let` au lieu de `var` pour introduire une nouvelle variable!!!

### ~

## Block-scoping

Lorsqu'une variable est déclarée à l'aide de `let`, elle utilise ce que certains appellent une *portée lexicale* ou une *portée de bloc*. Contrairement aux variables déclarées avec `var` dont les étendues fuient vers leur fonction englobante, les variables à portée de bloc elles ne sont pas visibles en dehors de leur bloc conteneur ou de la boucle `for` la plus proche.

```typescript-ignore
function f(input: boolean) {
    let a = 100;

    if (input) {
        // toujours ok pour référencer 'a'
        let b = a + 1;
        return b;
    }

    // Erreur: 'b' n'existe pas ici
    return b;
}
```

Ici, nous avons deux variables locales `a` et `b`. la portée de `a`est limitée au corps de `f` tandis que la portée de `b`est limitée au bloc d'instruction `if`.

Une autre propriété des variables à portée de bloc est qu'elles ne peuvent pas être lus ou écrits avant qu'elles ne soient réellement déclarées. Bien que ces variables soient «présentes» dans toute leur portée, tous ce qui est situé avant leur déclaration est une *zone temporelle morte*. C'est juste une façon sophistiquée de dire que vous ne pouvez pas y accéder avant la l'instruction `let`, et heureusement TypeScript vous le fera savoir.

```typescript-ignore
a++; // impossible d'utiliser 'a' avant qu'il soit déclaré;
let a;
```

## Re-déclarations

Avec les déclarations `var` , peu importe le nombre de fois que vous déclarez vos variables, il suffit d'en avoir un:

```typescript-ignore
var x = 10;
var x = 20; 
```

Dans l'exemple ci-dessus, toutes les déclarations de `x` se réfèrent en fait au *même* `x`, ce qui est parfaitement valide. Cela finit souvent par être une source de bugs. Heureusement, avec `let` les déclarations ne sont plus aussi indulgentes avec vous.

```typescript-ignore
let x = 10;
let x = 20; //erreur: pas possible de redéclarer 'x' dans la même portée
```

## Masquage

L'action d'introduire un nouveau nom dans une étendue plus profondément imbriquée est appelée le *masquage*. C'est un peu une épée à double tranchant car il peut introduire certains bugs dans les cas de masquages accidentels, mais en même temps, cela empêche également certains bugs. Par exemple, Imaginez une fonction `sumMatrix` à l'aide de variables `let` .

```typescript
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
```

Cette version de la boucle va effectivement effectuer la sommation correctement parce que la boucle interne `i` masque le `i` de la boucle externe. Le masquage devrait *généralement* être évité pour écrire un code le plus clair possible, tel que

```typescript-ignore
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }

    return sum;
}
```

Bien qu'il existe certains scénarios où il peut être approprié de tirer parti de celui-ci. C'est à vous d'utiliser votre propre jugement pour savoir quand le faire.

# déclarations `const`

les déclarations `const`sont une autre façon de déclarer des variables.

```typescript
const numLivesForCat = 9;
```

Elles sont comme des déclarations `let` mais, comme leur nom l'indique, leur valeur ne peut plus être modifiée après leur affectation initiale. En d'autres termes, elles ont les mêmes règles de portée que `let`, mais vous ne pouvez pas ré-assigner la valeur.