# Position setzen

Setze die Mittelposition eines Sprites auf dem Bildschirm.

```sig
sprites.create(null).setPosition(0, 0)
```

### Parameter

* **x**: die neue horizontale Mittelposition des Sprites auf dem Bildschirm.
* **y**: die neue vertikale Mittelposition des Sprites auf dem Bildschirm.

## Sprite-Positionen

Das Bild des Sprites bildet ein Rechteck mit einer bestimmten Anzahl von Pixelzeilen und -spalten. Die **x**-Position des Sprites ist die horizontale Lage der mittleren Pixelspalte des Sprites auf dem Bildschirm. Die **y**-Position des Sprites ist die vertikale Lage der mittleren Pixelzeile des Sprites.

Die **x**-Position des Sprites kann einen Wert haben, der größer als die Breite des Bildschirms ist. Sie kann auch einen Wert haben, der links vom Bildschirm liegt (der linke Bildschirmrand ist `0`, und die **x**-Position des Sprites ist in diesem Fall negativ). Wenn das passiert, ist der Sprite teilweise oder ganz nicht auf dem Bildschirm zu sehen.

Genauso kann die **y**-Position des Sprites einen Wert haben, der größer als die Höhe des Bildschirms ist. Sie kann auch einen Wert haben, der oberhalb des Bildschirms liegt (der obere Bildschirmrand ist `0`, und die **y**-Position des Sprites ist in diesem Fall negativ).

## Beispiel #example

Setze die **x**- und **y**-Position des Sprites auf `64`. Lass den Sprite sagen, welche **x**- und **y**-Werte er hat.

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
meinSprite.setPosition(64, 64)
meinSprite.say("I'm centered at x:" + meinSprite.x + ", y:" + meinSprite.y)
```

## Siehe auch #seealso

[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y),
[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom)

