# random int

Gibt einen Pseudo-Zufallswert innerhalb eines Zahlenbereichs zurück.

```sig
randint(0, 10)
```

Gibt eine pseudo-zufällige Zahl im Bereich `[min, max]; ` zurück, also von `0` (inklusive) bis einschließlich `1` (inklusive).

### ~ hint

#### Was ist Pseudo-Zufall?

Zufallszahlen, die auf einem Computer generiert werden, werden oft als _Pseudo-Zufallszahlen_bezeichnet. Das liegt daran, dass die Methode zum Erstellen der Nummer auf einem Startwert basiert, der vom Computer selbst bezogen wird. Die Formel für die zufällige Zahl könnte eine Menge mathematischer Operationen auf einem Wert verwenden, der von einem Timer oder einer anderen Eingabe abgeleitet wird. Die resultierende "zufällige" Zahl wird nicht als völlig zufällig angesehen, da sie mit einem anfänglichen Wert und einer wiederholbaren Menge von Operationen auf ihr begonnen hat. Daher ist es eine pseudo-zufällige Zahl.

### ~

## Parameter

* **min**: Die kleinstmögliche Pseudo-Zufallszahl, die zurückgegeben werden soll.
* **max**: die größtmögliche Pseudo-Zufallszahl, die zurückgegeben werden soll.

## Rückgabewert

* ein Pseudo-Zufall [Nummer](types/number) zwischen `min` (inclusive) und `max` (inclusive).

## Beispiel

Erzeugt eine zufällige Zahl zwischen `0` und `100`.

```blocks
let centoRandom = randint(0, 100);
```

## Siehe auch

[random](/reference/math/random)
