# Jeu

Contrôle du jeu et actions d'affichage de texte.

```cards
game.gameOver(false)
game.setGameOverEffect(true, effects.confetti)
game.setGameOverMessage(true, "GAME OVER!")
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
game.setGameOverScoringType(game.ScoringType.HighScore)
game.onUpdate(function () {})
game.onUpdateInterval(500, function () {})
game.ask("")
game.askForString("")
game.splash("")
game.setDialogCursor(null)
game.setDialogFrame(null)
game.setDialogTextColor(0)
game.showLongText("", DialogLayout.Bottom)
```

##  #specific

```cards
game.reset()
game.runtime()
```

## Voir aussi #seealso

[fin du jeu](/reference/game/over),
[à chaque mise à jour](/reference/game/on-update),
[à chaque intervalle de mise à jour](/reference/game/on-update-interval),
[demander](/reference/game/ask),
[demander une chaîne](/reference/game/ask-for-string),
[afficher un message](/reference/game/splash),
[définir le curseur du dialogue](/reference/game/set-dialog-cursor),
[définir le cadre du dialogue](/reference/game/set-dialog-frame),
[définir la couleur du texte du dialogue](/reference/game/set-dialog-text-color),
[afficher un texte long](/reference/game/show-long-text),
[réinitialiser](/reference/game/reset),
[durée d'exécution](/reference/game/runtime)
