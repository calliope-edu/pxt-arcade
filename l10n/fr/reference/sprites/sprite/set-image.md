# définir l'image

Définis une nouvelle image pour le sprite.

```sig
sprites.create(null).setImage(null)
```

L'image actuellement définie pour le sprite est remplacée par la nouvelle image. La nouvelle image est affichée pour le sprite.

## Paramètres

* **img** : l'[image](/types/image) à définir pour le sprite.

## Exemple #example

Crée deux images de blocs carrés, l'une avec des pixels verts, l'autre avec des pixels orange. Chaque seconde, attribue l'image verte ou l'image orange au sprite à l'écran.

```blocks
let monSprite: Sprite = null
let image2: Image = null
let image1: Image = null
let toggle = false
image1 = image.create(32, 32)
image2 = image1.clone()
image1.fill(7)
image2.fill(4)
monSprite = sprites.create(image1, 0)
game.onUpdateInterval(1000, function () {
    if (toggle) {
        monSprite.setImage(image1)
    } else {
        monSprite.setImage(image2)
    }
    toggle = !(toggle)
})
```

## Voir aussi #seealso

[image](/reference/sprites/sprite/image)
