# Quel bouton ?

## {Introduction @unplugged}

La catégorie ``||info:Info||`` possède quelques propriétés utiles pour les situations courantes dans les jeux. Par défaut, ces propriétés s'affichent à l'écran dès qu'elles sont définies. Ainsi, les personnes qui jouent à ton jeu voient facilement où elles en sont.

## {Étape 1 @fullscreen}

Trouve ``||info:définir score à 0||`` dans ``||info:Info||`` et fais-le glisser dans ``||loops:au démarrage||``.

Cela met le score à 0 au début du jeu. Regarde : le score s'affiche maintenant en haut à droite de l'écran.

```blocks
info.setScore(0)
```

## {Étape 2 @fullscreen}

Trouve ``||info:définir vie à 3||`` dans ``||info:Info||`` et fais-le glisser dans ``||loops:au démarrage||``. Change le 3 en 5.

Cela définit avec combien de vies un joueur commence. Les vies s'affichent en haut à gauche de l'écran. Quand le joueur n'a plus de vies, la partie est terminée.

```blocks
info.setScore(0)
info.setLife(5)
```

## {Étape 3 @fullscreen}

Trouve ``||info:démarrer compte à rebours 10 (s)||`` dans ``||info:Info||`` et fais-le glisser dans ``||loops:au démarrage||``.

Cela lance un compte à rebours de 10 secondes. Ensuite, la partie est terminée. Un grand minuteur apparaît aussi en haut de l'écran pour que le joueur sache qu'il doit se dépêcher.

```blocks
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Étape 4 @fullscreen}

Trouve ``||controller:quand bouton A est appuyé||`` dans ``||controller:Contrôleur||`` et fais-le glisser dans l'espace de travail.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Étape 5 @fullscreen}

Trouve ``||info:modifier le score de 1||`` dans ``||info:Info||`` et fais-le glisser dans ``||controller:quand bouton A est appuyé||``.

Maintenant, le score du joueur augmente de un chaque fois que le bouton ``||controller:A||`` est appuyé. Appuie plusieurs fois sur le bouton et regarde jusqu'où tu peux faire monter le score.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Étape 6 @fullscreen}

Prends un autre ``||controller:quand bouton A est appuyé||`` et fais-le glisser dans l'espace de travail. Change ``||controller:A||`` en ``||controller:B||``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Étape 7 @fullscreen}

Trouve ``||info:modifier la vie de -1||`` dans ``||info:Info||`` et fais-le glisser dans ``||controller:quand bouton B est appuyé||``.

Maintenant, le joueur perd une vie quand il appuie sur le bouton ``||controller:B||``. Appuie plusieurs fois et regarde le nombre de vies descendre jusqu'à 0.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Terminé @fullscreen}

Bravo, ton jeu est terminé ! Il est peut-être simple (on perd seulement des vies en appuyant sur le mauvais bouton), mais tu peux combiner ces blocs avec d'autres, par exemple avec les événements de chevauchement des sprites. Tu peux ainsi créer des jeux où les joueurs sont récompensés ou pénalisés selon leurs performances.
