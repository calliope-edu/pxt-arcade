# Klassen

Traditionelles JavaScript setzt auf Funktionen und prototypbasierte Vererbung, um wiederverwendbare Komponenten aufzubauen. Das kann sich für Programmierer, die eher an einen objektorientierten Ansatz gewöhnt sind, bei dem Klassen Funktionalität erben und Objekte aus diesen Klassen erzeugt werden, etwas ungewohnt anfühlen.

Seit ECMAScript 2015, auch ECMAScript 6 genannt, können JavaScript-Programmierer ihre Anwendungen mit diesem objektorientierten, klassenbasierten Ansatz bauen. TypeScript erlaubt dir, diese Techniken zu nutzen.

Schauen wir uns ein einfaches klassenbasiertes Beispiel an:

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

Wir deklarieren eine neue Klasse `Greeter`. Diese Klasse hat drei Mitglieder: eine Eigenschaft namens `greeting`, einen Konstruktor und eine Methode `greet`.

Dir fällt sicher auf, dass wir innerhalb der Klasse `this.` voranstellen, wenn wir auf ein Mitglied der Klasse verweisen. Das kennzeichnet einen Zugriff auf ein Mitglied.

In der letzten Zeile erzeugen wir mit `new` eine Instanz der Klasse `Greeter`. Dabei wird der zuvor definierte Konstruktor aufgerufen: Es entsteht ein neues Objekt mit der Form von `Greeter`, und der Konstruktor initialisiert es.

## Vererbung

In TypeScript können wir gängige objektorientierte Muster verwenden. Eines der grundlegendsten Muster der klassenbasierten Programmierung ist natürlich, bestehende Klassen durch Vererbung zu erweitern, um neue zu erstellen.

Schauen wir uns ein Beispiel an:

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

Dieses Beispiel zeigt einige Vererbungsfunktionen von TypeScript, die auch in anderen Sprachen üblich sind. Hier wird das Schlüsselwort `extends` verwendet, um eine Unterklasse zu erstellen. Das siehst du daran, dass `Horse` und `Snake` Unterklassen der Basisklasse `Animal` sind und Zugriff auf deren Funktionen erhalten.

Abgeleitete Klassen mit Konstruktorfunktionen müssen `super()` aufrufen, wodurch die Konstruktorfunktion der Basisklasse ausgeführt wird.

Das Beispiel zeigt auch, wie man Methoden der Basisklasse mit Methoden überschreibt, die auf die Unterklasse zugeschnitten sind. Hier erstellen sowohl `Snake` als auch `Horse` eine Methode `move`, die `move` aus `Animal` überschreibt und ihr klassenspezifische Funktionalität gibt. Beachte: Obwohl `tom` als `Animal` deklariert ist, ist sein Wert ein `Horse`, daher ruft `tom.move(34)` die überschreibende Methode in `Horse` auf:

```Text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Öffentliche, private und geschützte Modifikatoren

### Öffentlich (public) als Standard

In unseren Beispielen konnten wir überall im Programm frei auf die deklarierten Mitglieder zugreifen. Wenn du Klassen aus anderen Sprachen kennst, ist dir vielleicht aufgefallen, dass wir dafür nicht das Wort `public` verwenden mussten; in C# zum Beispiel muss jedes Mitglied ausdrücklich als `public` gekennzeichnet sein, um sichtbar zu sein. In TypeScript ist jedes Mitglied standardmäßig `public`.

Du kannst ein Mitglied trotzdem ausdrücklich als `public` kennzeichnen. Die Klasse `Animal` aus dem vorigen Abschnitt hätten wir auch so schreiben können:

```typescript-ignore
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### `private` verstehen

Wenn ein Mitglied als `private` gekennzeichnet ist, kann von außerhalb seiner Klasse nicht darauf zugegriffen werden. Zum Beispiel:

```typescript-ignore
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
```

TypeScript hat ein strukturelles Typsystem. Wenn wir zwei verschiedene Typen vergleichen, egal woher sie stammen, und die Typen aller Mitglieder kompatibel sind, dann gelten auch die Typen selbst als kompatibel.

Bei Typen mit `private`- und `protected`-Mitgliedern ist das anders. Damit zwei Typen als kompatibel gelten, muss, wenn einer ein `private`-Mitglied hat, auch der andere ein `private`-Mitglied haben, das aus derselben Deklaration stammt. Dasselbe gilt für `protected`-Mitglieder.

Sehen wir uns an einem Beispiel an, wie das in der Praxis aussieht:

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
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
```

In diesem Beispiel haben wir ein `Animal` und ein `Rhino`, wobei `Rhino` eine Unterklasse von `Animal` ist. Außerdem gibt es eine neue Klasse `Employee`, die von der Form her genauso aussieht wie `Animal`. Wir erzeugen Instanzen dieser Klassen und versuchen, sie einander zuzuweisen, um zu sehen, was passiert. Da `Animal` und `Rhino` den `private`-Teil ihrer Form aus derselben Deklaration `private name: string` in `Animal` teilen, sind sie kompatibel. Für `Employee` gilt das jedoch nicht. Wenn wir ein `Employee` an `Animal` zuweisen, erhalten wir einen Fehler, dass diese Typen nicht kompatibel sind. Obwohl `Employee` ebenfalls ein `private`-Mitglied namens `name` hat, ist es nicht das, das wir in `Animal` deklariert haben.

### `protected` verstehen

Der Modifikator `protected` verhält sich ähnlich wie `private`, mit dem Unterschied, dass auf als `protected` deklarierte Mitglieder auch von Instanzen abgeleiteter Klassen zugegriffen werden kann. Zum Beispiel:

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

Beachte: Wir können `name` zwar nicht von außerhalb von `Person` verwenden, aber innerhalb einer Instanzmethode von `Employee`, weil `Employee` von `Person` abgeleitet ist.