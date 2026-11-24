# Kachel getroffen von

Finde heraus, welchen Kacheltyp der Sprite getroffen hat.

```sig
sprites.create(null).tileHitFrom(CollisionDirection.Left)
```

Wenn dein Sprite eine Wandkachel berührt, kannst du herausfinden, welche Art von Kachel es ist. Der Kachelindex in der Kachelkarte wird zurückgegeben.

## Parameter

* **direction**: die Richtung, in der auf eine Wandkollision geprüft wird: ``left``, ``right``, ``top`` oder ``bottom``.

## Rückgabe

* eine [Zahl](/types/number), die der Kachelindex der Wandkachel ist, die den Sprite berührt.

## Beispiel

Baue in der Szene eine Ziegelmauer aus Kacheln. Schicke einen Pfeil-Sprite auf die Mauer zu. Wenn der Sprite die Mauer trifft, lass ihn sagen, welchen Kacheltyp er berührt hat.

```blocks
let meinSprite: Sprite = null
let flipImage: Image = null
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    sprite.say("tile: " + sprite.tileHitFrom(CollisionDirection.Left))
})
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 f 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 f 2 2 2 f 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
`, true)
scene.setTileMap(img`
. . . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. . . . . . . . . . 
`)
flipImage = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
meinSprite = sprites.create(flipImage, SpriteKind.Player)
meinSprite.vx = -50
```

## Siehe auch #seealso

[trifft Wand](/reference/sprites/sprite/is-hitting-wall),
[wenn Kachel getroffen](/reference/sprites/on-hit-tile)