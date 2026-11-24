# Abbrechen

Aus der aktuellen Schleife ausbrechen und das Programm fortsetzen.

```block
while(true) {
    if (Math.randomRange(0, 10) > 5) {
        break;
    }
}
```

Wenn ein Programm auf ein **abbrechen** trifft, wird die Schleife, die es enthält, an der Stelle des **abbrechen** stoppen. Das Programm wird so fortgesetzt, dass der Code direkt nach dem Ende der Schleife ausgeführt wird.

Wenn sich eine Schleife mit einem **abbrechen** innerhalb einer anderen Schleife (verschachtelte Schleife) befindet, wird nur die Schleife mit dem **abbrechen** beendet. Die äußere Schleife führt den Code weiter aus.

## #examples

## Siehe auch #seealso

[fortsetzen](/blocks/loops/continue)