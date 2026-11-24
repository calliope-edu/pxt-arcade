# Mehrspieler

## Sprite

```cards
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img``))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
```

## Informationen

```cards
mp.playerSelector(mp.PlayerNumber.One)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score)
mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.getPlayerByIndex(0)
mp.getPlayerByNumber(0)
```

## Spielsteuerung

```cards
mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerIndicatorsVisible(true)
```

## Controller

```cards
mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {})
```

## Ereignisse

```cards
mp.onLifeZero(function (player) {})
mp.onScore(100, function (player) {})
mp.onControllerEvent(ControllerEvent.Connected, function (player) {})
```

## Siehe auch

[setze Spieler-Sprite](/reference/multiplayer/set-player-sprite), [Spieler-Sprite abrufen](/reference/multiplayer/get-player-sprite),
[Spielerauswahl](/reference/multiplayer/player-selector), [setze Spielerzustand](/reference/multiplayer/set-player-state), [Spielerzustand abrufen](/reference/multiplayer/get-player-state),
[ändere Spielerzustand um](/reference/multiplayer/change-player-state-by), [Spieler nach Index abrufen](/reference/multiplayer/get-player-by-index),
[Spieler nach Nummer abrufen](/reference/multiplayer/get-player-by-number), [Spielende, Spieler gewinnt](/reference/multiplayer/game-over-player-win),
[Spieleranzeigen sichtbar setzen](/reference/multiplayer/set-player-indicators-visible), [ist Taste gedrückt](/reference/multiplayer/is-button-pressed),
[mit Tasten bewegen](/reference/multiplayer/move-with-buttons), [bei Tastenereignis](/reference/multiplayer/on-button-event),
[wenn Leben null](/reference/multiplayer/on-life-zero), [bei Punktestand](/reference/multiplayer/on-score),
[bei Controller-Ereignis](/reference/multiplayer/on-controller-event)

```package
multiplayer
```