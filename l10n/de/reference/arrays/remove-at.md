# remove At

Entfernt ein Element an einer bestimmten Position aus einem Array.

```sig
[""].removeAt(0)
```

Die Größe des Arrays schrumpft um eins. Das Element wird aus dem Array an der gewünschten Position entfernt. Alle anderen Elemente hinter dem entfernten werden nach unten in die nächste niedrigere Position verschoben. Also wird ein Array mit den Zahlen `4, 5, 9, 3, 2` zu `4, 5, 3, 2`, wenn `9` an Position `2` entfernt wird. In Blöcken sieht es so aus:

```block
let myNumbers = [4, 5, 9, 3, 2]
let item = myNumbers.removeAt(2)
```

## Parameter

* **index**: die Position im Array, von der das Element abgerufen werden soll.

## Rückgabewert

* das Element im Array aus der gewählten Position.

## Beispiel

Entferne die gefährlichste Strahlenbelastung von der Liste.

```block
let radLevels = ["alpha", "beta", "gamma"]
let level = radLevels.indexOf("gamma")
let unzapped = radLevels.removeAt(level)
```

## Siehe auch

[remove at (no return value)](/reference/arrays/remove-at-statement), [insert at](/reference/arrays/insert-at)