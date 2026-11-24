# Konstante

Ein häufig verwendeter mathematischer Konstantenwert.

```sig
Math._constant(Math.PI)
```

Es gibt mehrere konstante Werte, die für Berechnungen in Naturwissenschaft und Technik wichtig sind. Der Block ``||math.constant||`` stellt mehrere davon bereit, die du in deinen mathematischen Formeln und Ausdrücken verwenden kannst.

## π

Der Wert von Pi (π), das Verhältnis des Kreisumfangs zum Durchmesser.

```block
Math._constant(Math.PI)
```

### Beispiel

Berechne die Fläche eines Kreises mit dem Radius `4`.

```block
let circle_area = Math.PI * 4**2
```

## e

Die Eulersche Zahl (e), die Basis des natürlichen Logarithmus und der Exponentialfunktion.

```block
Math._constant(Math.E)
```

### Beispiel

Bestimme die Halbwertszeit in Jahren für den radioaktiven Zerfall von Kohlenstoff-14.

```block
let time = 0
let decay = 0.000121
let carbon14 = 1
while (carbon14 > 0.5) {
    carbon14 = Math.E ** (-1 * decay * time)
    time += 1
}
```

## ln(2)

Natürlicher Logarithmus von 2.

```block
Math._constant(Math.LN2)
```

### Beispiel

Finde heraus, wie viele Jahre es dauert, eine Geldanlage bei stetiger Verzinsung mit 5 % Zinsen zu verdoppeln.

```block
let years = Math.LN2 / 0.05
```

## ln(10)

Natürlicher Logarithmus von 10.

```block
Math._constant(Math.LN10)
```

### Beispiel

Wie viele Tage dauert es, bis Bakterien in einer Kultur das 10-Fache der Anfangsmenge erreichen, wenn sich ihre Anzahl jeden Tag verdoppelt?

```block
let days = Math.LN10
```

## log₂(e)

Umrechnung von einem natürlichen Logarithmus in einen Logarithmus zur Basis 2.

```block
Math._constant(Math.LOG2E)
```

Die Konstante log₂(e) ist gleich ln(e) / ln(2), was auch 1 / ln(2) ist.

## log₁₀(e)

Umrechnung von einem natürlichen Logarithmus in einen Logarithmus zur Basis 10.

```block
Math._constant(Math.LOG10E)
```

Die Konstante log₁₀(e) ist gleich 1 / ln(10), was auch 1 / ln(10) ist.

## √½

Die Quadratwurzel aus einhalb (1/2).

```block
Math._constant(Math.SQRT1_2)
```

### Beispiel

Bestimme die Seitenlänge eines Quadrats mit einer Diagonale der Länge 9.

```block
let side = 9 * Math.SQRT1_2
```

## √2

Die Quadratwurzel aus 2.

```block
Math._constant(Math.SQRT2)
```

### Beispiel

Finde heraus, wie viel kürzer der Weg quer über einen quadratischen Parkplatz an einer Straßenecke ist als über den Gehweg an den Seiten. Jede Seite des Parkplatzes ist 50 Meter lang.

```block
let walk_diff = 2 * 50 - 50 * Math.SQRT2
```
