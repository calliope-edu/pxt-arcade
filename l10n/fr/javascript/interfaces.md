# Interfaces

La façon la plus simple de voir comment fonctionnent les interfaces est de commencer par un exemple simple:

```ts
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

Le vérificateur de type contrôle l'appel à `printLabel`. La fonction `printLabel` a un paramètre unique qui requiert que l'objet passé ait une propriété appelée `label` de type String. Notez que notre objet a en fait plus de propriétés que cela, mais le compilateur vérifie uniquement que *au moins* celles requises sont présentes et correspondent aux types attendus. Il y a des cas où TypeScript n'est pas aussi indulgent, nous le verrons bientôt.

Nous pouvons écrire le même exemple à nouveau, cette fois en utilisant une interface pour décrire l'exigence d'avoir la propriété `label` de type String:

```ts
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

L'interface `LabelledValue` est un nom que nous pouvons maintenant utiliser pour décrire la spécification dans l'exemple précédent. Il représente toujours une propriété unique appelée `label` qui est de type String. Notez que nous n'avons pas eu à dire explicitement que l'objet que nous passons à `printLabel` implémente cette interface comme nous pourrions le faire dans d'autres langages. Ici, c'est seulement la forme qui compte. Si l'objet que nous passons à la fonction répond aux exigences énumérées, alors il est autorisé.

Il est intéressant de souligner que le type-checker ne nécessite pas que ces propriétés soient dans un ordre donné, seulement que les propriétés de l'interface soient présents et aient le type requis.

## Propriétés optionnelles

Toutes les propriétés d'une interface peuvent ne pas être requises. Certains existent sous certaines conditions ou peuvent ne pas être là du tout. Ces propriétés facultatives sont populaires lors de la création de modèles comme "option bags" où vous passez un objet à une fonction qui a seulement un couple de propriétés remplies.

Voici un exemple de ce modèle:

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

Les interfaces avec les propriétés facultatives sont semblables à d'autres interfaces, avec chaque propriété facultative dénotée par un `?` à la fin du nom de la propriété.

L'avantage des propriétés facultatives est que vous pouvez décrire les propriétés éventuellement disponibles tout en empêchant également l'utilisation de propriétés qui ne font pas partie de l'interface. Par exemple, si nous avions erronément typé le nom de la propriété `color` dans `createSquare`, nous obtiendrions un message d'erreur nous permettant de savoir:

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

## Contrôles des propriétés excédentaires

Dans notre premier exemple, TypeScript nous permettait de passer `{Size: Number; Label: String;}` à quelque chose qui ne s'attendait qu'à un `{Label: String;}`. Nous venons également de découvrir les propriétés facultatives, et comment elles sont utiles lors de la description dite "option bags".

Cependant, la combinaison des deux naïvement vous permettrait de vous tirer dans le pied de la même manière que vous pourriez le faire en JavaScript. Par exemple, en prenant notre dernier exemple à l'aide de `createSquare`:

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ colour: "red", width: 100 });
```

Notez que l'argument donné à `createSquare` est orthographié *`colour`* au lieu de `color`. En JavaScript, ce genre de chose échouerait silencieusement.

Vous pouvez soutenir que ce programme est correctement typé, puisque les propriétés `width` sont compatibles, qu'aucune propriété `color` n'est présente et que la propriété `colour` supplémentaire est insignifiante.

Toutefois, TypeScript est d'opinion qu'il y a probablement un bug dans ce code. Les littéraux objet obtiennent un traitement spécial et subissent une *vérification des propriétés excédentaires* lors de leur assignation à d'autres variables, ou en les passant comme argument. Si un littéral d'objet a des propriétés que le «type cible» n'a pas, vous obtiendrez une erreur.

```ts
//erreur:'Colour' non attendu dans le type 'SquareConfig'
let mySquare = createSquare ({Color: "Red", width: 100});
```

## Types de fonction

Les interfaces sont capables de décrire la large gamme de formes d'objets JavaScript. En plus de décrire un objet avec des propriétés, les interfaces sont également capables de décrire les types de fonction.

Pour décrire un type de fonction avec une interface, nous donnons à l'interface une signature d'appel. C'est comme une déclaration de fonction avec seulement la liste de paramètres et le type de retour. Chaque paramètre de la liste de paramètres requiert le nom et le type.

```ts
interface SubstrFunc {
    (source: string, index: number): string;
}
```

Une fois défini, nous pouvons utiliser cette interface type de fonction comme nous le ferions d'autres interfaces. Ici, nous montrons comment vous pouvez créer une variable d'un type de fonction et lui assigner une valeur de fonction du même type.

```ts
let mySearch: SubstrFunc;
mySearch = function (src: string, index: number): string {
    return src.substr(index)
}
```

Pour que les types de fonction vérifient correctement le type, les noms des paramètres n'ont pas besoin de correspondre. Nous aurions pu, par exemple, écrire l'exemple ci-dessus comme ceci:

```ts
let mySearch: SubstrFunc;
mySearch = function (src: string, i: number): string {
    return src.substr(i)
}
```

Les paramètres de fonction sont vérifiés un par un, avec les paramètres à des positions identiques. If you do not want to specify types at all, TypeScript's contextual typing can infer the argument types since the function value is assigned directly to a variable of type `SubstrFunc`. Ici aussi, le type de retour de notre expression de fonction est impliqué par les valeurs qu'il retourne (ici `false` et `true`). Had the function expression returned numbers or strings, the type-checker would have warned us that return type doesn't match the return type described in the `SubstrFunc` interface.

```ts
let mySearch: SubstrFunc;
mySearch = function (src, i): string {
    return src.substr(i)
}
```

Notez que vous pouvez également donner un type de fonction (sans utiliser d'interface) de manière équivalente comme suit:

```ts
type SubstrFunc = (source: string, index: number) => string;
```

## Type de classe

### Implémentation d'une interface

L'une des utilisations les plus courantes des interfaces dans les langages tels que C# et Java, est l'application explicite d'une classe à un contrat particulier, est également possible dans TypeScript.

```ts
type Date = number

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

