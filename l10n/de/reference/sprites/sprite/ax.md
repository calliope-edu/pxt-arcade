# ax (Eigenschaft)

Rufe die horizontale Beschleunigung eines Sprites in Pixeln pro Sekunde pro Sekunde ab oder lege sie fest.

## Abrufen

Rufe die horizontale Beschleunigung des Sprites ab.

```block
let meinSprite: Sprite = null

let horzAccel = meinSprite.ax
```

```typescript-ignorelet
horzAccel = meinSprite.ax
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle horizontale Beschleunigung des Sprites ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.ax = 0
```

```typescript-ignore
meinSprite.ax = 0
```

### Parameter

* **value**: die neue horizontale Beschleunigung des Sprites in Pixeln pro Sekunde pro Sekunde.

## Horizontale Beschleunigung von Sprites

Der Wert der Beschleunigung bestimmt, wie schnell sich die Geschwindigkeit des Sprites ändert. Durch Beschleunigung wird ein Sprite in Richtung rechts oder links schneller. Ein positiver Wert erhöht die Geschwindigkeit des Sprites nach rechts (`right`). Ein negativer Wert erhöht die Geschwindigkeit des Sprites nach links (`left`).

Beschleunigung kann auch als Gegenkraft verwendet werden. Wenn sich ein Sprite mit einer bestimmten Geschwindigkeit nach rechts bewegt und eine negative horizontale Beschleunigung wirkt, bewegt sich der Sprite weiter nach rechts, wird aber langsamer. Wenn die Geschwindigkeit des Sprites `0` erreicht, beginnt er, sich nach links zu bewegen.

### ~ hint

#### Wie sich die Geschwindigkeit ändert

Geschwindigkeit ist die Strecke, die sich ein Objekt in einem bestimmten Zeitraum bewegt. Strecken werden in deinem Spiel in Pixeln gemessen, daher wird die Geschwindigkeit eines Sprites in _Pixeln pro Sekunde_ angegeben. Die Geschwindigkeit ändert sich, wenn ein Objekt _beschleunigt_ wird. In deinem Spiel wird ein Sprite um eine bestimmte Geschwindigkeitsänderung pro Sekunde beschleunigt. Beschleunigung wird also in _Pixeln pro Sekunde pro Sekunde_ gemessen.

Wenn die Geschwindigkeit eines Sprites aktuell `0` ist und seine Beschleunigung auf `2` gesetzt wird, bewegt sich der Sprite nach einer Sekunde mit 2 Pixeln pro Sekunde. Nach zwei Sekunden bewegt er sich mit 4 Pixeln pro Sekunde und so weiter.

### ~

## Beispiele #example

### Zu jeder Seite #ex1

Beschleunige einen Sprite, während er sich vom linken Bildschirmrand zum rechten und zurück bewegt.

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
meinSprite.vx = 0
meinSprite.ax = 10
game.onUpdateInterval(500, function () {
    if (meinSprite.x < 0 || meinSprite.x > scene.screenWidth()) {
        meinSprite.vx = meinSprite.vx * -1
        meinSprite.ax = meinSprite.ax * -1

    }
})

```

### Wie schnell war er? #ex2

Beschleunige einen Sprite mit `100`, beginnend bei einer Geschwindigkeit von `0`. Prüfe nach etwa `1` Sekunde, wie schnell der Sprite war.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let interval = 0
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
meinSprite.vx = 0
meinSprite.ax = 100
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        meinSprite.say("My speed is " + meinSprite.vx + " pixels/sec")
        meinSprite.ax = 0
        meinSprite.vx = 0
    }
    interval += 1
})
```

### Gegenkraft #ex3

Lass einen Sprite vom linken Bildschirmrand zum rechten bewegen. Wende eine Beschleunigung in die entgegengesetzte Richtung an, um den Sprite abzubremsen und nach links zurückzuschicken.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite.setStayInScreen(true)
meinSprite.left = 0
meinSprite.vx = 100
meinSprite.ax = -35
```

## Siehe auch #seealso

[ay](/reference/sprites/sprite/ay),
[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)
