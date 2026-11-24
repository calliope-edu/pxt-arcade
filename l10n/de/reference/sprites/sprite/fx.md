# fx (Eigenschaft)

Rufe die Reibung ab, die der Bewegung eines Sprites in horizontaler Richtung entgegenwirkt, oder lege sie fest.

## Abrufen

Rufe die horizontale Reibung des Sprites ab.

```block
let meinSprite: Sprite = null

let horzAccel = meinSprite.fx
```

```typescript-ignorelet
horzAccel = meinSprite.fx
```

### Rückgabe

* eine [Zahl](/types/number), die die aktuelle horizontale Reibung des Sprites ist.

## Festlegen

Lege die horizontale Reibung des Sprites fest.

```block
let meinSprite: Sprite = null

meinSprite.fx = 0
```

```typescript-ignore
meinSprite.fx = 0
```

### Parameter

* **value**: die neue horizontale Reibung, die der Bewegung des Sprites entgegenwirkt, in Pixeln pro Sekunde pro Sekunde.

## Horizontale Reibung von Sprites

Reibung ist eine Kraft, die der Bewegung eines Sprites entgegenwirkt. Wenn ein Sprite eine horizontale Geschwindigkeit (`vx`) hat, bremst ihn die Reibung ab, bis seine horizontale Geschwindigkeit `0` wird. Das ist ähnlich wie eine entgegengesetzte horizontale Beschleunigung, aber die entgegengesetzte Beschleunigung verschwindet, sobald der Sprite anhält.

## Beispiele #example

### Anhaltezeit messen #ex1

Bewege den Sprite von links nach rechts über den Bildschirm. Verwende die richtige Reibung (`fx`), damit der Sprite nach `3` Sekunden anhält.

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
meinSprite.left = 0
meinSprite.fx = 30
meinSprite.vx = 90
game.onUpdateInterval(100, function () {
    if (counting) {
        stopTime += 0.1
        if (meinSprite.vx == 0) {
            counting = false
            meinSprite.sayText("" + stopTime + "sec", 5000, false)
        }
    }
})
```

### Hüpfender Sprite #ex2

Lass einen Sprite von links nach rechts bewegen. Lass ihn einmal pro Sekunde nach rechts springen.

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
meinSprite.fx = 80
meinSprite.vx = 80
for (let index = 0; index < 3; index++) {
    meinSprite.vx = 80
    pause(1000)
}
```

## Siehe auch #seealso

[fy](/reference/sprites/sprite/fy),
[ax](/reference/sprites/sprite/ax)
