# Funktionen

Funktionen sind die grundlegenden Bausteine von Programmen. So erstellst du ganz einfach eine Funktion, die zwei Zahlen addiert:

```typescript
// Named function
function add(x : number, y : number): number {
    return x + y;
}

let sum = add(1, 2);
```

### ~ hint

#### Parametertypen

Du musst für jeden Funktionsparameter einen [Typen](/javascript/types) angeben.

### ~

Funktionen können auf Variablen außerhalb des Funktionskörpers zugreifen. Man sagt dann, dass sie diese Variablen `capture` (einfangen).

```typescript
let z = 100;

function addToZ(x: number, y: number) {
    return x + y + z;
}

let sum = addToZ(1, 2);
```

Fügen wir unserer Funktion add einen Rückgabetyp hinzu:

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

TypeScript kann den Rückgabetyp anhand der return-Anweisungen selbst ermitteln, daher kannst du ihn in vielen Fällen weglassen.

## Optionale und Standardparameter

Die Anzahl der Argumente, die einer Funktion übergeben werden, muss mit der Anzahl der Parameter übereinstimmen, die die Funktion erwartet.

```typescript-ignore
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

In JavaScript ist jeder Parameter optional, und man kann ihn gegebenenfalls weglassen. In diesem Fall ist deren Wert `undefiniert`. Bei TypeScript erreichen wir das, indem wir ein `?` am Ende der Parameter anhängen, die optional sein sollen. Nehmen wir beispielsweise an, dass der Nachname-Parameter von oben optional sein soll:

```typescript-ignore
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

Alle optionalen Parameter müssen hinter den erforderlichen Parametern stehen. Wenn wir den Vornamen anstelle des Nachnamens freiwillig machen wollten, müssten wir die Reihenfolge der Parameter in der Funktion ändern und den Vornamen zuletzt in die Liste einfügen.

In TypeScript können wir auch einen Wert festlegen, den der Parameter annehmen soll, wenn er nicht übergeben wird oder `undefined`ist. Das nennt man default-initialized Parameter. Nehmen wir das vorhergehende Beispiel und setzen den Nachnamen standardmäßg auf `"Smith"`.

```typescript-ignore
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

Default-initialized Parameter, die nach allen erforderlichen Parametern kommen, werden als optional behandelt, und können genau wie optionale Parameter beim Aufruf weggelassen werden. Dies bedeutet, dass optionale Parameter und nachfolgende Standardparameter den gleichen Typ haben, sodass die beiden Funktionen

```typescript
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

und

```typescript
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

den selben Type haben `(firstName: string, lastName?: string) => string`. Der Standardwert von `LastName` verschwindet im Typ, wobei nur die Tatsache zurück bleibt, dass der Parameter optional ist.

Im Gegensatz zu einfachen optionalen Parametern *müssen* Standard-initialisierte Parameter nicht nach erforderlichen Parametern auftreten. Wenn ein standard-initialisierter Parameter vor einem erforderlichen Parameter steht, muss man `undefined` explizit übergeben, um den standardmäßigen Initialwert abzurufen. Beispielsweise könnten wir unser letztes Beispiel mit nur einer Standardinitialisierung für `FirstName`schreiben:

```typescript-ignore
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
```

## Pfeilfunktionen

Pfeilfunktionen (Arrow Functions), auch *Lambda*-Funktionen genannt, bieten eine kompakte Schreibweise für Funktionen. Sie werden in vielen APIs häufig als Ereignis-Handler verwendet. Zum Beispiel:

```typescript
function foo(handler: Action) {
    // call handler ...
}

foo(() => { // arrow function!
   // do something
})
```

Oft speichert eine Funktion wie `foo()` die Pfeilfunktion `handler` in einer Variablen, um den Code darin später auszuführen, wenn eine bestimmte Bedingung eintritt. Pfeilfunktionen sind eine Art Abkürzung, um zusätzlichen Code bereitzustellen, ohne dafür eine eigene, formale Funktion schreiben zu müssen. Deshalb gelten Pfeil- bzw. Lambda-Funktionen als "anonyme" Funktionen.

[Mehr über Pfeilfunktionen lesen...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Anonyme Funktionen

Anonyme Funktionen werden genauso wie Pfeilfunktionen verwendet. Sie heißen "anonym", weil die Funktion keinen Namen hat und nicht über einen Namen aufgerufen wird. Die Funktion wird über ihre *Referenz* gemerkt. Das heißt, entweder merkt sich eine Variable die Funktion, oder die Funktion wird direkt ("inline") verwendet.

Hier ist ein ähnliches Beispiel wie bei den Pfeilfunktionen, aber diesmal verwendet die Funktion `foo()` direkt eine anonyme Funktion:

```typescript
function foo(handler: Action) {
    // call handler ...
}

foo(function() { // use an inline function
   // do something
})
```

Du kannst auch eine Variable die Funktion speichern lassen und diese Variable als Referenz auf die anonyme Funktion verwenden:

```typescript
function foo(handler: Action) {
    // call handler ...
}

let anon = function() { // anonymous function, set it to a variable
    // do something
}

foo(anon)
```