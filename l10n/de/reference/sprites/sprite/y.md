# y (Eigenschaft)

Rufe die vertikale Mittelposition eines Sprites auf dem Bildschirm ab oder lege sie fest.

## Abrufen

Rufe die vertikale Mittelposition des Sprites ab.

```block
let meinSprite: Sprite = null

let vert = meinSprite.y
```

```typescript-ignore
let vert = meinSprite.y
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle vertikale Mittelposition des Sprites auf dem Bildschirm ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.y = 0
```

```typescript-ignore
meinSprite.y = 0
```

### Parameter

* **value**: die neue vertikale Mittelposition des Sprite-Objekts auf dem Bildschirm.

## Positionen von Sprites

Das Bild des Sprites bildet ein Rechteck aus einer bestimmten Anzahl von Pixelzeilen. Die **y**-Position des Sprites ist die vertikale Position der mittleren Pixelzeile des Sprites auf dem Bildschirm. Die **y**-Position des Sprites kann einen Wert haben, der größer als die Höhe des Bildschirms ist. Sie kann auch einen Wert haben, der kleiner als der obere Rand des Bildschirms ist (der obere Rand des Bildschirms ist `0`, und die **y**-Position des Sprites ist in diesem Fall negativ). Wenn das passiert, ist der Sprite teilweise oder ganz nicht auf dem Bildschirm sichtbar.

## Beispiel #example

Setze die Positionen **x** und **y** des Sprites auf `64`. Lass den Sprite sagen, welchen **y**-Wert er hat.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let meinSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
meinSprite.x = 64
meinSprite.y = 64
meinSprite.say("I'm centered at y:" + meinSprite.y)
```

## Siehe auch #seealso

[x](/reference/sprites/sprite/x),
[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)
