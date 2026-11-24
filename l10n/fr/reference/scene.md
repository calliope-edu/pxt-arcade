# Scène

Définis les arrière-plans de la scène et la perspective de la vue. Gère les interactions entre les tuiles et les sprites.

## Paramètres de l'écran

```cards
scene.screenWidth()
scene.screenHeight()
scene.setBackgroundColor(0)
scene.setBackgroundImage(null)
scene.backgroundColor()
scene.backgroundImage()
```

## Tuiles et cartes de tuiles

```cards
tiles.setTilemap(null)
tiles.setTileAt(tiles.getTileLocation(0, 0), null)
tiles.setWallAt(tiles.getTileLocation(0, 0), false)
tiles.getTileLocation(0, 0)
tiles.getTilesByType(null)
tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
tiles.placeOnRandomTile(null, null)
scene.onOverlapTile(SpriteKind.Player, null, function (sprite, location) {})
scene.onHitWall(SpriteKind.Player, function (sprite, location) { })
tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), null)
sprites.create(null).isHittingTile(CollisionDirection.Right)
sprites.create(null).tileKindAt(TileDirection.Right, null)
```

## Effets d'écran

```cards
effects.confetti.startScreenEffect()
effects.confetti.endScreenEffect()
```

## Vue de la caméra

```cards
scene.cameraFollowSprite(null)
scene.centerCameraAt(0, 0)
scene.cameraShake(4,500)
```

## Voir aussi

[largeur de l'écran](/reference/scene/screen-width),
[hauteur de l'écran](/reference/scene/screen-height),
[définir la couleur d'arrière-plan](/reference/scene/set-background-color),
[définir l'image d'arrière-plan](/reference/scene/set-background-image),
[couleur d'arrière-plan](/reference/scene/background-color),
[image d'arrière-plan](/reference/scene/background-image),
[définir la carte de tuiles](/reference/scene/set-tilemap),
[définir la tuile à](/reference/scene/set-tile-at),
[définir un mur à](/reference/scene/set-wall-at),
[obtenir l'emplacement de la tuile](/reference/scene/get-tile-location),
[obtenir les tuiles par type](/reference/scene/get-tiles-by-type),
[placer sur la tuile](/reference/scene/place-on-tile,)
[placer sur une tuile aléatoire](/reference/scene/place-on-random-tile),
[quand chevauche une tuile](/reference/scene/on-overlap-tile),
[quand touche un mur](/reference/scene/on-hit-wall),
[la tuile à l'emplacement est](/reference/scene/tile-at-location-equals),
[touche une tuile](/reference/sprites/sprite-is-hittint-tile),
[type de tuile à](/reference/sprites/sprite/tile-kind-at),
[démarrer l'effet d'écran](/reference/scene/start-screen-effect),
[arrêter l'effet d'écran](/reference/scene/end-screen-effect),
[caméra suit le sprite](/reference/scene/camera-follow-sprite),
[centrer la caméra sur](/reference/scene/center-camera-at),
[secouer la caméra](/reference/scene/camera-shake)
