# substr (Substring)

Nimm einen Teil aus einem String um einen kleineren String (substring) zu erhalten.

```sig
"".substr(0, 0)
```

Du kannst einen Teil eines anderen Strings kopieren, indem du einen *Substring* davon nimmst. Ein neuer Substring entsteht, indem eine bestimmte Anzahl von Zeichen aus dem ersten String kopiert wird, beginnend an einer Startposition.

Du kannst einen String erstellen, der nur das Wort `"dort"` aus einem größeren String, welcher `"Hallo dort!!!` ist, enthält. Um dies zu machen, wird ein Substring ab Position `6` kopiert, der dann die nächsten `5` Zeichen enthält. Dies macht man so:

```block
let there = "Hello there!!!".substr(6, 5)
```

Wenn der Substring bis zum Ende des ersten Strings kopiert werden soll, gibst du nur eine Startposition an und lässt den Parameter ***length*** entweder weg oder setzt ihn auf `0`. Dies kopiert alles aus dem ersten String ab der Position `6`. Der Substring enthält in diesem Fall dann `"dort!!!"`.

```block
let there = "Hello there!!!".substr(6)
// - or -
let there = "Hello there!!!".substr(6, 0)
```

## Parameter

* **start**: eine [Zahl](/types/number), die die Position ist, ab der aus dem ursprünglichen String kopiert wird. 
* **length**: (optional) eine [Zahl](/types/number), die die Anzahl der Zeichen ist, die aus dem ursprünglichen String kopiert werden. Wenn *length* fehlt oder `0` ist, wird der Rest des Strings ab *start* kopiert. Wenn *length* kleiner als `0` ist, wird ein String ohne Inhalt (leerer String) zurückgegeben.

## Rückgabewert

* ein neuer [String](/types/string), der ein Teil des ursprünglichen Strings ist.

## Beispiel

Kopiere die Nomen aus diesem Satz in zwei kleinere Strings.

```blocks
let sentence = "The mountains have snow"
let mountains = sentence.substr(4, 9)
let snow = sentence.substr(19)
```

## Siehe auch

[Zeichen an](/reference/text/char-at)