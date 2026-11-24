# Sprite-Bild

Der Container- und Editorblock für ein Sprite-Bild.

```sig
images._spriteImage(null)
```

Wenn du auf das Bildfenster im Block klickst, öffnet sich der Bildeditor, und du kannst ein neues Bild erstellen oder das aktuelle bearbeiten. Das Bild wird verwendet, wenn ein Sprite erstellt wird, oder als anderes Bild, das einem Sprite zugewiesen wird.

## Parameter

* **image**: Das [Bild](/types/image), das für einen Sprite verwendet wird.

## Beispiel #example

Erstelle einen neuen Sprite mit dem Bild eines Donuts.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
```

## Siehe auch

[erstellen](/reference/sprites/create),
[Bild festlegen](/reference/sprites/sprite/set-image)