# remise à zéro

Réinitialise le jeu.

```sig
game.reset()
```

Réinitialiser le jeu met un terme au programme de jeu. Le programme du jeu est ensuite redémarré. Si le jeu s'exécute sur un appareil, il s'agit d'un équivalent à l'utilisation du bouton de réinitialisation

## Exemple #example

Déplace un sprite de la gauche de l'écran vers la droite. Lorsque le sprite atteint le côté droit de l'écran, le programme du jeu se réinitialise.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 . . . . . 
`, SpriteKind.Player)
monSprite.left = 0
monSprite.vx = 30
game.onUpdate(function () {
    if (monSprite.right > scene.screenWidth()) {
        game.reset()
    }
})
```

## Voir aussi #seealso

[over](/reference/game/over)