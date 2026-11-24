# Beschleunigung

Ermittle den Beschleunigungswert (Milli-g) in einer von drei Dimensionen oder die kombinierte Kraft in alle Richtungen (x, y und z).

Finde die Beschleunigung des @boardname@ heraus (wie schnell er schneller oder langsamer wird).

```sig
input.acceleration(Dimension.X);
```

## ~hint

Beschleunigung misst du in **Milli-g**, das ist 1/1000 eines **g**.
Ein **g** ist so viel Beschleunigung, wie du durch die Erdanziehung bekommst.

## ~

## Parameter

* **dimension**: die Richtung, in der du die Beschleunigung prüfst, oder die Gesamtstärke der Kraft.
>`x`: Beschleunigung nach links und rechts.<br/>
`y`: Beschleunigung nach vorne und hinten.<br/>
`z`: Beschleunigung nach oben und unten.<br/>
`strength`: die resultierende Stärke der Beschleunigung aus allen drei Dimensionen (Richtungen).

### ~hint

**Kräfte im Raum**

Da wir nicht auf einer flachen Welt leben, wirken Kräfte im dreidimensionalen Raum. Wenn sich ein Objekt nicht genau in Richtung einer Achse bewegt, brauchen wir eine Möglichkeit, seine Beschleunigung aus den Werten aller Achsen zusammen zu berechnen.

Wenn du deinen @boardname@ auf einen ebenen Tisch legst und ihn schräg anschiebst, hast du eine Beschleunigung in zwei Dimensionen. Die Beschleunigung in diese Richtung findest du genauso, wie du die lange Seite eines Dreiecks aus den beiden kürzeren Seiten (**X** und **Y**) berechnest: 

```strength2D = Math.sqrt((accelX * accelX) + (accelY * accelY))```

If you decide to lift your @boardname@ off the table, then you've just added another dimension, so insert the acceleration value for the **Z** axis into the equation:

```strength3D = Math.sqrt((accelX * accelX) + (accelY * accelY) + (accelZ * accelZ))```

Diese Berechnung nennt man die [euklidische Norm](https://en.wikipedia.org/wiki/Euclidean_norm) der Beschleunigung.

### ~

## Rückgabewert

* eine [Zahl](/types/number), die die Stärke der Beschleunigung angibt. Wenn der @boardname@ flach mit dem Bildschirm nach oben auf einer Fläche liegt, ist `x` gleich `0`, `y` gleich `0`, `z` gleich `-1023` und `strength` gleich `1023`.

## Beispiel: Balkendiagramm #example

Schreibe die Beschleunigung des @boardname@ in die Konsole.

```blocks
forever(() => {
    console.logValue("accel", input.acceleration(Dimension.X))
    pause(500)
})
```

## Siehe auch #seealso

[setze Beschleunigungsmesser-Bereich](/reference/input/set-accelerometer-range),
[Lichtstärke](/reference/input/light-level)

```package
accelerometer
```
