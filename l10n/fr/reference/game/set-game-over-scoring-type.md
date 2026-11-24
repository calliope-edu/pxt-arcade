# définir le type de score de fin de partie

Définit le type de score qui détermine le meilleur score sur plusieurs parties.

```sig
game.setGameOverScoringType(game.ScoringType.HighScore)
```

Lorsque plusieurs parties sont jouées avec ton programme de jeu, tu peux choisir la méthode d'enregistrement du meilleur score. Tu peux utiliser le score le plus élevé, le score le plus bas, ou aucun score comme meilleur score.

## Paramètres

* **type** : le type de score utilisé pour enregistrer le meilleur score sur plusieurs parties :
>* `highest` : utilise le score le plus élevé comme meilleur score.
>* `lowest` : utilise le score le plus bas comme meilleur score.
>* `none` : n'enregistre aucun score comme meilleur score.

## Exemple #example

Définis le type de meilleur score sur `lowest`. Déplace le sprite du joueur vers le haut ou vers le bas pour éviter les projectiles. Si ton joueur est touché par des projectiles, ton score augmente. Le score le plus bas est enregistré pour toutes les parties que tu joues.

```blocks
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
game.setGameOverScoringType(game.ScoringType.LowScore)
let monSprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
monSprite.left = 10
controller.moveSprite(monSprite, 0, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -60, randint(-30, 30))
})
```

## Voir aussi #seealso

[définir l'effet de fin de partie](/reference/game/set-game-over-effect),
[définir le son de fin de partie](/reference/game/set-game-over-playable),
[définir le message de fin de partie](/reference/game/set-game-over-message)