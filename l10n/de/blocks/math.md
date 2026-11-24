# Mathematik

Verwenden von [Zahlen](/types/number), Zahlenoperationen und Mathefunktionen.

## Numerische Werte: 0, 1, 2, 6.7, 10.083...

Einfach Zahlen. Manchmal nennt man sie *numerische Literale*.

### Ganzzahlen: Ganze Zahlen

```block
let num = 0;
num = 0;
num = 1;
num = 2;
```

### Dezimalzahlen: Zahlen mit einem Bruchanteil #floatingpoints

Zahlen können auch einen Bruchteil haben. Der Dezimalpunkt liegt zwischen den Ziffern der Zahl. Aber, *Gleitpunkt* Zahlen haben den Dezimalpunkt an jedem beliebigen Punkt zwischen den Ziffern, wie: 3.14159 oder 651.75.

```block
let num = 0
num = 6.7
num = 10.083
```

## Binäre Rechenoperationen (+, -, \*, /)

Die Grundrechenoperationen: Addieren, Subtrahieren, Multiplizieren und Dividieren.

```block
let mehr = 0+1;
let weniger= 0-1;
let verdoppeln= 1*2;
let teilen= 8/4;
```

### Rest (%)

Das ist ein zusätzlicher Operator für die Division. Du findest damit heraus, wie viel Rest bleibt, wenn eine Zahl nicht durch eine Andere teilbar ist.

Wir wissen, dass 4 / 2 = 2, also lässt sich 2 durch 4 teilen. Aber 5 / 2 = 2 mit Rest 1. Somit gibt der Modulo, 5 % 2 = 1, an, welcher Rest nach der Division noch übrig ist.

```block
let rest = 7%4;
```

### Exponent (**)

Das Exponentialzeichen multipliziert die Zahl links mit sich selbst so viele Male wie die Zahl rechts vorgibt. Das bedeutet, 4 ** 2 = 4 \* 4 and 2 ** 3 = 2 \* 2 \* 2. Die Fläche eines Quadrats mit Seiten der Länge `5` ist gleich einer Seite multipliziert mit einer Anderen. Bei einem Quadrat sind alle Seiten gleich, also:

```block
let side = 5;
let area = side * side;
```

Aber mit dem Exponentialzeichen ist dies dasselbe wie:

```block
let side = 5;
let area = side ** 2;
```

Das Volumen eines Würfels entspricht drei Seiten zusammen multipliziert. Die beiden Volumen sind gleich:

```block
let seite = 5;
let volumen1 = seite * seite * seite;
let volumen2 = seite ** 3;
```

## Quadratwurzel

Die Quadratwurzel einer Zahl ist eine andere Zahl, die, wenn sie mit sich selbst multipliziert wird, die ursprüngliche Zahl wird. Sie wissen, dass `2 * 2` = `4` entspricht, also ist die Quadratwurzel von `4` die Zahl `2`. Es heißt *Quadratwurzel* weil der Flächeninhalt eines *Quadrats* aus dem Produkt der Länge zweier gleicher Seiten berechnet wird. Die *Wurzel* ist die Länge einer Seite.

```block
let seite = 5
let quadrat = seite * seite
let wurzel = Math.sqrt(seite)
```

## Absoluter Wert

Der Betrag ist der Wert einer Zahl ohne ihr *Vorzeichen* (+ oder -). Der absolute Wert von -5 ist 5 und der absolute Wert 5 ist auch 5. Der Betrag wird manchmal auch *absoluter Wert* genannt.

```block
let item = Math.abs(-5);
```

## Minimum/Maximum von zwei Werten

Mit den Funktionen min () und max () kannst du die kleinere oder größere von zwei Zahlen erhalten.

* Das Minimum von 2 und 9: **Math.min(2, 9)** entspricht 2.
* Das Maximum von 3 und 9: **Math.max(3, 9)** entspricht 9.

```block
let minval = Math.min(0, 1);
let maxval = Math.max(8, 2);
```

## Runden

Wenn eine Zahl einen Bruchteil hat, kannst du die Zahl so ändern, dass sie der naheste, nächste Ganzzahl-Wert ist. Das nennt man *runden*. Wenn die Zahl `6,78` gerundet wird, wird sie`7` sein, und bei der Runde `9,3` erhältst du `9`. Wenn eine Zahl einen Bruchteil größer oder gleich `0,5` hat, wird die Zahl auf den nächsthöheren Ganzzahlwert aufgerundet. Andernfalls wird sie auf den nächsten niedrigeren Ganzzahl-Wert abgerundet.

Negative Zahlen werden in Richtung des absoluten Wertes gerundet (der absolute Wert von `-8` ist `8`). So wird `-5,23` auf `-5` und `-2,68` auf `-3`.

```block
let gerundet = Math.round(5.5)
```

## Aufrunden

Um eine Zahl zur der nächsten höheren Ganzzahl (Integer) zu ändern, nimmst du den *aufgerundeten* Zahlenwert. Der aufgerundete Wert für `1,234` ist `2` da dies die nächste höhere ganze Zahl ist. Für die negative Zahl von `-3.63` ist ihre aufgerundeter Wert `-3`, da dies die nächste höhere ganze Zahl ist.

```block
nächsthöhere = Math.ceil(8.435)
```

## Abrunden

Um eine Zahl zur nächst kleineren Ganzzahl zu ändern, verwendest du den Wert *abrunden* (floor). Der abgerundete Wert für `8,76` ist `8` da dies die nächste niedrigere ganze Zahl ist. Für die negative Zahl von `6.17` ist der abgerundete Wert `-7`, da dies die nächste niedrigere ganze Zahl ist.