Vous pouvez également décrire des méthodes dans une interface qui sont implémentées dans la classe, comme nous le faisons avec `setTime` dans l'exemple ci-dessous:

```ts
<br />type Date = number

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

Les interfaces décrivent uniquement le côté public de la classe, plutôt que le côté public et privé. Cela vous interdit de les utiliser pour vérifier qu'une classe a également des types particuliers pour le côté privé de l'instance de classe.

## Extension d'interfaces

Comme les classes, les interfaces peuvent s'étendre les unes les autres. Cela vous permet de copier les membres d'une interface dans un autre, ce qui vous donne plus de souplesse dans la façon dont vous séparez vos interfaces en composants réutilisables.

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{ color: "blue", sideLength: 10 }
```

Une interface peut étendre plusieurs interfaces, créant ainsi une combinaison de plusieurs interfaces.

```ts
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{ color: "blue", sideLength: 10, penWidth: 5.0}
```

## Types hybrides

### ~hint

Le TypeScript statique ne permet actuellement pas les types hybrides, comme indiqué ci-dessous.

### ~

Comme nous l'avons mentionné précédemment, interfaces peuvent décrire les types riches présents dans le monde réel JavaScript. En raison de la nature dynamique et flexible de JavaScript, vous pouvez rencontrer occasionnellement un objet qui fonctionne comme une combinaison de certains des types décrits ci-dessus.

Un exemple est un objet qui agit à la fois comme une fonction et un objet, avec des propriétés supplémentaires:

```ts
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

Lorsque vous interagissez avec du code JavaScript, vous devrez peut-être utiliser des modèles comme ci-dessus pour décrire complètement la forme du type.

## Interfaces étendant des classes

### ~hint

Le TypeScript Static n'autorise pas actuellement les interfaces qui étendent des classes, comme indiqué ci-dessous.

### ~

Lorsqu'un type d'interface étend un type de classe, il hérite des membres de la classe, mais pas de leurs implémentations. C'est comme si l'interface avait déclaré tous les membres de la classe sans fournir une implémentation. Les interfaces héritent même des membres privés et protégés d'une classe de base. Cela signifie que lorsque vous créez une interface qui étend une classe avec des membres privés ou protégés, ce type d'interface ne peut être implémenté que par cette classe ou une sous-classe de celui-ci.

Cela est utile lorsque vous avez une hiérarchie d'héritage volumineux, mais que vous souhaitez spécifier que votre code fonctionne avec uniquement les sous-classes qui ont certaines propriétés. Les sous-classes n'ont pas à être liées plus que d'hériter de la classe de base. Par exemple:

```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image {
    select() { }
}

class Location {
    select() { }
}
```

Dans l'exemple ci-dessus, `SelectableControl` contient tous les membres de `Control`, y compris la propriété `State` privée. Étant donné que `State` est un membre privé, il est uniquement possible pour les descendants de `Control` d'implémenter `SelectableControl`. Cela est dû au fait que seuls les descendants de `Control` auront un membre privé `State` qui provient de la même déclaration, ce qui est une condition pour que les membres privés soient compatibles.

Dans la classe `Control` , il est possible d'accéder au membre privé `State` via une instance de `SelectableControl`. Effectivement, un `SelectableControl` agit comme un `contrôle` qui est connu pour avoir une méthode `Select` . Les classes `Button` et `TextBox` sont des sous-types de `SelectableControl` (car elles héritent toutes deux de `Control` et ont une méthode `Select` ), mais les classes `Image` et `Location` ne le sont pas.