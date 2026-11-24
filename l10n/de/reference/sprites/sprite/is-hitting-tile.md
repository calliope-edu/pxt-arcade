# berührt Kachel

Prüfe, ob das Sprite eine Wandkachel berührt hat oder nicht.

```sig
sprites.create(null).isHittingTile(CollisionDirection.Left)
```

Die Funktion prüft, ob das Sprite gerade an einer seiner vier Seiten eine Wandkachel berührt. Wenn das Sprite die Wandkachel berührt, wird `true` zurückgegeben.

Das Sprite muss in Bewegung sein (eine Geschwindigkeit ``vx`` oder ``vy`` ungleich `0`), bevor auf eine Kachelberührung geprüft wird. Sonst wird `false` zurückgegeben, obwohl das Sprite die Wandkachel berührt.

## Parameter

* **direction**: die Richtung, in der auf eine Wandkollision geprüft wird: ``left``, ``right``, ``top`` oder ``bottom``

## Rückgabewert

* ein [boolescher](/types/boolean) Wert, der `true` ist, wenn das Sprite eine Wandkachel berührt, oder `false`, wenn es keine Wandkachel berührt.

## Beispiel

Baue in der Szene eine Ziegelmauer aus Kacheln. Schicke ein Pfeil-Sprite auf die Mauer zu. Wenn das Sprite die Mauer trifft, schicke es in die entgegengesetzte Richtung zurück.

```blocks
let flipImage: Image = null
let meinSprite: Sprite = null
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
game.onUpdate(function () {
    if (meinSprite.isHittingTile(CollisionDirection.Left)) {
        flipImage.flipX()
        meinSprite.vx = meinSprite.vx * -1
    }
})
```

## Siehe auch #seealso

[Kachel getroffen von](/reference/sprites/sprite/tile-hit-from),
[wenn Kachel getroffen](/reference/sprites/on-hit-tile)