# compte à rebours

Obtiens le temps actuel du compte à rebours du jeu.

```sig
info.countdown()
```

## Retourne

* un [nombre](/types/number) qui est le temps restant du compte à rebours du jeu, en secondes.

## Exemple #example

Fais afficher un message d'avertissement à un sprite lorsque le compte à rebours du jeu est inférieur à `5` secondes.

```blocks
info.startCountdown(30)
let monSprite = sprites.create(img`
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
        monSprite.sayText("Short on time!")
    }
})
```

## Voir aussi #seealso

[démarrer le compte à rebours](/reference/info/start-countdown),
[modifier le compte à rebours de](/reference/info/change-countdown-by),
[à la fin du compte à rebours](/reference/info/on-countdown-end)
