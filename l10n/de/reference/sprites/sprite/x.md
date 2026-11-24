# x (Eigenschaft)

Rufe die horizontale Mittelposition eines Sprites auf dem Bildschirm ab oder lege sie fest.

## Abrufen

Rufe die horizontale Mittelposition des Sprites ab.

```block
let meinSprite: Sprite = null

let horz = meinSprite.x
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle horizontale Mittelposition des Sprites auf dem Bildschirm ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.x = 0
```

### Parameter

* **value**: die neue horizontale Mittelposition des Sprites auf dem Bildschirm.

## Positionen von Sprites

Das Bild des Sprites bildet ein Rechteck aus einer bestimmten Anzahl von Pixelspalten. Die **x**-Position des Sprites ist die horizontale Position der mittleren Pixelspalte des Sprites auf dem Bildschirm. Die **x**-Position des Sprites kann einen Wert haben, der größer als die Breite des Bildschirms ist. Sie kann auch einen Wert haben, der kleiner als der linke Rand des Bildschirms ist (der linke Rand des Bildschirms ist `0`, und die **x**-Position des Sprites ist in diesem Fall negativ). Wenn das passiert, ist der Sprite teilweise oder ganz nicht auf dem Bildschirm sichtbar.

## Beispiel #example

Setze die Positionen **x** und **y** des Sprites auf `64`. Lass den Sprite sagen, welchen **x**-Wert er hat.

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
meinSprite.say("I'm centered at x:" + meinSprite.x)
```

## Siehe auch #seealso

[y](/reference/sprites/sprite/y),
[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)

