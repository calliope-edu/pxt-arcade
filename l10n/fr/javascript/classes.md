# Classes

Traditionnellement, le JavaScript se concentre sur les fonctions et l'héritage basé sur des prototypes comme le moyen de base de construire des composants réutilisables. Cela peut être un peu inhabituel pour des programmeurs plus à l'aise avec une approche orientée objet, où les classes héritent les fonctionnalités et les objets sont construits à partir de ces classes.

En commençant par ECMAScript 2015, également connu sous le nom ECMAScript 6, les programmeurs JavaScript seront en mesure de construire leurs applications en utilisant cette approche orientée objet. TypeScript, vous permet d'utiliser ces techniques.

Jetons un coup d'oeil à un exemple simple de classe:

```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

Nous déclarons un nouvel classe `Greeter`. Cette classe a trois membres: une propriété appelée `greeting`, un constructeur et une méthode `greet`.

Vous remarquerez que dans la classe lorsque nous nous référons à l'un des membres de la classe que nous faisons précéder par `this.`. Cela indique qu'il s'agit d'un accès à l'un des membres de la classe.

Dans la dernière ligne, nous construisons une instance de la classe `Greeter` à l'aide de `new`. Cela appelle le constructeur que nous avons défini précédemment, en créant un nouvel objet du type `Greeter`, et en exécutant le constructeur pour l'initialiser.

## Héritage

Dans TypeScript, nous pouvons utiliser les approches classiques de la programmation orientés objet avec des classes. Bien sûr, l'un des modèles les plus fondamentaux dans la programmation basée sur les classes est d'être en mesure d'étendre les classes existantes pour en créer de nouvelles en utilisant l'héritage.

Jetons un coup d'oeil à un exemple:

```typescript-ignore
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

Cet exemple couvre un certain nombre de fonctionnalités de l'héritage en TypeScript que l'on retrouve dans d'autres langages. Ici, nous voyons le mot clé `extends` qui est utilisé pour créer une sous-classe. Vous pouvez le voir avec `Horse` et `Snake` sous-classe de la classe de base `Animal`. Cette extension permet aux sous-classes d'accéder aux caractéristiques comportementales de la classe mère.

Les classes dérivées qui contiennent des fonctions de constructeur doivent appeler `super()` qui exécutera le constructeur sur la classe de mère.

L'exemple montre également comment substituer des méthodes dans la classe de base avec des méthodes spécialisées pour la sous-classe. Ici, `Snake` et `Horse` créent une méthode de déplacement `move` qui remplace le `move` de `Animal`, lui donnant une fonctionnalité spécifique à chaque classe. Notez que même si `tom` est déclaré comme un `Animal`, puisque sa valeur est un `Horse`, lorsque `tom.move (34)` appelle la méthode provenant de la classe `Horse`:

```Text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Modificateurs publics, privés et protégés

### Public par défaut

Dans nos exemples, nous avons pu accéder librement aux membres que nous avons déclarés tout au long de nos programmes. Si vous êtes familier avec les classes dans d'autres langages, vous avez peut-être remarqué dans les exemples ci-dessus, nous n'avons pas eu à utiliser le mot clef `public` pour y parvenir; par exemple, C# requiert que chaque membre soit explicitement étiqueté `public` pour être visible. Dans TypeScript, chaque membre est `public` par défaut.

Vous pouvez toujours marquer un membre `public` explicitement. Nous aurions pu écrire la classe `Animal` de la section précédente de la manière suivante:

```typescript-ignore
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### Comprendre `private`

Lorsqu'un membre est marqué `private`, il n'est pas accessible depuis l'extérieur de sa classe. Par exemple:

```typescript-ignore
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Erreur: 'name' est private;
```

TypeScript a un système de type structurel. Lorsque nous comparons deux types différents, indépendamment de l'endroit d'où ils viennent, si les types de tous les membres sont compatibles, alors nous disons que les types eux-mêmes sont compatibles.

Toutefois, lorsque vous comparez des types qui ont des membres `private` et `protected`, ces types sont traités différemment. Pour que deux types soient considérés comme compatibles, si l'un des deux a un membre `private` , l'autre doit avoir un membre `private` issu de la même déclaration. La même règle s'applique aux membres `protected` .

Examinons un exemple pour mieux voir comment cela se joue dans la pratique:

```typescript-ignore
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Erreur: 'Animal' et 'Employee' ne sont pas compatibles
```

Dans cet exemple, nous avons un `Animal` et un `Rhino`, avec `Rhino` une sous-classe de la classe `Animal`. Nous avons aussi une nouvelle classe `Employee` qui semble identique à `Animal` en termes de forme. Nous créons quelques exemples de ces classes et essayons ensuite de les assigner les uns aux autres pour voir ce qui va se passer. Comme `Animal` et `Rhino` partagent le côté `private` de la déclaration de `private name: string` dans `Animal`, ils sont compatibles. Toutefois, ce n'est pas le cas pour `Employee`. Lorsque nous essayons d'affecter d'un `Employee` à `Animal` , nous obtenons une erreur qui stipule que ces types ne sont pas compatibles entre eux. Même si `Employee` a également un membre `private` appelé `name`, ce n'est pas celui que nous avons déclaré dans la classe `Animal`.

### Comprendre `protected`

Le modificateur `protected` ressemble beaucoup au modificateur `private` avec l'exception que les membres déclarés `protected` peuvent également être accessibles par les instances de classes dérivée. Par exemple,

```typescript-ignore
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

Notez que même si nous ne pouvons pas utiliser `name` à partir de l'extérieur de `Person`, nous pouvons toujours l'utiliser à partir d'une méthode d'instance de `Employee` parce que `Employee` dérive de `Person`.