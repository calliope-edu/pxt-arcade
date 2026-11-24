# définir le sprite du joueur

Attribue un sprite de personnage à un joueur.

```sig
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img``))
```

Le sprite défini pour un [Joueur](/types/player) se déplace quand les boutons de la manette sont activés pour ce joueur. De plus, les [indicateurs]() du joueur sont affichés avec le sprite.

## Paramètres

* **player** : le [Joueur](/types/player) auquel attribuer un sprite.
* **sprite** : le sprite à définir comme sprite de personnage de **player**.

## Exemple #example

Définis un sprite de personnage pour `player 2` et fais-le bouger avec les boutons de la manette.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
```

## Voir aussi #seealso

[obtenir le sprite du joueur](/reference/multiplayer/get-player-sprite),
[rendre les indicateurs des joueurs visibles](/reference/multiplayer/set-player-indicators-visible)

```package
multiplayer
```