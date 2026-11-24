# spiele

Spiele ein Lied, eine Melodie, einen Ton oder einen Soundeffekt aus einer abspielbaren Musikquelle.

```sig
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

Musik kann ein einfacher Ton, eine Melodie oder ein Lied sein. Jede dieser Musikquellen nennt man ein [abspielbares](/types/playable) Objekt. Der Block ``||music:spiele||`` kann jedes dieser abspielbaren Objekte annehmen und als Klangausgabe für dein Spiel abspielen.

Die einfachste Musikquelle ist ein **Ton**, eine Note, die eine bestimmte Zeit lang gespielt wird:

```block
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

Dann gibt es die **Melodie**, eine Folge von Noten, die mit einer bestimmten Geschwindigkeit, dem `tempo`, gespielt werden. Du kannst deine eigene Melodie erstellen oder eine eingebaute zum Abspielen auswählen:

```block
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
```

Das komplexeste abspielbare Objekt ist ein **Lied**. Lieder werden im [Lied-Editor](/reference/music/song-editor) mit vielen Noten von verschiedenen Instrumenten komponiert.

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Parameter

* **toPlay**: das [abspielbare](/types/playable) Objekt bzw. die Musikquelle, die gespielt werden soll.
* **playbackMode**: der Wiedergabemodus, der bestimmt, wie das Programm weiterläuft:
>* `bis zum Ende abspielen`: spielt die Musikquelle in **toPlay** ab und wartet mit dem nächsten Teil des Programms, bis die Musik fertig ist.
>* `im Hintergrund`: spielt die Musikquelle in **toPlay** ab, macht aber mit dem Rest des Programms weiter, bevor die Musik fertig ist.
>* `im Hintergrund wiederholen`: spielt die Musikquelle in **toPlay** ab, macht aber mit dem Rest des Programms weiter, bevor die Musik fertig ist. Die Musik spielt weiter und beginnt nach ihrem Ende wieder bei der ersten Note.

### ~ hint

#### Stoppe die Musik!

Mit dem Block ``||music:stoppe alle Sounds||`` kannst du jede gerade laufende Musik anhalten. Das ist nützlich, wenn **playbackMode** auf `im Hintergrund wiederholen` steht und du die Musik bei einem Szenenwechsel stoppen oder auf ein Ereignis mit einem anderen Klang reagieren möchtest.

### ~

## Beispiele #example

### Eine Melodie spielen

Spiele eine kurze Melodie, die im Melodie-Editor erstellt wurde.

```blocks
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
```

### Verschiedene Musikquellen, ein Block für alle

Lege 4 verschiedene abspielbare Musikquellen in ein Array. Spiele sie nacheinander ab.

```blocks
let playables = [
music.tonePlayable(262, music.beat(BeatFraction.Whole)),
music.stringPlayable("D F E A E A C B ", 120),
music.melodyPlayable(music.baDing),
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
]
for (let someMusic of playables) {
    music.play(someMusic, music.PlaybackMode.UntilDone)
    pause(500)
}
```

### Musik in Schleife

Spiele ein einfaches Lied im Hintergrund, während sich ein Affe über den Bildschirm bewegt. Wenn der Affe die Blase in der Mitte des Bildschirms trifft, stoppe das Lied und spiele ein Platzgeräusch.

```blocks
let bubble = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
monkey.setBounceOnWall(true)
monkey.x = scene.screenWidth()
monkey.setVelocity(50, 40)
music.play(music.stringPlayable("C5 A B G A F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    music.stopAllSounds()
    sprites.destroy(sprite, effects.blizzard, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
```
### Einen Soundeffekt spielen

Spiele `5` Sekunden lang einen Sinuswellen-Soundeffekt.

```blocks
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
```

## Siehe auch #seealso

[Ton abspielbar](/reference/music/tone-playable),
[Text abspielbar](/reference/music/string-playable),
[Melodie abspielbar](/reference/music/melody-playable),
[Lied erstellen](/reference/music/create-song),
[stoppe alle Sounds](/reference/music/stop-all-sounds),
[Lied-Editor](/reference/music/song-editor),
[Soundeffekt erstellen](/reference/music/create-sound-effect)