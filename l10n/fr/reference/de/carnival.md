# carnival

## Utilisation

Cette extension ajoute des blocs avec lesquels tu peux créer tes propres jeux de fête foraine dans MakeCode Arcade : avec des balles à lancer, des fonctions de minuterie supplémentaires et d'autres possibilités pour la fin du jeu.

* Préparer une balle

```blocks
let myBall: Ball = null
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(50)
myBall.setTraceMulti(carnival.Tracers.Full)
```

Ce code prépare une balle nommée myBall que tu peux diriger avec les touches fléchées. Tu vois aussi une trace réglée sur 50 %.

* Force variable

```blocks
let theTarget: Sprite = null
let throwBall: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
let barreEtat = statusbars.create(120, 6, StatusBarKind.Health)
barreEtat.setColor(5, 10)
barreEtat.setBarBorder(1, 1)
barreEtat.setPosition(80, 113)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(10)
myBall.setTraceMulti(carnival.Tracers.Cross)
myBall.variablePower(barreEtat, 30, 50, 100)
```

Ce code complète le code ci-dessus avec une barre d'état qui affiche à tout moment la force actuelle. La force varie entre 30 % et 50 % de la force maximale.

* Lancer des balles

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
```

Ce code crée une balle projectile qui part avec l'angle et la force de la balle parente.

* Minuterie

```blocks
carnival.startTimer()
```

Tu lances ainsi une minuterie qui compte pendant toute la partie ou jusqu'à ce que carnival.startTimer() soit appelé de nouveau.

* Compte à rebours

```blocks
carnival.startCountdownGame(15, carnival.WinTypes.Timed)

```

Tu lances ainsi un compte à rebours qui déclenche la fin du jeu à la fin. Tu peux choisir entre gagné, perdu, meilleur temps, meilleur score ou multijoueur.

* Jeu

```blocks
    carnival.customGameOverExpanded("Great Job!", effects.confetti, music.powerUp, carnival.ScoreTypes.HScore, 0)
```

Tu affiches ainsi ton propre message de fin de jeu quand tu veux. Tu peux changer le message, l'effet d'arrière-plan, la musique et l'évaluation (gagné, perdu, temps, score ou multijoueur). Tu peux aussi transmettre ton propre « score » pour l'évaluation.

* Étiquette

```blocks
carnival.addLabelTo("Target Practice", carnival.Areas.Top, 4)
```

Tu ajoutes ainsi une étiquette à ton stand de fête foraine, à un endroit fixe en haut, au milieu ou en bas de la zone de jeu.

Source : [microsoft/arcade-carnival](https://github.com/microsoft/arcade-carnival/tree/v0.0.7) (v0.0.7)

```package
carnival
```
