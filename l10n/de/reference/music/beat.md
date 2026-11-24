# beat

Hole die Dauer eines musikalischen Schlags.

```sig
music.beat(BeatFraction.Whole)
```

## Parameter

* ``fraction`` ist der Bruchteil eines Schlags (BeatFraction.Whole, BeatFraction.Sixteenth usw.)

## Rückgabewert

* eine [Zahl](/types/number), die die Dauer des Schlagbruchteils in Millisekunden (Tausendstelsekunden) angibt.

## Beispiel #example

```blocks
music.playTone(Note.C, music.beat(BeatFraction.Quarter))
```

## Siehe auch #seealso

[spiele Ton](/reference/music/play-tone), [Ton ausgeben](/reference/music/ring-tone),
[Pause](/reference/music/rest), [setze Tempo](/reference/music/set-tempo),
[ändere Tempo um](/reference/music/change-tempo-by)
