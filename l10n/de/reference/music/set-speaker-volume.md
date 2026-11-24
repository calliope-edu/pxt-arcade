# setze Lautsprecher-Lautstärke

Setze die Lautstärke für den Lautsprecher auf dem Board.

```sig
music.setSpeakerVolume(128)
```

## #simnote
#### ~hint
**Simulator**: ``||music:setze Lautsprecher-Lautstärke||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.
#### ~

## Parameter

* ``volume``: die Lautstärke der Sounds, die auf dem Lautsprecher gespielt werden. Die Lautstärke ist eine [Zahl](/reference/types)
zwischen `0` für stumm und `255` für den lautesten Klang.

## Beispiel #example

Stelle den Lautsprecher etwas leiser.

```blocks
music.setSpeakerVolume(50)
music.playSound(music.sounds(Sounds.BaDing))
```

## Siehe auch #seealso

[spiele Sound](/reference/music/play-sound), [Sounds](/reference/music/sounds)

