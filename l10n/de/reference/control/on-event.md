# on Event

Führe Code aus, wenn ein registriertes Ereignis eintritt.

```sig
control.onEvent(0, 0, () => {})
```
Statt in einer Schleife im Hauptprogramm zu warten, ist ein Ereignisblock eine
gute Möglichkeit, zusätzlichen Code auf etwas reagieren zu lassen, das mit dem Board oder
in deinem Programm passiert.

Das funktioniert so: Code in einem anderen Teil des Programms beschließt, bekannt zu geben,
dass gerade etwas Besonderes oder Wichtiges passiert ist. Dazu _löst_ er ein _Ereignis aus_.
Anderer Code wird in einen ``||control:on event||``-Block gelegt. Der ``||control:on event||``-Block _registriert_
sich, damit er ausgeführt wird, wenn ein passendes Ereignis _ausgelöst_ wird.

Dein Programm legt fest, was ein Ereignis sein soll, und macht es offiziell, indem es das Ereignis zusammen mit
einer Quell-Identifikationsnummer (ID), **src**, _registriert_. Die ID in **src** zeigt, welches **_Ding_** das Ereignis auslöst,
zum Beispiel ein Sensor oder ein besonderer Zeitraum, der jetzt vorbei ist. Der **value** sagt, was die Ursache des
Ereignisses ist.

### Warum Ereignisse verwenden?

Wenn du Code ausführen willst, sobald sich ein Status ändert, könntest du das so
im Hauptteil des Programms machen:

```blocks
let nowStatus = false
control.runInParallel(() => {
    control.waitMicros(10000)
    nowStatus = true
})

let lastStatus = nowStatus;
while(lastStatus == nowStatus) {
    control.waitMicros(1000)
}
```
Die [``||loops:while||``](/blocks/loops/while)-Schleife prüft, ob sich `nowStatus` ändert. Das Problem ist, dass dein Programm
in der Schleife feststeckt, bis sich `nowStatus` ändert, und bis dahin nichts anderes erledigen kann.

Wir können das Programm aber so ändern, dass es ein Ereignis verwendet, statt in einer Schleife zu warten. Registrieren wir ein Ereignis
und geben ihm eine Quellkennung, also **src**, von `15` und einen Ursachen-**value** von `1`:

```blocks
let because = 0;
control.runInParallel(() => {
    control.waitMicros(100000)
    control.raiseEvent(15, 1)
})

control.onEvent(15, 1, () => {
    because = 1;
})
```

Du siehst also, dass das Programm ein Ereignis registriert hat, das als `15`, `1` bekannt ist. Die Quelle ist `15` und die
Ursache des Ereignisses ist `1`. Warum diese Zahlen? Nehmen wir an, du hast einen Feuchtigkeitssensor an
dein Board angeschlossen. Du könntest deinem Programm mitteilen, dass jedes Ereignis von der Quelle `15` deinen Sensor betrifft. Und du kannst festlegen, dass die Ursache `1` bedeutet, dass es zu trocken ist.

## Parameter

* **src**: die Identifikations-[Zahl](/types/number) (die Quelle) dieses Ereignisses, zum Beispiel: `10`.
* **value**: eine [Zahl](/types/number), die angibt, was die Ursache des Ereignisses ist, zum Beispiel: `4`.
* **handler**: der Code, der ausgeführt wird, wenn das Ereignis eintritt.

## Beispiel #example

Registriere zwei Ereignisse von der Quelle `22`. Schreibe in die Konsole, wenn
die Ereignisse `0` und `1` _ausgelöst_ werden.

```blocks
const myNotify = 22

control.runInParallel(function() {
    for (let i = 0; i < 2; i++) {
        pause(1000)
    control.raiseEvent(myNotify, i)
    }
})

control.onEvent(myNotify, 0, () => {
    console.logValue("myNotify", 0)
})

control.onEvent(myNotify, 1, () => {
    console.logValue("myNotify", 1)
})
```

## Siehe auch ##seealso

[löse Ereignis aus](/reference/control/raise-event)
