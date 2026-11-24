# ändere Countdown um

Erhöhe oder verringere die aktuelle Countdown-Zeit des Spiels um diesen Betrag.

```sig
info.changeCountdownBy(0)
```

Die aktuelle Countdown-Zeit wird um den Änderungswert erhöht, wenn er größer als null (positiv) ist. Ist die Änderungszahl kleiner als null (negativ), wird der Countdown um den Wert der Änderungszahl verringert.

## Parameter

* **value**: eine [Zahl](/types/number) von Sekunden, um die der Countdown geändert wird.

## Beispiel #example

Verringere die Countdown-Zeit des Spiels um `3` Sekunden.

```blocks
info.changeCountdown(-3)
```

## Siehe auch #seealso

[Countdown](/reference/info/score),
[wenn Countdown endet](/reference/info/on-countdown-end)