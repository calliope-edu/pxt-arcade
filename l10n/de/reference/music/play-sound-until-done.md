# spiele Sound bis zum Ende

Spiele einige Musiknoten ab, die du in einem Text abgelegt hast, und warte, bis der Sound zu Ende gespielt ist.

```sig
music.playSoundUntilDone('')
```

Dein Programm spielt den Sound ab und wartet, bis er fertig ist.

Die Noten deines Sounds kommen in einen [Text](/types/string). Die Seite [**Sounds komponieren**](/reference/music/composing-sounds)
erklärt dir, wie du einen Sound-Text erstellst.

Außerdem gibt es eingebaute Sounds, die du verwenden kannst. Sie gehören zum Typ **Sounds**. Eingebaute Sounds
verwendest du statt deines eigenen Sound-Texts mit [``||music:Sounds||``](/reference/music/sounds), etwa so:

```blocks
music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
```

## #simnote
#### ~hint
**Simulator**

``||music:spiele Sound bis zum Ende||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.
#### ~

## Parameter

* ``sound``: ein Text mit den Noten eines Sounds, den du abspielen möchtest. Unter
[Sounds komponieren](/reference/music/composing-sounds) erfährst du, wie du den Sound-Text erstellst.


## Beispiele #example

### Mein Sound-Text #ex1

Erstelle einen Sound-Text mit 5 Noten. Spiele den Sound ab und warte, bis er fertig ist.

```blocks
let mySound = "g5:1 f e d c";
music.playSoundUntilDone(mySound);
```

### Ich spiele BaDing #ex2

Spiele den eingebauten Sound namens `BaDing`.

```blocks
music.playSoundUntilDone(music.sounds(Sounds.BaDing))
```

## Siehe auch #seealso

[spiele Sound](/reference/music/play-sound), [Sounds](/reference/music/sounds),
[Tempo](/reference/music/tempo), [setze Tempo](/reference/music/set-tempo),
[ändere Tempo um](/reference/music/change-tempo-by)

[Sounds komponieren](/reference/music/composing-sounds)

```package
music
```
