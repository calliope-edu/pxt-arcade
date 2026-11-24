# ändere Leben um

Erhöhe oder verringere die Anzahl der Leben des Spielers um diesen Betrag.

```sig
info.changeLifeBy(0)
```

Die Anzahl der Leben wird um den Änderungswert erhöht, wenn er größer als null (positiv) ist. Ist die Änderungszahl kleiner als null (negativ), wird die Anzahl der Leben um den Wert der Änderungszahl verringert.

## Parameter

* **value**: eine [Zahl](/types/number), um die die Anzahl der Leben geändert wird. Positive Zahlen fügen Leben hinzu, negative Zahlen ziehen Leben ab.

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

[Leben festlegen](/reference/info/set-life),
[Leben](/reference/info/life)