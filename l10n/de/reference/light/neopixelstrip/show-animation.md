# Animation anzeigen

Zeige eine Pixelanimation für eine bestimmte Zeit auf dem Pixelstreifen (oder auf dem Board).

```sig
light.createStrip().showAnimation(light.rainbowAnimation, 500)

```
Du kannst aus mehreren Animationen wählen. Such dir die gewünschte aus und entscheide,
wie lange die Animation laufen soll.

Wenn dein Programm gerade eine andere Animation zeigt, wird diese Animation für später
eingeplant und dein Programm läuft sofort weiter. Wenn keine anderen Animationen
bereitstehen, zeigt dein Programm diese an und wartet, bis sie fertig ist.

## Parameter

* **animation**: eine eingebaute Lichtanimation, die auf den Pixeln gezeigt wird.
> * ``comet``: ein schießender Lichtblitz
> * ``rainbow``: viele Farben, die herumpulsieren
> * ``sparkle``: helle Lichter, die überall aufblitzen
> * ``running lights``: eine Folge wandernder Lichter
> * ``theater chase``: Theaterlichter, die entlanglaufen
> * ``color wipe``: eine Farbwelle
* **duration**: wie lange die Animation laufen soll, in Millisekunden.

## Beispiele #exsection

### Zeig mir einen Kometen #ex1

Zeige die Animation ``comet`` für 2 Sekunden, wenn Knopf ``A`` gedrückt wird.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.cometAnimation, 2000)
})
```

### Zwei Animationen #ex2

Zeige die Animation ``rainbow`` für 6 Sekunden, wenn Knopf ``A`` gedrückt wird. Wenn Knopf
``B`` gedrückt wird, versuche die Animation ``sparkle`` für 2 Sekunden zu zeigen. Du wirst
merken, dass ``sparkle`` warten muss, bis ``rainbow`` fertig ist.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.rainbowAnimation, 6000)
})

input.buttonB.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.sparkleAnimation, 2000)
})
```

## Siehe auch

[``||stop all animations||``](/reference/light/neopixelstrip/stop-all-animations) [``||animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
