# index Of

Gibt die Position des ersten Vorkommens eines festgelegten Werts in einer Zeichenkette zurück.

```sig
"hello".indexOf("hel")
```

## Parameter

* **item**: das Element, das irgendwo im Array gefunden werden soll.
* **from**: eine [Zahl](/types/number), die die Position im Array ist, an der die Suche beginnen soll. Verwende diese Option, wenn die Suche an einem Ort hinter `0`, der ersten Position, beginnen soll.

## Rückgabewert

* eine [Zahl](/types/number) die die Position in der Zeichenkette ist, in dem das Element gefunden wird. Diese Zahl ist `-1` wenn kein passendes Element im Array gefunden wird.

## Beispiel

Hole den Index von "Popcorn" in einer Liste der Film-Snacks beinhaltet.

```blocks
let movieSnacks = "mints cola pretzel popcorn peanuts";
let popcorn = movieSnacks.indexOf("popcorn");
```