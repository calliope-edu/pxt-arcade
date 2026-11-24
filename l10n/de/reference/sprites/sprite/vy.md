# vy (Eigenschaft)

Rufe die vertikale Geschwindigkeit eines Sprites in Pixeln pro Sekunde ab oder lege sie fest.

## Abrufen

Rufe die vertikale Geschwindigkeit des Sprites ab.

```block
let meinSprite: Sprite = null

let vertSpeed = meinSprite.vy
```
```typescript-ignorelet
vertSpeed = meinSprite.vy
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle vertikale Geschwindigkeit des Sprites in Pixeln pro Sekunde ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.vy = 0
```

```typescript-ignore
meinSprite.vy = 0
```

### Parameter

* **value**: die neue vertikale Geschwindigkeit des Sprites in Pixeln pro Sekunde.

## Bewegung von Sprites

Ein Sprite, der kein Projektil ist, bewegt sich nicht, wenn er erstellt wird. Du bringst den Sprite in Bewegung, indem du seine Geschwindigkeit (_velocity_) in **x**-Richtung, in **y**-Richtung oder in beide Richtungen festlegst. In **y**-Richtung bewegt sich der Sprite bei einem positiven Wert nach unten. Damit sich der Sprite nach oben bewegt, verwendest du einen negativen Wert.

Wenn du dem Sprite nicht mit der _Kamera_ folgst oder nicht prüfst, wann der Sprite den Rand des Bildschirms erreicht, bewegt sich der Sprite aus dem Bildschirm hinaus.

### ~ hint

**Was ist Geschwindigkeit eigentlich?**

Geschwindigkeit gibt an, welche Strecke ein Objekt in einer bestimmten Zeit zurücklegt. Ein Auto kann in einer Stunde 50 Kilometer fahren, also bewegt es sich mit 50 Kilometern pro Stunde (50 km/h). Ein Düsenflugzeug kann bis zu 913 km/h schnell fliegen und manche Kontinente in 3 oder 4 Stunden überqueren.

Entfernungen werden in deinem Spiel in Pixeln gemessen, daher wird die Geschwindigkeit eines Sprites in _Pixeln pro Sekunde_ angegeben. Wenn der Bildschirm 120 Pixel hoch ist, durchquert ein Sprite mit einer Geschwindigkeit von 40 Pixeln pro Sekunde den Bildschirm in 3 Sekunden.

### ~

## Beispiele #example

### Zu jeder Seite

Lass einen Sprite mit `40` Pixeln pro Sekunde nach unten laufen. Wenn er den unteren Rand des Bildschirms erreicht, schick ihn zurück zum oberen Rand.

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
meinSprite.vy = 40
game.onUpdateInterval(500, function () {
	if (meinSprite.y < 0 || meinSprite.y > scene.screenWidth()) {
        meinSprite.vy = meinSprite.vy * -1
    }
})
```

### Wie viele Pixel zurückgelegt?

Setze einen Sprite in Bewegung. Prüfe nach etwa `1` Sekunde, wie weit sich der Sprite bewegt hat.

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
meinSprite.vy = 60
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        meinSprite.vy = 0
        meinSprite.say("I went " + meinSprite.top + " pixels")
    }
    interval += 1
})
```

## Siehe auch #seealso

[vx](/reference/sprites/sprite/vx),
[Kamera folgt Sprite](/reference/scene/camera-follow-sprite)