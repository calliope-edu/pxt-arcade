# map

Wandelt einen Wert in einem Zahlenbereich in einen Wert eines anderen Zahlenbereiches um.

```sig
Math.map(0, 0, 0, 0, 0)
```

*Map* ist eine Umwandlung eines Zahlbereiches in einen anderen. Wenn ein Hund bis 16 Jahre leben kann und ein Mensch bis 87 Jahre lebt, wie lässt man dann eine 16 Jahre lange Lebensspanne wie eine Lebensspanne von 87 Jahren aussehen? Du wirst sagen, dass ein Hundejahr mehreren Menschenjahren entspricht. Dies ist eine *Zuordnung* von Hundejahren zu Menschenjahren.

Fahrenheit und Celsius sind verschiedene Methoden zur Messung der Temperatur. Celsius verwendet nicht die gleiche Anzahl an Grad wie Fahrenheit. Es gibt also mehr Energie in einem Grad Celsius. Wenn du einen Temperaturwert von Fahrenheit (etwas zwischen Einfrieren und Kochen vielleicht) nach Celsius umwandeln möchtest, kannst du `Math.map(50, 32, 212, 0, 100)` verwenden. Das Mappen verwandelt `50` Grad Fahrenheit in `10` Grad Celsius.

## Parameter

* **Wert**: eine [Zahl](/types/number) die von einem Bereich in einen anderen konvertierert werden soll.
* **fromLow**: die niedrige [Zahl](/types/number) des Bereichs, *von* dem konvertiert werden soll.
* **fromHigh**: die hohe [Zahl](/types/number) des Bereichs *von* der konvertiert werden soll.
* **toLow**: die niedrige [Zahl](/types/number) des Bereichs, *in* den konvertiert werden soll.
* **toHigh**: die hohe [Anzahl](/types/number) des Bereichs, *in * den konvertiert werden soll.

## Rückgabewert

* ein neuer Wert, eine [Zahl](/types/number) die aus dem ursprünglichen **Wert** mit einer Zuordnung aus dem **von**-Bereich in den **zu**-Bereich konvertiert wurde.

# Beispiel #example

Verwende eine Lebensspannenkarte, um das Alter in "Menschenjahren" eines Hundes zu ermitteln, der `7` Jahre alt ist.

```block
let hundeAlter = 7 
let menschenAlter = Math.map(hundeAlter, 1, 16, 15, 87) 
```

## Siehe auch

[begrenze](/reference/math/constrain)