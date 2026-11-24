# Funktionsdefinition

Der Name, die Argumente und der Code einer Funktion.

```block
function doSomething(){}
```

Mit einer Funktion kannst du ein Stück Code erstellen, das du in deinem Programm wiederverwenden kannst. Das ist praktisch, weil
du Code, den du immer wieder verwenden willst, in eine Funktion packen kannst. Anstatt denselben Code an viele
Stellen in deinem Programm zu kopieren, kannst du einfach eine selbst erstellte Funktion verwenden, und der gesamte Code darin wird wie ein einziger
Block verwendet.

## Das Wort _function_

Alle Funktionsdefinitionen beginnen mit dem Wort **function**. Das bedeutet, dass hier die Definition beginnt.

```typescript
function myFunction() {
}
```

## Name

Eine Funktion hat einen eindeutigen _Namen_. Du gibst einer Funktion außerdem einen Namen, der eine Vorstellung davon gibt, was
der Code in der Funktion tut. Wenn du eine Funktion erstellen willst, die alle LEDs auf Grün setzt, könntest du
die Funktion **setAllGreen** nennen. So haben du und alle anderen, die sich deinen Code ansehen, eine Vorstellung davon, was
die Funktion tun wird.

```blocks
function setAllGreen() {
    let lightsOn = true
}
```

Wenn du Funktionen mit den Namen **function1**, **function2** und **function3** hättest, wären sie zwar eindeutig, aber
du wüsstest beim nächsten Blick auf deinen Code wahrscheinlich nicht mehr, was jede davon tut. Deshalb ist es
am besten, deinen Funktionen Namen zu geben, die dir sagen, was der Code darin erledigen soll.

## Rückgabewert

Eine Funktion kann einen Wert an dein Programm [zurückgeben](/types/function/return). Ein Rückgabewert ist meist das Ergebnis einer Berechnung oder der Status einer Operation, die in deiner Funktion stattgefunden hat.

```blocks
function weAreHappy() {
    return true
}
```

## Parameter

Wenn du deiner Funktion Daten übergeben willst, kannst du einen oder mehrere _Parameter_ hinzufügen. Das sind Werte, die du an die Funktion sendest. Parameter funktionieren innerhalb der Funktion wie Variablen.

```blocks
function square(side: number) {
	return side * side
}
```

Eine Funktion kann auch mehrere Parameter haben.

```blocks
function volume(side1: number, side2: number, side3: number) {
    return side1 * side2 * side3
}
```

Die Parameter können verschiedene [Typen](/types) haben. Wenn du zum Beispiel eine Funktion erstellen willst, die zwei Zeichenketten aneinanderhängt, könntest du zwei Zeichenketten-Parameter und einen Wahrheitswert-Parameter verwenden, der angibt, welche Zeichenkette zuerst kommt.

```blocks
function addStrings(stringA: string, stringB: string, first: boolean) {
    if (first) {
        return stringA + stringB
    } else {
        return stringB + stringA
    }
}
```
### ~ hint

#### Den Parameter herunterziehen

In Blöcken kannst du einen Parameter aus dem Funktionsblock herausziehen und ihn als Variable in den Code innerhalb der Funktion ablegen.

Ziehe den Parameter ``||variables:message||`` aus der Funktion **repeat** heraus.

```block
function repeat(message: string) {
    let repeated = ""
    for (let index = 0; index < 3; index++) {
        repeated += "hello" + ", "
    }
}
```

Verwende ihn dann als Variable, um die Zeichenkette **"hello"** zu ersetzen.

```block
function repeat(message: string) {
    let repeated = ""
    for (let index = 0; index < 3; index++) {
        repeated += message + ", "
    }
}
```

### ~

## Rumpf

Der _Rumpf_ der Funktion ist der Code innerhalb des Funktionsblocks. Hier passiert die Arbeit der Funktion.

```blocks
let side = 25;
let square = 0;

function squared( ) {
    square = side * side;
}
```

## Beispiel

Erstelle eine Funktion, die den Durchschnitt von Quiz-Punktzahlen in einer Liste berechnet.

```blocks
let scores = [9, 5, 3, 1, 6, 3, 5, 7];
let average = 0;

function averageScore( ) {
    let count = 0;
    for (let score of scores) {
        count += score;
    }
    average = count / scores.length;
}
```

## Siehe auch #seealso
 
[Aufruf](/types/function/call),
[return](/types/function/return)

