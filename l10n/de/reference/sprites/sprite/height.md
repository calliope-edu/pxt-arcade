# height (Eigenschaft)

Frage die Höhe des Sprites in Pixeln ab.

## Abfragen

Frage die Pixelhöhe des Sprites ab.

```block
let meinSprite: Sprite = null

let yPixels = meinSprite.height
```

```typescript-ignore
let yPixels = meinSprite.height
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Höhe des Sprites in Pixeln angibt.

## Sprite-Größen

Die Größe des Sprites entspricht der Größe seines Bildes. Die Größe des Sprites ändert sich nur, wenn sich sein Bild ändert. Die Höhe des Sprites ist außerdem gleich der Differenz zwischen Unter- und Oberkante.

```block
let meinSprite: Sprite = null

let height = meinSprite.bottom - meinSprite.top
```

## Beispiel #example

Erstelle ein Bild, das `16` Pixel breit ist. Erstelle ein Sprite mit diesem Bild. Lass das Sprite sagen, wie hoch es ist.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let blockImage = image.create(16, 16)
blockImage.fill(4)
let meinSprite: Sprite = null
meinSprite = sprites.create(blockImage, SpriteKind.Example)
meinSprite.say("I'm " + meinSprite.height + " pixels high") 
```

## Siehe auch #seealso

[width](/reference/sprites/sprite/width),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)
