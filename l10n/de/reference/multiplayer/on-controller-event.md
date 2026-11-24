# on Controller Event

Führe Code aus, wenn sich ein Spieler verbindet oder trennt.

```sig
mp.onControllerEvent(ControllerEvent.Connected, function (player) {})
```

Wenn ein neuer Spieler dem Mehrspielerspiel beitritt (sich verbindet) oder es verlässt (sich trennt), tritt ein Controller-Ereignis ein. Du kannst Code ausführen, um darauf zu reagieren.

## Parameter

* **event**: die Verbindungsaktion, auf die gewartet wird. Die Verbindungsaktionen (Ereignisse) sind:
> * ``connected``: der Spieler ist verbunden
> * ``disconnected``: der Spieler ist getrennt
* **handler**: der Code, der ausgeführt werden soll, wenn ein Verbindungsereignis eintritt.
> * **player**: der Spieler, der sich verbunden oder getrennt hat.

## Beispiel #example

Wenn sich `player 2` verbindet, wird sein Figuren-Sprite zu einer gelben Ente.

```blocks
mp.onControllerEvent(ControllerEvent.Connected, function (player) {
    if (mp.getPlayerProperty(player, mp.PlayerProperty.Number) == 2) {
        mp.setPlayerSprite(player, sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Player))
    }
})
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
```

## Siehe auch #seealso

[bei Tastenereignis](/reference/multiplayer/on-button-event),
[ist Taste gedrückt](/reference/multiplayer/is-button-pressed)


```package
multiplayer
```