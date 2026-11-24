## Compte à rebours

Beaucoup de jeux demandent au joueur d'atteindre un objectif dans un temps donné. Ces jeux ont un minuteur qui décompte à partir d'une durée initiale, puis met fin à une activité ou au jeu lui-même quand le minuteur atteint zéro.

### Démarrer le compte à rebours

Le compte à rebours est réglé et démarré avec le bloc ``||info:start countdown||``. La durée est définie en secondes. Le minuteur est affiché en haut de l'écran jusqu'à ce que le temps soit écoulé.

```blocks
info.startCountdown(10)
```

### Temps écoulé !

Quand le compte à rebours atteint zéro, tu voudras peut-être passer à un nouveau niveau ou simplement terminer le jeu. La fin du compte à rebours est capturée dans l'événement ``||info:on countdown end||``.

```blocks
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
```

### Attends, arrête le chrono !

Une fois le compte à rebours lancé, tu peux quand même l'arrêter. Et si le joueur atteint un objectif chronométré dans ton jeu ? Eh bien, tu peux arrêter le compte à rebours et passer à une nouvelle activité du jeu. Pour cela, utilise ``||info:stop countdown||``. Par exemple, tu pourrais arrêter le compte à rebours quand le joueur atteint un sprite de nourriture.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
    info.stopCountdown()
})
```

### Exemple

Dans cet exemple, le compte à rebours est réglé sur `30` secondes et il s'arrête quand le sprite du joueur atteint son objectif : rejoindre le sprite du singe. Sinon, le jeu se termine.

```blocks
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, autreSprite) {
    info.stopCountdown()
})
let person = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f . . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 4 4 4 f f . . . 
    . . . f f e e f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . . f d d f d d e e f f . . . . 
    . c d d d f d d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c f f f f d d d e e f c f . . . 
    . f b d f f f e e e e f . . . . 
    . f d d f e f f f e e f . . . . 
    . . f f f e e e e f f f . f f . 
    . . f e e f e e e e f f . e f . 
    . f f e e e f f f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f e e d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
person.left = 0
monkey.right = scene.screenWidth()
controller.moveSprite(person)
info.startCountdown(30)
```
