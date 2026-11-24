# Spieler

Ein **Player** (Spieler) ist ein Spielobjekt, das einen der Spieler in einem [Mehrspieler](/reference/multiplayer)-
Spiel darstellt. Mit einem Player-Objekt sind Elemente, Informationen und Aktionen verbunden, die sich auf den tatsächlichen Zustand eines Spielers im Spiel beziehen.

Normalerweise wird einem Player-Objekt ein Figuren-[Sprite](/types/sprite) zugewiesen, und es merkt sich den aktuellen Punktestand, die Lebenspunkte usw. Auch Aktionen wie Controller-Eingaben und der Verbindungsstatus werden für einen Spieler erfasst.

Player-Objekte werden normalerweise über einen Selektor angesprochen, der nach der Nummer des Spielers benannt ist.

```block
let myPlayer = mp.playerSelector(mp.PlayerNumber.One)
```

Genauso ist in JavaScript `myPlayer` ein `Player`-Objekt und wird mit dem Selektor für ``||mp:player 1||`` gesetzt:

```typescript-ignore
let myPlayer: mp.Player = null

myPlayer = mp.playerSelector(mp.PlayerNumber.One)
```

## Beispiel #example

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

# Siehe auch #seealso

[Mehrspieler](/reference/multiplayer)

```package
multiplayer
```
