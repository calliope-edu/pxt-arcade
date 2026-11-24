# Schnittstellen (Interfaces)

Am einfachsten verstehst du, wie Schnittstellen funktionieren, mit einem einfachen Beispiel:

```ts
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

Die Typprüfung prüft den Aufruf von `printLabel`.
Die Funktion `printLabel` hat einen einzigen Parameter, der verlangt, dass das übergebene Objekt eine Eigenschaft namens `label` vom Typ String hat.
Beachte, dass unser Objekt eigentlich mehr Eigenschaften hat, der Compiler aber nur prüft, dass *mindestens* die verlangten vorhanden sind und die verlangten Typen haben.
In manchen Fällen ist TypeScript nicht so nachsichtig, darauf gehen wir gleich ein.

Wir können dasselbe Beispiel noch einmal schreiben und diesmal eine Schnittstelle verwenden, um die Anforderung zu beschreiben, dass eine Eigenschaft `label` vom Typ String vorhanden sein muss:

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

Die Schnittstelle `LabelledValue` ist ein Name, mit dem wir jetzt die Anforderung aus dem vorherigen Beispiel beschreiben können.
Sie steht weiterhin für eine einzige Eigenschaft namens `label` vom Typ String.
Beachte, dass wir nicht ausdrücklich angeben mussten, dass das an `printLabel` übergebene Objekt diese Schnittstelle implementiert, wie es in anderen Sprachen nötig sein könnte.
Hier zählt nur die Form. Wenn das Objekt, das wir an die Funktion übergeben, die aufgeführten Anforderungen erfüllt, ist es erlaubt.

Es lohnt sich zu erwähnen, dass die Typprüfung keine bestimmte Reihenfolge der Eigenschaften verlangt, sondern nur, dass die von der Schnittstelle verlangten Eigenschaften vorhanden sind und den verlangten Typ haben.

## Optionale Eigenschaften

Nicht alle Eigenschaften einer Schnittstelle müssen erforderlich sein.
Manche gibt es nur unter bestimmten Bedingungen oder gar nicht.
Solche optionalen Eigenschaften sind beliebt bei Mustern wie „Options-Objekten“ (option bags), bei denen du einer Funktion ein Objekt übergibst, in dem nur ein paar Eigenschaften gesetzt sind.

Hier ist ein Beispiel für dieses Muster:

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

Schnittstellen mit optionalen Eigenschaften werden ähnlich wie andere Schnittstellen geschrieben, wobei jede optionale Eigenschaft in der Deklaration durch ein `?` am Ende des Eigenschaftsnamens gekennzeichnet wird.

Der Vorteil optionaler Eigenschaften ist, dass du diese möglicherweise vorhandenen Eigenschaften beschreiben kannst und trotzdem die Verwendung von Eigenschaften verhinderst, die nicht Teil der Schnittstelle sind.
Hätten wir zum Beispiel den Namen der Eigenschaft `color` in `createSquare` falsch geschrieben, bekämen wir eine Fehlermeldung:

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

## Prüfung auf überzählige Eigenschaften

In unserem ersten Beispiel mit Schnittstellen hat TypeScript uns erlaubt, `{ size: number; label: string; }` an etwas zu übergeben, das nur `{ label: string; }` erwartet hat.
Außerdem haben wir gerade optionale Eigenschaften kennengelernt und gesehen, wie nützlich sie bei sogenannten „Options-Objekten“ sind.

Wenn du beides jedoch unbedacht kombinierst, kannst du dir genauso ins eigene Knie schießen wie in JavaScript.
Nehmen wir zum Beispiel unser letztes Beispiel mit `createSquare`:

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

Beachte, dass das an `createSquare` übergebene Argument *`colour`* statt `color` geschrieben ist.
In reinem JavaScript schlägt so etwas stillschweigend fehl.

Du könntest argumentieren, dass dieses Programm korrekt typisiert ist, da die Eigenschaften `width` kompatibel sind, keine Eigenschaft `color` vorhanden ist und die zusätzliche Eigenschaft `colour` unbedeutend ist.

TypeScript geht jedoch davon aus, dass dieser Code wahrscheinlich einen Fehler enthält.
Objektliterale werden besonders behandelt und durchlaufen eine *Prüfung auf überzählige Eigenschaften*, wenn sie anderen Variablen zugewiesen oder als Argumente übergeben werden.
Wenn ein Objektliteral Eigenschaften hat, die der „Zieltyp“ nicht hat, bekommst du einen Fehler.

```ts
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```

## Funktionstypen

Schnittstellen können die vielen verschiedenen Formen beschreiben, die JavaScript-Objekte annehmen können.
Neben Objekten mit Eigenschaften können Schnittstellen auch Funktionstypen beschreiben.

Um einen Funktionstyp mit einer Schnittstelle zu beschreiben, geben wir der Schnittstelle eine Aufrufsignatur.
Das ist wie eine Funktionsdeklaration, bei der nur die Parameterliste und der Rückgabetyp angegeben sind. Jeder Parameter in der Parameterliste braucht sowohl einen Namen als auch einen Typ.

```ts
interface SubstrFunc {
    (source: string, index: number): string;
}
```

Einmal definiert, können wir diese Funktionstyp-Schnittstelle wie andere Schnittstellen verwenden.
Hier zeigen wir, wie du eine Variable eines Funktionstyps erstellst und ihr einen Funktionswert desselben Typs zuweist.

```ts
let mySearch: SubstrFunc;
mySearch = function (src: string, index: number): string {
    return src.substr(index)
}
```

Damit Funktionstypen die Typprüfung bestehen, müssen die Namen der Parameter nicht übereinstimmen.
Wir hätten das obige Beispiel zum Beispiel auch so schreiben können:

```ts
let mySearch: SubstrFunc;
mySearch = function (src: string, i: number): string {
    return src.substr(i)
}
```

Funktionsparameter werden einzeln geprüft, wobei die Typen an jeder entsprechenden Parameterposition miteinander verglichen werden.
Wenn du gar keine Typen angeben willst, kann die kontextbezogene Typisierung von TypeScript die Argumenttypen ableiten, da der Funktionswert direkt einer Variablen vom Typ `SubstrFunc` zugewiesen wird.
Auch der Rückgabetyp unseres Funktionsausdrucks ergibt sich hier aus den Werten, die er zurückgibt (hier `false` und `true`).
Hätte der Funktionsausdruck Zahlen oder Strings zurückgegeben, hätte uns die Typprüfung gewarnt, dass der Rückgabetyp nicht zu dem in der Schnittstelle `SubstrFunc` beschriebenen Rückgabetyp passt.

```ts
let mySearch: SubstrFunc;
mySearch = function (src, i): string {
    return src.substr(i)
}
```

Beachte, dass du einen Funktionstyp (ohne Schnittstelle) auch gleichwertig so angeben kannst:
```ts
type SubstrFunc = (source: string, index: number) => string;
```

## Klassentypen

### Eine Schnittstelle implementieren

Eine der häufigsten Verwendungen von Schnittstellen in Sprachen wie C# und Java, nämlich ausdrücklich zu erzwingen, dass eine Klasse einen bestimmten Vertrag erfüllt, ist auch in TypeScript möglich.

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

Du kannst in einer Schnittstelle auch Methoden beschreiben, die in der Klasse implementiert werden, wie wir es im folgenden Beispiel mit `setTime` tun:

```ts

