# Bildschirmhöhe

Ruft die Höhe des Bildschirms in Pixeln ab.

```sig
scene.screenWidth()
```

## Rückgabe

* eine [Zahl](/types/number): die Höhe des Bildschirms auf dem Spielgerät oder im Simulator.

## Beispiel #example

Zeichne eine breite Linie über die ganze Bildschirmhöhe.

```blocks
let showLine: Sprite = null
let wideLine: Image = null
wideLine = image.create(3, scene.screenHeight())
wideLine.fill(5)
showLine = sprites.create(wideLine)
```

## Siehe auch #seealso

[Bildschirmbreite](/reference/scene/screen-width)

