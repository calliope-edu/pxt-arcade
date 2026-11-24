# set Photon Mode

Change l'effet de l'impulsion du photon.

```sig
light.createStrip().setPhotonMode(0)
```

Le photon peut colorer la bande de pixels avec la couleur du photon pendant que
l'impulsion lumineuse se déplace. C'est le mode photon `pen down` (crayon baissé). Tu peux aussi faire passer l'impulsion
sans ajouter de couleur, ou même lui faire effacer la couleur quand elle se déplace.

## Paramètres

* **mode** : l'effet d'impulsion que tu veux donner au photon. Les voici :
> * `pen down` : fait pulser la lumière sur chaque pixel et lui donne la couleur du photon.
> * `pen up` : fait pulser la lumière sur chaque pixel sans changer la couleur.
> * `eraser` : efface la couleur du photon sur le pixel quand l'impulsion l'atteint.
> * `off` : éteint le photon

## Exemples #exsection

### Va-et-vient #ex1

Déplace un photon violet en avant et en arrière sur la bande de pixels. Le photon change de mode
pour effacer quand il recule.

```blocks
let strip = light.createStrip()
let forward = true
strip.setPhotonPenHue(191)
forever(() => {
    if (forward) {
        strip.setPhotonMode(PhotonMode.PenDown)
    } else {
        strip.setPhotonMode(PhotonMode.Eraser)
    }
    for (let i = 0; i < strip.length(); i++) {
        strip.photonForward(1)
        pause(100)
    }
    forward = !forward
    strip.photonFlip()
})
```

### Crayon baissé, crayon levé #ex2

Fais passer un photon violet sur la bande de pixels en mode `pen down`. Passe en mode
`pen up` et change la couleur du photon en vert. Fais passer un autre photon et observe que la
couleur reste violette.

```blocks
let strip = light.createStrip()
strip.setPhotonPenHue(191)
strip.setPhotonMode(PhotonMode.PenDown)
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}

strip.setPhotonPenHue(86)
strip.setPhotonMode(PhotonMode.PenUp)
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}
```

### Allumé et éteint

Déplace le photon puis éteins-le.

```blocks
let strip = light.createStrip()
for (let i = 1; i < strip.length(); i++) {
    strip.photonForward(1)
    pause(500)
}
strip.setPhotonMode(PhotonMode.Off)
```

## Voir aussi

[``||photon forward||``](/reference/light/neopixelstrip/photon-forward),
[``||photon flip||``](/reference/light/neopixelstrip/photon-flip),
[``||set photon pen color||``](/reference/light/neopixelstrip/set-photon-pen-color)

```package
light
```


