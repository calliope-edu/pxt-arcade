# create Song

Erstelle ein Lied aus den Noten eines oder mehrerer Musikinstrumente.

```sig
music.createSong(hex`00780004080200`)
```

Ein Lied wird im Song-Editor aus Noten verschiedener Instrumente komponiert. Der [Song-Editor](/reference/music/song-editor) wird angezeigt, wenn du im Block ``||music:song||`` auf das Notenlinien-Fenster klickst.

```block
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
```

Der Song-Editor enthält einen Violinschlüssel (`Treble`) und einen Bassschlüssel (`Bass`), mit denen du deine Musik aus den Noten der gewählten Instrumente komponierst. Du kannst das `tempo` einstellen und den Notenlinien im Editorfenster Takte hinzufügen. Wenn du fertig bist, wird das Lied als allgemeine Daten im Parameter **buffer** gespeichert.

## Parameter

* **buffer**: die Daten mit den Noten, die jedes Instrument im Lied spielt.

## Rückgabewert

* ein [abspielbares](/types/playable) Objekt mit den Noten aus **buffer**.

## Beispiel #example

Spiele ein im Song-Editor komponiertes Lied.

```blocks
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Siehe auch #seealso

[tone playable](/reference/music/tone-playable),
[string playable](/reference/music/string-playable),
[melody playable](/reference/music/melody-playable),
[Song-Editor](/reference/music/song-editor)
