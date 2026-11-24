# Bild

Ein Bild besteht aus einer Anzahl von Zeilen und Spalten mit farbigen Pixeln, die zusammen ein rechteckiges Bild ergeben. Ein _Pixel_ ist ein einzelner Farbpunkt im Bild.

Bilder sind zweidimensional, sie haben also eine bekannte Höhe und Breite. Wenn ein Bild deklariert oder erstellt wird, werden Höhe und Breite entweder durch das _Layout_ des Bildes oder als Parameter der Methode [create](/reference/images/create) festgelegt.

## Bild-Layout

Du _deklarierst_ ein Bild, indem du ein Layout erstellst. In JavaScript geschieht das mit der Zeichenketten-Deklaration ``img'...'``. Die Pixel sind einzelne Zeichen innerhalb der Zeichenkette.

### Bild ohne Größe

Ein Bild ohne Größe hat weder Höhe noch Breite und keine Pixel, daher ist die **img**-Zeichenkette einfach ``img''``.

```typescript
let emptyImage = img``
```

Du kannst auch [create](/reference/images/create) verwenden, um ein weiteres Bild ohne Größe und ohne Pixel zu erstellen.

```blocks
let emptyImage1 = img``
let emptyImage2 = image.create(0, 0)
```

Ein Bild ohne Größe ist nicht wirklich nützlich, deshalb gibt MakeCode ihm tatsächlich eine Größe, wenn du es ohne Größe deklarierst.

### Bilder mit Größe

Um ein Bild mit einer Größe zu erstellen, setzt du einfach die Pixelzeichen in die Zeilen der **img**-Zeichenkette. Ein Bild, das 1 Pixel hoch und 1 Pixel breit ist (1 x 1), sieht so aus:

```typescript
let oneByOne = img`.`
```

Ein Bild mit 2 x 2 Pixeln wird so deklariert:

```typescript
let twoBytwo = img`
. .
. .
`
```

Hier sind sie als Blöcke:

```blocks
let oneByOne = img`.`
let twoBytwo = img`
. .
. .
`
```

Du wirst bemerken, dass sie gleich aussehen. Das liegt daran, dass die Pixelfarben nicht gesetzt sind und die Bilder daher leer sind.

Bilder müssen nicht genau quadratisch sein. Höhe und Breite können unterschiedlich sein. Hier ist ein Bild mit 6 x 2 Pixeln:

```typescript
let sixByTwo = img`
. . . . . .
. . . . . .
`
```

## Pixel setzen

### Transparente Pixel

Ein Pixelwert von `.` bedeutet ein leeres Pixel. Dieses Pixel hat keine Farbe, und diese Pixel-_Position_ im Bild ist _transparent_. Transparent bedeutet: Wenn dieses Bild über einem anderen Bild mit einer Pixelfarbe liegt (überlappt), dann scheint die Farbe des Pixels im darunterliegenden Bild durch das obere Bild hindurch.

### Pixelfarben

Neben dem leeren oder transparenten Pixel `.` gibt es 16 Farbpixel, die du verwenden kannst. Sie sind den Farben einer _Palette_ zugeordnet. Eine Palette ist eine Gruppe von Farben, aus denen du wählen kannst. Die Farben werden über eine einzelne Ziffer oder einen Buchstaben ausgewählt. Die Standardpalette verwendet zum Beispiel diese Farben:

* `.`: leer oder transparent
* `0`: transparent
* `1`: weiß
* `2`: hellblau
* `3`: mittelblau
* `4`: dunkelblau
* `5`: violett
* `6`: hellgrün
* `7`: olivgrün
* `8`: braun
* `9`: türkis
* `a`: rot
* `b`: lila
* `c`: rosa
* `d`: orange
* `e`: gelb
* `f`: schwarz

Ein 1 x 1 großes Bild mit einem roten Pixel wird so deklariert:

```typescript
let oneRed = img`a`
```

Als Block sieht es so aus:

```block
let oneRed = img`a`
```

Wir können ein 4 x 4 großes Bild erstellen, das alle Farben verwendet:

```typescript
let allColors = img`
0 1 2 3
4 5 6 7
8 9 a b
c d e f
`
```

Das ist dasselbe Bild als Block:

```block
let allColors = img`
0 1 2 3
4 5 6 7
8 9 a b
c d e f
`
```

## Transparenz und Überlappung

Sehen wir uns an, wie Transparenz bei Bildern funktioniert. Ein `.` bedeutet, dass ein Pixel transparent ist. Nur die Pixel mit einer Farbe werden in einem Bild angezeigt, und farbige Pixel in einem darunterliegenden Bild scheinen hindurch. Zur Demonstration erstellen wir zwei gleich große Bilder und legen eines mit einigen transparenten Pixeln über eines ohne transparente Pixel.

Unser erstes Bild ist ein grüner Kreis in einem 8 x 8 großen Rechteck. Alle Pixel um den Kreis herum sind transparent.

```typescript
let greenBall = img`
. . . . . . . .
. . . 6 6 . . .
. . 6 6 6 6 . .
. 6 6 6 6 6 6 .
. 6 6 6 6 6 6 .
. . 6 6 6 6 . .
. . . 6 6 . . .
. . . . . . . .
`
```

Das andere Bild hat dieselbe Größe, besteht aber nur aus gelben Pixeln.

```blocks
let greenBall = img`
. . . . . . . .
. . . 6 6 . . .
. . 6 6 6 6 . .
. 6 6 6 6 6 6 .
. 6 6 6 6 6 6 .
. . 6 6 6 6 . .
. . . 6 6 . . .
. . . . . . . .
`

let yellowSquare = img`
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
`
```

Wenn du das Bild mit dem grünen Kreis genau über das gelbe Quadrat legst, siehst du, dass das Gelb des unteren Bildes nicht von den transparenten Pixeln des oberen Bildes verdeckt wird.

```sim
let greenBall = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let yellowSquare = image.create(16, 16)
yellowSquare.fill(14)

let yellowSprite = sprites.create(yellowSquare)
let greenSprite = sprites.create(greenBall)
```

## Pixel an Positionen setzen

Du kannst deine Bilder auch erstellen, während dein Programm läuft (dynamisch). Dazu setzt du die Farbe eines Pixels an seiner Position mit Code. Pixel werden über ihre Zeile (``x``-Wert) und Spalte (``y``-Wert) im Bild angesprochen. Du könntest ein leeres Bild erstellen und einen Teil oder das ganze Bild gestalten, indem du in deinem Code Pixelfarben setzt. Erstellen wir ein 32 x 32 großes Kästchen, indem wir ein leeres Bild erzeugen und dann einen orangefarbenen Rand darum zeichnen.

```blocks
let orangeBox = image.create(32, 32)
for (let i = 0; i < 32; i++) {
    orangeBox.setPixel(0, i, 13)
    orangeBox.setPixel(i, 0, 13)
    orangeBox.setPixel(i, 31, 13)
    orangeBox.setPixel(31, i, 13)
}
let boxSprite = sprites.create(orangeBox)
```

Mit den [Bild](/reference/images)-Funktionen kannst du komplexere Pixeloperationen ausführen, zum Beispiel Formen füllen und zeichnen.

## Siehe auch

[Bild](/reference/images)