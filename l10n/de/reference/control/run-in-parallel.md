# run In Parallel

Führe anderen Code zur gleichen Zeit aus, in der dein Hauptprogramm läuft.

```sig
control.runInParallel(() => {})
```

Manchmal soll dein Programm an mehr als einer Sache gleichzeitig arbeiten. Der Hauptteil deines Programms
kommt immer in [``||on start||``](/blocks/on-start). Du kannst aber auch einen anderen Teil deines
Programms in ``||control:run in parallel||`` legen. Das ist nützlich, wenn dein Programm weiter wichtige Dinge erledigen soll
und du nicht erst darauf warten willst, dass andere Aktionen passieren.

## Getrennte Aufgaben #tasks

Zum Beispiel könntest du eine kleine Aufgabe haben, die ein Bit in einer Zeichenkette aus 16
Nullen rotieren lässt. Sie wird in einen ``||control:run in parallel||``-Block gelegt:

```blocks
let bitPos = 0
let rorit = true
let zeros = ""

control.runInParallel(function() {
    while (rorit) {
        if (bitPos > 15) {
            bitPos = 0
        }
        zeros = ""
        for (let i = 0; i < 16; i++) {
            if (bitPos == i) {
                zeros = zeros + "1"
            } else {
                zeros = zeros + "0"
            }
        }
        console.log(zeros)
        pause(200)
    }
})
```

Im Hauptteil des Programms wird Code hinzugefügt, der die Bit-Rotation einschaltet, `5` Sekunden pausiert und sie dann ausschaltet. Danach pausiert er weitere `5` Sekunden und versucht, die Bit-Rotation wieder einzuschalten. Die parallele Aufgabe ist aber schon beendet und
die Bit-Rotation startet nicht noch einmal.

```blocks
let rorit = true
pause(5000)
rorit = false
pause(5000)
rorit = true
```

## Parameter

* **a**: der Code, der im Hintergrund ausgeführt wird.

## Beispiel #example

Verwende eine parallele Aufgabe, um eine magische Zahl zu erzeugen. Prüfe im Hauptprogramm zweimal den Wert der magischen Zahl. Beim ersten Mal sofort. Beim
zweiten Mal `2` Sekunden später, nachdem die parallele Aufgabe Zeit zum Laufen hatte.

```blocks
let magic = 0

control.runInParallel(function() {
    magic = Math.randomRange(1000, 5000) 
})

console.logValue("magic", magic)
pause(2000)
console.logValue("magic", magic)
```

## #seealso
