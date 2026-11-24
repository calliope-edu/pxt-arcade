# set Photon Hue

Change la **teinte** de couleur du photon sur la bande de pixels.

```sig
light.createStrip().setPhotonPenHue(0)
```

L'effet photon est une impulsion de lumière vive qui traverse une bande de pixels colorés.
Tu peux donner au photon la couleur que tu veux.

La couleur est une **teinte** et non un nombre _RVB_. Cela signifie que la lumière rouge vaut `0` et que la lumière rouge vaut aussi `255`. Toutes les autres couleurs se trouvent entre `0` et `255`. La couleur commence au rouge et revient au rouge.

## Paramètres

* **hue** : un [nombre](/types/number) de 0 (lumière rouge) à 255 (de nouveau lumière rouge) pour
la _teinte_ de la couleur que tu veux.
> Quelques valeurs de teinte courantes :
> * rouge - `0`
> * orange - `29`
> * jaune - `43`
> * vert - `86`
> * turquoise - `125`
> * bleu - `170`
> * violet - `191`
> * magenta - `213`
> * rose - `234`
> * rouge - `255`


## Exemple

Fais pulser un photon arc-en-ciel en avant et en arrière sur la bande de pixels.

```blocks
let hue = 0;
let strip = light.createStrip()
forever(() => {
    strip.setPhotonPenHue(hue)
    for (let i = 0; i < strip.length(); i++) {
        strip.photonForward(1)
        pause(100)
    }
    strip.photonFlip()
    hue = hue + 1;
})
```
## Voir aussi

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```

