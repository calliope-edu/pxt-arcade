# Photonen-Farbton festlegen

Ändere den **Farbton** des Photons auf dem Pixelstreifen.

```sig
light.createStrip().setPhotonPenHue(0)
```

Der Photonen-Effekt ist ein Impuls aus hellem Licht, der sich durch einen Streifen farbiger Pixel bewegt.
Du kannst die Farbe des Photons beliebig ändern.

Die Farbe ist ein **Farbton** und keine _RGB_-Zahl. Das bedeutet, dass rotes Licht `0` ist und rotes Licht auch `255`. Alle anderen Farben liegen zwischen `0` und `255`. Die Farbe beginnt bei Rot und endet wieder bei Rot.

## Parameter

* **hue**: eine [Zahl](/types/number) von 0 (rotes Licht) bis 255 (wieder rotes Licht) für
den _Farbton_ der gewünschten Farbe.
> Einige Standardwerte für den Farbton sind:
> * Rot - `0`
> * Orange - `29`
> * Gelb - `43`
> * Grün - `86`
> * Aqua - `125`
> * Blau - `170`
> * Lila - `191`
> * Magenta - `213`
> * Pink - `234`
> * Rot - `255`


## Beispiel

Lass ein Regenbogen-Photon vorwärts und rückwärts über den Pixelstreifen pulsieren.

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
## Siehe auch

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```
