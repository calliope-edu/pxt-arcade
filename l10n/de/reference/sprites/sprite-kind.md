# Sprite-Art

Erhalte ein Sprite-Art-Objekt aus einem Sprite-Art-Bezeichner.

```sig
sprites._spriteKind(0)
```

Um verschiedene Typen von Sprites zu unterscheiden, wird ihnen eine _Art_ (kind) zugewiesen. Das ist ein Wert, der hilft, sie zu erkennen und zu entscheiden, welche Aktionen ausgeführt werden, wenn im Spiel Ereignisse passieren. Die Sprite-Arten in deinem Spiel könnten so definiert sein:

```typescript-ignore
namespace SpriteKind {
    export const Player = SpriteKind.create()
    export const Enemy = SpriteKind.create()
    export const Food = SpriteKind.create()
    ...
}
```

In Blöcken wird ein Sprite-Art-Bezeichner verwendet, um ein Sprite-Art-Element zu erstellen, das einer Variablen zugewiesen oder als Parameter verwendet werden kann:

```block
let enemyKind = SpriteKind.Enemy
```

## Parameter

* **kind**: der Sprite-Art-Bezeichner, für den das Art-Objekt abgerufen werden soll.

## Rückgabe

* ein Sprite-[Art](/reference/sprites/sprite/kind)-Objekt für einen Sprite-Art-Bezeichner.

## Beispiel #example

Erstelle mehrere `Food`-Sprites an zufälligen Positionen auf dem Bildschirm. Benutze ein Sprite-Art-Objekt für den Bezeichner `Food`, um alle `Food`-Sprites zu zerstören.

```blocks
let meinSprite: Sprite = null
let foodKind = SpriteKind.Food
for (let index = 0; index <= 4; index++) {
    meinSprite = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
    meinSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
for (let value of sprites.allOfKind(foodKind)) {
    pause(1000)
    value.destroy()
}
```

## Siehe auch #seealso

[Art](/reference/sprites/sprite/kind)