type Date = number

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

Schnittstellen beschreiben die öffentliche Seite der Klasse, nicht die öffentliche und die private Seite.
Daher kannst du mit ihnen nicht prüfen, ob eine Klasse auch bestimmte Typen auf der privaten Seite der Klasseninstanz hat.

## Schnittstellen erweitern

Wie Klassen können auch Schnittstellen einander erweitern.
So kannst du die Mitglieder einer Schnittstelle in eine andere übernehmen, was dir mehr Flexibilität gibt, deine Schnittstellen in wiederverwendbare Bausteine aufzuteilen.

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{ color: "blue", sideLength: 10 }
```

Eine Schnittstelle kann mehrere Schnittstellen erweitern und so eine Kombination aus allen diesen Schnittstellen bilden.

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

## Hybride Typen

### ~hint

Static TypeScript erlaubt derzeit keine hybriden Typen, wie sie unten beschrieben werden.

### ~

Wie bereits erwähnt, können Schnittstellen die vielfältigen Typen beschreiben, die in echtem JavaScript vorkommen.
Wegen der dynamischen und flexiblen Natur von JavaScript triffst du gelegentlich auf
ein Objekt, das als Kombination einiger der oben beschriebenen Typen funktioniert.

Ein Beispiel dafür ist ein Objekt, das sowohl als Funktion als auch als Objekt mit zusätzlichen Eigenschaften dient:

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

Wenn du mit JavaScript von Drittanbietern arbeitest, musst du eventuell Muster wie das obige verwenden, um die Form des Typs vollständig zu beschreiben.

## Schnittstellen, die Klassen erweitern

### ~hint

Static TypeScript erlaubt derzeit keine Schnittstellen, die Klassen erweitern, wie unten beschrieben.

### ~

Wenn ein Schnittstellentyp einen Klassentyp erweitert, erbt er die Mitglieder der Klasse, aber nicht deren Implementierungen.
Es ist so, als hätte die Schnittstelle alle Mitglieder der Klasse deklariert, ohne eine Implementierung bereitzustellen.
Schnittstellen erben sogar die privaten und geschützten Mitglieder einer Basisklasse.
Das bedeutet: Wenn du eine Schnittstelle erstellst, die eine Klasse mit privaten oder geschützten Mitgliedern erweitert, kann dieser Schnittstellentyp nur von dieser Klasse oder einer ihrer Unterklassen implementiert werden.

Das ist nützlich, wenn du eine große Vererbungshierarchie hast, aber festlegen willst, dass dein Code nur mit Unterklassen funktioniert, die bestimmte Eigenschaften haben.
Die Unterklassen müssen außer der gemeinsamen Basisklasse nichts miteinander zu tun haben.
Zum Beispiel:

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

Im obigen Beispiel enthält `SelectableControl` alle Mitglieder von `Control`, einschließlich der privaten Eigenschaft `state`.
Da `state` ein privates Mitglied ist, können nur Nachfahren von `Control` die Schnittstelle `SelectableControl` implementieren.
Denn nur Nachfahren von `Control` haben ein privates Mitglied `state`, das aus derselben Deklaration stammt, und das ist Voraussetzung dafür, dass private Mitglieder kompatibel sind.

Innerhalb der Klasse `Control` kann über eine Instanz von `SelectableControl` auf das private Mitglied `state` zugegriffen werden.
Effektiv verhält sich ein `SelectableControl` wie ein `Control`, von dem bekannt ist, dass es eine Methode `select` hat.
Die Klassen `Button` und `TextBox` sind Untertypen von `SelectableControl` (weil beide von `Control` erben und eine Methode `select` haben), die Klassen `Image` und `Location` jedoch nicht.
