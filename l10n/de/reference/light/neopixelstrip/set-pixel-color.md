# Pixelfarbe festlegen

Setze die Farbe des Pixels an dieser Position auf eine neue Farbe.

```sig
light.createStrip().setPixelColor(0, 0)

```

## Parameter

* **pixelOffset**: die Position des Pixels auf dem Streifen (oder auf dem Board), dessen
Farbe du ändern möchtest.
* **color**: eine [RGB](/reference/light/rgb#rgbdesc)-Farbe, die das Pixel bekommen soll.

## Beispiel #exsection

Wenn Knopf ``B`` geklickt wird, zeige die Farbe ``pink`` an Pixel ``0``.

```blocks
let strip = light.createStrip()
input.buttonB.onEvent(ButtonEvent.Click, () => {
    strip.setPixelColor(0, 0xff007f)
})
```

## Siehe auch
[``||pixel color||``](/reference/light/neopixelstrip/pixel-color), [``||rgb||``](/reference/light/rgb)

```package
light
```
