# set

Speichere einen Wert in einem Array an einem Index ab.

```block
[""][0] = "item";
```

Wenn ein Eintrag im Array des ausgewählten Indexes existiert, wird er durch einen neuen Wert ersetzt. Wenn du einen Index verwendest, der die Länge des Arrays überschreitet, wird das Array erweitert, um den Wert an der gewünschten Stelle zu platzieren. Alle Standorte zwischen dem vorherigen letzten und dem neuen letzten Element haben Werte von `0`.

## Parameter

* **index**: eine [Zahl](/types/number), die die Position im Array angibt, an der das Element eingefügt wird.

## Beispiel

Ändern deinen Verstand und mache grün statt braun zu einer deiner Lieblingsfarben.

```blocks
let favorColors = ["Orange", "Blau", "Rot", "Braun", "Gelb"];
favorColors[3] = "Grün";
```

## Siehe auch

[insert-at](/reference/arrays/insert-at)