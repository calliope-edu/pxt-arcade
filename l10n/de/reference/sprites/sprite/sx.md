# sx (Eigenschaft)

Lies oder setze den Skalierungsfaktor für die Breite eines Sprites.

## Lesen

Lies die Breitenskalierung des Sprites.

```block
let meinSprite: Sprite = null

let xScale = meinSprite.sx
```

```typescript-ignorelet
xScale = meinSprite.sx
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Skalierung der Breite des Sprites ist.

## Setzen

Setze die Breitenskalierung des Sprites.

```block
let meinSprite: Sprite = null

meinSprite.sx = 2
```

```typescript-ignore
meinSprite.sx = 2
```

### Parameter

* **value**: der neue Skalierungsfaktor für die Breite des Sprites.

## Beispiele #example

### Breite strecken und stauchen #ex1

Vergrößere die Breitenskalierung eines Sprites jede Sekunde um `1`. Dehne ihn aus, solange er klein ist, und ziehe ihn zusammen, wenn er groß ist.

```blocks
let expand = 0
let meinSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    if (meinSprite.sx == 1) {
        expand = 1
    } else if (meinSprite.sx == 6) {
        expand = -1
    }
    meinSprite.sx += expand
})
```

## Siehe auch #seealso

[sy](/reference/sprites/sprite/sy),
[Skalierung](/reference/sprites/sprite/scale)
