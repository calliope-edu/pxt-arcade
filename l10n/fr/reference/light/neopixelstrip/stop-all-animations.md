# arrêter toutes les animations

Arrête l'animation de pixels affichée en ce moment et toutes les autres animations prêtes à être affichées.

```sig
light.createStrip().stopAllAnimations()

```

## Exemple

Affiche l'animation ``rainbow`` pendant 10 secondes au démarrage. Si le bouton ``A``
est pressé avant la fin des 10 secondes, arrête ``rainbow``.

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.stopAllAnimations()
})

strip.showAnimation(light.rainbowAnimation, 10000)
```

## Voir aussi

[``||afficher l'animation||``](/reference/light/neopixelstrip/show-animation)

```package
light
```
