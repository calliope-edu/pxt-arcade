# quand le score atteint

Exécute du code une seule fois lorsque le score du joueur atteint la valeur donnée. Ce code s'exécute aussi une fois si le score « dépasse » la valeur donnée après avoir été modifié d'une valeur supérieure à 1.

```sig
info.onScore(100, function () {})
```

## Paramètres

* **score** : la valeur de score cible qui déclenche cet événement
* **handler** : le code à exécuter lorsque le score atteint ou dépasse la valeur cible.

## Exemple #example

### Jeu de clics #ex1

Augmente le score du joueur de 1 à chaque appui sur un bouton et affiche un texte lorsque le score atteint 100 !

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onScore(100, function () {
    game.splash("Score is " + info.score())
})

```

### Multijoueur #ex2

À chaque mise à jour du jeu, donne au hasard un point au joueur 1 ou au joueur 2. Le premier joueur à atteindre 100 gagne !

```blocks
info.player2.onScore(100, function () {
    game.splash("Player 2 wins!")
    game.reset()
})
info.player1.onScore(100, function () {
    game.splash("Player 1 wins!")
    game.reset()
})
game.onUpdate(function () {
    if (Math.percentChance(50)) {
        info.player1.changeScoreBy(1)
    } else {
        info.player2.changeScoreBy(1)
    }
})

```

### Dépasser le score cible #ex3

Cet exemple montre ce qui se passe lorsque le score est modifié d'une valeur supérieure à 1. Quand le bouton A est pressé, le score du joueur
augmente de 10. L'événement s'exécute quand même, alors qu'il attend un score de 5 !

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(10)
})
info.onScore(5, function () {
    game.splash("Score is " + info.score())
})

```

## Voir aussi #seealso

[score](/reference/info/score),
[définir le score](/reference/info/set-score),
[modifier le score de](/reference/info/change-score-by)
