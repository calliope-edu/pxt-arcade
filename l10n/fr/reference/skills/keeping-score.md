## Compter les points

Compter les points est une partie essentielle de presque tous les jeux. On compte les points pour des réussites, pour l'élimination d'ennemis ou pour des points marqués contre un autre joueur.

Les points sont généralement comptés quand un certain événement se produit. Par exemple, quand un projectile touche un autre sprite ou quand un sprite atteint une certaine tuile dans la scène du jeu.

Le score du jeu est défini et modifié par les blocs ``||info:set score||`` et ``||info:change score by||``.

```block
info.setScore(0)
info.changeScoreBy(1)
```

Dès que les blocs ``||info:set score||`` ou ``||info:change score by||`` sont utilisés, le score actuel du jeu s'affiche à l'écran. Tu peux utiliser ``||info:set score||`` pour définir un score de départ ou le remettre à une autre valeur. Le bloc ``||info:change score by||`` ajoute un certain nombre de points au score ; il peut changer le score de plus d'un seul point `1` si tu le souhaites. Les scores peuvent aussi être négatifs et tu peux retirer des points avec une valeur négative dans ``||info:change score by||``.

### Exemple

Comme exemple simple de comptage des points, le joueur du jeu suivant tire un projectile sur un sprite ennemi. Si le projectile touche le sprite ennemi, ce qui est détecté dans l'événement de chevauchement de sprites, le score du jeu augmente de `1` point.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, blaster, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, autreSprite) {
    info.changeScoreBy(1)
    sprite.startEffect(effects.confetti, 500)
    sprite.x = randint(100, 150)
    sprite.y = randint(0, scene.screenHeight())
})
let projectile: Sprite = null
let blaster: Sprite = null
info.setScore(0)
blaster = sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(blaster, 0, 100)
blaster.left = 0
let ball = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
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
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Enemy)
ball.x = 140
```

### Consulter le score actuel

Si tu veux accéder au score actuel dans le code de ton jeu, le bloc ``||info:score||`` te donne la valeur du score actuel.

```blocks
let bonus = 0
game.onUpdateInterval(500, function () {
    if (info.score() == 20) {
        info.changeScoreBy(bonus)
    }
})
```

### Quel est le meilleur score ?

Parfois, tu voudras annoncer qu'un nouveau meilleur score a été atteint. Ton jeu se souvient du score le plus élevé et tu peux l'obtenir avec le bloc ``||info.high score||``.

```blocks
let showOnce = true
let monSprite = sprites.create(img`
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 
    . 5 5 5 5 5 f f f f f 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, autreSprite) {
	if ((info.score() == info.highScore()) && showOnce) {
        monSprite.say("High score!")
        showOnce = false
    }
    info.changeScoreBy(1)
})
```
