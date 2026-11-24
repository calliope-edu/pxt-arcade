# pause Until

Pausiere einen Teil des Programms für eine Anzahl von Millisekunden.

```sig
control.pause(400)
```

Wenn Code in einem Block an ein ``||control:pause until||`` kommt, wartet er so lange, wie du es angibst. Code
in Blöcken wie ``||loops:forever||`` und ``||control:run in parallel||`` läuft weiter, während Code in einem anderen
Block an einem ``||control:pause||`` wartet.

## Parameter

* **ms**: die [Anzahl](/types/number) der Millisekunden, für die du pausieren willst. 100 Millisekunden = 1/10 Sekunde und 1000 Millisekunden = 1 Sekunde.

## Beispiel #example

Schreibe die ersten fünf natürlichen Zahlen in die Konsole, aber warte zwischen jedem Schreiben eine halbe Sekunde.

```blocks
for (let i = 0; i < 5; i++) {
    console.logValue("naturals", i + 1)
    control.pauseUntil(500)
}
```

## Siehe auch #seealso

[während](/blocks/loops/while), [für](/blocks/loops/for),
[dauerhaft](/reference/loops/forever)
