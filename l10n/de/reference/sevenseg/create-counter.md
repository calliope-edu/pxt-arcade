# Zähler erstellen

Erstelle eine Zähleranzeige mit einer oder mehreren Sieben-Segment-Ziffern.

```sig
sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
```

## Parameter

* **thickness**: die Dicke der Segmente in der Zähleranzeige:
>* `thick`: dicke Pixelbreite
>* `medium`: mittlere Pixelbreite
>* `narrow`: schmale Pixelbreite
>* `thin`: dünne Pixelbreite
>* `blank`: Segmente sind ausgeblendet
* **scale**: die Skalierung für die Ziffergröße, `full` (voll) oder `half` (halb).
* **numDigits**: die Anzahl der Ziffern in der Zähleranzeige, höchstens `5`.

## Beispiel

Erstelle einen Zähler mit `5` Ziffern und erhöhe den aktuellen Zählwert alle `100` Millisekunden um eins.

```blocks
let myCounter: DigitCounter = null
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Full, 5)
myCounter.count = 54321
game.onUpdateInterval(100, function () {
    myCounter.count += 1
})
```

```package
sevenseg
```
