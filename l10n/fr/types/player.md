# Joueur

Un **Player** (joueur) est un objet de jeu qui représente l'un des joueurs d'un jeu [multijoueur](/reference/multiplayer).
Un objet Player possède des entités, des informations et des actions liées à l'état réel d'un joueur dans le jeu.

En général, on attribue à un objet Player un [Sprite](/types/sprite) de personnage, et il garde la trace de son score actuel, de ses points de vie, etc. Les actions comme les entrées de la manette et l'état de connexion sont aussi suivies pour un joueur.

Les objets Player sont généralement référencés à l'aide d'un sélecteur nommé d'après le numéro du joueur.

```block
let myPlayer = mp.playerSelector(mp.PlayerNumber.One)
```

De même en JavaScript, `myPlayer` est un objet `Player` défini à l'aide du sélecteur pour ``||mp:player 1||`` :

```typescript-ignore
let myPlayer: mp.Player = null

myPlayer = mp.playerSelector(mp.PlayerNumber.One)
```

## Exemple #example

```blocks
namespace MultiplayerState {
    export const gems = MultiplayerState.create()
}
mp.onControllerEvent(ControllerEvent.Connected, function (player) {
    if (player == mp.playerSelector(mp.PlayerNumber.Two)) {
        mp.getPlayerSprite(player).sayText("Player 2 is on!")
    }
})
mp.onScore(100, function (player) {
    if (player == mp.playerSelector(mp.PlayerNumber.One)) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
```

# Voir aussi #seealso

[multijoueur](/reference/multiplayer)

```package
multiplayer
```
