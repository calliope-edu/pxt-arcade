# photon Forward

Fait avancer un effet photon le long de la bande de pixels d'un certain nombre de pas.

```sig
light.createStrip().photonForward(0)
```

L'effet photon est un éclair de lumière qui se déplace le long de la bande de pixels. Pour créer
un effet au mouvement plus rapide, tu peux faire avancer le photon de plus d'un
pixel à la fois : il suffit d'augmenter le nombre de pas.

## Paramètres

* **steps** : le [nombre](/types/number) de positions dont le photon avance

## Exemple

Déplace un photon sur toute la longueur de la bande de pixels.

```blocks
let strip = light.createStrip()
for (let i = 0; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(150)
}
```
## Voir aussi

[``||set photon position||``](/reference/light/neopixelstrip/set-photon-position),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip)
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color),
[``||photon mode||``](/reference/light/neopixelstrip/set-photon-mode)

```package
light
```


