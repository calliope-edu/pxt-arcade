# wait For Event

Halte den aktuellen Code an und warte auf ein Ereignis.

```sig
control.waitForEvent(0, 0)
```
Vielleicht soll dein Code eine Weile anhalten, bis ein Ereignis eintritt, das du erwartest.
Wenn dein Code pausieren soll, bis ein bekanntes Ereignis eintritt, verwende einen ``||control:wait for event||``-Block.
Ein bekanntes Ereignis ist etwas, das du festlegst und das auf dem Board oder in deinem Programm passiert.
Ein Ereignis hat eine Quelle und eine Ursache. Die Quelle ist, woher das Ereignis kommt, zum Beispiel ein Sensor oder
eine Bedingung in deinem Programm. Die Ursache ist das, was das Ereignis an der Quelle ausgelöst hat.

Du vergibst Nummern für deine Ereignisquellen und -ursachen. Diese Nummern werden von [``||control:raise event||``](/reference/control/raise-event) verwendet, um deinem Programm mitzuteilen, dass gerade ein Ereignis passiert ist.

Zum Beispiel könntest du einen Timer bauen, der alle 100 Millisekunden ein Ereignis auslöst. Die Quell-
nummer des Timers ist `6` und der Ursachenwert ist `1`. Das Programm könnte so auf eines der Zeit-
ereignisse warten:

```blocks
const myTimer = 6;
const timerTimeout = 1;

control.runInParallel(function() {
    while (true) {
        control.waitMicros(100000)
        control.raiseEvent(myTimer, timerTimeout)
    }
})

control.waitForEvent(myTimer, timerTimeout)
```

## Parameter

* **id**: die Identifikations-[Zahl](/types/number) (die Quelle) dieses Ereignisses, zum Beispiel: `10`.
* **value**: eine [Zahl](/types/number), die angibt, was die Ursache des Ereignisses ist, zum Beispiel: `4`.

## Beispiel #example

Erstelle einen Timer, der alle 2 Sekunden ein Signal gibt. Warte zweimal und schreibe jedes Mal
in die Konsole.

```blocks
const myTimer = 6;
const timerTimeout = 1;

control.runInParallel(function() {
    while (true) {
        pause(2000)
        control.raiseEvent(myTimer, timerTimeout)
    }
})

control.waitForEvent(myTimer, timerTimeout)
console.log("Timer timeout")
control.waitForEvent(myTimer, timerTimeout)
console.log("Timer timeout")
```

## Siehe auch #seealso

[löse Ereignis aus](/reference/control/raise-event), [wenn Ereignis](/reference/control/on-event)
