# lorsqu'un sprite est détruit

Exécute du code lorsqu'un sprite d'un certain type est détruit.

```sig
sprites.onDestroyed(0, function (sprite) {
	
})
```

## Paramètres

* **kind** : le type de sprite dont il faut attendre un événement de destruction.
* **handler** : le code à exécuter lorsque le sprite est détruit.

## Exemple #example

Crée un sprite ``Ghost`` et définis sa ``lifespan`` (durée de vie) à `1500`. Tu gagnes la partie lorsque le fantôme est détruit.

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

## Voir aussi #seealso

[détruire](/reference/sprites/sprite/destroy)