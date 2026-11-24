# Ziffernfarbe setzen

Lege die Farbe der Segmente für eine Zähleranzeige fest.

```sig
sevenseg.createCounter().setDigitColor(0)
```

Die Farbe für die Ziffern des Zählers wird aus einer der Farben der aktuellen Palette gewählt.

## Parameter

* **color**: eine Farb-[Zahl](/types/number) aus der aktuellen Palette, die für die Segmente der Zähleranzeige gesetzt wird.

## Beispiel

Erstelle einen Zähler und ändere die Ziffernfarbe.

```blocks
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 3)
myCounter.setDigitColor(5)
game.onUpdateInterval(1000, function () {
    myCounter.count += 1
})
```
## Siehe auch

[Eigenschaften](/reference/sevenseg/digitcounter/properties)

```package
sevenseg
```
