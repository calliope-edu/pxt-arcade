# afficher l'animation

Affiche une animation de pixels sur la bande (ou sur la carte) pendant un certain temps.

```sig
light.createStrip().showAnimation(light.rainbowAnimation, 500)

```
Tu as plusieurs animations au choix. Choisis celle que tu veux et décide
combien de temps elle doit être jouée.

Si ton programme affiche déjà une autre animation, celle-ci est mise en attente pour
être affichée plus tard et ton programme continue tout de suite. S'il n'y a pas d'autre animation
prête à être affichée, ton programme affiche celle-ci et attend qu'elle soit terminée.

## Paramètres

* **animation** : une animation lumineuse intégrée à afficher sur les pixels.
> * ``comet`` : une rafale de lumière filante
> * ``rainbow`` : de nombreuses couleurs qui pulsent
> * ``sparkle`` : des lumières vives qui clignotent partout
> * ``running lights`` : une séquence de lumières qui se déplacent
> * ``theater chase`` : des lumières de théâtre qui avancent
> * ``color wipe`` : une vague de couleur
* **duration** : la durée de l'animation, en millisecondes.

## Exemples #exsection

### Montre-moi une comète #ex1

Affiche l'animation ``comet`` pendant 2 secondes quand le bouton ``A`` est pressé.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.cometAnimation, 2000)
})
```

### Deux animations #ex2

Affiche l'animation ``rainbow`` pendant 6 secondes quand le bouton ``A`` est pressé. Si le bouton
``B`` est pressé, essaie d'afficher l'animation ``sparkle`` pendant 2 secondes. Tu
remarqueras que l'animation ``sparkle`` doit attendre la fin de ``rainbow``.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.rainbowAnimation, 6000)
})

input.buttonB.onEvent(ButtonEvent.Click, () => {
    strip.showAnimation(light.sparkleAnimation, 2000)
})
```

## Voir aussi

[``||arrêter toutes les animations||``](/reference/light/neopixelstrip/stop-all-animations) [``||animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
