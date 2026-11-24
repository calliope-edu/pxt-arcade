# Génériques

Une grande partie de l'ingénierie logicielle consiste à construire des composants qui non seulement ont des API bien définies et cohérentes, mais sont également réutilisables. Les composants qui sont capables de travailler sur les données d'aujourd'hui ainsi que les données de demain vous donnera les capacités les plus flexibles pour la construction de grands systèmes logiciels.

Dans les langages tels que C# et Java, l'un des principaux concepts de la boîte à outils pour la création de composants réutilisables est la *généricité*, c'est-à-dire être capable de créer un composant qui peut fonctionner sur une variété de types plutôt que sur un seul. Cela permet aux utilisateurs de consommer ces composants et d'utiliser leurs propres types.

## Hello World des génériques

Pour commencer, faisons le «Hello World» des génériques: la fonction d'identité. La fonction Identité est une fonction qui retourne tout ce qui lui est passé en argument. Vous pouvez y penser de la même manière que la commande `echo` .

Sans les génériques, nous devrions donner à la fonction d'identité un type spécifique:

```ts
function identity(arg: number): number {
    return arg;
}
```

Nous avons besoin d'un moyen de capturer le type de l'argument de telle manière que nous pourrions également l'utiliser pour désigner ce qui est retourné. Ici, nous allons utiliser une *variable de type*, un type spécial de variable qui fonctionne sur les types plutôt que des valeurs.

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

Nous avons maintenant ajouté une variable de type `T` à la fonction Identité. Ce `T` nous permet de capturer le type que l'utilisateur fournit (par exemple, `Number`), afin que nous puissions utiliser ces informations plus tard. Ici, nous utilisons `T` à nouveau comme type de retour. Lors de l'inspection, nous pouvons maintenant voir le même type est utilisé pour l'argument et le type de retour. Cela nous permet de transférer les informations de type d'un côté de la fonction à l'autre.

Nous disons que cette version de la fonction `identity` est générique, car elle fonctionne sur un large ensemble de types. Une fois que nous avons écrit la fonction d'identité générique, nous pouvons l'appeler de deux manières. La première façon est de passer tous les arguments, y compris l'argument de type, à la fonction:

```ts
let output = identity<string>("myString");  // type of output will be 'string'
```

Ici, nous définissons explicitement `T` comme étant `String` comme l'un des arguments de l'appel de fonction, dénotés à l'aide du `<>` autour des arguments plutôt que `()`.

La deuxième façon est peut-être aussi la plus commune. Ici nous utilisons *l'inférence d'argument de type* -- c'est-à-dire, nous voulons que le compilateur définisse la valeur de `T` automatiquement en se basant sur le type de l'argument que nous passons:

```ts
let output = identity("myString");  // type of output will be 'string'
```

Notez que nous n'avons pas eu à passer explicitement le type dans les crochets d'angle (`<>`); le compilateur a simplement regardé la valeur `"myString"`et a défini `T` à son type. Alors que l'inférence d'argument de type peut être un outil utile pour garder le code plus court et plus lisible, vous devrez peut-être passer explicitement dans les arguments de type comme nous l'avons fait dans l'exemple précédent lorsque le compilateur ne parvient pas à déduire le type, comme cela peut arriver dans des exemples plus complexes.

## Utilisation de variables de type générique

Lorsque vous commencez à utiliser des génériques, vous remarquerez que lorsque vous créez des fonctions génériques telles que `identity`, le compilateur impose que vous utilisiez correctement les paramètres typés génériquement dans le corps de la fonction. C'est-à-dire que vous traitez réellement ces paramètres comme s'ils pouvaient être de tous les types.

Prenons notre fonction `identity` :

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

Que faire si nous voulons également enregistrer la longueur de l'argument `arg` dans la console à chaque appel? Nous pourrions être tentés d'écrire ceci:

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length.toString());  // Error: T doesn't have .length
    return arg;
}
```

Lorsque nous le ferons, le compilateur va nous donner une erreur que nous utilisons le membre `.length` de `arg`, mais nulle part nous n'avons dit que `arg` a ce membre. Rappelez-vous, nous avons dit plus tôt que ces variables de type sont pour n'importe quel et tous les types, ainsi quelqu'un utilisant cette fonction pourrait avoir passé dans un `nombre`, qui n'aura pas un membre `.length` .

Disons que nous avons réellement voulu que cette fonction fonctionne sur des tableaux de `T` plutôt que `T` directement. Étant donné que nous travaillons avec des tableaux, le membre `.length` doit être disponible. Nous pouvons décrire ceci juste comme nous créerions des tableaux d'autres types:

```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length.toString());  // Array has a .length, so no more error
    return arg;
}
```

Vous pouvez lire le type de `loggingIdentity` comme «la fonction générique `loggingIdentity` prend un paramètre de type `T`, un argument `arg` qui est un tableau de `T`, et retourne un tableau de `T`s». Si nous passons dans un tableau de nombres, nous obtiendrons un tableau de nombres en retour, comme `T` sera lié à `Number`. Cela nous permet d'utiliser notre variable de type générique `T` dans le cadre des types avec lesquels nous travaillons, plutôt que le type entier, ce qui nous donne une plus grande souplesse.

Nous pouvons également écrire l'exemple de cette façon:

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length.toString());  // Array has a .length, so no more error
    return arg;
}
```

