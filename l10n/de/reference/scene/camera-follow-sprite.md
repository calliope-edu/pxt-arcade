# Kamera folgt Sprite

Lass die Spielszene der Bewegung eines Sprites folgen.

```sig
scene.cameraFollowSprite(null)
```

Deine Spielszene ist vielleicht nicht so groß wie dein Bildschirm. Wenn die Szene größer als der Bildschirm ist, können deine Sprites über den Bildschirmrand hinauswandern. Das Sprite ist dann noch in der Szene, aber nicht mehr zu sehen. Damit dein Sprite auf dem Bildschirm sichtbar bleibt, kannst du die _Kamera_ der Szene dem Sprite folgen lassen, während es sich durch die Szene bewegt.

Solange sich ein Sprite in einem Teil der Szene befindet, der gerade auf dem Bildschirm zu sehen ist, bewegt es sich beim Verschieben an eine neue Stelle auf dem Bildschirm. Wenn die Kamera dem Sprite folgt und es sich an eine Position außerhalb der Bildschirmansicht bewegt, bleibt das Sprite in der Mitte des Bildschirms und stattdessen bewegt sich die Szene. So entsteht der Eindruck einer Kamera, die sich durch die Szene bewegt.

## Parameter

* ein [Sprite](/types/sprite), dem die Kamera der Szene folgt.

## Beispiel #example

Erstelle eine Kachelkarte, die eine Szene größer als den Bildschirm ergibt. Bewege ein Sprite von einer Seite des Bildschirms zur anderen. Lass die Kamera der Szene dem Sprite folgen, während es sich zum Rand der Szene bewegt.

```blocks
let sceneMap: Image = null
let baseTile: Image = null
let ball: Sprite = null
let sceneX = 0
let sceneY = 0
sceneX = scene.screenWidth() * 3 / 2
sceneY = scene.screenHeight()
sceneX = sceneX - sceneX % 16
sceneY = sceneY - sceneY % 16
baseTile = image.create(16, 16)
baseTile.fill(4)
scene.setTile(4, baseTile)
sceneMap = image.create(sceneX / 16, sceneY / 16)
sceneMap.fill(4)
sceneMap.drawLine(0, 0, 0, sceneY / 16, 9)
sceneMap.drawLine(sceneX / 16, 0, sceneX /16, sceneY / 16, 9)
sceneMap.drawLine(sceneX / 32, 0, sceneX / 32, sceneY / 16, 7)

scene.setTileMap(sceneMap)
ball = sprites.create(img`
. . . . f f f f f f f f . . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f e e e e e e e e e e e e f . 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
. f e e e e e e e e e e e e f .
. f e e e e e e e e e e e e f .
. . f e e e e e e e e e e f . .
. . . . f f f f f f f f . . . . 
`)
ball.vx = 70
scene.cameraFollowSprite(ball)
game.onUpdate(function () {
    if (ball.x < 16 || ball.x > sceneX - 16) {
        ball.vx = ball.vx * -1
    }
})
```

## Siehe auch #seealso

[zentriere Kamera auf](/reference/scene/center-camera-at)