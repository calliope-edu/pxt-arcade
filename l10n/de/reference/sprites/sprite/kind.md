# Art

Frage die Art des Sprites ab.

```sig
sprites.create(null).kind()
```

Um den Überblick über verschiedene Typen von Sprites zu behalten, kannst du ihnen eine _Art_ zuweisen. Das ist ein Wert, der hilft, sie zu erkennen und zu entscheiden, was passieren soll, wenn im Spiel Ereignisse eintreten. Es gibt keine besonderen Regeln oder Namen dafür, welche Arten du festlegst. Die Sprite-Arten in deinem Spiel könnten so definiert sein:

```typescript-ignore
namespace SpriteKind {
    export const Player = SpriteKind.create()
    export const Enemy = SpriteKind.create()
}
```

## Rückgabewert

* ein [Zahlen](/types/number)wert, der die aktuelle Sprite-Art angibt.

## Beispiel #example

Erstelle ein ``Player``-Sprite und zwei ``Friend``-Sprites. Mache alle 2 Sekunden eines der Freund-Sprites zu einem ``Enemy``. Lass die Gegner-Sprites alle 10 Sekunden wieder zu Freunden werden.

```blocks
namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
let player: Sprite = null
let friend2: Sprite = null
let friend1: Sprite = null
let greenBlock: Image = null
greenBlock = image.create(16, 16)
greenBlock.fill(7)
player = sprites.create(greenBlock, SpriteKind.Player)
friend1 = sprites.create(greenBlock, SpriteKind.Friend)
friend1.x = scene.screenWidth() / 4
friend2 = sprites.create(greenBlock, SpriteKind.Friend)
friend2.x = scene.screenWidth() * 3 / 4
game.onUpdateInterval(10000, function () {
    friend1.setKind(SpriteKind.Friend)
    friend2.setKind(SpriteKind.Friend)
})
game.onUpdateInterval(2000, function () {
    if (friend1.kind() == SpriteKind.Friend) {
        friend1.setKind(SpriteKind.Enemy)
    } else if (friend2.kind() == SpriteKind.Friend) {
        friend2.setKind(SpriteKind.Enemy)
    }
})
```

## Siehe auch #seealso

[setze Art](/reference/sprites/sprite/set-kind)
