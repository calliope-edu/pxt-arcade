# photon Flip

Change la direction du mouvement du photon le long de la bande de pixels.

```sig
light.createStrip().photonFlip()
```

Normalement, le photon se déplace des pixels aux petits numéros (pixel : 0, 1, 2, ...)
 vers les pixels aux numéros plus grands. Tu peux faire aller le photon dans le sens inverse avec
 ``||photon flip||``. Chaque fois que tu utilises ``||photon flip||``, l'éclair du photon change
 de direction et part dans l'autre sens.

## Exemple

Déplace un photon en avant et en arrière sur la bande de pixels pendant `5` éclairs.

```blocks
let strip = light.createStrip()
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < strip.length(); j++) {
        strip.photonForward(1)
        pause(50)
    }
    strip.photonFlip()
}
```

## Voir aussi

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```


