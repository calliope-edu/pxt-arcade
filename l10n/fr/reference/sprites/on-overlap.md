# lors d'un chevauchement

Exécute du code lorsqu'un sprite d'un certain type chevauche un autre sprite.

```sig
sprites.onOverlap(0, 0, function (sprite, autreSprite) {
	
})
```

Un chevauchement avec un sprite d'un type différent ou du même type est détecté. Si tu veux savoir quand un sprite ``Player`` chevauche un sprite ``Enemy``, définis le premier type de sprite sur ``Player`` et le second type de sprite dans **otherKind** sur ``Enemy``. Tu peux détecter le chevauchement de deux sprites joueurs, par exemple, en définissant **kind** et **otherKind** sur ``Player``.

Lorsqu'un chevauchement est détecté, le sprite du premier type t'est donné dans le paramètre **sprite** du **handler**. Le sprite du second type se trouve dans **autreSprite**.

Un chevauchement de deux sprites est détecté lorsque le premier pixel non transparent de l'image du premier sprite chevauche le premier pixel non transparent du second sprite. Si l'indicateur ``ghost`` d'un sprite est activé, aucun chevauchement avec un autre sprite ne sera remarqué. De plus, un chevauchement se produit même lorsque les valeurs de **Z** des sprites sont différentes.

## Paramètres

* **kind** : le premier type de sprite dont il faut vérifier le chevauchement.
* **otherKind** : le second type de sprite dont il faut vérifier le chevauchement.
* **handler** : le code à exécuter lorsque les sprites se chevauchent.
>* **sprite** : le premier sprite qui chevauche.
>* **autreSprite** : le second sprite qui chevauche.

## Exemple #example

Crée un sprite ``Ghost`` bombardé par des balles jaunes. Laisse les balles traverser le sprite jusqu'à ce que son statut de fantôme soit retiré en appuyant sur le bouton **A**. Lorsque le sprite ``Ghost`` est exposé, tout contact avec les balles est détecté dans ``||sprites:on overlap||``. Fais en sorte que les balles poussent le sprite ``Ghost`` hors de l'écran.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    autreSprite.setVelocity(-50, 50)
    sprite.sayText("Ouch!", 200, false)
    sprite.setPosition(sprite.x + 2, sprite.y + 2)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
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
    `, SpriteKind.Player)
ghost.setPosition(60, 60)
ghost.setFlag(SpriteFlag.AutoDestroy, true)
ghost.setFlag(SpriteFlag.Ghost, true)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
```

## Voir aussi #seealso

[chevauche](/reference/sprites/sprite/overlaps-with),
[définir l'indicateur](/reference/sprites/sprite/set-flag)
