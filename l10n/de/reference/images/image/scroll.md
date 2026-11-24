# verschieben

Verschiebe die Pixel in einem Bild nach oben, unten, rechts oder links.

```sig
image.create(0, 0).scroll(0, 0)
```

Bilder werden um eine Anzahl von Pixelzeilen oder -spalten verschoben (die Verschiebedistanz). Ein Bild kann sogar gleichzeitig um Zeilen und Spalten verschoben werden. Die Richtung hängt vom Vorzeichen (-) der Verschiebedistanz ab. Zum Verschieben nach oben verwendest du einen negativen Wert. Auch nach links verwendest du einen negativen Wert. Nach unten oder nach rechts verwendest du positive Werte.

Verschieben ist eine _zerstörende_ Operation. Das bedeutet, dass Pixel, die aus dem Bild hinausgeschoben werden, verloren gehen und nicht wieder zurückgeschoben werden können. Beim Verschieben werden die ursprünglichen Positionen der verschobenen Pixel durch transparente Pixel ersetzt.

## Parameter

* **dx**: die [Anzahl](/types/number) der Pixel, um die das Bild nach links oder rechts verschoben wird. Verwende einen negativen Wert, um nach links zu verschieben.
* **dy**: die [Anzahl](/types/number) der Pixel, um die das Bild nach oben oder unten verschoben wird. Verwende einen negativen Wert, um nach oben zu verschieben.

## Beispiele #example

### Farbstreifen #ex1

Verschiebe ein Bild mit 15 Farbstreifen nach oben, bis es verschwindet.

```blocks
let showBands: Sprite = null
let colorBands: Image = null
let scrollCount = 0
scrollCount = 16
colorBands = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
d d d d d d d d d d d d d d d d 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
`
showBands = sprites.create(colorBands)
game.onUpdateInterval(500, function () {
    if (scrollCount > 0) {
        colorBands.scroll(0, -1)
        scrollCount += -1
    }
})
```

### Diagonal verschieben #ex2

Verschiebe ein grünes Quadrat diagonal nach rechts unten.

```blocks
let showSquare: Sprite = null
let greenSquare: Image = null
greenSquare = image.create(32, 32)
greenSquare.fill(6)
showSquare = sprites.create(greenSquare)
game.onUpdateInterval(500, function () {
    greenSquare.scroll(1, 1)
})
```

## Siehe auch #seealso

[horizontal spiegeln](/reference/images/image/flip-x),
[vertikal spiegeln](/reference/images/image/flip-y)