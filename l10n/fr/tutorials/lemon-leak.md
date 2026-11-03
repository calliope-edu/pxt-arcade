# Citron qui fuit

### ~button /#tutorial:/tutorials/lemon-leak

Essaie ce tutoriel !

### ~

## {Introduction @unplugged}

![Animation du jeu](/static/tutorials/lemon-leak.gif)

Salut, créons un jeu où des fraises sauvages attaquent notre citron. Le but est d'empêcher le citron de perdre son jus en esquivant les fraises qui arrivent. Chaque fois qu'une fraise le percute, le citron perd un peu de jus.

## {Étape 1  @fullscreen}

Dans le bloc ``||loops:au démarrage||``, place le bloc ``||scene:définir couleur d'arrière-plan à||`` de ``||scene:Scène||``. Choisis ``violet`` comme couleur. Prends un bloc ``||variables(sprites):définir mySprite à||`` dans ``||sprites:Sprites||``. Clique sur la case grise puis choisis le citron dans la galerie. Dans ``||controller:Contrôleur||``, prends un bloc ``||controller:déplacer mySprite avec les boutons||`` pour pouvoir déplacer le citron.

![Choisis l'image du citron](/static/tutorials/lemon-leak/pick-a-lemon.gif)

```blocks
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## {Étape 2}

Pour que le citron ne quitte pas l'écran, ajoute un bloc ``||sprites:définir mySprite rester à l'écran||``. Trouve le bloc ``||info:démarrer compte à rebours||`` et place-le à la fin. Change le temps de `10` à `30` secondes.

```blocks
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(30)
```

## {Étape 3}

Maintenant, sors un bloc ``||game:quand mise à jour du jeu chaque||`` de ``||game:Jeu||``. Règle l'intervalle sur `1000` ms, soit 1 seconde. Dans ``||sprites:Sprites||``, fais glisser le bloc ``||variables(sprites):définir projectile à||`` ``||sprites:projectile depuis bord||`` et dépose-le dans ``||game:quand mise à jour du jeu chaque||``. Clique sur la case d'image grise et choisis la fraise dans la galerie.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, 50, 50)
})
```

## {Étape 4}

Dans le tiroir ``||math:Maths||``, prends un bloc ``||math: choisir aléatoirement entre||`` et mets-le dans la case ``vx`` du projectile. Dans ``||math:choisir aléatoirement entre||``, change le premier `0` en `-50` et le second de `10` à `50`. Duplique ce bloc et mets sa copie dans la case ``vy``.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, randint(-50, 50), randint(-50, 50))
})
```

## {Étape 5}

Depuis ``||sprites:Sprites||``, fais glisser un bloc ``||sprites:quand sprite de type chevauche||`` dans l'espace de travail. Règle le type de ``otherSprite`` sur ``Projectile``. Depuis ``||sprites:Sprites||``, fais glisser un bloc ``||sprites:mySprite commencer effet||`` et dépose-le dans le bloc ``||sprites:chevauche||``. Clique sur l'icône **(+)** pour agrandir le bloc et règle la durée de l'effet sur ``200`` ms.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
})
```

## {Étape 6}

Enfin, pour compter les coups des fraises sur le citron, fais glisser un bloc ``||info:modifier le score de||`` de ``||info:Info||`` juste après le bloc ``||sprites:mySprite commencer effet||``.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
```

## {Terminé @fullscreen}

Et voilà ! Continue à déplacer le citron et essaie de ne pas perdre trop de jus. Chaque fois qu'une fraise touche ton citron, il perd du jus et l'équipe des fraises marque des points. Essaie de garder le score de jus le plus bas possible pendant les `30` secondes de jeu.

![On joue à Citron qui fuit](/static/tutorials/lemon-leak/play-lemon-leak.jpg)
