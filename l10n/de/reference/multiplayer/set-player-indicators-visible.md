# set Player Indicators Visible

Mache die Spieleranzeigen an den Sprites sichtbar oder unsichtbar.

```sig
mp.setPlayerIndicatorsVisible(true)
```

Wenn sie sichtbar sind, werden die Spieleranzeigen auf dem Bildschirm neben dem Figuren-Sprite des Spielers angezeigt. Für alle aktiven Spieler wird eine Anzeige dargestellt.

## Parameter

* **visible**: ein [boolescher](/types/boolean) Wert. Bei `true` sind die Anzeigen aller Spieler für jeden Spieler auf dem Bildschirm sichtbar. Bei `false` werden die Anzeigen auf keinem Bildschirm angezeigt.

## Beispiel #example

Lege Sprites für `player 1` und `player 2` fest und lass sie über den Bildschirm fliegen. Schalte die Anzeigen ein, damit jedes Spieler-Sprite erkennbar ist.

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

## Siehe auch #seealso

[Spieler-Sprite festlegen](/reference/multiplayer/set-player-sprite)

```package
multiplayer
```