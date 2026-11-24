# arrêter le compte à rebours

Arrête le compte à rebours, mais le jeu continue.

```sig
info.stopCountdown()
```

Lorsque tu arrêtes le minuteur, le jeu continue mais il n'y a plus de limite de temps. Tu ne peux pas reprendre le compte à rebours là où il s'était arrêté. Tu dois redémarrer le compte à rebours pour fixer à nouveau une limite de temps au jeu.

## Exemple #example

Règle le temps de jeu sur `30` secondes. Attends `5` secondes, arrête le compte à rebours, attends `2` secondes et termine le jeu.

```blocks
info.startCountdown(30)
pause(5000)
info.stopCountdown()
pause(2000)
game.gameOver(false)
```

## Voir aussi #seealso

[démarrer le compte à rebours](/reference/info/start-countdown),
[à la fin du compte à rebours](/reference/info/on-countdown-end)
