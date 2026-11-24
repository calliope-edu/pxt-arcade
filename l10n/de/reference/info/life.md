# Leben

Ruft die Anzahl der Leben des Spielers ab.

```sig
info.life()
```

Dein Programm hat einen Lebenszähler, mit dem du die Anzahl der verbleibenden Leben eines Spielers in deinem Spiel festhalten kannst.

## Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Anzahl der Leben ist.

## Beispiel #example

Gib dem Spieler einen Bonus von `1000` Punkten, wenn er `9` Leben erreicht.

### Ein Spieler

```blocks
let giveBonus = true

if (info.life() > 8) {
    if (giveBonus) {
        info.changeScoreBy(1000)
        giveBonus = false
    }
}
```

### Mehrspieler

```blocks
let giveBonus = true

if (info.player2.life() > 8) {
    if (giveBonus) {
        info.player2.changeScoreBy(1000)
        giveBonus = false
    }
}
```

## Siehe auch #seealso

[Leben festlegen](/reference/info/set-life),
[ändere Leben um](/reference/info/change-life-by)