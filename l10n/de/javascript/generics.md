# Generics

Ein großer Teil der Softwareentwicklung besteht darin, Komponenten zu bauen, die nicht nur gut definierte und einheitliche APIs haben, sondern auch wiederverwendbar sind.
Komponenten, die mit den Daten von heute genauso wie mit den Daten von morgen arbeiten können, geben dir die flexibelsten Möglichkeiten, um große Softwaresysteme aufzubauen.

In Sprachen wie C# und Java ist eines der wichtigsten Werkzeuge zum Erstellen wiederverwendbarer Komponenten *Generics*, also die Möglichkeit, eine Komponente zu erstellen, die mit verschiedenen Typen statt nur mit einem einzigen arbeiten kann.
So können andere diese Komponenten verwenden und dabei ihre eigenen Typen einsetzen.

## Hallo Welt der Generics

Fangen wir mit dem „Hallo Welt“ der Generics an: der Identitätsfunktion.
Die Identitätsfunktion ist eine Funktion, die genau das zurückgibt, was ihr übergeben wird.
Du kannst sie dir ähnlich wie den Befehl `echo` vorstellen.

Ohne Generics müssten wir der Identitätsfunktion einen bestimmten Typ geben:

```ts
function identity(arg: number): number {
    return arg;
}
```

Wir brauchen eine Möglichkeit, den Typ des Arguments so zu erfassen, dass wir ihn auch verwenden können, um anzugeben, was zurückgegeben wird.
Dazu verwenden wir eine *Typvariable*, eine besondere Art von Variable, die mit Typen statt mit Werten arbeitet.

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

Wir haben der Identitätsfunktion jetzt eine Typvariable `T` hinzugefügt.
Mit diesem `T` können wir den Typ erfassen, den der Benutzer angibt (z. B. `number`), damit wir diese Information später verwenden können.
Hier verwenden wir `T` noch einmal als Rückgabetyp. Bei genauerem Hinsehen erkennst du, dass derselbe Typ für das Argument und den Rückgabetyp verwendet wird.
So können wir die Typinformation auf der einen Seite in die Funktion hineingeben und auf der anderen wieder herausbekommen.

Wir sagen, dass diese Version der Funktion `identity` generisch ist, weil sie mit verschiedenen Typen funktioniert.
Sobald wir die generische Identitätsfunktion geschrieben haben, können wir sie auf zwei Arten aufrufen.
Die erste Art ist, der Funktion alle Argumente zu übergeben, einschließlich des Typarguments:

```ts
let output = identity<string>("myString");  // type of output will be 'string'
```

Hier setzen wir `T` ausdrücklich auf `string` als eines der Argumente des Funktionsaufrufs, gekennzeichnet durch `<>` um die Argumente statt `()`.

Die zweite Art ist vielleicht auch die häufigste. Hier verwenden wir die *Typargument-Inferenz* -- das heißt, der Compiler soll den Wert von `T` automatisch anhand des Typs des übergebenen Arguments für uns festlegen:

```ts
let output = identity("myString");  // type of output will be 'string'
```

Beachte, dass wir den Typ nicht ausdrücklich in spitzen Klammern (`<>`) übergeben mussten; der Compiler hat sich einfach den Wert `"myString"` angesehen und `T` auf dessen Typ gesetzt.
Typargument-Inferenz hilft zwar, Code kürzer und lesbarer zu halten, aber manchmal musst du die Typargumente ausdrücklich übergeben, wie im vorherigen Beispiel, wenn der Compiler den Typ nicht ermitteln kann, was bei komplexeren Beispielen vorkommen kann.

## Mit generischen Typvariablen arbeiten

Wenn du anfängst, Generics zu verwenden, wirst du merken, dass der Compiler beim Erstellen generischer Funktionen wie `identity` darauf achtet, dass du generisch typisierte Parameter im Funktionsrumpf korrekt verwendest.
Das heißt, du musst diese Parameter tatsächlich so behandeln, als könnten sie jeden beliebigen Typ haben.

Nehmen wir unsere Funktion `identity` von vorhin:

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

Was, wenn wir bei jedem Aufruf auch die Länge des Arguments `arg` in der Konsole ausgeben wollen?
Wir könnten versucht sein, Folgendes zu schreiben:

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length.toString());  // Error: T doesn't have .length
    return arg;
}
```

Dann meldet der Compiler einen Fehler, weil wir das Element `.length` von `arg` verwenden, aber nirgends gesagt haben, dass `arg` dieses Element hat.
Denk daran: Wir haben vorhin gesagt, dass diese Typvariablen für jeden beliebigen Typ stehen. Jemand, der diese Funktion verwendet, könnte also stattdessen eine `number` übergeben, die kein Element `.length` hat.

Nehmen wir an, wir wollten eigentlich, dass diese Funktion mit Arrays von `T` statt direkt mit `T` arbeitet. Da wir mit Arrays arbeiten, sollte das Element `.length` verfügbar sein.
Wir können das genauso beschreiben, wie wir Arrays anderer Typen erstellen würden:

```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length.toString());  // Array has a .length, so no more error
    return arg;
}
```

Du kannst den Typ von `loggingIdentity` so lesen: „Die generische Funktion `loggingIdentity` nimmt einen Typparameter `T` und ein Argument `arg`, das ein Array von `T`s ist, und gibt ein Array von `T`s zurück.“
Wenn wir ein Array von Zahlen übergeben, bekommen wir ein Array von Zahlen zurück, weil `T` an `number` gebunden wird.
So können wir unsere generische Typvariable `T` als Teil der Typen verwenden, mit denen wir arbeiten, statt als ganzen Typ, was uns mehr Flexibilität gibt.

Wir können das Beispiel auch so schreiben:

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length.toString());  // Array has a .length, so no more error
    return arg;
}
```

