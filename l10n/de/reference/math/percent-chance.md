# percent Chance

Gibt einen booleschen Wert zurück, der mit einer bestimmten prozentualen Wahrscheinlichkeit wahr ist.

```sig
Math.percentChance(0)
```

## Parameter

* **percentage**: eine [Zahl](/types/number), die die prozentuale Wahrscheinlichkeit angibt, dass der zurückgegebene Wert `true` ist. Der Prozentwert liegt zwischen `0` und `100`.

## Rückgabewert

* ein [boolescher Wert](/types/boolean), der mit der angegebenen Wahrscheinlichkeit **percentage** `true` ist.

## Beispiel #example

Simuliere, dass beim Würfeln die Zahl `1` fällt. Verwende eine prozentuale Wahrscheinlichkeit, um zu sehen,
ob deine Zahl gewürfelt wird.

```blocks
let isOne = Math.percentChance(100 / 6)
```

## Siehe auch

[Zufallszahl im Bereich](/reference/math/random-range)