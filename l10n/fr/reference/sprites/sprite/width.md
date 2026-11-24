# width (propriété)

Obtiens la largeur du sprite en pixels.

## Obtenir

Obtiens la largeur du sprite en pixels.

```block
let monSprite: Sprite = null

let xPixels = monSprite.width
```

```typescript-ignore
let xPixels = monSprite.width
```

### Valeur retournée

* un [nombre](/types/number) qui est la largeur actuelle du sprite en pixels.

## Taille des sprites

La taille du sprite correspond à la taille de l'image qu'il contient. La taille du sprite ne change que lorsque son image change. La largeur du sprite est aussi égale à la différence entre ses côtés droit et gauche.

```block
let monSprite: Sprite = null

let width = monSprite.right - monSprite.left
```

## Exemple #example

Crée une image de `16` pixels de large. Crée un sprite avec cette image. Fais dire au sprite quelle est sa largeur.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let blockImage = image.create(16, 16)
blockImage.fill(4)
let monSprite: Sprite = null
monSprite = sprites.create(blockImage, SpriteKind.Example)
monSprite.say("I'm " + monSprite.width + " pixels wide") 
```

## Voir aussi #seealso

[hauteur](/reference/sprites/sprite/height),
[gauche](/reference/sprites/sprite/left),
[droite](/reference/sprites/sprite/right)
