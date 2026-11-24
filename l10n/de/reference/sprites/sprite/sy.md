# sy (Eigenschaft)

Lies oder setze den Skalierungsfaktor für die Höhe eines Sprites.

## Lesen

Lies die Höhenskalierung des Sprites.

```block
let meinSprite: Sprite = null

let xScale = meinSprite.sy
```

```typescript-ignorelet
xScale = meinSprite.sy
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Skalierung der Höhe des Sprites ist.

## Setzen

Setze die Höhenskalierung des Sprites.

```block
let meinSprite: Sprite = null

meinSprite.sy = 2
```

```typescript-ignore
meinSprite.sy = 2
```

### Parameter

* **value**: der neue Skalierungsfaktor für die Höhe des Sprites.

## Beispiele #example

### Höhe strecken und stauchen #ex1

Vergrößere die Höhenskalierung eines Sprites jede Sekunde um `1`. Dehne ihn aus, solange er klein ist, und ziehe ihn zusammen, wenn er groß ist.

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
    if (meinSprite.sy == 1) {
        expand = 1
    } else if (meinSprite.sy == 6) {
        expand = -1
    }
    meinSprite.sy += expand
})
```

## Siehe auch #seealso

[sx](/reference/sprites/sprite/sx),
[Skalierung](/reference/sprites/sprite/scale)
