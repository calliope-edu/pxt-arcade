# afficher une image d'animation

Affiche une seule partie d'une animation de pixels sur la bande (ou sur la carte).

```sig
light.createStrip().showAnimationFrame(light.rainbowAnimation)
```
Tu peux afficher les couleurs d'une animation de pixels sans avoir à jouer toute l'animation. Choisis simplement
l'une des animations intégrées pour voir sa première image.

Si la bande est en mémoire tampon, la couleur est calculée mais ``show`` n'est pas appelé, afin de permettre le rendu d'autres images d'animation.

## Paramètres

* **animation** : une animation lumineuse intégrée dont une image est affichée sur les pixels.
> * ``comet`` : une rafale de lumière filante
> * ``rainbow`` : de nombreuses couleurs qui pulsent
> * ``sparkle`` : des lumières vives qui clignotent partout
> * ``running lights`` : une séquence de lumières qui se déplacent
> * ``theater chase`` : des lumières de théâtre qui avancent
> * ``color wipe`` : une vague de couleur

## Exemples #exsection

Affiche la première partie de l'animation ``comet``.

```blocks
let strip = light.createStrip()
strip.showAnimationFrame(light.cometAnimation))
```
## Voir aussi

[``||afficher l'animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
