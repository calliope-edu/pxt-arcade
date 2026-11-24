# set Loud Sound Threshold

Indique à quel point un son doit être fort pour que ta carte détecte un bruit fort.

```sig
input.setLoudSoundThreshold(0)
```

Quand le microphone entend un son, il te donne un nombre qui indique à quel point le son était fort à ce moment-là.
Ce nombre est le niveau sonore et a une valeur de `0` (aucun son) à `255` (très fort). Tu peux utiliser
un niveau sonore comme _seuil_ (juste la bonne quantité de son) pour déclencher
l'événement [lors d'un bruit fort](/reference/input/on-loud-sound).

## Paramètres

* **value** : un [nombre](/types/number) de niveau sonore qui déclenche un événement de bruit fort.

## Exemple #example

Fais clignoter les pixels de la bande en `rose` quand tu tapes dans tes mains ou fais un autre bruit fort à proximité.

```blocks
let pixels = light.createStrip()
input.setLoudSoundThreshold(768)

input.onLoudSound(function() {
	pixels.setAll(0xff007f)
    pause(200)
    pixels.clear()
})
```

## Voir aussi #seealso

[lors d'un bruit fort](/reference/input/on-loud-sound)

```package
microphone
```
