# reverse

Kehrt die Reihenfolge aller Elemente im Array um.

```sig
["Hallo", "Tschüß"].reverse();
```

Alle Elemente im Array ändern ihre Position. Die Elemente, die von der niedrigsten zur höchsten Position gehen, erhalten eine neue Reihenfolge. Das Element an der höchsten Position ist nun an der niedrigsten Position und so weiter. Das Array `9, 8, 3, 5, 9, 8, 7, 2` entspricht `2, 7, 8, 9, 5, 3, 8, 9`, nachdem es umgekehrt wurde.

Möglicherweise stellst du fest, dass bei einem Array mit ungerader Anzahl an Elementen das mittlere Element seine Position behält.

# Rückgabewert

* Das selbe Array, aber in umgekehrter Reihenfolge.

# Beispiel

Kehre die Farben des Regenbogens um. Du könntest einen umgekehrten Regenbogen als "Negobneger" bezeichnen.

```blocks
let rainbow = ["rot", "orange", "gelb", "grün", "blau", "indigo", "violett"];
rainbow.reverse();
```