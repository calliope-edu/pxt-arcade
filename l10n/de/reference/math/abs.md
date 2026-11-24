# abs

Der Betrag oder absolute Wert einer Zahl.

```sig
Math.abs(-5);
```

Der Betrag ist der Wert einer Zahl ohne ihr *Vorzeichen* (+ oder -). Der Betrag von -5 ist 5 und der Betrag von 5 ist auch 5. Der Betrag wird manchmal auch *absoluter Wert* genannt.

## Parameter

* **x**: Die [Zahl](/types/number) deren Betrag berechnet werden soll. Dies kann eine negative Zahl (`-1`), positive Zahl (`6`) oder `0` sein.

## Rückgabewert

* eine [Zahl](/types/number) das ist der absolute Wert der Zahl in `x`.

## Beispiel #example

Finde den Betrag von `-34`. Mach einige Überprüfungen, um sicherzustellen, dass der Betrag wirklich `34` ist. Setze den Wert auf `0` wenn die Überprüfung fehlschlägt.

```blocks
let pos = Math.abs(-34);
if (pos > 0) {
    if (pos != 34) {
        pos = 0;
    }
} else {
    pos = 0;
}
```