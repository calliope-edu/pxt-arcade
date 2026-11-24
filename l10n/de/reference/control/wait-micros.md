# wait Micros

Lass den gerade laufenden Teil des Programms eine Anzahl von Mikrosekunden warten.

```sig
control.waitMicros(10)
```
Der Code im aktuellen Block, zum Beispiel ``||on start||``, ``||control:run in parallel||`` oder
``||control:on event||``, wartet eine bestimmte Zeit. Die Zeit wird in Mikrosekunden angegeben (Millionstel einer Sekunde).

## Parameter

* **micros**: die [Anzahl](/types/number) der Mikrosekunden, die dieser Codeblock warten soll.

## Beispiel #example

Schalte einen Sensor ein, dessen Steuersignal an Pin `D4` angeschlossen ist. Warte `20` Mikrosekunden,
damit der Sensor etwas erfassen kann, und lies dann den Sensorwert an Pin `A4`.

```blocks
pins.D4.digitalWrite(true)
control.waitMicros(20)
let temperature = pins.A4.analogRead()
```

## #seealso
