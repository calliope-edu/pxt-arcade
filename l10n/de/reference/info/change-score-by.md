# ändere Punktestand um

Erhöhe oder verringere den Punktestand des Spielers um diesen Betrag.

```sig
info.changeScoreBy(0)
```

Der Gesamtpunktestand wird um den Änderungswert erhöht, wenn er größer als null (positiv) ist. Ist die Änderungszahl kleiner als null (negativ), wird der Gesamtpunktestand um den Wert der Änderungszahl verringert.

## Parameter

* **value**: eine [Zahl](/types/number), um die der aktuelle Punktestand geändert wird.

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

[Punktestand festlegen](/reference/info/set-score),
[Punktestand](/reference/info/score),
[wenn Punktestand](/reference/info/on-score)
