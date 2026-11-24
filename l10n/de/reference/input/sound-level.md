# Lautstärke

Finde heraus, wie hoch der Lautstärkepegel ist, den das Mikrofon hört.

```sig
input.soundLevel()
```

## Rückgabewert

* eine ``number`` zwischen `0` (leise) und `255` (laut), die angibt, wie laut die Geräusche sind, die das Mikrofon hört.

## Beispiel #example

Baue mit den Pixeln einen Lautstärkemesser. Wenn laute Geräusche erkannt werden, leuchten mehr Pixel auf.

```blocks
let lastLevel = 0;
let pixels = light.createStrip()

forever(function () {
    let level = input.soundLevel()
    if (lastLevel != level) {
        pixels.clear()
        for (let i = 0; i < pixels.length() / 255 * level; i++) {
            pixels.setPixelColor(i, 0x00ff00)
        }
        lastLevel = level
    }
})
```
## Siehe auch #seealso

[wenn lautes Geräusch](/reference/input/on-loud-sound)

```package
microphone
light
```