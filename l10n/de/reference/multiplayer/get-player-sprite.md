# get Player Sprite

Hole das Figuren-Sprite, das einem Spieler zugewiesen ist.

```sig
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
```

## Parameter

* **player**: der [Spieler](/types/player), dessen Sprite zurückgegeben wird.

## Rückgabewert

* das [Sprite](/reference/types/sprite), das dem **player** zugewiesen ist.

## Beispiel #example

Lass ein Spieler-Sprite über den Bildschirm laufen. Wenn das Sprite den Bildschirmrand erreicht, schicke es in die Gegenrichtung zurück und spiegle sein Bild.

```blocks
scene.setBackgroundColor(8)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx = -20
game.onUpdateInterval(500, function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x < 0 || mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x > scene.screenWidth()) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).image.flipX()
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx * -1
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).startEffect(effects.bubbles, 100)
    }
})
```

## Siehe auch #seealso

[Spieler-Sprite festlegen](/reference/multiplayer/set-player-sprite),
[Spieler nach Sprite abrufen](/reference/multiplayer/get-player-by-sprite)

```package
multiplayer
```