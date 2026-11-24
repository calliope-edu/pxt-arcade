# set Buffered

Schaltet das Zwischenspeichern (Puffern) von Änderungen an den Pixeln ein oder aus.

```sig
light.createStrip().setBuffered(false)
```
Wenn du die Pixelpufferung einschaltest, werden Änderungen an den Pixeln gespeichert und erst angezeigt, wenn im Programm **[show](/reference/light/neopixelstrip/show)** verwendet wird.

Die Pixelpufferung bleibt eingeschaltet, bis du sie wieder ausschaltest, indem du **[setBuffered]()** mit `false` für den Parameter **on** verwendest.

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert, der angibt, ob die Pufferung von Pixeländerungen eingeschaltet (`true`) oder ausgeschaltet (`false`) ist.
>`true`: Pixelpufferung ist eingeschaltet. Pixeländerungen erscheinen erst, wenn [show](reference/light/neopixelstrip/show) verwendet wird.<br/>
`false`: Pixelpufferung ist ausgeschaltet. Pixeländerungen werden automatisch angezeigt, sobald sie passieren.

## Beispiel

Schalte die Pufferung von Pixeländerungen ein, damit die neuen Farben alle auf einmal angezeigt werden.

```blocks
let strip = light.createStrip()
strip.setBuffered(true)
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(2, 0xff0000)
strip.setPixelColor(4, 0xffff00)
strip.show()
```
## Siehe auch

[show](/reference/light/neopixelstrip/show)

```package
light
```


