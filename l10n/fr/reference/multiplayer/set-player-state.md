# définir l'état du joueur

Définis une valeur pour un élément d'état d'un joueur.

```sig
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
```

Des informations comme le score et le nombre de vies du joueur sont contenues dans l'objet de jeu [Joueur](/types/player). L'objet Joueur possède déjà les éléments d'état ``||mp:score||`` et ``||mp:life||``. Tu peux ajouter tes propres [éléments d'état](/reference/multiplayer/multiplayer-state) à la liste des états du joueur. La liste des états du bloc propose une option pour ajouter tes propres nouveaux états.

Par exemple, si tu veux donner des gemmes comme récompenses dans le jeu, tu peux ajouter l'état ``||mp:gems||`` pour suivre le nombre de gemmes de chaque joueur.

```block
namespace MultiplayerState {
    export const gems = MultiplayerState.create()
}
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.gems, 7)
```

En JavaScript, un nouvel état est créé et ajouté à la collection des états multijoueur.

```typescript-ignore
namespace MultiplayerState {
    export const gems = create()
}
```

## Paramètres

* **player** : le [Joueur](/types/player) pour lequel définir la valeur d'un élément d'état.
* **state** : l'[élément d'état](/reference/multiplayer/multiplayer-state) auquel donner une **valeur**, comme `score` ou `life`.
* **value** : un [nombre](/types/number) qui est la nouvelle valeur de **state**.

## Exemple #example

Mets l'état de score de `player 1` à `0`. Envoie le sprite requin du joueur à travers l'écran pour manger un poisson rouge de l'autre côté. Quand le requin chevauche le poisson rouge, ajoute `1` à l'état de score de `player 1`.

```blocks
namespace MultiplayerState {
    export const gems = MultiplayerState.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
    goldfish.destroy(effects.warmRadial, 200)
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
})
let chomp = false
let goldfish: Sprite = null
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
goldfish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Food)
goldfish.left = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    ..............fccbbcf............ccc
    ........ffffffccccccff.........ccbbc
    ......ffbbbbbbbbbbbbbcfff.....cdbbc.
    ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
    ....fbbb1111ff1bcbcbbbcccccccbbbcf..
    .....fb11111111bbbbbbcccccccccbccf..
    ......fccc33cc11bbbbccccccccfffbbcf.
    .......fc131c111bbbcccccbdbc...fbbf.
    ........f33c111cbbbfdddddcc.....fbbf
    .........ff1111fbdbbfddcc........fff
    ...........cccccfbdbbfc.............
    .................fffff..............
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).right = scene.screenWidth()
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx = -30
game.onUpdateInterval(500, function () {
    if (chomp == true) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(img`
            ....................ccfff...........
            ..........fffffffffcbbbbf...........
            .........fbbbbbbbbbfffbf............
            .........fbb111bffbbbbff............
            .........fb11111ffbbbbbcff..........
            .........f1cccc11bbcbcbcccf.........
            ..........fc1c1c1bbbcbcbcccf...ccccc
            ............c3331bbbcbcbccccfccddbbc
            ...........c333c1bbbbbbbcccccbddbcc.
            ...........c331c11bbbbbcccccccbbcc..
            ..........cc13c111bbbbccccccffbccf..
            ..........c111111cbbbcccccbbc.fccf..
            ...........cc1111cbbbfdddddc..fbbcf.
            .............cccffbdbbfdddc....fbbf.
            ..................fbdbbfcc......fbbf
            ...................fffff.........fff
            `)
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            ..............fccbbcf............ccc
            ........ffffffccccccff.........ccbbc
            ......ffbbbbbbbbbbbbbcfff.....cdbbc.
            ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
            ....fbbb1111ff1bcbcbbbcccccccbbbcf..
            .....fb11111111bbbbbbcccccccccbccf..
            ......fccc33cc11bbbbccccccccfffbbcf.
            .......fc131c111bbbcccccbdbc...fbbf.
            ........f33c111cbbbfdddddcc.....fbbf
            .........ff1111fbdbbfddcc........fff
            ...........cccccfbdbbfc.............
            .................fffff..............
            `)
    }
    chomp = !(chomp)
})
```

## Voir aussi #seealso

[obtenir l'état du joueur](/reference/multiplayer/get-player-state),
[modifier l'état du joueur de](/reference/multiplayer/change-player-state-by)

```package
multiplayer
```