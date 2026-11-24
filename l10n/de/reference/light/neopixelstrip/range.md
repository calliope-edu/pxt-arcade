# range

Erstellt aus einem Teil des aktuellen Pixelstreifens einen neuen, kleineren Pixelstreifen.

```sig
light.createStrip().range(0, 4)
```
Der neue Pixelstreifen ist ein kleinerer, _virtueller_ Streifen mit einigen oder allen Pixeln
des aktuellen, also ursprünglichen, Streifens. Mit **range** kannst du aus einem größeren Streifen neue Mini-Streifen
für aufwendigere Lichteffekte machen.

Wenn du einen Pixelstreifen mit 10 Pixeln hast, kannst du 2 neue _virtuelle_ Streifen erstellen, indem du
jedem neuen Streifen 5 Pixel gibst. Ein Beispiel dafür sieht etwa so aus:

```block
let strip0 = light.createStrip()
let strip1 = strip0.range(0, 5)
let strip2 = strip0.range(5, 5)
```
Du kannst diese neuen Pixelstreifen eigenständig mit ihren eigenen Lichtaktionen verwenden:

```blocks
let strip0 = light.createStrip()
let strip1 = strip0.range(0, 5)
let strip2 = strip0.range(5, 5)
strip1.setAll(0xffff00)
strip2.setPixelColor(0, 0xff0000)
```
Der ursprüngliche Streifen hat ein `rotes` Pixel am Pixelplatz `5`, aber für den neuen
virtuellen Streifen namens `strip2` ist es am Pixelplatz `0`.

## Parameter

* **start**: die Pixelposition, an der der neue Pixelstreifen beginnt, wie 5
* **length**: die Anzahl der Pixel, die der neue Pixelstreifen haben wird, wie: 10

## Rückgabewert

* Ein neuer Pixelstreifen, der aus dem aktuellen Pixelstreifen erstellt wurde, mit einigen oder allen Pixeln.

## Beispiel

Erstelle aus dem aktuellen Pixelstreifen einen kleineren Streifen. Schiebe ein `oranges` Pixel vom Anfang
des neuen Pixelstreifens bis zu seinem Ende.

```blocks
let smallStrip = light.createStrip().range(0, 4)
smallStrip.setPixelColor(0, 0xff0000)
for (let i = 0; i < smallStrip.length() - 1; i++) {
    pause(500)
    smallStrip.move(LightMove.Shift, 1)
}
```
## Siehe auch

[``||create strip||``](/reference/light/create-strip)

```package
light
```


