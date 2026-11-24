# top (Eigenschaft)

Rufe die obere Position des Sprites auf dem Bildschirm ab oder lege sie fest.

## Abrufen

Rufe die obere Position des Sprites ab.

```block
let meinSprite: Sprite = null

let topPosition = meinSprite.top
```

```typescript-ignore
let topPosition = meinSprite.top
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle obere Position des Sprite-Objekts auf dem Bildschirm ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.top = 0
```

```typescript-ignore
meinSprite.top = 0
```

### Parameter

* **value**: die neue obere Position des Sprite-Objekts auf dem Bildschirm.

## Positionen von Sprites

Das Bild des Sprites bildet ein Rechteck aus einer bestimmten Anzahl von Pixelzeilen. **top** (oben) ist die vertikale Position der ersten Pixelzeile des Sprites auf dem Bildschirm. Der obere Rand des Sprites kann einen Wert haben, der größer als die Höhe des Bildschirms ist. Er kann auch einen Wert haben, der kleiner als der obere Rand des Bildschirms ist (der obere Rand des Bildschirms ist `0`, und der Wert der Oberseite des Sprites ist in diesem Fall negativ). Wenn das passiert, ist der Sprite teilweise oder ganz nicht auf dem Bildschirm sichtbar.

## Beispiele #example

### Von Seite zu Seite #ex1

Bewege einen Sprite an den unteren Rand des Bildschirms. Warte 2 Sekunden und bewege ihn dann an den oberen Rand.

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
forever(function () {
    meinSprite.bottom = scene.screenHeight()
    pause(2000)
    meinSprite.top = 0
    pause(2000)
})
```

### Innerhalb der Grenzen bleiben #ex2

Lass einen Sprite vom linken Rand des Bildschirms nach oben laufen. Prüfe in einer ``||game:bei Aktualisierung des Spiels||``-Schleife, ob der Sprite den oberen Rand des Bildschirms berührt hat. Falls ja, setze den Sprite zurück an den linken Rand des Bildschirms.

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
meinSprite.top = 0
meinSprite.vy = 40
game.onUpdateInterval(500, function () {
    if (meinSprite.top > scene.screenHeight()) {
        meinSprite.top = 0
        meinSprite.say("Reset!", 500)
    }
})
```
## Siehe auch #seealso

[left](/reference/sprites/sprite/left),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)

