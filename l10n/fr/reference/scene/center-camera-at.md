# centrer la caméra sur

Centre la vue de la caméra sur un emplacement de la scène.

```sig
scene.centerCameraAt(0, 0)
```

Ta scène peut être plus grande que l'écran. Pour afficher une partie de la scène à l'écran, tu peux centrer la vue de la _caméra_ sur un emplacement de la scène.

## Paramètres

* **x** : un [nombre](/types/number) qui est la position horizontale dans la scène où centrer la vue de la caméra.
* **y** : un [nombre](/types/number) qui est la position verticale dans la scène où centrer la vue de la caméra.

## Exemple #example

Crée une carte de tuiles 1,5 fois plus grande que l'écran. Dessine un motif en « X » dans la scène avec des tuiles. Centre la vue de la caméra au hasard sur chaque coin de la scène.

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
## Voir aussi #seealso

[caméra suit le sprite](/reference/scene/camera-follow-sprite)