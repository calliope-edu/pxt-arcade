# Highscore

Ruft den höchsten Punktestand ab, der für das Spiel gespeichert wurde.

```sig
info.highScore()
```

Der höchste Punktestand deines Spielprogramms wird gespeichert. So kannst du herausfinden, was der beste Punktestand des Spielers war.

## Rückgabewert

* eine [Zahl](/types/number), die der höchste Punktestand im Spiel ist.

## Beispiel #example

Füge `9` Leben hinzu, wenn der Spieler einen Highscore von `100000` Punkten hatte.

```blocks
let lifeBonus = true

if (info.highScore() >= 100000) {
    if (lifeBonus) {
        info.changeLifeBy(9)
        lifeBonus = false
    }
}
```

## Siehe auch #seealso

[Punktestand festlegen](/reference/info/set-score),
[ändere Punktestand um](/reference/info/change-score-by),
[Punktestand](/reference/info/score)
