# Fonctions

Les fonctions sont le bloc de construction fondamental des programmes. Voici la façon la plus simple de faire une fonction qui ajoute deux nombres:

```typescript
// Named function
function add(x : number, y : number): number {
    return x + y;
}

let sum = add(1, 2);
```

### ~ hint

#### Types de paramètres

Tu dois indiquer un [type](/javascript/types) pour chaque paramètre de fonction.

### ~

Les fonctions peuvent faire référence à des variables en dehors du corps de la fonction. Quand ils le font, on leur dit de `capturer` ces variables.

```typescript
let z = 100;

function addToZ(x: number, y: number) {
    return x + y + z;
}

let sum = addToZ(1, 2);
```

Ajoutons un type de retour à notre fonction Add:

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

TypeScript peut déduire le type de retour en regardant les instructions **return**, ainsi vous pouvez ne pas vous en préoccupé dans beaucoup de cas.

## Paramètres optionnels et par défaut

Dans TypeScript, le nombre d'arguments donnés à une fonction doit correspondre au nombre de paramètres que la fonction attend.

```typescript-ignore
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

En JavaScript, chaque paramètre est optionnel, et les utilisateurs peuvent les laisser de coté sans souci. Quand ils le font, leur valeur est `undefined`. Nous pouvons obtenir cette fonctionnalité dans TypeScript en ajoutant un `?` à la fin des paramètres que nous voulons être facultatifs. Par exemple, si nous voulons que le paramètre de nom de famille ci-dessus soit optionnel:

```typescript-ignore
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

Tous les paramètres optionnels doivent suivre les paramètres requis. Si nous avions voulu faire le prénom facultatif plutôt que le nom de famille, nous aurions besoin de changer l'ordre des paramètres dans la fonction, en plaçant le prénom dernier dans la liste.

Dans TypeScript, nous pouvons également définir une valeur qu'un paramètre sera assigné si l'utilisateur ne fournit pas un, ou si l'utilisateur passe `undefined` à sa place. Ils sont appelés paramètres initialisés par défaut. Prenons l'exemple précédent et par défaut le nom de famille à `"Smith"`.

```typescript-ignore
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

Les paramètres initialisés par défaut viennent sont traités, comme facultatifs, après tous les paramètres requis. Comme les paramètres optionnels, ils peuvent être omis lors de l'appel de fonction. Cela signifie que les paramètres optionnels et les paramètres par défaut partageront ces points communs dans leurs types,

```typescript
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

et

```typescript
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

partagent le même type `(firstName: string, lastName?: string) => string`. La valeur par défaut de `LastName` disparaît dans le type, laissant uniquement derrière lui le fait que le paramètre est facultatif.

Contrairement aux paramètres facultatifs simples, les paramètres initialisés par défaut n' *ont pas besoin* de se produire après les paramètres requis. Si un paramètre initialisé par défaut est précédé d'un paramètre requis, les utilisateurs doivent passer explicitement `undefined` pour obtenir la valeur initialisée par défaut. Par exemple, nous pourrions écrire notre dernier exemple avec uniquement un initialiseur par défaut sur `firstName`:

```typescript-ignore
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
```

## Fonctions fléchées

Les fonctions fléchées, aussi appelées fonctions *lambda*, offrent une syntaxe légère pour les fonctions. Elles sont très utilisées pour fournir des gestionnaires d'événements à de nombreuses API. Par exemple :

```typescript
function foo(handler: Action) {
    // call handler ...
}

foo(() => { // arrow function!
   // do something
})
```

Souvent, une fonction comme `foo()` enregistre la fonction fléchée `handler` dans une variable pour exécuter plus tard le code qu'elle contient, lorsqu'une certaine condition se produit. Les fonctions fléchées servent de raccourci pour fournir du code supplémentaire à exécuter sans devoir écrire une fonction formelle séparée. C'est pourquoi les fonctions fléchées, ou lambda, sont considérées comme des fonctions « anonymes ».

[En savoir plus sur les fonctions fléchées...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Fonctions anonymes

Les fonctions anonymes sont utilisées juste comme des fonctions fléchées. Elles sont appelées "anonymes" parce que la fonction n'a pas de nom et n'est pas appelée en utilisant de nom. La fonction est mémorisée par sa *référence*. Cela signifie qu'une variable est utilisée pour mémoriser la fonction ou que la fonction est utilisée directement ("en ligne").

Voici un exemple semblable à celui montré pour les fonctions fléchées mais cette fois la fonction `foo ()` utilise une fonction anonyme directement:

```typescript
function foo(handler: Action) {
    // call handler ...
}

foo(function() { // use an inline function
   // do something
})
```

Aussi, vous pouvez définir une variable pour mémoriser la fonction et utiliser cette variable comme référence à la fonction anonyme:

```typescript
function foo(handler: Action) {
    // call handler ...
}

let anon = function() { // anonymous function, set it to a variable
    // do something
}

foo(anon)
```