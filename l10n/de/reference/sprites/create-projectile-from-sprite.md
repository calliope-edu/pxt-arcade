# Projektil von Sprite erstellen

Erstelle einen neuen bewegten Sprite, der in der Mitte eines anderen Sprites startet.

```sig
sprites.createProjectileFromSprite(img`.`, null, 50, 50)
```

Ein Projektil ist ein bewegter Sprite, der sich von der Stelle wegbewegt, an der er erstellt wurde. Er bewegt sich mit Geschwindigkeiten (`vx` und `vy`), die du für die horizontale und die vertikale Richtung festlegst.

Der Projektil-Sprite startet in der Mitte eines `sprite`, den du dafür festlegst. Die Geschwindigkeiten `vx` und `vy` haben positive oder negative Werte, die bestimmen, in welche Richtung sich das Projektil bewegt.

Das Projektil hat viele der gleichen Eigenschaften wie ein unbewegter Sprite. Es kann sich mit anderen Sprites überlappen sowie Kacheln treffen und überlappen.

Projektile werden zerstört, wenn sie den Bildschirm verlassen.

## Parameter

* **img**: ein [Bild](/types/image) für den Projektil-Sprite.
* **sprite**: der [Sprite](/types/sprite), von dem das Projektil startet.
* **vx**: die Geschwindigkeit, mit der sich der Sprite in horizontaler Richtung bewegt.
* **vy**: die Geschwindigkeit, mit der sich der Sprite in vertikaler Richtung bewegt.

## Rückgabewerte

* ein neuer Projektil-[Sprite](/types/sprite), der sich mit den festgelegten Geschwindigkeiten bewegt.

## Beispiele #example

### Projektile aus der Box schießen #ex1

Erstelle einen Sprite in Form einer Box. Schieße Projektile aus der Mitte der Box in zufällige Richtungen.

```blocks
let projektil: Sprite = null
let meinSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 a a 8 8 . . . . . 
        . . . . . 8 8 a a 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, meinSprite, randint(-50, 50), randint(-50, 50))
})
```

### Photonenblaster #ex2

Schieße Photonen aus einem Raumschiff, wenn die Taste ``B`` gedrückt wird.

```blocks
let photon: Sprite = null
let target = sprites.create(img`
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    `, SpriteKind.Enemy)
let ship = sprites.create(img`
    .....bbbbbbbbbb...........
    bbbbbbddddddddbbbb........
    bbdddddddddddddddbbbb.....
    .bdddddffffffdddddddbbbb..
    .bdddddddddddddddffddddbb.
    .bbddddddddddddddffdddddbb
    ..bdddfffffffffddddddddbb.
    ..bddddddddddddddddbbbbb..
    .bbdddddddddddddbbbb......
    .bddddddddddbbbb..........
    bbddbbbbbdbbb.............
    bbbbb...bbb...............
    `, SpriteKind.Player)
ship.x = 20
target.x = scene.screenWidth() - 10
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    photon = sprites.createProjectileFromSprite(img`
        . . . . . . 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 1 1 1 1 . 
        . . . . . . 1 1 1 . . 
        `, ship, 150, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, anderesSprite) {
    sprite.startEffect(effects.disintegrate, 100)
})
```

## Siehe auch #seealso

[erstelle](/reference/sprites/create), [Projektil von Seite erstellen](/reference/sprites/create-projectile-from-side)