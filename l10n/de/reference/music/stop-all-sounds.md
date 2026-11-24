# stoppe alle Sounds

Stoppe alle Sounds, die gerade spielen, und alle anderen, die darauf warten, gespielt zu werden.

```sig
music.stopAllSounds()
```

Wenn du Sounds oder Soundeffekte mehrmals abspielst, müssen die später angeforderten Sounds warten, bis die früheren fertig sind. Mit ``||music:stoppe alle Sounds||`` kannst du den gerade spielenden Sound und alle wartenden Sounds stoppen.

## #simnote
### ~hint

#### Simulator

``||music:stoppe alle Sounds||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.

### ~

## Beispiel #example

Spiele einen Ton, aber stoppe ihn sofort.

```blocks
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
music.stopAllSounds()
```

## Siehe auch #seealso

[spiele Melodie](/reference/music/play-melody), [spiele](/reference/music/melody/play),
[spiele Ton](/reference/music/play-tone)
