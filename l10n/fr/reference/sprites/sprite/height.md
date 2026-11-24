# height (propriété)

Obtiens la hauteur du sprite en pixels.

## Obtenir

Obtiens la hauteur du sprite en pixels.

```block
let monSprite: Sprite = null

let yPixels = monSprite.height
```

```typescript-ignore
let yPixels = monSprite.height
```

### Retourne

* un [nombre](/types/number) qui est la hauteur actuelle du sprite en pixels.

## Tailles des sprites

La taille du sprite correspond à la taille de l'image qu'il contient. La taille du sprite ne change que lorsque son image change. La hauteur du sprite est aussi égale à la différence entre ses côtés haut et bas.

```block
let monSprite: Sprite = null

let height = monSprite.bottom - monSprite.top
```

## Exemple #example

Crée une image de `16` pixels de large. Crée un sprite avec cette image. Fais dire au sprite quelle est sa hauteur.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let blockImage = image.create(16, 16)
blockImage.fill(4)
let monSprite: Sprite = null
monSprite = sprites.create(blockImage, SpriteKind.Example)
monSprite.say("I'm " + monSprite.height + " pixels high") 
```

## Voir aussi #seealso

[width](/reference/sprites/sprite/width),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)
