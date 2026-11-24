# push

Fügt ein Element am Anfang eines Arrays hinzu.

```sig
["].push("Hallo")
```

Möglicherweise hast du ein Array mit 3 Ziffern wie 1, 2 und 3. Wenn du eine weitere Nummer am Ende hinzufügen möchtest, dann kannst du es in das Array *push*en. Du machst es wie folgt:

```block
let thoseNumbers = [1, 2, 3];
thoseNumbers.push(4);
```

## Parameter

* **item**: das Element, das am Ende des Arrays hinzugefügt werden soll.

## Beispiel

Füge ein weiteres Tier am Ende deiner Liste der Lieblingstiere hinzu.

```blocks
let tiere= ["Katze", "Hund", "Papagei", "Goldfisch"];
tiere.push("Meerschweinchen");
```

## Siehe auch

[pop](/reference/arrays/pop), [unshift](/reference/arrays/unshift)