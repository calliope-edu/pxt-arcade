# assert

Zeige eine Fehlernummer an und stoppe das Programm, wenn die Bedingung der Zusicherung falsch ist.

```sig
control.assert(false, 0)
```

Du kannst festlegen, dass dein Programm an einem assert-Block anhält, wenn eine Bedingung, die du prüfst, falsch ist. Die Fehlernummer im assert wird zusammen mit einer Fehlermeldung an die serielle Schnittstelle geschrieben.

## Parameter

* **cond**: ein [Wahrheitswert](/types/boolean), bei dem wahr bedeutet, dass alles in Ordnung ist, und falsch bedeutet: Stoppe das Programm!
* **code**: eine Fehler-[Zahl](/types/number), die du einer Fehlersituation in deinem Programm zuordnest.

## Beispiel #example

Stoppe das Programm, wenn ein an Pin `A0` angeschlossener Sensor ein niedriges (`0`) Signal sendet.

```blocks
forever(function () {
    control.assert((pins.A0.digitalRead() == 1), 15)
    pause(1000)
})
```

## Siehe auch #seealso

[panic](/reference/control/panic)

```package
base
```
