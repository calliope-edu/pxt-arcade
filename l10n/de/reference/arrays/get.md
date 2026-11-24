# get

Ruft einen Wert aus einem Array an einem bestimmten Index ab.

```block
let item = [""][0]
```

## Parameter

* **index**: eine [Zahl,](/types/number) die die Position im Array ist, von der ein Wert gerufen werden soll.

## Rückgabewert

* ein Wert in einem Array, der an dem gewählten Index ist. Der Wert hat den [type](/types) der mit den anderen Elementen im Array übereinstimmt.

### ~hint

**Außerhalb der Grenzen! (Out-of-Bounds)**

Wenn du versuchst, einen Wert von einem beliebigen Ort (Index) nach der aktuellen Länge des Arrays zu erhalten, ist der zurückgegebene Wert die [Zahl](/types/number) `0`.

### ~

## Beispiel

```blocks
let directions = ["Norden", "Süden", "Osten", "Westen"];
let path = "Drehe dich nach " + directions[3];
```

## Siehe auch

[index of](/reference/arrays/index-of)