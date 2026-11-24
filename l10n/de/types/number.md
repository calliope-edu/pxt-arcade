# Zahl

Ein Zahlenwert.

### @parent blocks/language

Eine *Zahl* ist ein numerischer Wert, der eine ganze Zahl oder eine rationale Zahl ist. Zahlen werden in mehreren Bytes im _Gleitkomma_-Format gespeichert. So können auch mit Zahlen, die einen Nachkommaanteil haben, genaue Berechnungen durchgeführt werden.

Einige Beispiele für verschiedene Arten von Zahlenwerten:

| Zahl | Art des Werts |
| - | - |
| 67  | positive ganze Zahl |
| -345 | negative ganze Zahl |
| 0 | Null |
| 19.43 | Gleitkommazahl
| -45.245 | negative Gleitkommazahl |
| 0.4567 | gebrochene Gleitkommazahl |
| 8.23e+21 | Gleitkommazahl in Exponentialschreibweise |

### Eine Zahlenvariable deklarieren

Du kannst einer Variablen eine Zahl [zuweisen](/blocks/variables/assign):

#### #declareexample

```block
let num = 42
```

### Arithmetische Operatoren

Die folgenden arithmetischen Operatoren arbeiten mit Zahlen und geben eine [Zahl](/types/number) zurück:

* Addition: `1 + 3`
* Subtraktion: `1 - 3 `
* Multiplikation: `3 * 2`
* Ganzzahlige Division: `7 / 3`
* Modulo ist über die [Mathematik-Bibliothek](/blocks/math) verfügbar

### Vergleichsoperatoren

Die folgenden Vergleichsoperatoren arbeiten mit Zahlen und geben einen [Wahrheitswert](/blocks/logic/boolean) zurück:

* gleich: `(3 + 1) = 4`
* ungleich: `3 != 4`
* kleiner oder gleich: `3 <= 4`
* kleiner als: `3 < 4`
* größer oder gleich: `4 >= 3`
* größer als: `4 > 3`

## #print

### Funktionen, die eine Zahl zurückgeben

Manche Funktionen geben eine Zahl zurück, die du in einer Variablen speichern kannst. 

### #functionreturnexample

```block
let abs = Math.abs(-42)
```

### Mathematische Funktionen

Die [Mathematik-Bibliothek](/blocks/math) enthält mathematische Funktionen. Die Funktion `min` gibt zum Beispiel den kleineren der beiden Eingabeparameter `x` und `y` zurück:

```block
let lowest = Math.min(-42, 1000)
```

### Siehe auch

[Mathematik](/blocks/math), [var](/blocks/variables/var), [Wahrheitswert](/blocks/logic/boolean)

