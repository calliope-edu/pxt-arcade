# zentriere Kamera auf

Zentriere die Kameraansicht auf eine Position in der Szene.

```sig
scene.centerCameraAt(0, 0)
```

Deine Szene ist vielleicht größer als der Bildschirm. Um einen Teil der Szene in die Bildschirmansicht zu holen, kannst du die _Kamera_-Ansicht auf eine Position in der Szene zentrieren.

## Parameter

* **x**: eine [Zahl](/types/number): die horizontale Position in der Szene, auf die die Kameraansicht zentriert wird.
* **y**: eine [Zahl](/types/number): die vertikale Position in der Szene, auf die die Kameraansicht zentriert wird.

## Beispiel #example

Erstelle eine Kachelkarte, die 1,5-mal so groß ist wie der Bildschirm. Zeichne mit Kacheln ein „X“-Muster in die Szene. Zentriere die Kameraansicht zufällig auf die einzelnen Ecken der Szene.

```blocks
let sceneMap: Image = null
let baseTile: Image = null
let sceneY = 0
let corner = 0
let sceneX = 0
sceneX = scene.screenWidth() * 3 / 2
sceneY = scene.screenHeight() * 3 / 2
sceneX = sceneX - sceneX % 8
sceneY = sceneY - sceneY % 8
baseTile = image.create(8, 8)
baseTile.fill(8)
sceneMap = image.create(sceneX / 8, sceneY / 8)
scene.setTile(8, baseTile)
sceneMap.fill(8)
sceneMap.drawRect(0, 0, sceneX / 8, sceneY / 8, 3)
sceneMap.drawLine(0, 0, sceneX / 8, sceneY / 8, 3)
sceneMap.drawLine(0, sceneY / 8, sceneX / 8, 0, 3)
scene.setTileMap(sceneMap)
game.onUpdateInterval(500, function () {
    corner = Math.randomRange(0, 3)
    if (corner == 0) {
        scene.centerCameraAt(0, 0)
    } else if (corner == 1) {
        scene.centerCameraAt(sceneX - 1, 0)
    } else if (corner == 2) {
        scene.centerCameraAt(0, sceneY - 1)
    } else {
        scene.centerCameraAt(sceneX - 1, sceneY - 1)
    }
})
```
## Siehe auch #seealso

[Kamera folgt Sprite](/reference/scene/camera-follow-sprite)