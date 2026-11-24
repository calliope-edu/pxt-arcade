# Countdown

Ruft die aktuelle Countdown-Zeit des Spiels ab.

```sig
info.countdown()
```

## Rückgabewert

* eine [Zahl](/types/number), die die verbleibende Countdown-Zeit des Spiels in Sekunden ist.

## Beispiel #example

Lass einen Sprite eine Warnung anzeigen, wenn die Countdown-Zeit weniger als `5` Sekunden beträgt.

```blocks
info.startCountdown(30)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    if (info.countdown() < 5) {
        meinSprite.sayText("Short on time!")
    }
})
```

## Siehe auch #seealso

[Countdown starten](/reference/info/start-countdown),
[ändere Countdown um](/reference/info/change-countdown-by),
[wenn Countdown endet](/reference/info/on-countdown-end)