# Ziffer erstellen

Erstelle eine Sieben-Segment-Ziffer und zeige sie auf dem Bildschirm an.

```sig
sevenseg.createDigit(SegmentStyle.Thick, 0)
```

Eine Sieben-Segment-Ziffer zeigt ein Zahlzeichen oder einige Buchstaben an, indem sie Segmente verwendet, um das Zeichen darzustellen. So können Programme elektronische Ziffernanzeigen für Spiele nachbilden.

Beim Erstellen der Segmentanzeige wählst du die Pixelbreite, also die Dicke, der Segmente. Außerdem kann die Segmentanzeige zwei Größen haben: volle oder halbe Skalierung. Standard ist `full`.

## Parameter

* **thickness**: die Dicke der Segmente in der Ziffernanzeige:
>* `thick`: dicke Pixelbreite
>* `medium`: mittlere Pixelbreite
>* `narrow`: schmale Pixelbreite
>* `thin`: dünne Pixelbreite
>* `blank`: Segmente sind ausgeblendet
* **value**: der anfängliche Ziffernwert, der angezeigt wird.

## Beispiel

Erstelle eine Sieben-Segment-Ziffer und setze die Ziffernfarbe auf Grün. Setze jede halbe Sekunde den Ziffernwert auf eine Zufallszahl zwischen `0` und `9`.

```blocks
let myDigit = sevenseg.createDigit()
myDigit.setDigitColor(7)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 9)
})
```
## Siehe auch

[Skalierung setzen](/reference/sevenseg/sevensegdigit/set-scale)

```package
sevenseg
```
