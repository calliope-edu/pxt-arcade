# Skalierung setzen

Lege die Skalierung für eine Ziffernanzeige fest.

```sig
sevenseg.createDigit().setScale(SegmentScall.Half)
```

Die Sieben-Segment-Ziffer hat zwei Anzeigegrößen, `full` (voll) und `half` (halb). Beim Erstellen wird die Ziffergröße auf `full` gesetzt.

## Parameter

* **scale**: die Skalierung der Segmentanzeige, `full` oder `half`.

## Beispiel

Erstelle eine Sieben-Segment-Ziffernanzeige und setze sie auf `half`-Skalierung.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setScale(SegmentScale.Half)
```

## Siehe auch

[Eigenschaften](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
