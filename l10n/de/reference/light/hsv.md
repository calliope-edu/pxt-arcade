# hsv

Wandelt eine HSV-Farbzahl (Farbton, Sättigung, Hellwert) in eine RGB-Farbzahl um.

```sig
light.hsv(255, 255, 255);
```
### Was ist HSV? #hsvdesc

In deinen Programmen wird Farbe durch [RGB](/reference/light/rgb#rgbdesc)-Zahlen beschrieben.
Eine andere Art, Farbe zu erzeugen, ist die **HSV**-Methode. HSV steht für **Farbton** (hue), **Sättigung** (saturation) und
**Hellwert** (value). Klingt kompliziert, aber vielleicht gibt es eine einfache Art, darüber nachzudenken.

Der erste Teil, der **Farbton**, ist die Farbe. Ein Farbton von `0` bedeutet Rot und ein Farbton von `255`
bedeutet Violett. Alle anderen Farben liegen zwischen diesen Zahlen.

Die nächste Zahl, die **Sättigung**, ist die Menge an weißem Licht, die dem _Farbton_ beigemischt wird. Wenn diese
Zahl `0` ist, wird die Farbe des _Farbtons_ ganz ausgewaschen und du bekommst einen Grauton oder vielleicht
einfach Weiß. Wenn du sie aber auf `255` setzt, hast du die volle Menge der _Farbton_-Farbe.

Die letzte Zahl, der **Hellwert**, gibt an, wie dunkel oder hell die Farbe ist. Mit `0` wird jede Farbe
schwarz und mit `255` wird jede Farbe weiß. Eine Zahl dazwischen ergibt deine Farbe in einer bestimmten
Dunkelheit. Natürlich ist `128` eine mittlere Dunkelheit, und du siehst deine
Farbe deutlich, wenn der _Hellwert_ darauf gesetzt ist.

Für ein reines Blau sind die HSV-Einstellungen:

```block
let pureBlue = light.hsv(170, 255, 128)
```
Wenn du eine Mintfarbe magst, verwende diese HSV-Einstellungen:
```block
let mint = light.hsv(85, 128, 217)
```

## Parameter

* **hue**: eine [Zahl](/types/number), die die Farbe ist (zwischen 0 und 255), wie: 92 für Grün
* **sat**: eine [Zahl](/types/number), die die Menge an Weiß in der Farbe ist (zwischen 0 und 255), wie: 51
* **val**: eine [Zahl](/types/number), die die Dunkelheit der Farbe ist (zwischen 0 und 255), wie: 128

## Rückgabewert

* eine [Zahl](/types/number), die der RGB-Wert für die HSV-Einstellungen ist.

## Beispiel

Erstelle eine neue gelbe Farbe für deine Pixel. Probiere die neue Farbe aus, wenn du den Knopf ``A`` drückst.

```blocks
let strip = light.createStrip()
let myYellow = light.hsv(43, 228, 217)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(myYellow)
})
```
## Siehe auch

[``||rgb||``](/reference/light/rgb)

```package
light
```


