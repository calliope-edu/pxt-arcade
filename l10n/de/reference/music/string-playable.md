# string Playable

Erstellt eine kurze Melodie aus Noten, die in einer Zeichenkette notiert sind.

```sig
music.stringPlayable("D F E A E A C B ", 120)
```

Die **Melodie** ist eine kurze Folge von Noten, die in einer Zeichenkette notiert sind. Die Melodie wird mit der Geschwindigkeit gespielt, die du als **Tempo** angibst. Die Melodie-Zeichenkette enthält eine Folge von Noten in diesem Format:

``"E B C5 A B G A F "``

Die Melodie wird im Block ``||music:melody||`` als Notensymbole angezeigt, die auch im Melodie-Editor erscheinen.

```block
music.stringPlayable("E F G F E G B C5 ", 120)
```

Melodien werden meistens im Melodie-Editor des Blocks erstellt, damit gültige Noten gewählt werden und die richtige Melodielänge eingestellt ist.

## Parameter

* **melody**: eine [Zeichenkette](/types/string), die die Noten der Melodie enthält.
* **tempo**: eine [Zahl](/types/number), die angibt, mit wie vielen Schlägen pro Minute die Melodie gespielt wird.

## Rückgabewert

* ein [abspielbares](/types/playable) Objekt, das die **Melodie** und das **Tempo** enthält.

## Beispiel #example

Spiele die Melodie ``Mystery`` immer wieder ab.

```blocks
music.play(music.stringPlayable("E F G F E G B C5 ", 120), music.PlaybackMode.LoopingInBackground)
```

## Siehe auch #seealso

[tone playable](/reference/music/tone-playable),
[melody playable](/reference/music/melody-playable)
