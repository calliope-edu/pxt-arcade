# is Pressed

Vérifie si un bouton est appuyé ou non.

```sig
controller.A.isPressed()
```

## Retourne

* un [booléen](types/boolean) : `true` si le bouton est appuyé, `false` si le bouton n'est pas appuyé.

## Exemple #example

Déplace une boîte jaune au hasard sur l'écran tant que le bouton ``A`` est appuyé.

### Un joueur

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
        yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
    }
})
```

### Multijoueur

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
game.onUpdate(function () {
    if (controller.player2.isPressed(ControllerButton.A)) {

        yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
        yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
    }
})
```

## Voir aussi #seealso

[on event](/reference/controller/button/on-event)
