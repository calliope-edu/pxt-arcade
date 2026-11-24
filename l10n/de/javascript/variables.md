# Variablendeklarationen

Eine Variable solltest du mit dem Schlüsselwort `let` deklarieren:

```typescript
let a = 10;
```

## `var` vs. `let`

In JavaScript wurden Variablen traditionell immer mit dem Schlüsselwort `var` deklariert.

```typescript-ignore
var a = 10;
```

Das Konstrukt `var` hat einige [Probleme](http://www.typescriptlang.org/docs/handbook/variable-declarations.html), weshalb `let`-Anweisungen eingeführt wurden. Abgesehen vom Schlüsselwort werden `let`-Anweisungen genauso geschrieben wie `var`-Anweisungen.

```typescript
let a = 10;
```

Der wesentliche Unterschied liegt nicht in der Syntax, sondern in der Semantik, die wir uns jetzt genauer ansehen.

### ~hint

Verwende `let` statt `var`, um eine neue Variable einzuführen!!!

### ~

## Block-Gültigkeitsbereich

Wenn eine Variable mit `let` deklariert wird, gilt das, was manche *lexikalischen Gültigkeitsbereich* oder *Block-Gültigkeitsbereich* nennen. Anders als bei mit `var` deklarierten Variablen, deren Gültigkeitsbereich sich auf die umgebende Funktion ausdehnt, sind Variablen mit Block-Gültigkeitsbereich außerhalb ihres nächsten umgebenden Blocks oder ihrer `for`-Schleife nicht sichtbar.

```typescript-ignore
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}
```

Hier haben wir zwei lokale Variablen `a` und `b`. Der Gültigkeitsbereich von `a` ist auf den Rumpf von `f` beschränkt, der von `b` auf den Block der umgebenden `if`-Anweisung.

Eine weitere Eigenschaft von Variablen mit Block-Gültigkeitsbereich ist, dass sie nicht gelesen oder beschrieben werden können, bevor sie tatsächlich deklariert sind. Diese Variablen sind zwar in ihrem gesamten Gültigkeitsbereich „vorhanden“, aber alle Stellen bis zu ihrer Deklaration gehören zu ihrer *temporal dead zone*. Das ist nur eine gehobene Art zu sagen, dass du vor der `let`-Anweisung nicht auf sie zugreifen kannst – und zum Glück weist TypeScript dich darauf hin.

```typescript-ignore
a++; // illegal to use 'a' before it's declared;
let a;
```

## Erneute Deklarationen

Bei `var`-Deklarationen ist es egal, wie oft du deine Variablen deklarierst – du bekommst immer nur eine:

```typescript-ignore
var x = 10;
var x = 20; 
```

Im obigen Beispiel beziehen sich alle Deklarationen von `x` tatsächlich auf *dasselbe* `x`, und das ist völlig gültig. Das führt oft zu Fehlern. Zum Glück sind `let`-Deklarationen nicht so nachsichtig.

```typescript-ignore
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope
```

## Verdecken (Shadowing)

Das Einführen eines neuen Namens in einem tiefer verschachtelten Gültigkeitsbereich nennt man *Shadowing* (Verdecken). Das ist ein zweischneidiges Schwert: Versehentliches Verdecken kann selbst Fehler verursachen, gleichzeitig aber auch bestimmte Fehler verhindern. Stell dir zum Beispiel eine Funktion `sumMatrix` vor, die `let`-Variablen verwendet.

```typescript
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
```

Diese Version der Schleife berechnet die Summe tatsächlich richtig, weil das `i` der inneren Schleife das `i` der äußeren Schleife verdeckt. Verdecken sollte man *normalerweise* vermeiden, um klareren Code zu schreiben, zum Beispiel so:

```typescript-ignore
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }

    return sum;
}
```

Es gibt zwar Situationen, in denen es sinnvoll sein kann, das Verdecken zu nutzen, aber hier solltest du gut abwägen.

# `const`-Deklarationen

`const`-Deklarationen sind eine weitere Möglichkeit, Variablen zu deklarieren.

```typescript
const numLivesForCat = 9;
```

Sie sind wie `let`-Deklarationen, aber wie ihr Name schon sagt, kann ihr Wert nicht mehr geändert werden, sobald er zugewiesen ist. Mit anderen Worten: Sie haben dieselben Gültigkeitsregeln wie `let`, aber du kannst ihnen keinen neuen Wert zuweisen.
