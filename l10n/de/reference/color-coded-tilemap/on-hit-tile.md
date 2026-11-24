# bei Treffer auf Kachel

Führe Code aus, wenn ein Sprite eine Wandkachel berührt.

```sig
scene.onHitTile(0, 0, function (sprite) {
	
})
```

Du kannst erkennen, wann ein sich bewegender Sprite eine Kachel in der Szene berührt. Wenn dein Sprite eine Kachel berührt, die als Wand festgelegt ist (``wall`` ist auf ``ON`` gestellt), kannst du in diesem Moment Code ausführen. Du wählst sowohl die Sprite-Art, die geprüft werden soll, als auch den Kacheltyp, den er trifft.

Wenn ein Wandtreffer erkannt wird, bekommst du den Sprite der gewünschten Art im Parameter **sprite** des **handler**.

Ein Sprite trifft eine Wand, wenn sich die Außenkanten ihrer Bilder berühren. Wenn bei einem Sprite das Flag ``ghost`` gesetzt ist, wird kein Kontakt mit der Wandkachel bemerkt.

## Parameter

* **kind**: die Sprite-Art, die auf einen Wandtreffer geprüft wird.
* **type**: der Typ der Wandkachel, auf deren Treffer geprüft wird.
* **handler**: der Code, der ausgeführt wird, wenn der Sprite die Kachel berührt.
>* **sprite**: der Sprite, der die Wandkachel getroffen hat.

## Beispiel #example

Baue in der Szene eine Ziegelmauer aus Kacheln. Benutze **A**, um einen ``Ghost``-Sprite auf die Wand zuzuschicken, und sieh zu, wie er anhält. Wenn Knopf **B** gedrückt wird, ändere den Wert des Flags ``ghost`` und schau, ob der Geist-Sprite die Wand trifft oder hindurchgeht.

```blocks
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const Ball = SpriteKind.create()
}
let ghost: Sprite = null
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
ghost = sprites.create(img`
. . . . . . d d d d d . . . . . 
. . . d d d d 1 1 1 d d d . . . 
. . d d 1 1 1 1 1 1 1 1 d d . . 
. . d 1 1 1 1 1 1 1 1 1 1 d . . 
. . d 1 1 1 1 1 1 1 1 1 1 d d . 
. d d 1 1 1 f 1 1 1 f 1 1 1 d . 
. d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
. d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
. d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
d 1 d d d 1 1 d d d d 1 d 1 1 d 
d d d . d d d d . . d d d d d d 
d d . . . d d . . . . d . . d d 
`, SpriteKind.Ghost)
ghost.right = scene.screenWidth() - 1
scene.onHitTile(SpriteKind.Ghost, 2, function (sprite) {
    sprite.say("Ouch!", 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, false)
    ghost.right = scene.screenWidth() - 1
    ghost.vx = - 100
}) 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, true)
    ghost.right = scene.screenWidth() - 1
    ghost.vx = - 100
})
```

## Siehe auch #seealso

[trifft Wand](/reference/sprites/sprite/is-hitting-wall),
[getroffene Kachel von](/reference/sprites/sprite/tile-hit-from),
[überlappt mit](/reference/sprites/sprite/overlaps-with),
[setze Flag](/reference/sprites/sprite/set-flag)

```package
color-coded-tilemap
```
