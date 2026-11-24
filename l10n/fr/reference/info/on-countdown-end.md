# à la fin du compte à rebours

Exécute du code lorsque le compte à rebours du jeu atteint zéro.

```sig
info.onCountdownEnd(function () {})
```

Si tu veux effectuer une action lorsque le temps du compte à rebours du jeu atteint `0`, tu peux placer du code dans la fonction **onCountdownEnd**. Tu ne veux peut-être pas que le jeu se termine lorsque le compte à rebours atteint `0`, mais plutôt que le temps soit réinitialisé ou redémarre avec une autre durée. Cela dépend des règles que tu veux définir pour ton jeu.

Si tu as démarré le compte à rebours du jeu (avec [startCountdown](/reference/info/start-countdown)) et qu'il descend à `0` sans qu'il y ait de fonction **onCountdownEnd** dans ton programme, le jeu se termine automatiquement.

## Paramètres

* **handler** : le code à exécuter lorsque le minuteur du jeu atteint `0`.

## Exemple #example

### Message de temps écoulé #ex1

Démarre un compte à rebours de `3` secondes. Affiche un message lorsque le minuteur atteint `0`.

```blocks
info.startCountdown(3)
info.onCountdownEnd(function () {
    game.showLongText("Timer count is zero!", DialogLayout.Bottom)
})
```

### Plus de temps, fin du jeu #ex2

Règle le temps de jeu sur `5` secondes. Laisse le temps s'écouler et termine le jeu.

```blocks
info.startCountdown(5)
```

## Voir aussi #seealso

[démarrer le compte à rebours](/reference/info/start-countdown),
[arrêter le compte à rebours](/reference/info/stop-countdown)
