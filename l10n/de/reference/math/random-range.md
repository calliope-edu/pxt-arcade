# random Range

Gibt einen pseudozufälligen Wert innerhalb eines Zahlenbereichs zurück.

```sig
Math.randomRange(0, 10)
```

## ~ hint

**Veraltet**

Diese API ist veraltet!
Verwende stattdessen [randint](/reference/math/randint).

## ~

Gibt eine pseudozufällige Zahl im Bereich ``[min, max];`` zurück, also von ``0`` (inklusive) bis einschließlich ``1`` (inklusive), die du dann auf deinen gewünschten Bereich skalieren kannst.

## Parameter

* **min**: die kleinstmögliche pseudozufällige Zahl, die zurückgegeben wird.
* **max**: die größtmögliche pseudozufällige Zahl, die zurückgegeben wird.

## Rückgabewert

* eine pseudozufällige [Zahl](types/number) zwischen ``min`` (inklusive) und ``max`` (inklusive).

## Beispiel

Erzeuge eine Zufallszahl zwischen `0` und `100`.

```blocks
let centoRandom = Math.randomRange(0, 100);
```

## Siehe auch

[Zufallszahl](/reference/math/random)