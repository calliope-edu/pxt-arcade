# wenn Kachel überlappt

Führt Code aus, wenn ein Sprite eine bestimmte Kachelart überlappt

```sig
scene.onOverlapTile(0, 0, function (sprite) {
	
})
```

Du kannst erkennen, wenn ein sich bewegendes Sprite eine Kachel in der Szene berührt. Wenn dein Sprite eine Kachel mit dem angegebenen Bild berührt, kannst du Code ausführen. Du wählst sowohl die zu prüfende Sprite-Art als auch die Kachelart, die es treffen soll.

Wird die Überlappung mit der Kachel erkannt, bekommst du das Sprite der gewünschten Art im Parameter **sprite** von **handler**. Die Position der [Kachel](/types/tile) steht im Parameter **tile**.

Ein Sprite überlappt eine Kachel, wenn sich die äußeren Ränder ihrer Bilder berühren. Wenn bei einem Sprite das Flag ``ghost`` gesetzt ist, wird jeder Kontakt mit der Kachel ignoriert.

## Parameter

* **kind**: die Sprite-Art, für die eine Überlappung geprüft wird.
* **image**: das Bild der Kachel, mit der die Überlappung geprüft wird.
* **handler**: der Code, der ausgeführt wird, wenn das Sprite Kontakt hat.
>* **sprite**: das Sprite, das die Kachel überlappt hat.
>* **tile**: die Kachelposition, die überlappt wurde.

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

[trifft Kachel](/reference/sprites/sprite/is-hitting-tile),
[Kachelart an](/reference/sprites/sprite/tile-kind-at),
[überlappt mit](/reference/sprites/sprite/overlaps-with),
[setze Flag](/reference/sprites/sprite/set-flag)
