# insert At

Fügt ein Element an einer bestimmten Position in ein Array ein.

```sig
[0].insertAt(0, 0)
```

Die Größe des Arrays wächst um eins. Das Element wird dem Array an der gewünschten Position hinzugefügt. Wenn es bereits ein Element an dieser Stelle gibt wird dieses und alle anderen Elemente auf die nächste höhere Position verschoben. Ein Array mit den Zahlen `4, 5, 9, 3` wird also `4, 5, 9, 2, 3` sein, wenn `2` an Position 3 eingefügt wird. In Blöcken sieht es so aus:

```block
let myNumbers = [4, 5, 9, 3];
myNumbers.insertAt(3, 2);
```

## Parameter

* **index**: eine [Zahl](/types/number), die die Position im Array angibt, an der das Element eingefügt wird.
* **value**: a value to insert into the array at the position of **index**. Der Wert hat denselben [Typ](/types) wie der Typ, mit dem das Array erstellt wurde. [Nummer](/types/number), [Boolean](/types/boolean), [String](/types/string), etc.

## Beispiel

Erstelle ein sortiertes Array, das die Zahlen eines gemischten Arrays in der Reihenfolge vom niedrigsten zum höchsten Wert beinhaltet.

```blocks
let removed = 0
let jumbled = [4, 5, 2, 1, 6, 9, 0, 3, 8, 7]
let ordered = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let item of jumbled) {
    ordered.insertAt(item, item)
    removed = ordered.removeAt(item + 1)
}
```

## Siehe auch

[remove at](/reference/arrays/remove-at)