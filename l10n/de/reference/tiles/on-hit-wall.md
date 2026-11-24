# wenn Wand getroffen

Führt Code aus, wenn ein Sprite eine Wand berührt.

```sig
scene.onHitWall(0, 0, function (sprite) {
	
})
```

Es lässt sich erkennen, wenn ein sich bewegendes Sprite eine Wand in der Szene berührt. Dann kannst du Code ausführen, wenn dein Sprite eine Position berührt, die als Wand festgelegt ist. Du wählst die Sprite-Art, für die Wandkollisionen geprüft werden.

Wird ein Wandtreffer erkannt, bekommst du das Sprite der gewünschten Art im Parameter **sprite** von **handler**.

Ein Sprite trifft eine Wand, wenn sich die äußeren Ränder ihrer Bilder berühren. Wenn bei einem Sprite das Flag ``ghost`` gesetzt ist, wird jeder Kontakt mit der Wand ignoriert.

## Parameter

* **kind**: die Sprite-Art, für die ein Wandtreffer geprüft wird.
* **handler**: der Code, der ausgeführt wird, wenn das Sprite Kontakt hat.
>* **sprite**: das Sprite, das die Wandkachel getroffen hat.

## Beispiel #example

Baue in der Szene eine Ziegelmauer aus Kacheln. Schicke mit **A** ein ``Ghost``-Sprite auf die Wand zu und sieh zu, wie es anhält. Wenn Knopf **B** gedrückt wird, wechsle den Wert des Flags ``ghost`` und schau, ob das Geist-Sprite die Wand trifft oder hindurchgeht.

```blocks
enum SpriteKind {
    Ghost,
    Ball
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
// TODO tiles.setTilemap(tiles.createTilemap(null, 0, 8 ** 8, 9)); 
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
[getroffene Kachel der Art](/reference/sprites/sprite/tile-hit-of-kind),
[überlappt mit](/reference/sprites/sprite/overlaps-with),
[setze Flag](/reference/sprites/sprite/set-flag)
