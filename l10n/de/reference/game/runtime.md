# runtime

Rufe die Zeit in Millisekunden seit dem Start des Spiels ab.

```sig
game.runtime()
```

## Rückgabewert

* Eine [Zahl](/types/number), die die Zeit seit Spielbeginn in Millisekunden angibt.

## Beispiel #Example

Einen Sprite über den Bildschirm bewegen. Wenn `5` Sekunden vergangen sind, stoppe das Sprite und zeige die Spielzeit an.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 . . . . . 
`, SpriteKind.Player)
meinSprite.vx = 10
pause(5000)
meinSprite.vx = 0
game.showLongText("Spielzeit = " + game.runtime(), DialogLayout.Bottom)
```

## Siehe auch #seealso

[start countdown](/reference/info/start-countdown)