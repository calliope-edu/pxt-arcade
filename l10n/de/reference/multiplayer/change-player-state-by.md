# change Player State By

Ändere einen Spielerzustandswert um einen bestimmten Betrag.

```sig
mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
```
Ein Zustandswert eines [Spielers](/types/player) wird geändert, indem ein Betrag zum aktuellen Wert addiert oder davon subtrahiert wird. Der Änderungsbetrag steht im Parameter **delta**. Wenn der ``||mp:score||``-Wert des Spielers `20` ist und du `1` zum Punktestand addieren möchtest, setze **delta** auf `1`. Wenn du ``||mp:score||`` dagegen auf `15` verringern möchtest, setze **delta** auf `-5`.

## Parameter

* **player**: der Spieler, dessen **state**-Wert geändert wird.
* **state**: der zu ändernde [Zustandswert](/reference/multiplayer/multiplayer-state), z. B. `score` oder `life`.
* **delta**: der Betrag, um den der **state**-Wert geändert wird.

## Beispiel #example

Setze den Punktestand von `player 1` auf `0`. Schicke das Hai-Sprite des Spielers über den Bildschirm, damit es einen Goldfisch auf der gegenüberliegenden Seite frisst. Wenn sich der Hai mit dem Goldfisch überlappt, addiere `1` zum Punktestand von `player 1`.

```blocks
namespace MultiplayerState {
    export const gems = MultiplayerState.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
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

## Siehe auch #seealso

[setze Spielerzustand](/reference/multiplayer/set-player-state),
[Spielerzustand abrufen](/reference/multiplayer/get-player-state)

```package
multiplayer
```