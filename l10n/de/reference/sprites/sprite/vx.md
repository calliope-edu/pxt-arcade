# vx (Eigenschaft)

Rufe die horizontale Geschwindigkeit eines Sprites in Pixeln pro Sekunde ab oder lege sie fest.

## Abrufen

Rufe die horizontale Geschwindigkeit des Sprites ab.

```block
let meinSprite: Sprite = null

let horzSpeed = meinSprite.vx
```
```typescript-ignorelet
horzSpeed = meinSprite.vx
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle horizontale Geschwindigkeit des Sprites in Pixeln pro Sekunde ist.

## Festlegen

Lege die horizontale Geschwindigkeit des Sprites fest.

```block
let meinSprite: Sprite = null

meinSprite.vx = 0
```

```typescript-ignore
meinSprite.vx = 0
```

### Parameter

* **value**: die neue horizontale Geschwindigkeit des Sprites in Pixeln pro Sekunde.

## Bewegung von Sprites

Ein Sprite, der kein Projektil ist, bewegt sich nicht, wenn er erstellt wird. Du bringst den Sprite in Bewegung, indem du seine Geschwindigkeit (_velocity_) in **x**-Richtung, in **y**-Richtung oder in beide Richtungen festlegst. In **x**-Richtung bewegt sich der Sprite bei einem positiven Wert nach rechts. Damit sich der Sprite nach links bewegt, verwendest du einen negativen Wert.

Wenn du dem Sprite nicht mit der _Kamera_ folgst oder nicht prüfst, wann der Sprite den Rand des Bildschirms erreicht, bewegt sich der Sprite aus dem Bildschirm hinaus.

### ~ hint

**Was ist Geschwindigkeit eigentlich?**

Geschwindigkeit gibt an, welche Strecke ein Objekt in einer bestimmten Zeit zurücklegt. Ein Auto kann in einer Stunde 50 Kilometer fahren, also bewegt es sich mit 50 Kilometern pro Stunde (50 km/h). Ein Düsenflugzeug kann bis zu 913 km/h schnell fliegen und manche Kontinente in 3 oder 4 Stunden überqueren.

Entfernungen werden in deinem Spiel in Pixeln gemessen, daher wird die Geschwindigkeit eines Sprites in _Pixeln pro Sekunde_ angegeben. Wenn der Bildschirm 160 Pixel breit ist, durchquert ein Sprite mit einer Geschwindigkeit von 40 Pixeln pro Sekunde den Bildschirm in 4 Sekunden.

### ~

## Beispiele #example

### Zu jeder Seite

Lass einen Sprite mit `40` Pixeln pro Sekunde nach rechts laufen. Wenn er den rechten Rand des Bildschirms erreicht, schick ihn zurück zum linken Rand.

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
meinSprite.vx = 40
game.onUpdateInterval(500, function () {
	if (meinSprite.x < 0 || meinSprite.x > scene.screenWidth()) {
        meinSprite.vx = meinSprite.vx * -1
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
meinSprite.left = 0
meinSprite.vx = 60
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        meinSprite.vx = 0
        meinSprite.say("I went " + meinSprite.left + " pixels")
    }
    interval += 1
})
```

## Siehe auch #seealso

[vy](/reference/sprites/sprite/vy),
[Kamera folgt Sprite](/reference/scene/camera-follow-sprite)