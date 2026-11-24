# rgb

Kombiniere den roten, grünen und blauen Anteil des Lichts zu einer RGB-Farbe.

```sig
light.rgb(255, 255, 255);
```
### Was ist RGB? #rgbdesc

In deinen Programmen wird eine Lichtfarbe durch die Menge von drei einzelnen Farben beschrieben, die
zusammengemischt werden: **Rot**, **Grün** und **Blau**. Diese Farben heißen _Grundfarben_, und alle
anderen Farben sind eigentlich eine Mischung aus ihnen.

Stell dir vor, du nimmst verschiedene Farbtöpfe und mischst sie. Mische gleich viel
rote Farbe mit gleich viel grüner Farbe. Nimm aber keine blaue Farbe. Was
du aus Rot und Grün bekommst, ist Gelb. In deinem Programm kannst du Gelb also so machen:
```block
let yellow = light.rgb(255, 255, 0)
```
Genauso kannst du Pink machen, aber diesmal mit Blau und ohne Grün:
```block
let pink = light.rgb(255, 0, 255)
```

## Parameter

* **red**: eine [Zahl](/types/number) für die Menge an rotem Licht (zwischen 0 und 255), z. B.: 128
* **green**: eine [Zahl](/types/number) für die Menge an grünem Licht (zwischen 0 und 255), z. B.: 51
* **blue**: eine [Zahl](/types/number) für die Menge an blauem Licht (zwischen 0 und 255), z. B.: 255

## Rückgabewert

* eine [Zahl](/types/number), die der RGB-Wert der drei Farbzahlen ist.

## Beispiel

Erstelle einen neuen Gelbton für deine Pixel. Probiere die neue Farbe aus, wenn du Knopf ``A`` drückst.

```blocks
let strip = light.createStrip()
let myYellow = light.rgb(255, 228, 181)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(myYellow)
})
```
[``||hsv||``](/reference/light/hsv)

```package
light
```

