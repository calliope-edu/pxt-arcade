# image (propriété)

Obtiens l'image actuelle du sprite.

```block
let monSprite: Sprite = null

let currentImage = monSprite.image
```

```typescript-ignore
let currentImage = monSprite.image
```

L'image d'un sprite est définie lors de la création du sprite, ou lorsqu'une autre image est définie avec [setImage](/reference/sprites/sprite/set-image).

### Retourne

* l'[image](/types/image) actuellement définie pour le sprite.

## Exemple #example

Crée un sprite avec une case à cocher qui a une bordure verte. Copie l'image de la case à cocher et change la couleur de la bordure. Affiche un nouveau sprite avec la copie de la case à cocher.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let sprite1 = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 . . . . . . . . . . . . . . 7 
7 . 2 . . . . . . . . . . 2 . 7 
7 . . 2 . . . . . . . . 2 . . 7 
7 . . . 2 . . . . . . 2 . . . 7 
7 . . . . 2 . . . . 2 . . . . 7 
7 . . . . . 2 . . 2 . . . . . 7 
7 . . . . . . 2 2 . . . . . . 7 
7 . . . . . . 2 2 . . . . . . 7 
7 . . . . . 2 . . 2 . . . . . 7 
7 . . . . 2 . . . . 2 . . . . 7 
7 . . . 2 . . . . . . 2 . . . 7 
7 . . 2 . . . . . . . . 2 . . 7 
7 . 2 . . . . . . . . . . 2 . 7 
7 . . . . . . . . . . . . . . 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
sprite1.y = 40
let imgInside = sprite1.image
let imgCopy = imgInside.clone()
imgCopy.drawRect(0, 0, sprite1.width, sprite1.height, 11)
let sprite2 = sprites.create(imgCopy, 0)
sprite2.y = 80
```

## Voir aussi #seealso

[définir l'image](/reference/sprites/sprite/set-image)
