# Trigonometrie

Funktionen zum Ermitteln von Winkeln, Seitenlängen von Dreiecken und Positionen auf einem Kreis. Diese Funktionen werden auch verwendet, um Informationen für Wellensignale zu erzeugen.

## Wie ist dein Winkel? Grad oder Radiant

Ein Kompass zeigt, wo Norden ist, und die Richtung dorthin ist 0 Grad (was auch 360 Grad entspricht). Wenn du direkt nach Osten gehst, zeigt deine Richtung auf dem Kompass 90 Grad. Das ist auch das Maß des Winkels zwischen deiner Richtung und der Richtung nach Norden. Wenn du dich nach Norden ausrichtest und dich an einer Stelle nach rechts (im Uhrzeigersinn) drehst, siehst du, wie der Kompass von 0 Grad bis 359 Grad und wieder zurück auf 0 Grad geht. Eine volle Drehung sind also 360 Grad, ein voller Kreis.

Eine andere Art, Winkel zu messen, verwendet Zahlen, die für die Größe von Kreisen besonders sind. Zu einem Kreis gehören zwei wichtige Zahlen. Sie heißen *Radius* und *Pi*. Der Radius ist der Abstand vom Mittelpunkt des Kreises bis zu seinem äußeren Rand. Vor langer Zeit haben Menschen herausgefunden, dass man immer dieselbe Zahl erhält, egal wie groß ein Kreis ist, wenn man die Länge seines äußeren Randes durch die Länge seines Radius teilt. Sie nannten diese Zahl ***Pi***. Eigentlich ist es **2** mal ***Pi***, weil sie die ganze Strecke quer durch den Kreis verwendet haben, die zwei Radiuslängen entspricht.

Jetzt müssen wir uns nicht mehr um den Radius kümmern, sondern können einfach einen Teil von **2_pi_** verwenden, um anzugeben, wo sich ein Punkt auf dem Rand eines Kreises befindet. Ein Teil oder das Ganze von **2_pi_** wird *Radiant* genannt. Wir können Radianten auch verwenden, um einen Richtungswinkel zu messen, genau wie mit dem Kompass. Nur drehen wir uns jetzt **2_pi_** Radianten um den Kreis statt 360 Grad.

### ~hint

#### Welche Zahl ist *pi*?

Wie sich herausstellt, ist ***pi*** eine *irrationale* Zahl. Das bedeutet, dass sie einen Bruchteil hat, der mehr Ziffern verwendet, als wir anzeigen können. Also ist es am besten, eine Konstante im Code für den Wert von ***pi*** zu verwenden. Falls du neugierig bist, sind die ersten 32 Ziffern von ***pi*** **3.1415926535897932384626433832795**.

Glücklicherweise kannst du die eingebaute Konstante **Math.PI** verwenden.

### ~

Im Code verwendest du *Radianten* für Winkelmessungen. Alle Mathe-Funktionen für die Trigonometrie verwenden Radianten.

### ~hint

#### Verändere Grad zu Radianten

Was sind 60 Grad im Radianten? Nun, ein Radiant ist *(2 \* Math.PI / 360)* Radianten. Oder, um es einfach zu machen, *(Math.PI / 180)* Radianten. So sind 60 Grad *(60 \* Math.PI / 180)* Radianten.

### ~

## Sinus

Ermittele die Länge der vertikalen Seite (nach oben oder unten) eines rechtwinkligen Dreiecks in einem bestimmten Winkel. Aber, der *Sinus*-Wert ist die Länge der vertikalen Seite, geteilt durch die Länge der längsten Seite, seiner *Hypotenuse*.

Was ist der Sinus von 60 Grad? **Math.sin(60 \* Math.PI / 180)** entspricht 0.5. Die vertikale Seite eines rechtwinkligen Dreiecks ist eine halbe Länge der längsten Seite, wenn der entgegengesetzte Winkel 60 Grad beträgt.

```typescript-ignore
let ySide = Math.sin(60 * Math.PI / 180)
```

