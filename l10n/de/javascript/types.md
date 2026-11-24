# Typen

Damit Programme nützlich sind, müssen wir mit einigen der einfachsten Dateneinheiten arbeiten können: Zahlen, Strings, Strukturen, booleschen Werten und Ähnlichem.

## Typinferenz

In TypeScript gibt es mehrere Stellen, an denen Typinferenz verwendet wird, um Typinformationen bereitzustellen, wenn keine ausdrückliche Typangabe vorhanden ist. Zum Beispiel in diesem Code

```typescript
let x = 3;
let y = x + 3
```

Für die Variable `x` wird der Typ `number` abgeleitet. Ebenso wird für die Variable `y` der Typ `number` abgeleitet. Diese Art der Inferenz findet statt, wenn Variablen und Member initialisiert, Standardwerte für Parameter festgelegt und Rückgabetypen von Funktionen bestimmt werden.

Alle folgenden Beispiele enthalten eine Typangabe als Beispiel, funktionieren aber genauso ohne sie.

## Boolean

Der einfachste Datentyp ist der Wert `true` oder `false`, der als `boolean`-Wert bezeichnet wird.

```typescript
let isDone: boolean = false;
```

## Zahl

Sowohl ganze Zahlen als auch Zahlen mit Nachkommastellen werden unterstützt. Manchmal werden Zahlen auch *numerische Literale* genannt.

### Ganzzahlen: Ganze Zahlen

Ganzzahlige Werte können in Dezimal-, Hexadezimal-, Binär- und Oktalschreibweise angegeben werden. Wenn die Zahl nicht in Dezimalform geschrieben ist, zeigen spezielle Zeichen an, um welche Form es sich handelt:

* Dezimal: keine besondere Schreibweise
* Hexadezimal: stelle dem Wert `0x` voran
* Binär: stelle dem Wert `0b` voran
* Oktal: stelle dem Wert `0o` voran

```typescript
let decimal: number = 42;
let hexadecimal: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### Gleitkommazahlen: Zahlen mit Nachkommastellen

Zahlen können auch einen Bruchteil haben. Der Dezimalpunkt liegt zwischen den Ziffern der Zahl. Aber, *Gleitpunkt* Zahlen haben den Dezimalpunkt an jedem beliebigen Punkt zwischen den Ziffern, wie: 3.14159 oder 651.75.

```typescript
let num = 0
num = 6.7
num = 10.083
```

## String #string

Wie in anderen Sprachen verwenden wir den Typ `string` für Textdaten. Setze String-Daten in doppelte (`"`) oder einfache Anführungszeichen (`'`).

```typescript
let myColor: string = "blue";
myColor = 'red';
```

Du kannst auch *Template-Strings* verwenden, die sich über mehrere Zeilen erstrecken und eingebettete Ausdrücke enthalten können. Diese Strings werden von Backticks (`` ` ``) umschlossen, und eingebettete Ausdrücke haben die Form `${ expr }`.

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`
```

Das entspricht dieser Deklaration von `sentence`:

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month."
```

## Array #array

Mit Arrays kannst du mit einer erweiterbaren Folge von Werten arbeiten, die über einen ganzzahligen Index angesprochen werden. Array-Typen können auf zwei Arten geschrieben werden. Bei der ersten gibst du den Typ der Elemente an, gefolgt von `[]`, um ein Array dieses Elementtyps zu kennzeichnen:

```typescript
let list: number[] = [1, 2, 3];
```

Die zweite Art verwendet einen generischen Array-Typ, `Array<elemType>`:

```typescript
let list: Array<number> = [1, 2, 3];
```

### ~hint

Beim @boardname@ müssen alle Elemente eines Arrays denselben Typ haben.

### ~

## Enum

Eine hilfreiche Ergänzung zu den Standard-Datentypen von JavaScript ist das `enum`. Wie in Sprachen wie C# ist ein Enum eine Möglichkeit, Mengen von Zahlenwerten freundlichere Namen zu geben.

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

Standardmäßig beginnt die Nummerierung der Enum-Member bei `0`. Du kannst das ändern, indem du den Wert eines Members von Hand festlegst. Zum Beispiel können wir das vorherige Beispiel bei `1` statt bei `0` beginnen lassen:

```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

Oder sogar alle Werte im Enum von Hand festlegen:

```typescript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

## Any

Der TypeScript-Typ `any` wird beim @boardname@ nicht unterstützt.

## Void

`void` bedeutet, dass überhaupt kein Typ vorhanden ist. Du siehst es häufig als Rückgabetyp von Funktionen, die keinen Wert zurückgeben:

```typescript
function warnUser(): void {
    //...
}
warnUser();
```

Variablen vom Typ `void` zu deklarieren ist nicht sinnvoll.

## Null und undefined

Eine Variable hat nicht immer einen Wert. Wenn eine Variable existieren soll, aber keinen Wert eines Typs haben soll, kann sie auf nichts gesetzt werden, also auf `null`. Das ist oft nützlich, um anzuzeigen, dass eine Variable im Moment für die Auswertung keine Bedeutung hat.

```typescript-ignore
if (encoder.active) {
    position = encoder.readPosition();
} else {
    position = null;
}
```

Auf ähnliche Weise zeigt `undefined` an, dass eine Variable keinen Wert hat:

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
