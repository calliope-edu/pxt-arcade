# on Loud Sound

Exécute du code quand le microphone entend un bruit fort.

```sig
input.onLoudSound(function(){});
```

## Paramètres

* **handler** : le code à exécuter quand un bruit fort est entendu.

## Exemple #example

Fais clignoter les pixels quand un bruit fort est détecté.

```blocks
let pixels = light.createStrip()

input.onLoudSound(function() {
	pixels.setAll(0xff0000)
	pause(100)
	pixels.setAll(0x000000)
})
```

# Voir aussi #seealso

[niveau sonore](/reference/input/sound-level)

```package
microphone
light
```
