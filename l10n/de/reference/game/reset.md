# Zurücksetzen

Das Spiel zurücksetzen.

```sig
game.reset()
```

Beim Zurücksetzen des Spiels wird das Spielprogramm angehalten und anschließend neu gestartet. Wenn das Spiel auf einem Gerät läuft, entspricht das dem Drücken der Reset-Taste.

## Beispiel #example

Lass ein Sprite vom linken Bildschirmrand nach rechts laufen. Wenn das Sprite den rechten Bildschirmrand erreicht, setze das Spielprogramm zurück.

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
meinSprite.left = 0
meinSprite.vx = 30
game.onUpdate(function () {
    if (meinSprite.right > scene.screenWidth()) {
        game.reset()
    }
})
```

## Siehe auch #seealso

[Spielende](/reference/game/over)