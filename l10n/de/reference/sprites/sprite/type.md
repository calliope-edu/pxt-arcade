# type (Eigenschaft)

Rufe die Art (Kind) eines Sprites ab oder lege sie fest.

## Abrufen

Rufe die Art des Sprites ab.

```block
let meinSprite: Sprite = null

let myKind = meinSprite.type
```

```typescript-ignore
let myKind = meinSprite.type
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Art des Sprites ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.type = 0
```

```typescript-ignore
meinSprite.type = 0
```

### Parameter

* **value**: die neue Art, die für den Sprite festgelegt wird.

## Arten von Sprites

Um den Überblick über verschiedene Typen von Sprites zu behalten, kannst du ihnen eine _Art_ (kind) zuweisen. Das ist ein Wert, der hilft, sie zu erkennen und zu entscheiden, welche Aktionen ausgeführt werden, wenn im Spiel Ereignisse passieren. Es gibt keine besonderen Regeln oder Namen dafür, welche Arten du festlegst. Eine gute Möglichkeit ist aber, eine Aufzählung von Arten wie diese zu erstellen:

```typescript
enum SpriteKind {
    Player,
    Enemy
}
```

Wenn du dann einen Sprite erstellst, kannst du ihm optional eine Art zuweisen:

```block
enum SpriteKind {
    Player,
    Enemy
}
let meinSprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

```typescript-ignore
let meinSprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

Wenn du ein Weltraumspiel machst, könntest du Arten wie diese haben:

```typescript
enum SpriteKind {
    Ship,
    Planet,
    Asteroid,
    Moon
}
```

## Beispiel #example

Erstelle einen ``Player``-Sprite und zwei ``Friend``-Sprites. Verwandle alle 2 Sekunden einen der Freund-Sprites in einen ``Enemy``. Lass die Gegner-Sprites alle 10 Sekunden wieder zu Freunden werden.

```blocks
enum SpriteKind {
    Player,
    Friend,
    Enemy
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
    friend1.type = SpriteKind.Friend
    friend2.type = SpriteKind.Friend
})
game.onUpdateInterval(2000, function () {
    if (friend1.type == SpriteKind.Friend) {
        friend1.type = SpriteKind.Enemy
    } else if (friend2.type == SpriteKind.Friend) {
        friend2.type = SpriteKind.Enemy
    }
})
```

## Siehe auch #seealso

[erstellen](/reference/sprites/sprite/create)
