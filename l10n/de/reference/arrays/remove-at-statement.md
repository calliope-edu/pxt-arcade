# entferne an Position (ohne Rückgabewert)

Entferne ein Element an einer bestimmten Position aus einem Array.

```sig
[""]._removeAtStatement(0)
```

Die Größe des Arrays schrumpft um eins. Das Element wird aus dem Array an der gewünschten Position entfernt. Alle anderen Elemente hinter dem entfernten werden nach unten in die nächste niedrigere Position verschoben. Ein Array mit den Zahlen
`4, 5, 9, 3, 2` wird also zu `4, 5, 3, 2`, wenn `9` am Index `2` aus dem Array entfernt wird. In Blöcken sieht es so aus:

```block
let myNumbers = [4, 5, 9, 3, 2]
myNumbers.removeAt(2)
```

## Parameter

- **index**: die Position im Array, an der das Element entfernt wird.

## Beispiel

Entferne das größte Tier aus der Liste der Primaten.

```block
let primates = ["chimpanzee", "baboon", "gorilla", "macaque"]
let largest = primates.indexOf("gorilla")
primates.removeAt(largest)
```

## Siehe auch

[entferne an Position](/reference/arrays/remove-at), [füge an Position ein](/reference/arrays/insert-at)