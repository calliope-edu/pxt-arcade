# set Photon Pen Color

Change la couleur des pixels du photon sur la bande de pixels.

```sig
light.createStrip().setPhotonPenColor(0)
```

L'effet photon est une impulsion de lumière vive qui traverse une bande de pixels colorés.
Tu peux donner au photon la couleur que tu veux.

## Paramètres

* une couleur RVB

## Exemple

Fais pulser un photon bleu en avant et en arrière sur la bande de pixels.

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
## Voir aussi

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```


