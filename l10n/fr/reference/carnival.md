# carnival

## Utilisation

Cette extension ajoute des blocs pour t'aider à créer tes propres jeux de fête foraine dans MakeCode Arcade avec des balles à lancer, des fonctions de minuterie supplémentaires et des options de fin de partie supplémentaires.

* Préparer une balle

```blocks
let myBall: Ball = null
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(50)
myBall.setTraceMulti(carnival.Tracers.Full)
```

Cet extrait crée une balle appelée myBall et te permet de la contrôler avec les touches fléchées. Tu verras aussi qu'elle a un marqueur de trajectoire réglé sur 50 %.

* Puissance variable

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

Cet extrait complète le code ci-dessus en créant une barre d'état qui sert d'indicateur visuel de la puissance à chaque instant. La puissance varie entre 30 % et 50 % de la puissance maximale.

* Lancer des balles projectiles

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
```

Cet extrait crée une balle de type projectile qui part de la balle parente en utilisant ses réglages d'angle et de puissance.

* Minuterie

```blocks
carnival.startTimer()
```

Cela lance une minuterie qui compte pendant toute la partie, ou jusqu'à ce que carnival.startTimer() soit appelé à nouveau.

* Compte à rebours

```blocks
carnival.startCountdownGame(15, carnival.WinTypes.Timed)

```

Cela démarre un compte à rebours qui déclenche la fin de partie lorsqu'il est terminé. Tu peux choisir entre gagner, perdre, meilleur temps, meilleur score ou multijoueur.

* Jeu

```blocks
    carnival.customGameOverExpanded("Great Job!", effects.confetti, music.powerUp, carnival.ScoreTypes.HScore, 0)
```

Cela permet d'afficher un message de fin de partie personnalisé dans les circonstances de ton choix. Tu peux changer le message, l'effet d'arrière-plan, la musique et la façon dont le score est évalué (gagner, perdre, temps, score ou multijoueur). Tu peux aussi transmettre un « score » personnalisé pour évaluer la réussite.

* Étiquette

```blocks
carnival.addLabelTo("Target Practice", carnival.Areas.Top, 4)
```

Cela ajoute une étiquette à ton stand de fête foraine, à un emplacement prédéfini en haut, au milieu ou en bas de la zone de jeu.

Source : [microsoft/arcade-carnival](https://github.com/microsoft/arcade-carnival/tree/v0.0.7) (v0.0.7)

```package
carnival
```
