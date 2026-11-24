# Sounds

Hole den Sound-Text für einen eingebauten Sound.

```sig
music.sounds(Sounds.BaDing)
```
Es gibt einige eingebaute Sounds, die du abspielen kannst, damit du nicht alles selbst komponieren musst. Mit
diesen Sounds kannst du Aktionen mit dem @boardname@ interessanter wirken lassen.

## Parameter

* ``name``: der Name des gewünschten eingebauten Sounds.

## Rückgabe

* ein [Text](/types/string), der den komponierten Klang eines eingebauten Sounds enthält.

## Beispiel #example

Setze eine Variable auf den ``wand sound`` (Zauberstab-Sound). Spiele den Sound aus der Variablen ab.

```blocks
let wandSound = music.sounds(Sounds.MagicWand); 
music.playSoundUntilDone(wandSound)
```

## Siehe auch #seealso

[spiele Sound](/reference/music/play-sound)

[Sounds komponieren](/reference/music/composing-sounds)

```package
music
```
