# animation

Renvoie une instance de l'animation intégrée choisie.

```sig
light.animation(LightAnimation.Sparkle)
```

## Paramètres

* **kind** : le type d'animation à choisir, parmi les suivants :

>* `running lights`
>* `comet`
>* `color wipe`
>* `theater chase`
>* `rainbow`

## Exemple

Affiche l'animation `rainbow` en continu à des intervalles de `500` millisecondes.

```blocks
forever(function() {
    light.showAnimation(LightAnimation.Rainbow, 500)
})
```

## Voir aussi

```package
light
```
