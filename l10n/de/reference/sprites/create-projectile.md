# Projektil erstellen

Erstelle einen neuen bewegten Sprite aus einem Pixelbild.

```sig
sprites.createProjectile(img``, 0, 0, 0)
```

Ein Projektil ist ein Sprite, der sich von der Stelle wegbewegt, an der er erstellt wurde. Er bewegt sich mit einer Geschwindigkeit, die du für die horizontale und die vertikale Richtung festlegst. Der Sprite startet an der Bildschirmkoordinate (0, 0), außer du lässt ihn von einem anderen Sprite kommen. Dann startet das Projektil in der Mitte des Sprites, den du als Quelle festlegst.

Das Projektil hat alle Eigenschaften eines unbewegten Sprites. Es kann sich mit anderen Sprites überlappen und mit Kacheln zusammenstoßen.

Projektile werden zerstört, wenn sie den Bildschirm verlassen.

## Parameter

* **img**: ein [Bild](/types/image), für das ein Sprite erstellt wird.
* **vx**: die Geschwindigkeit, mit der sich der Sprite in horizontaler Richtung bewegt.
* **vy**: die Geschwindigkeit, mit der sich der Sprite in vertikaler Richtung bewegt.
* **kind**: die Art des zu erstellenden Sprites – ``Player``, ``Enemy`` usw.
* **sprite**: ein optionaler [Sprite](/types/sprite), von dem aus geschossen wird.

## Rückgabewerte

* ein neuer Spiel-[Sprite](/types/sprite), der sich mit einer festgelegten Geschwindigkeit bewegt.

## Beispiele #example

### Smiley-Sprint #ex1

Schicke einen Smiley-Sprite von einer Ecke des Bildschirms zur anderen.

```blocks
let smiley: Sprite = null
let xSpeed = 50
let ySpeed = xSpeed * scene.screenHeight() / scene.screenWidth()
smiley = sprites.createProjectile(img`
. . . . . f f f f f f f . . . . 
. . . f f e e e e e e e f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
f e e e e f f e e e f f e e e f 
f e e e e f f e e e f f e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e f e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e f e e e e e f e e e f 
f e e e e e f f f f f e e e e f 
. f e e e e e e e e e e e e f . 
. . f e e e e e e e e e e f . . 
. . . f f e e e e e e e f . . . 
. . . . . f f f f f f f . . . . 
`, xSpeed, ySpeed, SpriteKind.Player)
```

### Photonenblaster

Schieße Photonen aus einem Raumschiff, wenn die Taste ``B`` gedrückt wird.

```blocks
namespace SpriteKind {
    export const Photon = SpriteKind.create()
}
let photon: Sprite = null

let ship = sprites.create(img`
. . . . . b b b b b b b b b b . . . . . . . . . . .
b b b b b b d d d d d d d d b b b b . . . . . . . .
b b d d d d d d d d d d d d d d d b b b b . . . . .
. b d d d d d f f f f f f d d d d d d d b b b b . .
. b d d d d d d d d d d d d d d d f f d d d d b b .
. b b d d d d d d d d d d d d d d f f d d d d d b b
. . b d d d f f f f f f f f f d d d d d d d d b b .
. . b d d d d d d d d d d d d d d d d b b b b b . .
. b b d d d d d d d d d d d d d b b b b . . . . . .
. b d d d d d d d d d d b b b b . . . . . . . . . .
b b d d b b b b b d b b b . . . . . . . . . . . . .
b b b b b . . . b b b . . . . . . . . . . . . . . .
`, SpriteKind.Player)
ship.x = 20
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    photon = sprites.createProjectile(img`
. . . . . . 1 1 1 . .
. . . 1 1 1 1 1 1 1 .
1 1 1 1 1 1 1 1 1 1 1
. . . 1 1 1 1 1 1 1 .
. . . . . . 1 1 1 . .
`, 150, 0, SpriteKind.Photon, ship)
})
```

## Siehe auch #seealso

[erstelle](/reference/sprites/create)