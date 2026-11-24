# right (Eigenschaft)

Frage die rechte Position des Sprites auf dem Bildschirm ab oder lege sie fest.

## Abfragen

Frage die rechte Position des Sprites ab.

```block
let meinSprite: Sprite = null

let rightPosition = meinSprite.right
```

```typescript-ignore
let rightPosition = meinSprite.right
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle rechte Position des Sprite-Objekts auf dem Bildschirm angibt.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.right = 0
```

```typescript-ignore
meinSprite.right = 0
```

### Parameter

* **value**: die neue rechte Position des Sprite-Objekts auf dem Bildschirm.

## Sprite-Positionen

Das Bild des Sprites bildet ein Rechteck mit einer bestimmten Anzahl von Pixelspalten. **right** ist die horizontale Position der letzten Pixelspalte des Sprites auf dem Bildschirm. Der rechte Rand des Sprites kann einen Wert haben, der größer als die Breite des Bildschirms ist. Er kann auch einen Wert haben, der kleiner als der linke Bildschirmrand ist (der linke Bildschirmrand ist `0`, und der Wert für den rechten Rand des Sprites ist in diesem Fall negativ). Dann ist das Sprite teilweise oder ganz nicht auf dem Bildschirm zu sehen.

## Beispiele #example

### Von Seite zu Seite #ex1

Bewege ein Sprite an den linken Bildschirmrand. Warte 2 Sekunden und bewege es dann an den rechten Rand.

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
    meinSprite.left = 0
    pause(2000)
    meinSprite.right = scene.screenWidth()
    pause(2000)
})
```

### Im Bildschirm bleiben #ex2

Lass ein Sprite vom linken Bildschirmrand nach rechts laufen. Prüfe in einer ``||game:bei Aktualisierung des Spiels||``-Schleife, ob das Sprite den rechten Bildschirmrand berührt hat. Wenn ja, setze das Sprite zurück an den linken Bildschirmrand.

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
meinSprite.left = 0
meinSprite.vx = 40
game.onUpdateInterval(500, function () {
    if (meinSprite.right > scene.screenWidth()) {
        meinSprite.left = 0
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

