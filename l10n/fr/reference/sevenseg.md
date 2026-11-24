# SevenSeg

Crée et utilise des afficheurs à 7 segments pour des chiffres et des compteurs.

## Compteurs

```cards
sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
sevenseg.createCounter().setDigitColor(0)
```

## Chiffres

```cards
sevenseg.createDigit(SegmentStyle.Thick, 0)
sevenseg.createDigit().setDigitColor(0)
sevenseg.createDigit().setRadix(SegmentScall.Half)
sevenseg.createDigit().setScale(SegmentScall.Half)
```

## Voir aussi

[créer un compteur](/reference/sevenseg/create-counter), [créer un chiffre](/reference/sevenseg/create-digit)

```package
sevenseg
```
