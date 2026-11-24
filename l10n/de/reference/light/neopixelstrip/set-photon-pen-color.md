# Photonen-Stiftfarbe festlegen

Ändere die Farbe der Photonen-Pixel auf dem Pixelstreifen.

```sig
light.createStrip().setPhotonPenColor(0)
```

Der Photonen-Effekt ist ein Impuls aus hellem Licht, der sich durch einen Streifen farbiger Pixel bewegt.
Du kannst die Farbe des Photons beliebig ändern.

## Parameter

* eine RGB-Farbe

## Beispiel

Lass ein blaues Photon vorwärts und rückwärts über den Pixelstreifen pulsieren.

```blocks
let strip = light.createStrip()
strip.setPhotonPenColor(0x0000ff)
forever(() => {
    for (let i = 0; i < strip.length(); i++) {
        strip.photonForward(1)
        pause(100)
    }
    strip.photonFlip()
})
```
## Siehe auch

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```

