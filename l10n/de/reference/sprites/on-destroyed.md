# wenn zerstört

Führe Code aus, wenn ein Sprite einer bestimmten Art zerstört wird.

```sig
sprites.onDestroyed(0, function (sprite) {
	
})
```

## Parameter

* **kind**: die Sprite-Art, auf deren Zerstörungsereignis gewartet wird.
* **handler**: der Code, der ausgeführt wird, wenn der Sprite zerstört wird.

## Beispiel #example

Erstelle einen ``Ghost``-Sprite und setze seine ``lifespan`` auf `1500`. Du gewinnst das Spiel, wenn der Geist zerstört wird.

```blocks
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
}
let ghost: Sprite = null
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
ghost.setFlag(SpriteFlag.Ghost, true)
ghost.lifespan = 1500
sprites.onDestroyed(SpriteKind.Ghost, function (sprite) {
    game.gameOver(true)
})
```

## Siehe auch #seealso

[zerstören](/reference/sprites/sprite/destroy)