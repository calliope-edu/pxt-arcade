# SevenSeg

Erstelle und verwende 7-Segment-Ziffern- und Zähleranzeigen.

## Zähler

```cards
sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
sevenseg.createCounter().setDigitColor(0)
```

## Ziffern

```cards
sevenseg.createDigit(SegmentStyle.Thick, 0)
sevenseg.createDigit().setDigitColor(0)
sevenseg.createDigit().setRadix(SegmentScall.Half)
sevenseg.createDigit().setScale(SegmentScall.Half)
```

## Siehe auch

[Zähler erstellen](/reference/sevenseg/create-counter), [Ziffer erstellen](/reference/sevenseg/create-digit)

```package
sevenseg
```