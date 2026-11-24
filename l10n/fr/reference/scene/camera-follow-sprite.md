# caméra suit le sprite

Fais en sorte que la scène du jeu s'ajuste pour suivre le mouvement d'un sprite.

```sig
scene.cameraFollowSprite(null)
```

La scène de ton jeu n'a pas forcément la même taille que ton écran. Si la scène est plus grande que l'écran, tes sprites peuvent dépasser le bord de l'écran. Le sprite est toujours dans la scène, mais il sort du champ de vision. Pour garder ton sprite visible à l'écran, tu peux régler la _caméra_ de la scène pour qu'elle suive le sprite pendant qu'il se déplace dans la scène.

Tant qu'un sprite se trouve dans une partie de la scène actuellement visible à l'écran, il se déplace vers une nouvelle position à l'écran quand il bouge. Quand la caméra suit le sprite et qu'il se déplace vers une position hors de l'écran, le sprite reste centré à l'écran et c'est la scène qui bouge. Cela crée l'impression d'une caméra qui se déplace dans la scène.

## Paramètres

* un [sprite](/types/sprite) que la caméra de la scène va suivre.

## Exemple #example

Crée une carte de tuiles qui forme une scène plus grande que l'écran. Déplace un sprite d'un côté de l'écran à l'autre. Fais suivre le sprite par la caméra de la scène quand il se dirige vers le bord de la scène.

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

## Voir aussi #seealso

[centrer la caméra sur](/reference/scene/center-camera-at)