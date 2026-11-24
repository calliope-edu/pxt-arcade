# Boolean

Etwas, das nur wahr oder falsch ist.

Ein boolescher Wert hat einen von zwei möglichen Werten: `true` (wahr) oder `false` (falsch). Die booleschen (logischen) Operatoren (*und*, *oder*, *nicht*) nehmen boolesche Eingaben und erzeugen daraus einen neuen booleschen Wert. Vergleiche bei anderen Typen ([Zahlen](/types/number), [Zeichenketten](/types/string)) mit logischen Operatoren erzeugen boolesche Werte.

Diese Blöcke stehen für die booleschen Werte `true` und `false`. Du kannst sie überall einsetzen, wo ein boolescher Wert erwartet wird:

```blocks
let on = true;
let off = false;
off = false;
```

Du kannst andere boolesche Werte festlegen und vergleichen:

```blocks
let on = true;
let off = !on;
let switcher = on;
let lights = off;

if (switcher) {
    lights = on;
} else {
    lights = off;
}
```

Andere Typen vergleichen:

```blocks
let cool = 50;
let temp = 65;
let warming = temp > cool;

if (warming) {
    let message = "It's warming up."
}
```

### Siehe auch

[Boolean (Blöcke)](/blocks/logic/boolean)