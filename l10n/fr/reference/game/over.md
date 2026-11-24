# fin

Termine la partie et affiche le score.

```sig
game.over(false, effects.confetti)
```

Lorsque tu termines la partie, tout le contrôle du jeu s'arrête et le joueur reçoit un message indiquant que la partie est finie. La dernière action reste figée à l'écran et le score actuel ainsi que le meilleur score sont affichés. Le programme du jeu redémarre lorsque tu appuies sur une touche ou un bouton.

Tu peux aussi choisir un effet d'écran facultatif à afficher à la fin de la partie.

## Paramètres

* **win** : une valeur [booléenne](/types/boolean) facultative qui indique si le joueur a gagné la partie. Si elle vaut `true`, un message indique au joueur qu'il a gagné.
* **effect** : un effet intégré facultatif à afficher à la fin de la partie.

## Exemple #example

### Plus de vies ? Fin de partie #ex1

Vérifie chaque seconde s'il reste des vies au joueur. Sinon, termine la partie !

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.over(false)
    }
})
```

### Afficher un effet de fin de partie

Lorsque le score atteint `20`, termine la partie et affiche l'effet ``bubbles``.

```blocks
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (info.score() > 20) {
        game.over(false, effects.bubbles)
    }
})
```

## Voir aussi #seealso

[démarrer le compte à rebours](/reference/info/start-countdown)
