# melody Editor

Zeige den Melodie-Editor an und gib die komponierte Melodie-Zeichenkette zurück.

```sig
music.melodyEditor("");
```

In Blöcken wird der Melodie-Editor angezeigt, und du kannst mit seiner Oberfläche eine Melodie erstellen. Die komponierte Melodie wird als Melodie-Zeichenkette zurückgegeben, die du mit **playMelody** verwenden kannst.

Wenn du nicht mit Blöcken arbeitest, wird die Zeichenkette aus dem Parameter **melody** zurückgegeben.

## Parameter

* **melody**: eine [Zeichenkette](/types/string), die die Noten der aktuellen Melodie enthält.

## Rückgabewert

* eine [Zeichenkette](/types/number) mit der neuen, im Melodie-Editor erstellten Melodie oder die Zeichenkette aus **melody**, wenn der Melodie-Editor nicht angezeigt wird.

## Beispiel #example

Ändere die Melodie in **playMelody** mit dem Melodie-Editor.

```blocks
forever(function () {
    music.playMelody(music.melodyEditor("E F G F E G B C5 "), 120)
})
```

## Siehe auch #seealso

[spiele Melodie](/reference/music/play-melody)
