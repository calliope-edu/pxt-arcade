# Punktestand

Ruft den aktuellen Punktestand des Spielers ab.

```sig
info.score()
```

Dein Programm hat einen Punktezähler, mit dem du den aktuellen Punktestand eines Spielers festhalten kannst.

## Rückgabewert

* eine [Zahl](/types/number), die der aktuelle Punktestand des Spielers ist.

## Beispiel #example

Füge `20` Leben hinzu, wenn der Spieler `10000` Punkte erreicht.

### Ein Spieler

```blocks
let giveLives = true

if (info.score() > 9999) {
    if (giveLives) {
        info.changeLifeBy(20)
        giveLives = false
    }
}
```

### Mehrspieler

```blocks
let giveLives = true

if (info.player2.score() > 9999) {
    if (giveLives) {
        info.player2.changeLifeBy(20)
        giveLives = false
    }
}
```

## Siehe auch #seealso

[Punktestand festlegen](/reference/info/set-score),
[ändere Punktestand um](/reference/info/change-score-by),
[wenn Punktestand](/reference/info/on-score)