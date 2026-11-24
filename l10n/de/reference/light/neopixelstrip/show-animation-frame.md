# Animationsbild anzeigen

Zeige einen einzelnen Teil einer Pixelanimation auf dem Pixelstreifen (oder auf dem Board).

```sig
light.createStrip().showAnimationFrame(light.rainbowAnimation)
```
Du kannst die Farben einer Pixelanimation anzeigen, ohne die ganze Animation abzuspielen. Wähle einfach
eine der eingebauten Animationen aus, um ihr erstes Bild zu sehen.

Wenn der Streifen gepuffert ist, wird die Farbe berechnet, aber ``show`` nicht aufgerufen, damit weitere Animationsbilder berechnet werden können.

## Parameter

* **animation**: eine eingebaute Lichtanimation, von der ein Bild auf den Pixeln gezeigt wird.
> * ``comet``: ein schießender Lichtblitz
> * ``rainbow``: viele Farben, die herumpulsieren
> * ``sparkle``: helle Lichter, die überall aufblitzen
> * ``running lights``: eine Folge wandernder Lichter
> * ``theater chase``: Theaterlichter, die entlanglaufen
> * ``color wipe``: eine Farbwelle

## Beispiele #exsection

Zeige den ersten Teil der Animation ``comet``.

```blocks
let strip = light.createStrip()
strip.showAnimationFrame(light.cometAnimation))
```
## Siehe auch

[``||show animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
