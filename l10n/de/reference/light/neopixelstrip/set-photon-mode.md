# Photonen-Modus festlegen

Ändere den Effekt des Photonen-Impulses.

```sig
light.createStrip().setPhotonMode(0)
```

Das Photon kann den Pixelstreifen in der Photonenfarbe einfärben, während sich der
Lichtimpuls bewegt. Das ist der Photonen-Modus `pen down` (Stift unten). Du kannst den Lichtimpuls
auch ohne Farbe darüberlaufen lassen oder sogar die Farbe beim Bewegen löschen lassen.

## Parameter

* **mode**: der Impulseffekt, den das Photon haben soll. Diese sind:
> * `pen down`: lässt jedes Pixel aufleuchten und setzt es auf die Photonenfarbe.
> * `pen up`: lässt jedes Pixel aufleuchten, ohne die Farbe zu setzen.
> * `eraser`: löscht die Photonenfarbe am Pixel, wenn der Impuls es trifft.
> * `off`: schaltet das Photon aus

## Beispiele #exsection

### Hin und her #ex1

Bewege ein lila Photon vorwärts und rückwärts über den Pixelstreifen. Das Photon wechselt den Modus,
sodass es beim Rückwärtslaufen löscht.

```blocks
let strip = light.createStrip()
let forward = true
strip.setPhotonPenHue(191)
forever(() => {
    if (forward) {
        strip.setPhotonMode(PhotonMode.PenDown)
    } else {
        strip.setPhotonMode(PhotonMode.Eraser)
    }
    for (let i = 0; i < strip.length(); i++) {
        strip.photonForward(1)
        pause(100)
    }
    forward = !forward
    strip.photonFlip()
})
```

### Farbe ab, Farbe auf #ex2

Lass ein lila Photon im Modus `pen down` über den Pixelstreifen blitzen. Wechsle den Modus zu
`pen up` und ändere die Photonenfarbe auf Grün. Lass ein weiteres Photon blitzen und sieh, dass die
Farbe lila bleibt.

```blocks
let strip = light.createStrip()
strip.setPhotonPenHue(191)
strip.setPhotonMode(PhotonMode.PenDown)
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}

strip.setPhotonPenHue(86)
strip.setPhotonMode(PhotonMode.PenUp)
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}
```

### An und aus

Bewege das Photon und schalte es aus.

```blocks
let strip = light.createStrip()
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}
strip.setPhotonMode(PhotonMode.Off)
```

## Siehe auch

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color)

```package
light
```

