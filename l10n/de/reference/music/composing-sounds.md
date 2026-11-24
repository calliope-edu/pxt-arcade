# Klänge komponieren

Einen Klang oder vielleicht etwas Musik komponierst du, indem du Töne nacheinander zusammensetzt.

## Musiknoten

Eine _Note_ ist ein Ton, der als Teil von Musik erkannt wird. Eine Note hat einen Namen wie '**C**'. Eine Note wird
für eine bestimmte Zeit gespielt, die man ihre _Dauer_ nennt. 

Auf deinem @boardname@ wird eine Note auf dem Lautsprecher gespielt, indem ein Signal mit einer bestimmten _Frequenz_ gesendet wird, gemessen in [Hertz](http://wikipedia.org/Hertz). Die Frequenz gibt an, wie schnell etwas in einer Sekunde schwingt. Wenn du eine Glocke anschlägst, die
für die Note '**A**' gemacht wurde, schwingt sie mit 440 Hertz (440 Mal pro Sekunde). Noten sind also einfach bestimmte Frequenzen,
die besondere Namen haben.

Früher entstand Musik aus Tönen, die angenehm klangen. Die Töne wurden auf Holz, Saiten, Metall und Fellen gespielt.
Diese Töne bekamen Namen und wurden zu dem, was wir heute als Musiknoten kennen. Noten wurden benannt, damit man sie
aufschreiben und sich später merken konnte, wie man sie wieder spielt.

## Wie werden Noten benannt?

Die Grundnoten haben Namen aus den ersten Buchstaben des Alphabets. Das sind:

``|A|``, ``|B|``, ``|C|``, ``|D|``, ``|E|``, ``|F|``, ``|G|``

Es gibt weitere Noten, die wie die Grundnoten heißen, aber zusätzliche Namensteile haben, nämlich _Kreuz_ (sharp) und _b_ (flat). Diese anderen
Noten unterscheiden sich nur ein wenig von den Grundnoten und haben etwas höhere oder tiefere Frequenzen als die
Grundnote. Das macht Musik etwas komplizierter, aber auch viel interessanter!

Einige dieser anderen Noten sehen so aus:

``|C#|``, ``|Eb|``

Wenn ein kurzes Musikstück oder sogar ein ganzes Lied aufgeschrieben wird, nennt man das [Notenblatt](https://wikipedia.org/wiki/Sheet_music).

## Klänge und Musik im Code

Natürlich können wir keine geschriebenen Noten in unserem Code verwenden. Wir können Musik aber anders erzeugen. Dazu
setzen wir Notennamen als [Zeichenkette](/types/string) zusammen. Unsere Noten bestehen aus Buchstaben, Symbolen und
Zahlen. Zusammengesetzte Noten sehen in unserem Code so aus:
```block
"E3:3 R:1 D#:3 R:1 D:4 R:1 C#:8"
```

Das ist keine Außerirdischensprache, sondern eine Reihe von Noten mit ihrer Dauer. Eine einzelne
Note hat die Form **Note : Dauer** oder ``C:2``. Das bedeutet: Spiele die Note '**C**' für **2** Schläge lang.
Die Noten stehen hintereinander, getrennt durch ein _Leerzeichen_, wie in ``"B:2 C#:6"``. Wenn eine
Note **4** Schläge lang klingen soll, brauchst du keine Dauer anzugeben (eine Note mit 4 Schlägen heißt _ganze_ Note).
Schreib einfach etwas wie ``"E"`` ohne Doppelpunkt (lass den ``':'`` weg) und ohne Dauer.

Vielleicht fällt dir auf, dass die Zeichenkette ein ``R:1`` enthält. Das '**R**' steht für _Pause_ (rest), hier eine Pause von einem Schlag.
Eine Pause ist eine Zeit der Stille im Klang.


### ~hint

#### Dauer

Die Zeit, die eine Note gespielt wird (Dauer), wird in _Schlägen_ gemessen. Der Standardwert für
_Schläge pro Minute_ (bpm) in der Musik ist 120 bpm, also eine halbe Sekunde pro Schlag. Eine _ganze_ Note dauert
4 Schläge und eine _Viertel_note nur einen Schlag.

### ~

## Beispiel

Komponiere die ersten Noten von Beethovens 5. Sinfonie.

```blocks
let beet5 = "G:1 G:1 G:1 Eb F:1 F:1 F:1 D"
```

## Siehe auch

[Tempo](https://wikipedia.org/wiki/Tempo)
