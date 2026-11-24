# Info

Zähle Punkte, lass den Countdown-Timer laufen und verfolge den Lebensstatus.

## Punktestand

```cards
info.setScore(0)
info.changeScoreBy(1)
info.score()
info.highScore()
```

## Anzahl der Leben

```cards
info.setLife(0)
info.changeLifeBy(1)
info.life()
info.onLifeZero(function () {})
```

## Countdown-Timer

```cards
info.startCountdown(0)
info.stopCountdown()
info.onCountdownEnd(function () {})
```

## Mehrspieler

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

## Siehe auch

[Punktestand festlegen](/reference/info/set-score),
[ändere Punktestand um](/reference/info/change-score-by),
[Punktestand](/reference/info/score),
[Highscore](/reference/info/high-score),
[Leben festlegen](/reference/info/set-life),
[ändere Leben um](/reference/info/change-life-by),
[Leben](/reference/info/life),
[wenn Leben null](/reference/info/on-life-zero),
[Countdown starten](/reference/info/start-countdown),
[Countdown stoppen](/reference/info/stop-countdown),
[wenn Countdown endet](/reference/info/on-countdown-end)
