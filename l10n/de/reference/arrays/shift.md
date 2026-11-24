# shift

Entfernt das erste Element aus dem Array und gibt es zurück.

```sig
[""].shift()
```

Das erste Element im Array wird entfernt, sodass das Array ein Element kleiner wird.

Wenn du ein Array mit 4 Ziffern, wie 1, 2, 3 und 4, hast, entfernst die erste Nummer aus dem Array indem du sie von vorne weg-schiebst *Shifting* genannt. Um die Nummer aus dem Array in Blöcken zu verschieben, tust du das:

```block
let thoseNumbers = [1, 2, 3, 4];
let firstNumber = thoseNumbers.shift();
```

## Rückgabewert

* das erste Element im Array.

## Beispiel

Finde heraus wie viele ungerade Zahlen es sind, während alle Zahlen aus der Liste entfernt werden.

```blocks
let odds = 0;
let ints = [45, 78, 98, 3, 5, 6, 12, 643, 0, 34, 4];
while (ints.length > 0) {
    if ((ints.shift() % 2) > 0) {
        odds++;
    }
}
```

## Siehe auch

[unshift](/reference/arrays/unshift), [pop](/reference/arrays/pop)