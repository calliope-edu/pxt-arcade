# pausiere

Pausiere einen Teil des Programms für eine Anzahl von Millisekunden.

```sig
pause(400)
```

Wenn Code in einem Block auf ein ``||control:pausiere||`` trifft, wartet er so lange, wie du angibst. Code
in Blöcken wie ``||loops:dauerhaft||`` und ``||control:parallel ausführen||`` läuft weiter, während Code in einem anderen
Block an einem ``||control:pausiere||`` wartet.

## Parameter

* **ms**: die [Zahl](/types/number) der Millisekunden, die du pausieren möchtest. 100 Millisekunden = 1/10 Sekunde und 1000 Millisekunden = 1 Sekunde.

## Beispiel #example

Schreibe die ersten fünf natürlichen Zahlen in die Konsole, aber warte zwischen jedem Schreiben eine halbe Sekunde.

```blocks
for (let i = 0; i < 5; i++) {
    console.logValue("naturals", i + 1)
    pause(500)
}
```

## Siehe auch #seealso

[während](/blocks/loops/while), [für](/blocks/loops/for),
[dauerhaft](/reference/loops/forever)
