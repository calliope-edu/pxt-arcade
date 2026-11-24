# Lied-Editor

Ein Lied steckt im Block ``||music:Lied||``. Das Lied wird mit dem Lied-Editor erstellt und bearbeitet, der sich öffnet, wenn du auf das Lied-Parameterfeld des Blocks klickst.

```block
music.createSong(hex`00780004080200`)
```

Häufiger siehst du den Block ``||music:Lied||`` aber als Teil des Blocks ``||music:spiele||``.

```block
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

Ein Klick auf das Lied-Parameterfeld öffnet den Lied-Editor. Wenn der Block ``||music:Lied||`` keine Liedinformationen enthält, zeigt der Lied-Editor ein leeres Lied an.

![Fenster des Lied-Editors](/static/reference/music/song-editor.png)

## JavaScript und Python

Wenn du deinen Code im JavaScript- oder Python-Arbeitsbereich bearbeitest, erscheint das Notensymbol (♫) am Rand der Zeile, die die zu ``||music:Lied||`` gleichwertige Funktion [createSong()](/reference/music/create-song) enthält. Ein Klick auf dieses Symbol öffnet ebenfalls den Lied-Editor.

```
   1   let meinSprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
♫  2   music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
   3   meinSprite.startEffect(effects.confetti)
   4
```

## Notensystem

Die Noten eines Lieds werden auf das **Notensystem** gesetzt, eine Reihe waagerechter Linien von tief nach hoch. Die Noten werden von links nach rechts an **Raster**-Positionen gesetzt. Das Raster teilt einen **Takt** ein und legt fest, wie viele Noten der Takt enthält. Ein Raster von **1/8** hat **8** Notenpositionen pro Takt. Wenn an einer Notenposition keine Note steht, ist dort eine Pause (kein Ton). Je höher oder tiefer du eine Note im Notensystem setzt, desto höher oder tiefer klingt sie natürlich.

![Fenster des Lied-Editors](/static/reference/music/staff-and-notes.png)

### Takte

Du kannst die Länge des Lieds ändern, indem du Takte hinzufügst oder entfernst. Mit der Einstellung **Measures** (Takte) wählst du, wie lange dein Lied spielt. In diesem Beispiel stehen die Takte auf **4**, um dem Lied 2 weitere Takte hinzuzufügen.

![Fenster des Lied-Editors](/static/reference/music/more-measures.png)

### Bassschlüssel

Du kannst Noten auch in den **Bassschlüssel** setzen. Aktiviere dazu einfach die Option **Show bass clef** (Bassschlüssel anzeigen). Der Bassschlüssel wird im Lied-Editor passend zum standardmäßigen Violinschlüssel angezeigt.

![Fenster des Lied-Editors](/static/reference/music/bass-clef.png)

Noten werden im Bassschlüssel genauso hinzugefügt wie im Violinschlüssel.

### Raster

Die Anzahl der Notenpositionen (Unterteilungen) in jedem Takt wird mit der Einstellung **Grid** (Raster) festgelegt. Die Rastereinstellung legt die Anzahl der Unterteilungen pro Takt als Bruchteil eines Takts fest. Dieses Beispiel nutzt eine Rastereinstellung von 1/16, deshalb werden 16 Noten im Takt angezeigt.

![Raster auf 1/16 eingestellt](/static/reference/music/sixteenth-grid.png)

### Beispiel

Dieses Beispiel enthält ein Lied mit Noten in beiden Notenschlüsseln und Takten mit 1/8-Unterteilung.

```blocks
let meinSprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    .........2..........
    ....................
    `, SpriteKind.Player)
music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a30000000400012a04000800012708000c0001200c001000012410001400012a14001800012018001c00011d1c002000012020002400012724002800012a28002c0001252c003000012030003400012434003800012738003c00012a3c004000012740004400012044004800012548004c00012a4c005000012050005400012454005800021e2758005c00012a5c00600001206000640001276400680001246c007000012004001c00100500640000041e000004000000000000000000000000000a040004600000000400010804000800011208000c00010c0c001000011210001400010814001800011218001c00010c1c002000011220002400010824002800011228002c00010c2c003000011230003400010834003800011238003c00010c3c0040000112`), music.PlaybackMode.InBackground)
meinSprite.startEffect(effects.confetti, 5000)
```

## Instrumente

Du kannst Noten für verschiedene **Instrumente** spielen. Ein Instrument wählst du in der Instrumentenleiste oben im Editorfenster aus.

![Fenster des Lied-Editors](/static/reference/music/instrument-bar.png)

Die Instrumente werden durch verschiedene Figurensymbole dargestellt und klingen bei denselben Noten unterschiedlich. Es sind MakeCode-Instrumente, die nicht genau so klingen wie typische Instrumente wie Geige, Cello, Schlagzeug oder Gitarre.

![Fenster des Lied-Editors](/static/reference/music/several-instruments.png)

Wenn du dich auf die Noten eines bestimmten Instruments konzentrieren willst, kannst du mit der Option **Only show selected instrument** (Nur ausgewähltes Instrument anzeigen) die anderen Instrumente vorübergehend aus dem Notensystem ausblenden. So komponierst du leichter für ein einzelnes Instrument, weil nur die Noten des gerade ausgewählten Instruments angezeigt werden.

## Das Lied abspielen

Während du ein Lied bearbeitest, kannst du die bisher komponierte Musik abspielen, stoppen oder in Schleife abspielen. Außerdem kannst du mit der Einstellung **Tempo** das Tempo (Schläge pro Minute) des Lieds ändern.

![Fenster des Lied-Editors](/static/reference/music/play-controls.png)

## Siehe auch

[spiele](/reference/music/play),
[Lied erstellen](/reference/music/create-song)