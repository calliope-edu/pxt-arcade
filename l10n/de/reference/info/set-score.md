# setze Punktestand

Setze den Punktestand eines Spielers auf diesen Wert.

```sig
info.setScore(0)
```

Dein Programm hat einen Punktezähler, den du setzen kannst, um den aktuellen Punktestand eines Spielers festzuhalten.

## Parameter

* **score**: eine [Zahl](/types/number), auf die der aktuelle Punktestand gesetzt wird.

## Beispiel #example

Gib dem Spieler vor dem Spielstart `110` Punkte.

### Einzelspieler

```blocks
info.setScore(110)
```

### Mehrspieler

```blocks
info.player2.setScore(110)
```

## Siehe auch #seealso

[ändere Punktestand um](/reference/info/change-score-by),
[Punktestand](/reference/info/score),
[wenn Punktestand](/reference/info/on-score)
