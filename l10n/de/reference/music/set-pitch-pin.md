# setze Tonhöhen-Pin

Wähle, auf welchem Pin gespielt wird, wenn der Sound an einen Pin gehen soll.

```sig
music.setPitchPin(pins.A3)
```
## #pins

Einige Pins des @boardname@ können Sounds abspielen. Das sind meist die analogen Ausgangspins des Boards.
Nicht alle Pins deines Boards sind Ausgangspins oder können Sounds abspielen.

## #simnote
### ~hint
**Simulator**: ``||music:setze Tonhöhen-Pin||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.
### ~

## Parameter

* ``pin``: der Pin, auf dem der Sound gespielt wird, wenn der Sound an einen Pin geht.

## Beispiel #example

Setze den Tonhöhen-Pin auf ``A1``. Schalte die Klangausgabe auf ``pin`` um und spiele einen Ton.

```blocks
music.setOutput(SoundOutputDestination.Pin)
music.setPitchPin(pins.A1)

music.playTone(
    music.noteFrequency(Note.Bb),
    music.beat(BeatFraction.Half)
)
```

## Siehe auch #seealso

[setze Ausgabe](/reference/music/set-output)

```package
music
```
