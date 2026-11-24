# spiele Ton

Spiele einen musikalischen Ton für eine bestimmte Zeit auf dem Lautsprecher.

```sig
music.playTone(Note.C, 10)
```

## #simnote
### ~hint

#### Simulator

``||music:spiele Ton||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.

### ~

## Parameter

* ``frequency`` ist die [Zahl](/types/number) in [Hertz](https://wikipedia.org/wiki/Hertz) (wie hoch oder tief der Ton ist, auch _Tonhöhe_ genannt).
* ``ms`` ist die [Zahl](/types/number) der Millisekunden (Tausendstelsekunden), die der Ton dauert.

## Besondere Werte

* Wenn ``frequency`` kleiner oder gleich null ist, wird der Ton gestoppt.
* Wenn ``ms`` negativ oder null ist, wird der Ton nicht gestoppt und piept weiter.

## Beispiel #example

Speichere die Note 'C' in der Variablen `freq` und spiele diese Note 1000 Millisekunden (eine Sekunde) lang.

```blocks
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
```

## Siehe auch #seealso

[pausiere](/reference/music/rest), [spiele Ton dauerhaft](/reference/music/ring-tone) , [Tempo](/reference/music/tempo),
[setze Tempo](/reference/music/set-tempo), [ändere Tempo um](/reference/music/change-tempo-by)
