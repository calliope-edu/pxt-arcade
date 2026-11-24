# playable

Das Datenobjekt **playable** bietet ein gemeinsames Format zum Abspielen von Tönen, Melodien und Songs. Diese Musikquellen werden zwar auf unterschiedliche Weise erstellt, aber alle in abspielbare Objekte umgewandelt, sodass eine einzige Wiedergabemethode zum [Abspielen](/refernece/music/play) verwendet wird.

## Musikquellen für abspielbare Objekte

Mit den folgenden Blöcken werden abspielbare Musikquellen erstellt:

### Ton

Ein Ton ist eine Musiknote bzw. eine Klangfrequenz mit einer Dauer. Die Dauer wird oft als Länge eines `beat` (Schlags) angegeben.

```block
music.tonePlayable(262, music.beat(BeatFraction.Whole))
```

### Melodie

Melodien sind eine Folge von Noten und ein Tempo, in dem sie gespielt werden.

```block
music.stringPlayable("D F E A E A C B ", 120)
```

### Eingebauter Klang

Ein eingebauter Klang ist eine einfache Melodie, die bereits für dich komponiert wurde. Es gibt mehrere zur Auswahl.

```block
music.melodyPlayable(music.baDing)
```

### Song

Songs sind komplexe Musikquellen mit vielen Noten verschiedener Instrumente. Songs werden im Song-Editor erstellt.

```block
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
```

## Die Musik abspielen

In deinen Programmen kannst du für jedes abspielbare Objekt einfach die ``||music:play||``-Blöcke verwenden. Zum Beispiel diesen für einen Ton:

```block
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

Oder diesen für einen Song:

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Beispiel #example

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

## Siehe auch #seealso

[abspielen](/reference/music/play), [abspielbarer Ton](/reference/music/tone-playable),
[abspielbare Zeichenkette](/reference/music/string-playable), [abspielbare Melodie](/reference/music/melody-playable),
[Song erstellen](/reference/music/create-song)