Vous connaissez peut-être déjà ce style de type dans d'autres langages. Dans la section suivante, nous allons couvrir la façon dont vous pouvez créer vos propres types génériques comme `Array<T>`.

## Types génériques

### ~hint

Static TypeScript ne prend pas encore en charge les fonctions génériques en tant que valeurs.

### ~

Dans les sections précédentes, nous avons créé des fonctions d'identité génériques qui fonctionnaient sur une large gamme de types. Dans cette section, nous explorerons le type des fonctions elles-mêmes et la façon de créer des interfaces génériques.

Le type des fonctions génériques est tout comme ceux des fonctions non génériques, avec les paramètres de type répertoriés en premier, de même que les déclarations de fonction:

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

Nous aurions également pu utiliser un nom différent pour le paramètre de type générique dans le type, tant que le nombre de variables de type et la façon dont les variables de type sont utilisées s'alignent.

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <V>(arg: V) => V = identity;
```

Nous pouvons également écrire le type générique comme signature d'appel d'un type de littéral d'objet:

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

Ce qui nous amène à écrire notre première interface générique. Prenons le littéral de l'objet de l'exemple précédent et déplaçons le vers une interface:

```ts
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

Dans un exemple similaire, nous voudrions peut-être déplacer le paramètre générique pour être un paramètre de l'interface entière. Cela nous permet de voir de quel types nous sommes génériques (par exemple, `Dictionary<string>` plutôt que simplement `dictionary`). Cela rend le paramètre de type visible pour tous les autres membres de l'interface.

```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

Notez que notre exemple a changé pour devenir quelque chose de légèrement différent. Au lieu de décrire une fonction générique, nous avons maintenant une signature de fonction non générique qui fait partie d'un type générique. Lorsque nous utilisons `GenericIdentityFn`, nous devons maintenant spécifier l'argument de type correspondant (ici: `Number`), ce qui permet de verrouiller efficacement la signature d'appel sous-jacente. Comprendre quand mettre le paramètre de type directement sur la signature d'appel et quand le mettre sur l'interface elle-même sera utile pour décrire quels aspects d'un type sont génériques.

En plus des interfaces génériques, nous pouvons également créer des classes génériques. Notez qu'il n'est pas possible de créer des enums et des espaces de noms génériques.

## Classes génériques

Une classe générique a une forme similaire à une interface générique. Les classes génériques ont une liste de paramètres de type générique dans des soufflets(`<>`) suivant le nom de la classe.

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

Il s'agit d'une utilisation assez littérale de la classe `GenericNumber` , mais vous avez peut-être remarqué que rien ne l'empêche d'utiliser uniquement le type `Number` . Nous aurions pu utiliser plutôt des objets `String` ou encore plus complexes.

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

Tout comme avec les interfaces, mettre le paramètre de type sur la classe elle-même nous permet de s'assurer que toutes les propriétés de la classe fonctionnent avec le même type.

## Contraintes de généricité

Si vous vous souvenez d'un exemple précédent, vous pouvez parfois vouloir écrire une fonction générique qui fonctionne sur un ensemble de types où vous avez des connaissances sur les fonctionnalités de ce jeu de types aura. Dans notre exemple `loggingIdentity`, nous voulions être en mesure d'accéder à la propriété `. length` de `arg`, mais le compilateur n'a pas pu prouver que chaque type avait une propriété `.length` , donc il nous avertit que nous ne pouvons pas faire cette supposition.

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length.toString());  // Error: T doesn't have .length
    return arg;
}
```

Au lieu de travailler avec tous les types, nous voudrions contraindre cette fonction à travailler avec tous les types qui ont également la propriété `.length` . Tant que le type a ce membre, nous l'autoriserons, mais il est nécessaire d'avoir au moins ce membre. Pour ce faire, nous devons énumérer notre exigence comme une contrainte sur ce que T peut être.

Pour ce faire, nous allons créer une interface qui décrit notre contrainte. Ici, nous allons créer une interface qui a une propriété `.length` unique, puis nous allons utiliser cette interface et le mot clé `extends` pour désigner notre contrainte:

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length.toString());  // Now we know it has a .length property, so no more error
    return arg;
}
```

Étant donné que la fonction générique est maintenant contrainte, elle ne fonctionnera plus sur n'importe quel type:

```ts
loggingIdentity(3); //Erreur, Number n'a pas de propriété .length
```

Au lieu de cela, nous devons passer des valeurs dont le type a toutes les propriétés requises:

```ts
loggingIdentity({length: 10, value: 3});
```