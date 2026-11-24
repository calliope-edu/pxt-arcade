# vergleiche

Vergleiche zwei Strings an der Reihenfolge der Zeichen.

```sig
"".compare("");
```

Zwei Strings werden anhand der Reihenfolge ihrer Zeichen verglichen. Wenn ein String `A` `"111"` hat, ist er kleiner als ein String mit `"512"`. Ein String mit `"Alles"` ist kleiner als `"Nichts"`, da `'N'` im Alphabet nach `'A'` kommt.

Der String `"abcdefg"` ist größer als `"abcdefa"`. Die Beiden sind fast das Gleiche, unterscheiden sich aber im letzten Zeichen, das des zweiten String ist kleiner als das im ersten. Dadurch ist der gesamte String beim Vergleich kleiner. In Blöcken sieht der Vergleich von diesen Strings so aus:

```block
let iamGreater = false;
if ("abcdefg".compare("abcdefa") > 0) {
    iamGreater = true;
}
```

## Parameter

* **that**: Die [Zeichenkette](/types/string) die mit diesem String vergleicht wird.

## Rückgabewert

* eine [Zahl](/types/number) welche -1, 0 oder 1 ist. Diese Zahlen bedeuten folgendes:

> **-1**: Dieser String ist kleiner als der damit verglichene String.  
> **0**: Dieser String entspricht dem damit verglichenen String.  
> **1**: Diese Zeichenkette ist größer als der damit verglichene String.

## Beispiele #exsection

### Welcher Vogel ist eine Ente #ex1

Finde heraus, welcher Vogel eine `"Ente"` ist.

```blocks
let match = false;
let bird = "Ente";
if (bird.compare("Kraehe") == 0) {
    match = true;
} else if (bird.compare("Gans") == 0) {
    match = true;
} else if (bird.compare("Ente") == 0) {
    match = true;
}
```

### Vergleiche die Vögel #ex2

Finde heraus, wie andere Vögel mit der `"Ente"` verglichen werden.

```blocks
let Voegel= ["Kraehe", "ENTE", "Gans", "Ente", "Adler", "Fischadler"];
let wenigerVoegel = 0;
let mehrVoegel = 0;
let Enten = 0;

for (let Vogel of Voegel) {
    let result = Vogel.compare("Ente");
    if (result < 0) {
        wenigerVoegel++;
    } else if (result > 0) {
        mehrVoegel++;
    } else {
        Enten++;
    }
}
```