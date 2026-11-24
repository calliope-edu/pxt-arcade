# play Melody

Spiele eine kurze, in einer Zeichenkette komponierte Melodie.

```sig
music.playMelody("", 120);
```

Die Melodie ist eine kurze Folge von Noten in einer Zeichenkette. Sie wird mit der Geschwindigkeit gespielt, die du mit dem Wert **tempo** festlegst. Die Melodie-Zeichenkette enthält eine Notenfolge in diesem Format:

``"E B C5 A B G A F "``

Die Melodie wird im Block ``||music:play melody||`` als Notensymbole angezeigt, die auch im Melodie-Editor erscheinen.

```block
music.playMelody("E B C5 A B G A F ", 120);
```

Melodien werden meist im Melodie-Editor des Blocks erstellt, damit gültige Noten gewählt werden und die richtige Melodielänge eingestellt ist.

## Parameter

* **melody**: eine [Zeichenkette](/types/string), die die Noten der Melodie enthält.
* **tempo**: eine [Zahl](/types/number), die angibt, mit wie vielen Schlägen pro Minute die Melodie gespielt wird.

## Beispiel #example

Spiele die Melodie ``Mystery`` in Dauerschleife.

```blocks
forever(function () {
    music.playMelody("E F G F E G B C5 ", 120)
})
```

## Siehe auch #seealso

[setze Tempo](/reference/music/set-tempo), [play](/reference/music/melody/play), [play until done](/reference/music/melody/play-until-done)
