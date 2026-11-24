# weiße Pixel-LED festlegen

Setze die Weiß-Helligkeit eines Pixels in einem NeoPixel-Streifen mit RGB+W-LEDs.

```sig
light.createStrip().setPixelWhiteLED(0,0);
```
Wenn der Pixelstreifen LEDs vom Typ RGB+W hat, kannst du die Helligkeit der weißen LED
an einer Pixelposition im Streifen festlegen. Streifen mit RGB+W-LEDs kombinieren RGB- und weiße LEDs für
zusätzliche Helligkeit und Leuchteffekte.

## Parameter

* **pixeloffset**: die [Zahl](/types/number) der Pixelposition im Streifen für die weiße LED, z. B.: 14
* **white**: eine [Zahl](/types/number) für die Helligkeit der weißen LED. Die Helligkeit liegt
zwischen 0 (völlig dunkel) und 255 (sehr hell).

## Beispiel

Setze das weiße Pixel an Position `5` in einem RGB+W-NeoPixel-Streifen auf halbe Helligkeit.

```blocks
let rgbwStrip = light.createStrip(null, 24, NeoPixelMode.RGBW)
rgbwStrip.setPixelWhiteLED(5, 128)
```

## Siehe auch

[``||create strip||``](/reference/light/create-strip), [``||set mode||``](/reference/light/neopixelstrip/set-mode)

```package
light
```

