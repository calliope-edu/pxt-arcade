# setze Leben

Setze die Anzahl der Leben des Spielers auf diesen Wert.

```sig
info.setLife(0)
```

Dein Programm hat einen Lebenszähler, den du setzen kannst, um die Anzahl der verbleibenden Leben eines Spielers in deinem Spiel festzuhalten.

## Parameter

* **score**: eine [Zahl](/types/number), auf die der Lebenszähler gesetzt wird.

## Beispiel #example

Setze die Anzahl der Leben des Spielers vor dem Spielstart auf `9`.

### Einzelspieler

```blocks
info.setLife(9)
```

### Mehrspieler

```blocks
info.player2.setLife(9)
```

## Siehe auch #seealso

[ändere Leben um](/reference/info/change-life-by)
