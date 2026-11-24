# Multijoueur

## Sprite

```cards
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img``))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
```

## Informations

```cards
mp.playerSelector(mp.PlayerNumber.One)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score)
mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.getPlayerByIndex(0)
mp.getPlayerByNumber(0)
```

## Contrôle du jeu

```cards
mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerIndicatorsVisible(true)
```

## Manette

```cards
mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {})
```

## Événements

```cards
mp.onLifeZero(function (player) {})
mp.onScore(100, function (player) {})
mp.onControllerEvent(ControllerEvent.Connected, function (player) {})
```

## Voir aussi

[définir le sprite du joueur](/reference/multiplayer/set-player-sprite), [obtenir le sprite du joueur](/reference/multiplayer/get-player-sprite),
[sélecteur de joueur](/reference/multiplayer/player-selector), [définir l'état du joueur](/reference/multiplayer/set-player-state), [obtenir l'état du joueur](/reference/multiplayer/get-player-state),
[modifier l'état du joueur de](/reference/multiplayer/change-player-state-by), [obtenir le joueur par index](/reference/multiplayer/get-player-by-index),
[obtenir le joueur par numéro](/reference/multiplayer/get-player-by-number), [fin du jeu, le joueur gagne](/reference/multiplayer/game-over-player-win),
[rendre les indicateurs des joueurs visibles](/reference/multiplayer/set-player-indicators-visible), [bouton est pressé](/reference/multiplayer/is-button-pressed),
[déplacer avec les boutons](/reference/multiplayer/move-with-buttons), [lors d'un événement de bouton](/reference/multiplayer/on-button-event),
[lorsque la vie atteint zéro](/reference/multiplayer/on-life-zero), [lors du score](/reference/multiplayer/on-score),
[lors d'un événement de manette](/reference/multiplayer/on-controller-event)

```package
multiplayer
```