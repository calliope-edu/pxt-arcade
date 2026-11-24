# on Gesture

Exécute du code quand tu fais un **geste**, comme secouer la @boardname@.

```sig
input.onGesture(Gesture.Shake,() => {
})
```

## Paramètres

* ``gesture`` : le geste à détecter. Un geste est la façon dont tu tiens ou bouges la @boardname@. Les gestes sont :
> * `shake` : secouer la carte
> * `logo up` : le logo est tourné vers le haut
> * `logo down` : le logo est tourné vers le bas
> * `screen up` : le côté écran est vers le haut
> * `screen down` : le côté écran est vers le bas
> * `tilt left` : la carte est inclinée vers la gauche
> * `tilt right` : la carte est inclinée vers la droite
> * `free fall` : la carte tombe sur une certaine distance
> * `2g` : force d'accélération de 2 g (fonctionne bien pour détecter les pas)
> * `3g` : force d'accélération de 3 g
> * `6g` : force d'accélération de 6 g
* ``body`` : le code à exécuter quand l'événement de geste se produit

## Exemple : nombre aléatoire #example

Affiche un message dans la console quand tu secoues la @boardname@.

```blocks
input.onGesture(Gesture.Shake, function() {}
    console.log("I'm shaking!")
})
```

## #seealso

```package
accelerometer
```
