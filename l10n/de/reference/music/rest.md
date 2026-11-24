# pausiere

Lass den Lautsprecher eine Zeit lang keinen Ton spielen.

```sig
music.rest(400);
```

## #simnote
### ~hint

#### Simulator

``||music:pausiere||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.

### ~

## Parameter

* ``ms`` ist eine [Zahl](/types/number), die angibt, wie viele
  Millisekunden der @boardname@ pausieren soll. Eine Sekunde sind 1000
  Millisekunden.

## Beispiel #example

Spiele eine Sekunde lang die Note 'C' und pausiere dann eine Sekunde. Und wieder, und wieder...

```blocks
let frequency = music.noteFrequency(Note.C)
while (true) {
    music.playTone(frequency, 1000)
    music.rest(1000)
}
```

## Siehe auch #seealso

[spiele Ton](/reference/music/play-tone), [spiele Ton dauerhaft](/reference/music/ring-tone),
[Tempo](/reference/music/tempo), [setze Tempo](/reference/music/set-tempo),
[ändere Tempo um](/reference/music/change-tempo-by)
