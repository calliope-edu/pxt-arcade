# obtenir le sprite du joueur

Obtiens le sprite de personnage attribué à un joueur.

```sig
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
```

## Paramètres

* **player** : le [Joueur](/types/player) dont le sprite sera retourné.

## Retourne

* le [sprite](/reference/types/sprite) attribué à **player**.

## Exemple #example

Fais traverser l'écran à un sprite de joueur. Quand le sprite atteint le bord de l'écran, renvoie-le dans la direction opposée et retourne son image.

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

## Voir aussi #seealso

[définir le sprite du joueur](/reference/multiplayer/set-player-sprite),
[obtenir le joueur par sprite](/reference/multiplayer/get-player-by-sprite)

```package
multiplayer
```