```block
let nächstniedrigere = Math.floor(4.97)
```

## Abschneiden

Der Bruchteil einer Zahl wird durch *abschneiden* entfernt. Wenn eine Zahl den Wert `54.234` hat, ist ihr abgeschnittener Wert `54`. Bei einer negativen Zahl funktioniert das Abschneiden auf die gleiche Weise. Der abgeschnittene Wert von `-34.913` ist `-34`.

```block
let keinBruchteil = Math.trunc(87.23455)
```

## Zufallswert

Erstelle eine beliebige Zahl von einem Mindestwert bis zu einem gewissen Maximalwert. Wenn du eine Zufallszahl bis zu 100 möchtest, verwendest du: **Math.randomRange(0, 100)**.

```block
let myRandom = Math.randomRange(0, 5);
```

## Trigonometrie

Funktionen zum Auffinden von Winkelanzahlen, Seiten von Dreiecken und Positionen auf einem Kreis. Diese Funktionen werden auch verwendet um Informationen über Signalwellen zu erstellen.

### Was ist dein Winkel? Grade oder Bogenmaß

Ein Kompass zeigt, wo Norden ist und das sind 0 Grad (was auch 360 Grad ist). Wenn du direkt in Richtung Osten läufst, wird deine Richtung 90 Grad auf dem Kompass sein. Dies ist auch die Messung des Winkels zwischen dem Pfad deiner Richtung und dem Pfad nach Norden. Wenn du dich selbst nach Norden bewegst und nach rechts drehst (im Uhrzeigersinn) siehst du eine Kompassänderung von 0 Grad, gehe bis 359 Grad, und zurück zu 0 Grad. Eine volle Drehung beträgt also 360 Grad oder einen vollen Kreis.

Eine andere Möglichkeit, Winkel zu messen, ist die Verwendung von Zahlen, die speziell auf die Größe eines Kreises beziehen. Ein Kreis hat zwei wichtige Zahlen, die mit ihm zusammenhängen. Sie werden *radius* und *pi* genannt. Der Radius ist der Abstand von der Mitte des Kreises zur Außenkante. Vor langer Zeit haben die Leute gelernt dass, egal wie groß ein Kreis ist, wenn Sie die Länge der Außenkante durch die Länge ihres Radius teilen, sie immer die gleiche Zahl zurückerhalten. Sie haben sich entschieden, diese Zahl die Kreiszahl ***Pi*** zu nennen. Tatsächlich ist es **2** mal ***pi***, weil sie die gesamte Länge über den Kreis verwendet haben, was zwei Längen des Radius entspricht.

Jetzt müssen wir uns um den Radius keine Sorgen mehr machen, wir können einfach einen Teil von **2_pi_** verwenden, um zu bestimmen, wo sich irgendein Punkt am Rand eines Kreises befindet. Alle Teile oder alle von **2_pi_** werden *Radiant* genannt. Auch für die Messung des Richtungswinkels können wir Radianten verwenden, genau wie beim Kompass. Denn jetzt drehen wir **2_pi_** Radianten um den Kreis anstatt 360 Grad.

### ~hint

**Welche Zahl ist *pi*?**

Wie sich herausstellt, ist ***pi*** eine *irrational* Zahl. Das bedeutet, dass sie einen Bruchteil hat, der mehr Ziffern verwendet, als wir anzeigen können. Also ist es am besten, eine Konstante im Code für den Wert von ***pi*** zu verwenden. Falls du neugierig bist, sind die ersten 32 Ziffern von ***pi*** **3.1415926535897932384626433832795**.

Glücklicherweise kannst du die eingebaute Konstante **Math.PI** verwenden.

### ~

Im Code verwendest du *Radianten* für Winkelmessungen. Alle Mathe-Funktionen für die Trigonometrie verwenden Radianten.

### ~hint

**Verändere Grad zu Radianten**

Was sind 60 Grad im Radianten? Nun, ein Grad ist *(2 \* Math.PI / 360)* Bogenmaß. Oder, um es einfach zu machen, *(Math.PI / 180)* Radianten. So sind 60 Grad *(60 \* Math.PI / 180)* Radianten.

### ~

### Sinus

Ermittele die Länge der vertikalen Seite (nach oben oder unten) eines rechtwinkligen Dreiecks in einem bestimmten Winkel. Aber, der *sinus* Wert ist die Länge der vertikalen Seite, geteilt durch die Länge der längsten Seite, seiner *Hypotenuse*.

Was ist der Sinus von 60 Grad? **Math.sin(60 \* Math.PI / 180)** entspricht 0.5. Die vertikale Seite eines rechtwinkligen Dreiecks ist eine halbe Länge der längsten Seite, wenn der entgegengesetzte Winkel 60 Grad beträgt.

```typescript-ignore
let ySide = Math.sin(60 * Math.PI / 180)
```

### Kosinus

Ermittele die Länge der vertikalen Seite (nach oben oder unten) eines rechtwinkligen Dreiecks in einem bestimmten Winkel. Aber, der *Sinus* Wert ist die Länge der vertikalen Seite, geteilt durch die Länge der längsten Seite, seiner *Hypotenuse*.

Was ist der Sinus von 45 Grad? **Math.cos(45 \* Math.PI / 180)** entspricht 0,707. Die Länge der horizontalen Seite eines rechten Dreiecks beträgt etwa 70 Prozent der Länge der längsten Seite, wenn der Winkel zwischen ihnen 45 Grad beträgt.

```typescript-ignore
let xSide = Math.cos(45 * Math.PI / 180)
```

## Siehe auch

[Zufallsbereich](/reference/math/random-range)