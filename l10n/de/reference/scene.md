# Szene

Lege Hintergründe und die Ansicht der Szene fest. Behandle Wechselwirkungen zwischen Kacheln und Sprites.

## Bildschirmeinstellungen

```cards
scene.screenWidth()
scene.screenHeight()
scene.setBackgroundColor(0)
scene.setBackgroundImage(null)
scene.backgroundColor()
scene.backgroundImage()
```

## Kacheln und Kachelkarten

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

## Bildschirmeffekte

```cards
effects.confetti.startScreenEffect()
effects.confetti.endScreenEffect()
```

## Kameraansicht

```cards
scene.cameraFollowSprite(null)
scene.centerCameraAt(0, 0)
scene.cameraShake(4,500)
```

## Siehe auch

[Bildschirmbreite](/reference/scene/screen-width),
[Bildschirmhöhe](/reference/scene/screen-height),
[setze Hintergrundfarbe](/reference/scene/set-background-color),
[setze Hintergrundbild](/reference/scene/set-background-image),
[Hintergrundfarbe](/reference/scene/background-color),
[Hintergrundbild](/reference/scene/background-image),
[setze Kachelkarte](/reference/scene/set-tilemap),
[setze Kachel an](/reference/scene/set-tile-at),
[setze Wand an](/reference/scene/set-wall-at),
[Kachelposition abrufen](/reference/scene/get-tile-location),
[Kacheln nach Typ abrufen](/reference/scene/get-tiles-by-type),
[auf Kachel platzieren](/reference/scene/place-on-tile,)
[auf zufälliger Kachel platzieren](/reference/scene/place-on-random-tile),
[wenn Kachel überlappt](/reference/scene/on-overlap-tile),
[wenn Wand getroffen](/reference/scene/on-hit-wall),
[Kachel an Position ist](/reference/scene/tile-at-location-equals),
[berührt Kachel](/reference/sprites/sprite-is-hittint-tile),
[Kachelart an](/reference/sprites/sprite/tile-kind-at),
[starte Bildschirmeffekt](/reference/scene/start-screen-effect),
[beende Bildschirmeffekt](/reference/scene/end-screen-effect),
[Kamera folgt Sprite](/reference/scene/camera-follow-sprite),
[zentriere Kamera auf](/reference/scene/center-camera-at),
[Kamera wackeln](/reference/scene/camera-shake)
