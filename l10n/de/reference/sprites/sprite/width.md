# width (Eigenschaft)

Rufe die Breite des Sprites in Pixeln ab.

## Abrufen

Rufe die Pixelbreite des Sprites ab.

```block
let meinSprite: Sprite = null

let xPixels = meinSprite.width
```

```typescript-ignore
let xPixels = meinSprite.width
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Breite des Sprites in Pixeln ist.

## Größe von Sprites

Die Größe des Sprites entspricht der Größe des Bildes, das er enthält. Die Größe des Sprites ändert sich nur, wenn sich sein Bild ändert. Die Breite des Sprites ist auch gleich dem Unterschied zwischen der linken und der rechten Seite.

```block
let meinSprite: Sprite = null

let width = meinSprite.right - meinSprite.left
```

## Beispiel #example

Erstelle ein Bild, das `16` Pixel breit ist. Erstelle einen Sprite mit diesem Bild. Lass den Sprite sagen, wie breit er ist.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let blockImage = image.create(16, 16)
blockImage.fill(4)
let meinSprite: Sprite = null
meinSprite = sprites.create(blockImage, SpriteKind.Example)
meinSprite.say("I'm " + meinSprite.width + " pixels wide") 
```

## Siehe auch #seealso

[Höhe](/reference/sprites/sprite/height),
[links](/reference/sprites/sprite/left),
[rechts](/reference/sprites/sprite/right)
