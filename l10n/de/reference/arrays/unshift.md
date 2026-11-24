# unshift

Fügt ein Element am Anfang eines Arrays hinzu.

```sig
[""].unshift("Hallo")
```

Möglicherweise hast du ein Array mit 3 Ziffern wie 1, 2 und 3. Wenn du eine weitere Nummer am Anfang hinzufügen möchtest, dann kannst du es in das Array *unshift*en. Du machst es wie folgt:

```block
let thoseNumbers = [1, 2, 3];
let head = 0;
head = thoseNumbers.unshift(0);
```

## Parameter

* **item**: das Element, das zur Vorderseite des Arrays hinzugefügt werden soll.

## Beispiel

Erstelle ein Array das einen Zug simuliert. Platziere die Teile des Zuges in der richtigen Reihenfolge.

```blocks
let count = 0
let part = ""
let train: string[] = []
let parts = ["flatcar", "boxcar", "tanker", "engine", "flatcar", "caboose", "boxcar"]
while (parts.length > 0) {
    part = parts.shift()
    if (parts.length > 1) {
        if (part == "engine") {
            parts.push(part)
        } else if (part == "caboose") {
            train.push(part)
        } else {
            count = train.unshift(part)
        }
    } else {
        count = train.unshift(part)
    }
}
```

## Siehe auch

[shift](/reference/arrays/shift), [push](/reference/arrays/push)