## Kosinus

Ermittele die Länge der horizontalen Seite (nach links oder rechts) eines rechtwinkligen Dreiecks in einem bestimmten Winkel. Aber, der *Kosinus*-Wert ist die Länge der horizontalen Seite, geteilt durch die Länge der längsten Seite, seiner *Hypotenuse*.

Was ist der Kosinus von 45 Grad? **Math.cos(45 \* Math.PI / 180)** entspricht 0,707. Die Länge der horizontalen Seite eines rechtwinkligen Dreiecks beträgt etwa 70 Prozent der Länge der längsten Seite, wenn der Winkel zwischen ihnen 45 Grad beträgt.

```typescript-ignore
let xSide = Math.cos(45 * Math.PI / 180)
```

## Tangens

Der Tangens eines Winkels ist sein Sinus **geteilt** durch den Kosinus. So findest du den Tangens eines Winkels von 30 Grad:

```typescript-ignore
let tangent = Math.tan(30 * Math.PI / 180)
```

Das ist derselbe Wert wie:

```typescript-ignore
let tangent = Math.sin(30 * Math.PI / 180) / Math.sin(30 * Math.PI / 180)
```

## Arkusfunktionen

Die Arkusfunktionen arbeiten umgekehrt wie die anderen trigonometrischen Funktionen. Anstatt aus einem Winkel eine Seitenlänge zurückzugeben, liefern dir die Arkusfunktionen einen Winkel aus der Länge einer Seite eines rechtwinkligen Dreiecks.

### ~ hint

#### Werte am Einheitskreis

Die Arkusfunktionen arbeiten mit Längen für die vertikale und horizontale Seite eines rechtwinkligen Dreiecks, die kleiner oder gleich `1` sind. Der Wert `1` steht für den Radius eines Kreises, der immer die Länge `1` hat und *Einheitskreis* genannt wird. Das bedeutet, dass die vertikale und horizontale Seite eines rechtwinkligen Dreiecks, dessen Radius (Hypotenuse) gleich `1` ist, immer Werte zwischen `0` und `1` haben. Diese Werte werden für die Funktionen **Math.asin()** und **Math.acos()** benötigt.

### ~

### asin

Um einen Winkel des rechtwinkligen Dreiecks aus der Länge der vertikalen Seite zu erhalten, verwende die Funktion **Math.asin()**. Für eine Länge der vertikalen Seite von `0.5` wird ein Wert von `30` Grad zurückgegeben.

```typescript-ignore
let arcSine = Math.asin(0.5)* 180 / Math.PI
```

### acos

Um einen Winkel des rechtwinkligen Dreiecks aus der Länge der horizontalen Seite zu erhalten, verwende die Funktion **Math.acos()**. Für eine Länge der horizontalen Seite von `0.5` wird ein Wert von `60` Grad zurückgegeben.

```typescript-ignore
let arcCosine = Math.acos(0.5)* 180 / Math.PI
```

### atan

Der Arkustangens gibt einen Winkel für den Wert der vertikalen Seite geteilt durch den Wert der horizontalen Seite zurück. Wir wissen, dass ein Dreieck mit gleich langer vertikaler und horizontaler Seite einen Winkel von 45 Grad hat. Wenn wir also die Seiten `x` und `y` des Dreiecks auf denselben Wert setzen, sollte **Math.atan()** einen Radiantwert liefern, der 45 Grad entspricht.

```typescript-ignore
let x = 1
let y = 1
let arcTangent = Math.atan(y / x) * 180 / Math.PI
```

### atan2

Math.atan2() ist Math.atan() sehr ähnlich, nur dass die Werte für die vertikale und horizontale Seite getrennt angegeben werden, statt bereits geteilt zu sein. Bei gleich langen Seiten ergibt sich der Radiantwert, der 45 Grad entspricht, wenn du dieselben Werte für `x` und `y` verwendest.

```typescript-ignore
let x = 1
let y = 1
let arcTangent2 = Math.atan2(y, x) * 180 / Math.PI
```
