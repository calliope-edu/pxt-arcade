# Array

Ein *Array* ist eine Liste sonstiger Elemente eines einfachen (primitiven) Typs.

## #intro

Ein Array ist eine Liste von Elementen, die Zahlen, boolesche Werte oder Zeichenfolgen sind. Arrays haben eine Länge, das ist die Anzahl der Elemente, die sie enthalten. Du bekommst und änderst die Werte von Elementen an verschiedenen Stellen in einem Array. Du findest Elemente in einem Array über ihre Position.

Arrays sind flexibel, sie können in ihrer Größe wachsen und schrumpfen. Du kannst Elemente an beliebiger Stelle hinzufügen und entfernen.

## Ein Array erstellen

Ein Array wird durch Erstellen einer Liste von Elementen erstellt.

```blocks
let scores = [9, 8, 3, 5, 6, 8];
```

Hier wird das Array automatisch zu einem Array aus [Zahlen](/types/number), weil es mit Elementen erstellt wurde, die Zahlen sind.

Du kannst verschiedene Typen, wie [String](/types/string), verwenden.

```blocks
let directions = ["East", "North", "South", "West"];
```

Wenn du ein Array ohne Elemente (leeres Array) erstellen willst, musst du angeben, welchen Typ das Array haben soll. Denn es gibt noch keine Elemente, die den Typ automatisch festlegen.

```typescript
let scores: number[] = [];
```

## Elemente in einem Array

Wenn ein Eintrag zu einem Array hinzugefügt wird, wird er zu einem *Element* des Arrays. Array-Elemente findest du über einen *Index*. Das ist die Position des Elements im Array, oder die *Reihenfolge* der Elemente im Array. Die Positionen in einem Array beginnen mit dem Index `0`. Die erste Stelle im Array ist `0`, die zweite Stelle ist `1` und so weiter.

```blocks
let scores = [9, 8, 3, 5, 6, 8];
let firstScore= scores[0];
let secondScore = scores[1];
```

## Länge von Arrays

Arrays haben immer eine Länge. Das letzte Element eines Arrays hat einen Index von *Länge des Arrays - 1*. Indizes beginnen mit `0`, daher ist der Index des letzten Elements um eins kleiner als die Länge des Arrays.

```blocks
let directions = ["East", "North", "South", "West"];
let count = directions.length;
```

## Fortgeschritten

Arrays sind sehr nützlich, um Informationen zu sammeln und zu ordnen. Es gibt noch weitere fortgeschrittene Operationen und Funktionen, die du mit Arrays verwenden kannst.

Im folgenden Beispiel wird mittels [**insertAt**](/reference/arrays/insert-at) eine Zahl in die Mitte eines Arrays eingefügt.

```blocks
let scores = [8, 5, 9, 3, 2, 4];
scores.insertAt(3, 1);
```

## #examples

### Siehe auch #seealso