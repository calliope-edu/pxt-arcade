# fin de partie

Termine la partie et affiche le score.

```sig
game.gameOver(false)
```

Lorsque tu termines la partie, tout le contrôle du jeu s'arrête et le joueur reçoit un message indiquant que la partie est finie. La dernière action reste figée à l'écran et le score actuel ainsi que le meilleur score sont affichés. Le programme du jeu redémarre lorsque tu appuies sur une touche ou un bouton.

Si un message de fin de partie est défini pour une victoire ou une défaite, il est affiché. Si un effet de fin de partie est défini, il est aussi affiché, ainsi qu'un son de fin de partie s'il est défini. Si aucun message, effet ou son n'est défini pour la victoire ou la défaite, une valeur par défaut est utilisée.

## Paramètres

* **win** : une valeur [booléenne](/types/boolean) facultative qui indique si le joueur a gagné la partie.

## Exemple #example

### Plus de vies ? Fin de partie #ex1

Vérifie chaque seconde s'il reste des vies au joueur. Sinon, termine la partie !

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.setGameOverEffect(false, effects.dissolve)
        game.gameOver(false)
    }
})
```

### Afficher un effet de fin de partie #ex2

Lorsque le score atteint `20`, termine la partie et affiche l'effet ``bubbles``.

```blocks
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (info.score() > 20) {
        game.setGameOverEffect(false, effects.bubbles)
        game.gameOver(false)
    }
})
```

## Voir aussi #seealso

[démarrer le compte à rebours](/reference/info/start-countdown),
[définir l'effet de fin de partie](/reference/game/set-game-over-effect),
[définir le message de fin de partie](/reference/game/set-game-over-message),
[définir le son de fin de partie](/reference/game/set-game-over-playable)
