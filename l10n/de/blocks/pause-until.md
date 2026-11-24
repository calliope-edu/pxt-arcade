# pausieren bis

Pausiere den aktuellen Teil des Programms, bis eine Bedingung wahr wird.

```sig
pauseUntil(() => true)
```

Manchmal musst du in einem Teil des Programms darauf warten, dass woanders im Programm etwas passiert. Dazu pausierst du, bis eine Bedingung an anderer Stelle ``true`` wird. Eine solche Bedingung kann ein Wert sein, den du in einem Ereignisblock setzt, oder eine Funktion, die einen [booleschen Wert](/types/boolean) zurückgibt.

## Parameter

* **condition**: eine [boolesche](/types/boolean) Bedingung, die das Programm fortsetzt, sobald sie ``true`` wird.
* **timeOut**: ein optionaler Parameter, der als [Zahl](/types/number) angibt, wie viele Millisekunden auf das ``true``-Werden der **condition** gewartet wird. Die Pause endet nach Ablauf dieser Zeit, auch wenn **condition** noch ``false`` ist.

## ~hint

Der Code in **Ereignissen** oder in **runInParallel**-Blöcken läuft weiter, während der aktuelle Teil deines Programms pausiert.

## ~

## Beispiele #example

### Timer in einem parallelen Block #ex1

Erstelle einen Timer mit `5` Sekunden, indem du die Zeit in einem parallelen Codeabschnitt zählst.

```blocks
let msecs = 0
control.runInParallel(function () {
    while (true) {
        control.waitMicros(1000)
        msecs += 1
    }
})
pauseUntil(() => msecs > 5000)
```

### Timer in einer booleschen Funktion #ex2

Warte auf eine Timer-Funktion mit fünf Sekunden.

```typescript
function waitFiveSeconds() : boolean {
    for (let i = 0; i < 5000; i++) {
        control.waitMicros(1000)
    }
    return true
}
pauseUntil(() => waitFiveSeconds())
```

## #seealso