# photon Forward

Bewegt einen Photoneneffekt um eine Anzahl von Schritten entlang des Pixelstreifens.

```sig
light.createStrip().photonForward(0)
```

Der Photoneneffekt ist ein Lichtblitz, der sich entlang des Pixelstreifens bewegt. Um
einen Effekt mit schnellerer Bewegung zu erzeugen, kannst du das Photon um mehr als
ein Pixel auf einmal vorrücken lassen, indem du einfach die Schrittzahl erhöhst.

## Parameter

* **steps**: die [Anzahl](/types/number) der Pixelplätze, um die das Photon bewegt wird

## Beispiel

Bewege ein Photon über die gesamte Länge des Pixelstreifens.

```blocks
let strip = light.createStrip()
for (let i = 0; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(150)
}
```
## Siehe auch

[``||set photon position||``](/reference/light/neopixelstrip/set-photon-position),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip)
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```


