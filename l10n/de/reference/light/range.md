# Bereich

Erstelle einen neuen, kleineren Pixelstreifen aus einem Teil des Standard-Pixelstreifens.

```sig
light.createStrip().range(0, 4)
```
Der neue Pixelstreifen ist ein kleinerer, _virtueller_ Streifen mit einigen oder allen Pixeln
des aktuellen, ursprünglichen Streifens. Mit **range** kannst du aus einem größeren Streifen neue Mini-Streifen
für komplexere Lichteffekte machen.

Wenn du einen Pixelstreifen mit 10 Pixeln hast, kannst du 2 neue _virtuelle_ Streifen machen, indem du
jedem neuen Streifen 5 Pixel gibst. Ein Beispiel dafür sieht so aus:

```block
let strip0 = light.createStrip()
let strip1 = strip0.range(0, 5)
let strip2 = strip0.range(5, 5)
```
Du kannst diese neuen Pixelstreifen für sich allein mit eigenen Lichtaktionen verwenden:

```blocks
let strip1 = light.range(0, 5)
let strip2 = light.range(5, 5)
strip1.setAll(0xffff00)
strip2.setPixelColor(0, 0xff0000)
```
Der ursprüngliche Streifen hat ein `rotes` Pixel an Pixelposition `5`, aber im neuen
virtuellen Streifen namens `strip2` ist es an Pixelposition `0`.

## Parameter

* **start**: die Pixelposition, an der der neue Pixelstreifen beginnt, z. B. 5
* **length**: die Anzahl der Pixel, die der neue Pixelstreifen haben soll, z. B.: 10

## Rückgabewert

* Ein neuer Pixelstreifen, erstellt aus dem aktuellen Pixelstreifen, mit einigen oder allen seiner Pixel.

## Beispiel

Erstelle einen kleineren Streifen aus dem Standard-Pixelstreifen. Verschiebe ein `oranges` Pixel vom Anfang
des neuen Pixelstreifens bis zu seinem Ende.

```blocks
let smallStrip = light.range(0, 4)
smallStrip.setPixelColor(0, 0xff0000)
for (let i = 0; i < smallStrip.length() - 1; i++) {
    pause(500)
    smallStrip.move(LightMove.Shift, 1)
}
```
## Siehe auch

[Standardstreifen](/reference/light/default-strip)

```package
light
```

