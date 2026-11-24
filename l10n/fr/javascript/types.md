# Types

Pour que les programmes soient utiles, nous devons être en mesure de travailler avec certaines des unités de données les plus simples: nombres, chaînes, structures, valeurs booléennes, et autres.

## Inférence de type

Dans TypeScript, il existe plusieurs endroits où l'inférence de type est utilisée pour fournir des informations de type lorsqu'il n'y a pas d'annotation de type explicite. Par exemple, dans ce code

```typescript
let x = 3;
let y = x + 3
```

Le type de la variable `x` est déduit comme étant `number`. De même, le type de variable `y` est également déduit comme étant `number`. Ce type d'inférence se déroule lors de l'initialisation des variables et des membres, la définition des valeurs par défaut des paramètres et la détermination des types de retour de fonction.

Tous les exemples ci-dessous donnent un exemple d'annotation de type, mais fonctionneront tout de même sans l'annotation.

## Booléens

Le type de données le plus simple est la valeur `true` ou `false`, appelée valeur `boolean` (booléenne).

```typescript
let isDone: boolean = false;
```

## Nombres

Les nombres entiers et les nombres avec une partie fractionnaire sont pris en charge. Les nombres sont parfois appelés *littéraux numériques*.

### Entiers: les nombres entiers

Les valeurs entières peuvent être écrites en notation décimale, hexadécimale, binaire et octale. Quand le nombre n'est pas exprimé sous forme décimale, des caractères spéciaux indiquent de quelle forme il s'agit :

* Décimal : aucune notation n'est utilisée
* Hexadécimal : préfixe la valeur avec `0x`
* Binaire : préfixe la valeur avec `0b`
* Octal : préfixe la valeur avec `0o`

```typescript
let decimal: number = 42;
let hexadecimal: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### Virgule flottante : nombres avec une partie fractionnaire

Les nombres peuvent aussi avoir une partie fractionnaire. Le point décimal se trouve entre les chiffres du nombre. Mais, les nombres à *virgule flottante* ont le point décimal à n'importe quel endroit entre les chiffres, comme: 3.14159 ou 651.75.

```typescript
let num = 0
num = 6.7
num = 10.083
```

## String #string

Comme dans d'autres langues, nous utilisons le type `string` pour faire référence aux données textuelles. Utilisez des guillemets doubles (`"`) ou des guillemets simples (`'`) pour entourer des données d'une chaîne de caractères.

```typescript
let myColor: string = "blue";
myColor = 'red';
```

Vous pouvez également utiliser des *template strings*, qui peuvent s'étendre sur plusieurs lignes et avoir des expressions incorporées. Ces chaînes sont entourées par le caractère accent grave (`` ` ``), et les expressions incorporées utilisent la forme `${ expr }`.

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`
```

Cela équivaut à déclarer la `sentence` comme ceci :

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month."
```

## Tableaux #array

Les tableaux vous permettent de travailler avec une séquence de valeurs extensible, adressée par un indice à valeur entière. Les types de tableaux peuvent être écrits de l'une des deux manières présentées ci-après. Dans la première, vous utilisez le type des éléments suivis de `[]` pour désigner un tableau de ce type d'élément:

```typescript
let list: number[] = [1, 2, 3];
```

La deuxième méthode utilise un type de tableau générique, `array<elemType>`:

```typescript
let list: Array<number> = [1, 2, 3];
```

### ~hint

Pour @boardname@, tous les éléments d'un tableau doivent avoir le même type.

### ~

## Enum

Un ajout utile à l'ensemble standard des types de JavaScript est l' `enum`. Comme dans le langage C/C++, un enum est une manière simple de donner des noms plus lisibles à des ensembles de valeurs numériques.

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

Par défaut, les enums commencent à numéroter leurs membres à partir de `0`. Vous pouvez modifier ce paramètre en définissant manuellement la valeur de l'un des membres. Par exemple, nous pouvons commencer l'exemple précédent à `1` au lieu de `0`:

```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

Ou, même manuellement définir toutes les valeurs dans l'enum:

```typescript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

## Any

Le type `any` de TypeScript n'est pas pris en charge par @boardname@.

## Void

`void` est l'absence totale de type. Tu le verras souvent comme type de retour des fonctions qui ne renvoient pas de valeur :

```typescript
function warnUser(): void {
    //...
}
warnUser();
```

La déclaration de variables de type `void` n'est pas utile.

## Null et undefined

Une variable n'a pas toujours une valeur. Si tu veux qu'une variable existe sans lui donner une valeur d'un type, tu peux lui donner la valeur rien, ou `null`. C'est souvent utile pour indiquer qu'une variable n'a pas de sens pour l'instant.

```typescript-ignore
if (encoder.active) {
    position = encoder.readPosition();
} else {
    position = null;
}
```

De la même manière, `undefined` indique qu'une variable n'a pas de valeur :

```typescript-ignore
let message: string = undefined;
let received = false;

while (!received) {
    message = ports.readString();
    if (message != undefined)
        received = true;
    } else {
        pause(1000);
    }
}
```