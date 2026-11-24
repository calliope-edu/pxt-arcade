# sound Level

Découvre le niveau du son entendu par le microphone.

```sig
input.soundLevel()
```

## Retourne

* un ``number`` entre `0` (silencieux) et `255` (fort) qui indique à quel point les sons entendus par le microphone sont forts.

## Exemple #example

Utilise les pixels pour faire un sonomètre. Si des sons forts sont détectés, plus de pixels s'allument.

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
## Voir aussi #seealso

[lors d'un bruit fort](/reference/input/on-loud-sound)

```package
microphone
light
```
