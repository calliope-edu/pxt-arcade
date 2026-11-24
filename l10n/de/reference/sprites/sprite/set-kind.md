# Art setzen

Setze die Art des Sprites.

```sig
sprites.create(null).setKind(0)
```

### Parameter

* **value**: ein [Zahlenwert](/types/number), der die neue Art für den Sprite ist.

### Sprite-Arten

Um verschiedene Typen von Sprites auseinanderzuhalten, kannst du ihnen eine _Art_ (kind) zuweisen. Das ist ein Wert, der hilft, sie zu identifizieren und zu entscheiden, was passieren soll, wenn im Spiel Ereignisse auftreten. Es gibt keine besonderen Regeln oder Namen dafür, welche Arten du festlegst. Du weist eine Art aber immer im Namensraum **SpriteKind** zu.

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Comet = SpriteKind.create()
}
```

Es gibt einige Standardarten, die bereits Teil von **SpriteKind** sind. Diese sind:

* SpriteKind.Player
* SpriteKind.Enemy
* SpriteKind.Food
* SpriteKind.Projectile

Wenn du einen Sprite erstellst, kannst du ihm optional eine Art zuweisen:

```block
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

Wenn du ein Weltraumspiel machst, könntest du zum Beispiel solche Arten haben:

```typescript
namespace SpriteKind {
    export const Ship = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const moon = SpriteKind.create()
}
```

Wenn ein Sprite während des Spiels zu einer anderen Art wechseln soll, zum Beispiel ein ``Planet`` zu einem ``Asteroid`` wird, setzt du die neue Art einfach mit **setKind**.

## Beispiel #example

Erstelle einen ``Player``-Sprite und zwei ``Friend``-Sprites. Verwandle alle 2 Sekunden einen der Freund-Sprites in einen ``Enemy``. Lass alle 10 Sekunden die gegnerischen Sprites wieder zu Freunden werden.

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

[erstelle](/reference/sprites/create), [Art](/reference/sprites/sprite/kind)
