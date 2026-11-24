# note Frequency

Ermittle die Frequenz einer Musiknote.

```sig
music.noteFrequency(Note.C)
```

## Parameter

* ``name`` ist der Name der **Note**, deren Frequenz du haben möchtest.

## Rückgabewert

* eine [Zahl](/types/number), die die Frequenz (in [Hertz](https://wikipedia.org/wiki/Hertz))
der gewählten Note ist.

## Beispiel #example

Spiele eine Sekunde lang die Note 'C', pausiere eine Sekunde und spiele dann eine Sekunde lang die Note 'A'.

```blocks
music.playTone(music.noteFrequency(Note.C), 1000)
music.rest(1000)
music.playTone(music.noteFrequency(Note.A), 1000)
```
## Siehe auch #seealso

[spiele Ton](/reference/music/play-tone), [klingeln](/reference/music/ring-tone),
[pausiere](/reference/music/rest), [Tempo](/reference/music/tempo),
[ändere Tempo um](/reference/music/change-tempo-by)
