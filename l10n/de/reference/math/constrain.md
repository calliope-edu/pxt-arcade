# begrenze

Stellt sicher, dass der Wert einer Zahl, die du angibst, nicht kleiner und nicht größer als zwei andere Zahlen ist.

```sig
Math.constrain(0,0,0)
```

A value is *constrained*, or limited, within a range by testing it's value against two limit numbers. Ein Grenzwert legt den niedrigsten Wert fest, den die getestete Zahl haben soll. Die andere Zahl legt den höchsten Wert fest, den die getestete Zahl haben darf.

Wenn der getestete Wert im Bereich dieser beiden Grenzwerte liegt, wird der Wert selbst zurückgegeben. Wenn der Wert außerhalb des Bereichs dieser beiden Grenzwerte liegt, der zurückgegebene Wert ist eine der Limit-Zahlen, die dem getesteten Wert am nächsten kommt.

Also, wenn `15` in einem begrenten Bereich von `3` bis `10`ist, dann wird `Math.constrain(15, 6, 10)` `10` zurückgeben. Wenn `3` auf denselben Bereich beschränkt ist, wird `Math.constrain(3, 6, 10)` `6` zurückgeben. Natürlich bleibt ein Wert von `4` der zwischen `3` bis `10` begrenzt ist, bei `4`.

## Parameter

* **Wert**: Eine [Zahl](/types/number), die getestet wird, um in einem Bereich zu liegen.
* **niedrig**: die untere Zahlengrenze des Bereichs, auf den **Wert** geprüft werden soll.
* **hoch**: die obere Zahlengrenze des Bereichs, auf den **Wert** geprüft werden soll.

## Rückgabewert

* eine [-Zahl](/types/number) die ein Wert ist, der durch den Zahlenbereich von **niedrig** auf **hoch** begrenzt ist.

## Beispiel #example

Halte den gewünschten Wert innerhalb eines realistischen Bereichs von `50` bis `100`.

```block
let desired = 155
let realistic = Math.constrain(desired, 50, 100)
```

## Siehe auch

[map](/reference/math/map)