# définir le son de fin de partie

Définit un son à jouer lorsque la partie est finie.

```sig
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
```

## Paramètres

* **win** : une valeur [booléenne](/types/boolean) à mettre à `true` pour lancer le **son** si le joueur gagne la partie. Mets-la à `false` pour lancer le **son** si le joueur perd.
* **sound** : le son à jouer lorsque la partie est finie, par exemple `ba ding`, `siren` ou `buzzer`.
* **looping** : joue le **son** en boucle si la valeur est `true`. Joue le **son** une seule fois si elle vaut `false`.

## Exemple #example

Termine la partie lorsque le sprite du chaton touche le bord gauche de l'écran. Joue le son `siren` lorsque le joueur gagne la partie.

```blocks
game.setGameOverPlayable(true, music.melodyPlayable(music.siren), false)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
monSprite.vx = -20
game.onUpdateInterval(500, function () {
    if (monSprite.left < 0) {
        game.gameOver(true)
    }
})
```

## Voir aussi #seealso

[définir l'effet de fin de partie](/reference/game/set-game-over-effect),
[définir le message de fin de partie](/reference/game/set-game-over-message)