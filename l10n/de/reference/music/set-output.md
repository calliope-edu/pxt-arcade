# setze Ausgabe

Lege fest, ob die Klangausgabe über den Lautsprecher oder einen Pin erfolgt.

```sig
music.setOutput(SoundOutputDestination.Speaker)
```
Wenn dein Board einen Lautsprecher oder analoge Ausgangspins hat, kannst du darüber Sounds abspielen. Mit ``||music:setze Ausgabe||``
wählst du, wo deine Sounds gespielt werden sollen.

## #simnote
### ~hint
**Simulator**: ``||music:setze Ausgabe||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.
### ~

## Parameter

* ``out``: hierhin geht die Klangausgabe. Du kannst ``speaker`` (Lautsprecher) oder ``pin`` wählen.

## Beispiel #example

Leite die Klangausgabe an einen Pin des @boardname@ um.

```blocks
music.setOutput(SoundOutputDestination.Pin)
music.playTone(
    music.noteFrequency(Note.Bb),
    music.beat(BeatFraction.Half)
)
```

## Siehe auch #seealso

[setze Tonhöhen-Pin](/reference/music/set-pitch-pin)