Diese Schreibweise für Typen kennst du vielleicht schon aus anderen Sprachen.
Im nächsten Abschnitt zeigen wir, wie du eigene generische Typen wie `Array<T>` erstellen kannst.

## Generische Typen

### ~hint
Static TypeScript unterstützt derzeit keine generischen Funktionen als Werte.
### ~

In den vorherigen Abschnitten haben wir generische Identitätsfunktionen erstellt, die mit verschiedenen Typen funktionieren.
In diesem Abschnitt sehen wir uns den Typ der Funktionen selbst an und wie man generische Interfaces erstellt.

Der Typ generischer Funktionen sieht genauso aus wie der nicht-generischer Funktionen, wobei die Typparameter zuerst aufgeführt werden, ähnlich wie bei Funktionsdeklarationen:

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

Wir hätten im Typ auch einen anderen Namen für den generischen Typparameter verwenden können, solange die Anzahl der Typvariablen und ihre Verwendung übereinstimmen.

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <V>(arg: V) => V = identity;
```

Wir können den generischen Typ auch als Aufrufsignatur eines Objektliteral-Typs schreiben:

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

Das führt uns zu unserem ersten generischen Interface.
Nehmen wir das Objektliteral aus dem vorherigen Beispiel und verschieben es in ein Interface:

```ts
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

In einem ähnlichen Beispiel möchten wir den generischen Parameter vielleicht zu einem Parameter des gesamten Interfaces machen.
So sehen wir, über welche(n) Typ(en) wir generisch sind (z. B. `Dictionary<string>` statt nur `Dictionary`).
Dadurch ist der Typparameter für alle anderen Elemente des Interfaces sichtbar.

```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

Beachte, dass sich unser Beispiel etwas verändert hat.
Statt eine generische Funktion zu beschreiben, haben wir jetzt eine nicht-generische Funktionssignatur, die Teil eines generischen Typs ist.
Wenn wir `GenericIdentityFn` verwenden, müssen wir jetzt auch das passende Typargument angeben (hier: `number`) und legen damit fest, was die zugrunde liegende Aufrufsignatur verwendet.
Zu verstehen, wann du den Typparameter direkt an die Aufrufsignatur und wann an das Interface selbst setzt, hilft dir zu beschreiben, welche Aspekte eines Typs generisch sind.

Neben generischen Interfaces können wir auch generische Klassen erstellen.
Beachte, dass es nicht möglich ist, generische Enums und Namespaces zu erstellen.

## Generische Klassen

Eine generische Klasse hat eine ähnliche Form wie ein generisches Interface.
Generische Klassen haben eine Liste generischer Typparameter in spitzen Klammern (`<>`) nach dem Namen der Klasse.

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

Das ist eine ziemlich wörtliche Verwendung der Klasse `GenericNumber`, aber vielleicht ist dir aufgefallen, dass nichts sie darauf beschränkt, nur den Typ `number` zu verwenden.
Wir hätten stattdessen `string` oder sogar komplexere Objekte verwenden können.

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

Genau wie beim Interface sorgt der Typparameter an der Klasse selbst dafür, dass alle Eigenschaften der Klasse mit demselben Typ arbeiten.

## Generische Einschränkungen

Wie du dich vielleicht an ein früheres Beispiel erinnerst, möchtest du manchmal eine generische Funktion schreiben, die mit einer Gruppe von Typen arbeitet, über deren Fähigkeiten du etwas weißt.
In unserem Beispiel `loggingIdentity` wollten wir auf die Eigenschaft `.length` von `arg` zugreifen, aber der Compiler konnte nicht nachweisen, dass jeder Typ eine Eigenschaft `.length` hat, also warnt er uns, dass wir diese Annahme nicht treffen dürfen.

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length.toString());  // Error: T doesn't have .length
    return arg;
}
```

Statt mit jedem beliebigen Typ zu arbeiten, möchten wir diese Funktion auf alle Typen beschränken,
die auch die Eigenschaft `.length` haben.
Solange der Typ dieses Element hat, lassen wir ihn zu, aber er muss mindestens dieses Element haben.
Dazu müssen wir unsere Anforderung als Einschränkung dafür angeben, was T sein kann.

Dafür erstellen wir ein Interface, das unsere Einschränkung beschreibt.
Hier erstellen wir ein Interface mit einer einzigen Eigenschaft `.length` und verwenden dann dieses Interface und das Schlüsselwort `extends`, um unsere Einschränkung anzugeben:

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length.toString());  // Now we know it has a .length property, so no more error
    return arg;
}
```

Weil die generische Funktion jetzt eingeschränkt ist, funktioniert sie nicht mehr mit jedem beliebigen Typ:

```ts
loggingIdentity(3);  // Error, number doesn't have a .length property
```

Stattdessen müssen wir Werte übergeben, deren Typ alle erforderlichen Eigenschaften hat:

```ts
loggingIdentity({length: 10, value: 3});
```
