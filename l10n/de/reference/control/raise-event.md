# raise Event

Gib bekannt, dass an einer Ereignisquelle etwas passiert ist.

```sig
control.raiseEvent(0, 0)
```
Mit ``||control:raise event||`` gibst du bekannt, dass etwas mit dem Board passiert ist oder dass etwas Besonderes
in deinem Programm geschehen ist. Das machst du, wenn andere Teile deines Programms
davon erfahren sollen.

Wenn du deinem Programm [``||control:on event||``](/reference/control/on-event)-Blöcke hinzugefügt hast,
wird der Code darin ausgeführt, wenn die Zahlen **src** und **value** mit denen von
``||control:raise event||`` übereinstimmen. **src** gibt an, woher das Ereignis kommt. Du wählst dafür eine Zahl,
die etwa einen Sensor oder eine besondere Situation in deinem Programm kennzeichnet. Wenn du
bekannt geben willst, dass es dunkel wird, kannst du **src** zum Beispiel auf `51` als Quellnummer
des Lichtsensors setzen. Das heißt, für alles, was du über den Lichtsensor bekannt geben willst, löst du
ein Ereignis mit `51` aus.

An einer einzigen Quelle (**src**) können viele Ereignisse passieren. Beim Lichtsensor kannst du bekannt geben,
dass es dunkler oder heller wird. Das ist die Ursache des Ereignisses, der **value**. Für den Licht-
sensor (Quellnummer `51`) könntest du also zwei Ereignisse für **value** festlegen: `1` für dunkler und `2` für heller.

Im Beispiel mit dem Lichtsensor teilst du dem Programm mit, dass es dunkler wird:

```block
control.raiseEvent(51, 1)
```

## Parameter

* **src**: die Identifikations-[Zahl](/types/number) (die Quelle) dieses Ereignisses, zum Beispiel: `10`.
* **value**: eine [Zahl](/types/number), die angibt, was die Ursache des Ereignisses ist, zum Beispiel: `4`.

## Beispiel #example

Registriere zwei Ereignisse von der Quelle `22`. Schreibe in die Konsole, wenn
die Ereignisse `0` und `1` _ausgelöst_ werden.

```blocks
const myNotify = 22;

control.runInParallel(function() {
    for (let i = 0; i < 2; i++) {
        pause(1000);
        control.raiseEvent(myNotify, i);
    }
})

control.onEvent(myNotify, 0, () => {
    console.logValue("myNotify", 0)
})

control.onEvent(myNotify, 1, () => {
    console.logValue("myNotify", 1)
})
```

## Siehe auch #seealso

[wenn Ereignis](/reference/control/on-event), [warte auf Ereignis](/reference/control/wait-for-event)
