# ay (Eigenschaft)

Rufe die vertikale Beschleunigung eines Sprites in Pixeln pro Sekunde pro Sekunde ab oder lege sie fest.

## Abrufen

Rufe die vertikale Beschleunigung des Sprites ab.

```block
let meinSprite: Sprite = null

let horzAccel = meinSprite.ay
```

```typescript-ignorelet
horzAccel = meinSprite.ay
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle vertikale Beschleunigung des Sprites ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.ay = 0
```

```typescript-ignore
meinSprite.ay = 0
```

### Parameter

* **value**: die neue vertikale Beschleunigung des Sprites in Pixeln pro Sekunde pro Sekunde.

## Vertikale Beschleunigung von Sprites

Der Wert der Beschleunigung bestimmt, wie schnell sich die Geschwindigkeit des Sprites ändert. Durch Beschleunigung wird ein Sprite in Richtung unten oder oben schneller. Ein positiver Wert erhöht die Geschwindigkeit des Sprites nach unten (`bottom`). Ein negativer Wert erhöht die Geschwindigkeit des Sprites nach oben (`top`).

Beschleunigung kann auch als Gegenkraft verwendet werden. Wenn sich ein Sprite mit einer bestimmten Geschwindigkeit nach unten bewegt und eine negative vertikale Beschleunigung wirkt, bewegt sich der Sprite weiter nach unten, wird aber langsamer. Wenn die Geschwindigkeit des Sprites `0` erreicht, beginnt er, sich nach oben zu bewegen.


### ~ hint

#### Wie sich die Geschwindigkeit ändert

Geschwindigkeit ist die Strecke, die sich ein Objekt in einem bestimmten Zeitraum bewegt. Strecken werden in deinem Spiel in Pixeln gemessen, daher wird die Geschwindigkeit eines Sprites in _Pixeln pro Sekunde_ angegeben. Die Geschwindigkeit ändert sich, wenn ein Objekt _beschleunigt_ wird. In deinem Spiel wird ein Sprite um eine bestimmte Geschwindigkeitsänderung pro Sekunde beschleunigt. Beschleunigung wird also in _Pixeln pro Sekunde pro Sekunde_ gemessen.

Wenn die Geschwindigkeit eines Sprites aktuell `0` ist und seine Beschleunigung auf `2` gesetzt wird, bewegt sich der Sprite nach einer Sekunde mit 2 Pixeln pro Sekunde. Nach zwei Sekunden bewegt er sich mit 4 Pixeln pro Sekunde und so weiter.

### ~

## Beispiele #example

### Zu jeder Seite #ex1

Beschleunige einen Sprite, während er sich vom oberen Bildschirmrand zum unteren und zurück bewegt.

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
meinSprite.vy = 0
meinSprite.ay = 10
game.onUpdateInterval(500, function () {
    if (meinSprite.y < 0 || meinSprite.y > scene.screenHeight()) {
        meinSprite.vy = meinSprite.vy * -1
        meinSprite.ay = meinSprite.ay * -1

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
meinSprite.top = 0
meinSprite.vy = 0
meinSprite.ay = 100
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        meinSprite.say("My speed is " + meinSprite.vy + " pixels/sec")
        meinSprite.ay = 0
        meinSprite.vy = 0
    }
    interval += 1
})
```
### Gegenkraft #ex3

Lass einen Sprite vom oberen Bildschirmrand nach unten bewegen. Wende eine Beschleunigung in die entgegengesetzte Richtung an, um den Sprite abzubremsen und nach oben zurückzuschicken.

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
meinSprite.top = 0
meinSprite.vy = 80
meinSprite.ay = -35
```

## Siehe auch #seealso

[ax](/reference/sprites/sprite/ax),
[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)
