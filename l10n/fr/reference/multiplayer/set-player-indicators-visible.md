# rendre les indicateurs des joueurs visibles

Rends les indicateurs des sprites des joueurs visibles ou invisibles.

```sig
mp.setPlayerIndicatorsVisible(true)
```

Quand ils sont visibles, les indicateurs des joueurs s'affichent à l'écran à côté du sprite de personnage du joueur. Tous les joueurs actifs ont un indicateur affiché.

## Paramètres

* **visible** : une valeur [booléenne](/types/boolean) ; si elle vaut `true`, les indicateurs de tous les joueurs sont visibles à l'écran pour chaque joueur. Sinon, si elle vaut `false`, les indicateurs ne s'affichent sur l'écran d'aucun joueur.

## Exemple #example

Définis des sprites pour `player 1` et `player 2`. Fais-les bouger sur l'écran. Active la visibilité des indicateurs pour que chaque sprite de joueur soit identifié.

```blocks
mp.setPlayerIndicatorsVisible(true)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setBounceOnWall(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setVelocity(40, -30)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d c c . 
    . . c b b c c c 5 5 b c c . . . 
    . . c c c c c d 5 5 c . . . . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setBounceOnWall(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setVelocity(50, 40)
```

## Voir aussi #seealso

[définir le sprite du joueur](/reference/multiplayer/set-player-sprite)

```package
multiplayer
```