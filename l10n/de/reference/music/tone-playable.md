# tone Playable

Erstelle einen musikalischen Ton, der eine bestimmte Zeit lang gespielt wird.

```sig
music.tonePlayable(262, music.beat(BeatFraction.Whole))
```

## Parameter

* **note**: die Frequenz der Note als [Zahl](/types/number) in [Hertz](https://wikipedia.org/wiki/Hertz) (wie hoch oder tief der Ton ist, auch _Tonhöhe_ genannt). Wenn **note** kleiner oder gleich null ist, wird kein Ton gespielt.
* **duration**: die [Anzahl](/types/number) der Millisekunden (Tausendstelsekunden), die der Ton dauert. Wenn **duration** negativ oder null ist, wird der Ton dauerhaft gespielt.

## Rückgabewert

* ein [abspielbares](/types/playable) Objekt, das den Ton enthält.

## Beispiel #example

Speichere die Note 'C' in der Variablen `note` und spiele diese Note 1000 Millisekunden (eine Sekunde) lang.

```blocks
let note = music.noteFrequency(Note.C);
music.play(music.tonePlayable(note, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

## Siehe auch #seealso

[melody playable](/reference/music/melody-playable),
[string playable](/reference/music/string-playable)
