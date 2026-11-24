# Fortsetzen

Überspringt den restlichen Code in einer Schleife und startet die Schleife erneut.

```block
while(true) {
    if (Math.randomRange(0, 10) > 5) {
        // überspringe den Rest der Schleife
        continue;
    }
    // mach irgendwas
}
```

Wenn ein Programm ein **fortsetzen** innerhalb einer Schleife sieht, überspringt es den Rest des Codes in der Schleife von der Stelle des ** fortsetzen ** bis zum Ende der Schleife. Die Schleife stoppt nicht, sondern läuft wieder ab. Wenn die Schleife Iterationen (eine Anzahl oder Indexwert) verwendet, wie eine [für](/blocks/loops/for) Schleife, wird sie mit der nächsten Iteration wieder gestartet.

## #examples

## Siehe auch #seealso

[abbrechen](/blocks/loops/break)