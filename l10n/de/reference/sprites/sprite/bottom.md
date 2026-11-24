# bottom (Eigenschaft)

Rufe die untere Position des Sprites auf dem Bildschirm ab oder lege sie fest.

## Abrufen

Rufe die untere Position des Sprites ab.

```block
let meinSprite: Sprite = null

let bottomPosition = meinSprite.bottom
```

```typescript-ignore
let bottomPosition = meinSprite.bottom
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle untere Position des Sprite-Objekts auf dem Bildschirm ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.bottom = 0
```

```typescript-ignore
meinSprite.bottom = 0
```

### Parameter

* **value**: die neue untere Position des Sprite-Objekts auf dem Bildschirm.

## Sprite-Positionen

Das Bild des Sprites bildet ein Rechteck mit einer bestimmten Anzahl von Pixelzeilen. Die Unterkante (**bottom**) des Sprites ist die vertikale Position der letzten Pixelzeile des Sprites auf dem Bildschirm. Die Unterkante kann einen Wert haben, der größer als die Bildschirmhöhe ist. Sie kann auch einen Wert haben, der kleiner als der obere Bildschirmrand ist (oben ist `0`, und der Wert der Unterkante des Sprites ist in diesem Fall negativ). Wenn das passiert, ist der Sprite ganz oder teilweise nicht auf dem Bildschirm sichtbar.

## Beispiele #example

### Von Seite zu Seite #ex1

Bewege einen Sprite an den oberen Bildschirmrand. Warte 2 Sekunden und bewege ihn dann an den unteren Rand.

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
    meinSprite.top = 0
    pause(2000)
    meinSprite.bottom = scene.screenHeight()
    pause(2000)
})
```

### Innerhalb der Grenzen bleiben #ex2

Schicke einen Sprite vom unteren Bildschirmrand nach oben. Prüfe in einer ``||game:on game update||``-Schleife, ob der Sprite den oberen Bildschirmrand berührt hat. Wenn ja, setze den Sprite zurück an den unteren Bildschirmrand.

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
meinSprite.bottom = scene.screenHeight()
meinSprite.vy = -40
game.onUpdateInterval(500, function () {
    if (meinSprite.bottom < 0) {
        meinSprite.bottom = scene.screenHeight()
        meinSprite.say("Reset!", 500)
    }
})
```
## Siehe auch #seealso

[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)

