# pop

Entfernt das letzte Element aus dem Array und gibt es zurück.

```sig
["Hallo"].pop()
```

Das letzte Element im Array wird entfernt, sodass das Array ein Element kleiner wird.

Wenn du ein Array mit 4 Zahlen hast, z. B. 1, 2, 3 und 4, entfernst du die letzte Zahl aus dem Array indem du sie vom Ende "*abschießt.*" Um die Zahl aus dem Array mit Blöcken zu entfernen mache folgendes:

```block
let thoseNumbers = [1, 2, 3, 4];
let lastNumber = thoseNumbers.pop();
```

## Rückgabewert

* Das letzte Element im Array.

## Beispiel

Räume die Kramschublade aus und kontrolliere, ob die Schere darin ist. Tu dies durch Entfernen der Elemente aus der Schubladen-Liste.

```blocks
let found = false;
let junk = ["paper clip", "pencil", "notepad", "glue", "scissors", "screw driver"];
while (junk.length > 0) {
    if (junk.pop() == "scissors") {
        found = true;
    }
}
```

## Siehe auch

[push](/reference/arrays/push), [shift](/reference/arrays/shift)