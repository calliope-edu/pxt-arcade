# Ziffernfarbe setzen

Lege die Farbe der Segmente für eine Ziffernanzeige fest.

```sig
sevenseg.createDigit().setDigitColor(0)
```

Die Farbe für die Segmente der Ziffer wird aus einer der Farben der aktuellen Palette gewählt.

## Parameter

* **color**: eine Farb-[Zahl](/types/number) aus der aktuellen Palette, die für die Segmente der Ziffernanzeige gesetzt wird.

## Beispiel

Erstelle zwei Sieben-Segment-Ziffern und setze für jede eine andere Farbe.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
let myDigit2 = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.x += myDigit.width * -2 / 3
myDigit2.x += myDigit2.width * 2 / 3
myDigit.setDigitColor(5)
myDigit2.setDigitColor(7)
```
## Siehe auch

[Eigenschaften](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
