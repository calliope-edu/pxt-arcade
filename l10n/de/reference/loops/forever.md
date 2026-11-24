# dauerhaft

Führe einen Teil des Programms im Hintergrund aus und wiederhole ihn immer wieder.

```sig
forever(() => {
})
```

Der Code in einer ``||loops:dauerhaft||``-Schleife läuft und wiederholt sich die ganze Zeit, solange dein
Programm aktiv ist. Code in anderen Teilen deines Programms hält nicht an, während deine ``||loops:dauerhaft||``-Schleife
läuft. Das gilt auch für andere ``||loops:dauerhaft||``-Schleifen und den Block [``||control:parallel ausführen||``](/reference/control/run-in-parallel).

## Parameter

* **a**: der Code, der immer wieder ausgeführt werden soll.

## Beispiel #example

Erstelle einen Stimmungsgenerator, der alle `5` Sekunden eine aktuelle Stimmung in die Konsole schreibt.

```blocks
let mood = ["happy", "sad", "joyful", "angry"]
forever(function () {
    console.log("mood = " + mood[Math.randomRange(0, 3)])
    pause(5000)
})
```

## Siehe auch #seealso

[während](/blocks/loops/while), [wiederhole](/blocks/loops/repeat),
[parallel ausführen](/reference/control/run-in-parallel)
