# fy (Eigenschaft)

Frage die Reibung ab, die der Bewegung eines Sprites in vertikaler Richtung entgegenwirkt, oder lege sie fest.

## Abfragen

Frage die vertikale Reibung des Sprites ab.

```block
let meinSprite: Sprite = null

let horzAccel = meinSprite.fy
```

```typescript-ignorelet
horzAccel = meinSprite.fy
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle vertikale Reibung des Sprites angibt.

## Festlegen

Lege die vertikale Reibung für das Sprite fest.

```block
let meinSprite: Sprite = null

meinSprite.fy = 0
```

```typescript-ignore
meinSprite.fy = 0
```

### Parameter

* **value**: die neue vertikale Reibung, die der Bewegung des Sprites entgegenwirkt, in Pixeln pro Sekunde pro Sekunde.

## Vertikale Reibung eines Sprites

Reibung ist eine Kraft, die der Bewegung eines Sprites entgegenwirkt. Wenn ein Sprite eine vertikale Geschwindigkeit (`vy`) hat, bremst die Reibung das Sprite ab, bis seine vertikale Geschwindigkeit `0` wird. Das ähnelt einer entgegengesetzten vertikalen Beschleunigung, nur dass diese Gegenbeschleunigung verschwindet, sobald das Sprite stehen bleibt.

## Beispiele #example

### Anhaltezeit messen #ex1

Bewege das Sprite von oben nach unten über den Bildschirm. Verwende genau so viel Reibung (`fy`), dass das Sprite nach `3` Sekunden anhält.

```blocks
let stopTime = 0
let counting = true
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
meinSprite.fy = 20
meinSprite.vy = 60
game.onUpdateInterval(100, function () {
    if (counting) {
        stopTime += 0.1
        if (meinSprite.vy == 0) {
            counting = false
            meinSprite.sayText("" + stopTime + "sec", 5000, false)
        }
    }
})
```

### Hüpfendes Sprite #ex2

Lass ein Sprite von oben nach unten laufen. Lass es einmal pro Sekunde nach vorne springen.

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
meinSprite.fy = 60
meinSprite.vy = 60
for (let index = 0; index < 3; index++) {
    meinSprite.vy = 60
    pause(1000)
}
```

## Siehe auch #seealso

[fx](/reference/sprites/sprite/fx),
[ay](/reference/sprites/sprite/ay)
