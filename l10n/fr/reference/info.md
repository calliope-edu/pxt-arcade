# Info

Compte les points, lance le compte à rebours et suis l'état des vies.

## Score

```cards
info.setScore(0)
info.changeScoreBy(1)
info.score()
info.highScore()
```

## Nombre de vies

```cards
info.setLife(0)
info.changeLifeBy(1)
info.life()
info.onLifeZero(function () {})
```

## Compte à rebours

```cards
info.startCountdown(0)
info.stopCountdown()
info.onCountdownEnd(function () {})
```

## Multijoueur

```cards
info.player1.onLifeZero(function () {})
info.player1.hasLife()
info.player1.changeLifeBy(-1)
info.player1.setLife(3)
info.player1.life()
info.player1.changeScoreBy(1)
info.player1.setScore(0)
info.player1.score()
```

## Voir aussi

[définir le score](/reference/info/set-score),
[modifier le score de](/reference/info/change-score-by),
[score](/reference/info/score),
[meilleur score](/reference/info/high-score),
[définir les vies](/reference/info/set-life),
[modifier les vies de](/reference/info/change-life-by),
[vies](/reference/info/life),
[quand les vies atteignent zéro](/reference/info/on-life-zero),
[lancer le compte à rebours](/reference/info/start-countdown),
[arrêter le compte à rebours](/reference/info/stop-countdown),
[à la fin du compte à rebours](/reference/info/on-countdown-end)
