# scale (Eigenschaft)

Frage den Skalierungsfaktor für Breite und Höhe eines Sprites ab oder lege ihn fest.

## Abfragen

Frage die Skalierung des Sprites ab.

```block
let meinSprite: Sprite = null

let xScale = meinSprite.scale
```

```typescript-ignorelet
xScale = meinSprite.scale
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Skalierung des Sprites angibt.

## Festlegen

Lege die Skalierung des Sprites fest.

```block
let meinSprite: Sprite = null

meinSprite.scale = 2
```

```typescript-ignore
meinSprite.scale = 2
```

### Parameter

* **value**: der neue Skalierungsfaktor für die Größe des Sprites.

## Beispiele #example

### Vergrößern und verkleinern #ex1

Skaliere die Größe eines Sprites jede Sekunde um `1`. Vergrößere es, solange es klein ist, und verkleinere es, wenn es groß ist.

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
    if (meinSprite.scale == 1) {
        expand = 1
    } else if (meinSprite.scale == 6) {
        expand = -1
    }
    meinSprite.scale += expand
})
```

## Siehe auch #seealso

[sx](/reference/sprites/sprite/sx),
[sy](/reference/sprites/sprite/sy)
