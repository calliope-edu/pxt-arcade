# image (Eigenschaft)

Frage das aktuelle Bild des Sprites ab.

```block
let meinSprite: Sprite = null

let currentImage = meinSprite.image
```

```typescript-ignore
let currentImage = meinSprite.image
```

Das Bild eines Sprites wird beim Erstellen des Sprites festgelegt oder wenn mit [setImage](/reference/sprites/sprite/set-image) ein anderes Bild gesetzt wird.

### Rückgabewert

* das [Bild](/types/image), das aktuell für das Sprite festgelegt ist.

## Beispiel #example

Erstelle ein Sprite mit einem Kontrollkästchen, das einen grünen Rahmen hat. Kopiere das Bild des Kontrollkästchens und ändere die Farbe des Rahmens. Zeige ein neues Sprite mit der Kopie des Kontrollkästchens.

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

## Siehe auch #seealso

[setze Bild](/reference/sprites/sprite/set-image)
