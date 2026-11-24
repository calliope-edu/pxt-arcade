# frames d'animation

Une séquence d'images (frames) pour une animation.

```sig
animation._animationFrames(null)
```

Les frames d'une animation sont définies sous forme de tableau d'images. Le bloc qui contient les frames donne accès à l'éditeur d'images pour créer de nouvelles frames et modifier celles déjà présentes dans l'animation.

## Paramètres

* **frames** : un tableau d'images qui créent l'animation.

## Exemple #example

Crée et lance une animation d'une personne qui marche. Clique sur le bloc des frames d'animation pour modifier l'animation. Fais boucler l'animation puis
arrête-la en appuyant sur le bouton **A**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, monSprite)
})
let monSprite: Sprite = null
scene.setBackgroundColor(1)
monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let walker = animation._animationFrames([img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `])
animation.runImageAnimation(
monSprite,
walker,
500,
true
)
```

## Voir aussi #seealso

[lancer une animation d'images](/reference/animation/run-image-animation),
[lancer une animation de mouvement](/reference/animation/run-movement-animation)

```package
animation
```