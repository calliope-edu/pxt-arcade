# Zahlenbasis setzen

Lege die Zahlenbasis für eine Ziffernanzeige fest.

```sig
sevenseg.createDigit().setRadix(SegmentScall.Half)
```

Die Zahlenbasis der Ziffer legt fest, in welchem Zahlensystem angezeigt wird. Standard ist `decimal`, also Basis 10, womit die Zahlen `0` bis `9` dargestellt werden können. Es gibt eine besondere Zahlenbasis namens `alpha`, mit der die Anzeige einige alphanumerische Zeichen zeigen kann, die sich mit sieben Segmenten darstellen lassen, zum Beispiel `P` oder `Y`.

## Parameter

* **radix**: die Zahlenbasis der Segmentanzeige:
>* `decimal`: zeigt Dezimalzahlen - `0` bis `9`.
>* `hex`: zeigt Hexadezimalzahlen zur Basis 16 - `0` bis `F`.
>* `octal`: zeigt Oktalzahlen zur Basis 8 - `0` bis `7`.
>* `alpha`: zeigt Werte als alphanumerische Zeichen, zum Beispiel `J`, `U`, `L` oder `Y`.

## Beispiel

Erstelle eine Sieben-Segment-Ziffernanzeige und setze die Zahlenbasis auf `hex`. Wähle zufällig einen Hexadezimalwert, der als Ziffer angezeigt wird.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setRadix(DigitRadix.Hex)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 15)
})
```
## Siehe auch

[Eigenschaften](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
