# Définition de fonction

Le nom, les arguments et le code d'une fonction.

```block
function doSomething(){}
```

Une fonction vous permet de créer une partie de code que vous pouvez réutiliser dans votre programme. C'est pratique parce que vous pouvez mettre le code que vous souhaitez utiliser à nouveau dans une fonction. Au lieu de copier le même code à de nombreux endroits dans votre programme, vous pouvez simplement utiliser une fonction que vous avez fait et tout le code à l'intérieur est utilisé comme un seul bloc.

## Le mot *function*

Toutes les définitions de fonctions commencent par le mot **function**. Cela signifie que la définition va commencer.

```typescript
function myFunction() {
}
```

## Nom

Une fonction a un *nom* unique. Vous donnez également un nom à une fonction qui donne une idée de ce que le code dans la fonction fait. Si vous souhaitez définir une fonction pour que toutes les LEDs soient vertes, vous pouvez appeler la fonction **setAllGreen**. Cela donne à vous et à toute autre personne regardant votre code une idée de ce que la fonction va faire.

```blocks
function setAllGreen() {
    let lightsOn = true
}
```

Si vous avez des fonctions avec les noms **function1**, **fonction2**et **function3**, elles seront uniques, mais vous ne vous souviendrez probablement pas de ce que chacune fait la prochaine fois que vous regarderez votre code. C'est pourquoi il est préférable de donner vos noms de fonctions qui vous indiquent ce que le code à l'intérieur va accomplir.

## Valeur de retour

Une fonction peut [retourner](/types/function/return) une valeur à votre programme. Une valeur de retour est généralement le résultat d'un calcul ou l'état d'une opération effectuée dans votre fonction.

```blocks
function weAreHappy() {
    return true
}
```

## Paramètres

Si vous voulez donner des données à votre fonction, vous pouvez inclure un ou plusieurs *paramètres*, qui sont des valeurs que vous envoyez à la fonction. Les paramètres fonctionnent comme des variables à l'intérieur de la fonction.

```blocks
function square(side: number) {
	return side * side
}
```

Une fonction peut aussi avoir plusieurs paramètres.

```blocks
function volume(side1: number, side2: number, side3: number) {
    return side1 * side2 * side3
}
```

Les paramètres peuvent avoir des [types](/types) différents. Par exemple, si vous voulez créer une fonction qui assemble deux chaînes, vous pouvez avoir deux paramètres de type chaîne et un paramètre booléen qui indique quelle chaîne vient en premier.

```blocks
function addStrings(stringA: string, stringB: string, first: boolean) {
    if (first) {
        return stringA + stringB
    } else {
        return stringB + stringA
    }
}
```

### ~ hint

#### Faire glisser le paramètre

Dans les blocs, vous pouvez tirer un paramètre du bloc de fonction, le faire glisser vers le bas et le placer comme variable dans le code à l'intérieur de la fonction.

Tirez le paramètre ``||variables:message||`` de la fonction **repeat**.

```block
function repeat(message: string) {
    let repeated = ""
    for (let index = 0; index < 3; index++) {
        repeated += "hello" + ", "
    }
}
```

Ensuite, utilisez-le comme variable pour remplacer la chaîne **"hello"**.

```block
function repeat(message: string) {
    let repeated = ""
    for (let index = 0; index < 3; index++) {
        repeated += message + ", "
    }
}
```

### ~

## Corps

Le *corps* de la fonction est le code à l'intérieur du bloc de fonction. C'est ici que la fonction fait son travail.

```blocks
let side = 25;
let square = 0;

function squared( ) {
    square = side * side;
}
```

## Exemple

Faire une fonction pour calculer la moyenne de score d'une liste des scores obtenus à un quiz.

```blocks
let scores = [9, 5, 3, 1, 6, 3, 5, 7];
let average = 0;

function averageScore( ) {
    let count = 0;
    for (let score of scores) {
        count += score;
    }
    average = count / scores.length;
}
```

## Voir aussi #seealso

[call](/types/function/call), [return](/types/function/return)