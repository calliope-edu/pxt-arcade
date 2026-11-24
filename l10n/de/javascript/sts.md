# Static TypeScript

### ~ hint

Dies ist ein Entwurf, der das Design von Static TypeScript (STS) beschreibt – nicht exakt das, was implementiert ist, aber ziemlich nah dran. Kommentare sind willkommen.

### ~

[TypeScript](http://typescriptlang.org) ist eine typisierte Obermenge von JavaScript, die es JavaScript-Entwicklern ermöglicht, die Vorteile von Code-IntelliSense, statischer Prüfung und Refactoring zu nutzen, die durch Typen möglich werden. TypeScript ist schrittweise typisiert, das heißt, Typen sind optional. Typinferenz hilft dabei, untypisiertem Code Typen zuzuweisen.

In diesem Dokument definieren wir eine Teilmenge von TypeScript namens Static TypeScript (kurz STS). Sie wurde geschaffen, um mit einer Skriptsprache physische Computer programmieren zu können, die auf Mikrocontrollern mit wenig Speicher basieren. Der erste Einsatz von Static TypeScript ist der [micro:bit](http://microbit.org), der 16 KB RAM hat.

Am besten stellst du dir STS als C#/Java/C++-Teilmenge von TypeScript vor, in der alle Typen zur Kompilierzeit bekannt sind. Das erlaubt eine effiziente Anbindung an eine C++-Laufzeitumgebung (beim micro:bit die [Lancaster University micro:bit DAL](https://github.com/lancaster-university/microbit-dal)). STS versucht, so viel wie möglich von der Semantik von JavaScript beizubehalten, soweit es die Einschränkungen einer statischen Typisierung erlauben.

# Auf Wiedersehen, Any-, Union- und Intersection-Typen und die schlechten Teile

In TypeScript ist der Typ *Any* „der eine Typ, der jeden JavaScript-Wert ohne Einschränkungen darstellen kann“. In TypeScript muss jeder Ausdruck, jeder Wert und jede Funktion eines Programms einen Typ haben, auch wenn der Programmierer ihn nicht ausdrücklich angibt. Laut der TypeScript-Sprachreferenz gilt:

    „An Stellen, an denen kein Typ ausdrücklich angegeben ist und TypeScript keinen ableiten kann, wird der Typ Any angenommen.“
    

STS erlaubt die Typen Any, Union und Intersection nicht. Das hat zur Folge, dass STS Programme verbietet, in denen ein Programmelement viele Arten von Laufzeitwerten bezeichnen kann (zum Beispiel eine Variable, die an einer Stelle der Ausführung ein String und an einer anderen eine Zahl ist, wie es der Union-Typ *string | number* angibt).

Aufgrund dieser Entscheidung sind viele dynamische Funktionen von JavaScript (und damit von TypeScript) nicht in STS enthalten: * die Funktion *eval*; * die Anweisung *with*; * der Zugriff auf die Eigenschaft prototype (auf Wiedersehen, prototypbasierte Vererbung); * berechnete Eigenschaften; * der Zugriff auf den „this“-Zeiger außerhalb einer Klasse; * der typeof-Ausdruck; * Typzusicherungen

STS schließt auch Funktionen aus, die wir für historisch halten, darunter die var-Anweisung und die for-in-Schleife (for-of wird unterstützt). Wenn du meinst, dass eines der oben genannten Programmelemente in einem Einführungskurs in die Programmierung vorkommen sollte, dann sag es jetzt oder schweige für immer.

# Hallo, Static TypeScript!

STS enthält viele der guten Teile von TypeScript, darunter * Code auf oberster Ebene in einer Datei; das „Hallo Welt“-Programm ist wirklich nur eine Zeile – `console.log("Hello world")` * lexikalisch gültige Variablendeklarationen mit `let` und `const` * Klassen mit statischen und Instanzfeldern, Methoden und Konstruktoren; methodenartige Eigenschaften (get/set-Accessoren); das Schlüsselwort `new`; * Interfaces zur Beschreibung der Form von (datensatzbasierten) Daten * verschachtelte Funktionsdefinitionen (mit lexikalischem Gültigkeitsbereich und Rekursion) und Pfeilfunktionen * generische Klassen, Methoden und Funktionen zur Wiederverwendung von Code (Einschränkungen siehe unten) * Namespaces (eine Form von Modulen) * Standard-Kontrollflussanweisungen * `if ... else if ... else`-Anweisungen * Schleifen: `while`-, `do ... while`-, `for(;;)`- und `for ... of`-Anweisungen * `break`/`continue`-Anweisungen; auch mit benannten Schleifen * die `switch`-Anweisung * Standard-Boolesche und arithmetische Ausdrücke * der Bedingungsoperator `?` und verzögert ausgewertete Boolesche Operatoren * alle arithmetischen Operatoren (einschließlich bitweiser Operatoren); * Literale * primitive Literale * Array-Literale `[1, 2, 3]` * Objekt-Literale `{ foo: 1, bar: "two" }` * String-Templates (`` `x is ${x}` ``)

TypeScript-Elemente, die in den vorherigen Abschnitten nicht als Teil von STS genannt wurden, sind vorerst von STS ausgeschlossen (eine Liste dieser Elemente findest du in einem späteren Abschnitt). Wenn wir etwas weggelassen haben, das offensichtlich in STS gehört, lass es uns bitte wissen!

# Typprüfung in STS

Das Typsystem von TypeScript ist sehr umfangreich und hat ein komplexes Konzept von Typkompatibilität und Ersetzbarkeit. STS behält viele der Typprüfungsregeln von TypeScript bei (zum Beispiel strukturelle Subtypisierung), ändert aber das Konzept der Typkompatibilität/Ersetzbarkeit, um Laufzeitfehler zu verringern. Unser Ziel ist es, so viele Fehler wie möglich bereits zur Kompilierzeit zu finden und trotzdem eine ausdrucksstarke Sprache mit Arrays, Funktionen, Klassen und Generics zu behalten. Deshalb verbieten wir zum Beispiel explizite oder implizite Downcasts sowie Bivarianz bei der Subtypisierung von Funktionen.

## Primitive Typen

STS trennt die primitiven (nicht geboxten) Typen *number*, *enum* und *boolean* von Referenztypen (geboxten Typen) wie Strings und Objekten. Das bedeutet, dass Code wie:

```typescript
let a: Object = 3
```

in STS nicht erlaubt ist, da primitive Typen keine Objekte sind (obwohl die primitiven Typen grundlegende Methoden wie `toString` unterstützen).

In einer wesentlichen Abweichung von JavaScript behandelt STS *Zahlen* als 32-Bit-Ganzzahlen statt als Doubles (wie in JavaScript). STS unterstützt noch keine Gleitkommazahlen.

### ~ hint

TODO – keine impliziten Umwandlungen zwischen primitiven Typen oder zwischen primitiven und Objekttypen erlauben. – Derzeit erlauben wir

```typeScript
let x : number = null
basic.showNumber(x)
let y : number = undefined
basic.showNumber(y)
let s: string = null
basic.showString(s)
```

wobei null und undefined in die Zahl 0 umgewandelt werden. Für Zahlen ist das in Ordnung, für Strings aber ziemlich seltsam.

### ~

## Undefined, null und Standardwerte

Static TypeScript stellt Standardwerte für XYZ bereit. Undefined und null werden gleich behandelt.

## Objekttypen

In TypeScript werden Klassen- und Interface-Typreferenzen, Array-Typen, Tupel-Typen und Funktionstypen alle als *Objekttypen* eingestuft, die über strukturelle Subtypisierung zueinander in Beziehung stehen.

In STS sind Klassen, Datensätze (durch Interfaces beschrieben), Arrays, Tupel und Funktionen *getrennte Typen* mit den folgenden Typbeziehungen, die eine echte Teilmenge der Typbeziehungen in TypeScript sind.

### Klassen

In STS stehen Klassen und Datensätze wie in TypeScript über strukturelle Subtypisierung in Beziehung, mit folgenden zusätzlichen Einschränkungen: * Klassen können als Datensätze behandelt werden (über eine Umwandlung von Klasse zu Interface); * Datensätze können nicht als Klassen behandelt werden (Umwandlungen von Interfaces zu Klassen sind nicht erlaubt); * Umwandlungen zwischen Klassen sind nur von Unterklasse zu Oberklasse möglich, wie durch die (transitive Hülle der) *extends*-Klausel festgelegt – nominale Typisierung für Klassen; * Interfaces können keine Klassen erweitern * ein Interface darf nicht denselben Namen wie eine Klasse haben

Die Behandlung von Klassen in STS folgt einer nominalen Typisierung: Man erwartet, dass ein Objekt eines Klassentyps die Implementierung hat, die zu dieser Klasse gehört. Bei rein struktureller Subtypisierung kann man ein Objekt definieren und es dann in einen Klassentyp umwandeln, obwohl die Implementierung des Objekts nichts mit der Implementierung der Klasse zu tun haben muss.

### Funktionen

In STS stehen Funktionen und Methoden über klassische Funktions-Subtypisierung in Beziehung (keine Parameter-Bivarianz wie in TypeScript). Außerdem: * Überladen von Funktionen/Methoden ist nicht erlaubt; * eine Funktion kann nur in ein Interface J umgewandelt werden, das eine einzige Aufrufsignatur hat, die zum Typ der Funktion passt; das Interface J darf keine weiteren Eigenschaften haben

### Arrays

Wie Funktionen können auch Arrays nur in ein Interface J umgewandelt werden, das eine einzige Indexsignatur hat, die zum Typ des Arrays passt; das Interface J darf keine weiteren Eigenschaften haben.

## Optionale Eigenschaften

Interfaces unterstützen optionale Eigenschaften. Folgendes ist gültiges TypeScript

    interface Foo {
       a: number;
       b?: string;
    }
    
    let f: Foo = { a:42 }
    

In TypeScript/JavaScript gibt es im Objekt, auf das f verweist, keine Eigenschaft namens `b`.

## Generics

Da der Typ Any wegfällt, ist es sehr wichtig, Generics zu unterstützen, damit Code für viele Typen wiederverwendet werden kann. STS unterstützt generische Funktionen und Klassen mit folgenden Einschränkungen: * generische Funktionen können nicht als Werte verwendet werden; * verschachtelte Funktionen können nicht generisch sein;

### ~ hint

TODO * Die Typprüfung von Generics sollte Java folgen (das Type Erasure verwendet).

### ~

## Void und Never

TODO (nicht viel)

# Kompilierung von STS

# TODO

[Ausnahmen, reguläre Ausdrücke, Debugging und async müssen noch behandelt werden!!!]
