# setze Lautstärke

Setze die Lautstärke des Klangsynthesizers.

Die Lautstärke des Synthesizers steuert den
Pegel des Sounds, der auf der aktuellen Klangausgabe des Boards (Lautsprecher oder Pin) gespielt wird.

```sig
music.setVolume(128)
```

## #simnote
### ~hint

#### Simulator

``||music:setze Lautstärke||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.

### ~

## Parameter

* ``volume``: die Lautstärke der Sounds, die auf der Klangausgabe gespielt werden. Die Lautstärke ist eine [Zahl](/types/number) zwischen `0` für stumm und `255` für den lautesten Klang.

## Beispiel #example

Stelle den Synthesizer etwas leiser.

```blocks
music.setVolume(50)
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
```

## Siehe auch #seealso

[spiele Ton](/reference/music/play-tone)
