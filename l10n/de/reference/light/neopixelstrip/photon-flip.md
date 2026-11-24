# photon Flip

Ändert die Richtung, in die sich das Photon entlang des Pixelstreifens bewegt.

```sig
light.createStrip().photonFlip()
```

Das Photon bewegt sich normalerweise von Pixeln mit niedriger Nummer (Pixel: 0, 1, 2, ...)
 zu Pixeln mit höherer Nummer. Mit ``||photon flip||`` kannst du das Photon in die
 entgegengesetzte Richtung bewegen. Jedes Mal, wenn du ``||photon flip||`` verwendest, ändert der Photonenblitz
 seine Richtung und bewegt sich in die andere Richtung.

## Beispiel

Bewege ein Photon `5`-mal vorwärts und rückwärts über den Pixelstreifen.

```blocks
let strip = light.createStrip()
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < strip.length(); j++) {
        strip.photonForward(1)
        pause(50)
    }
    strip.photonFlip()
}
```

## Siehe auch

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```


