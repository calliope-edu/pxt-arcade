# Bildschirmbreite

Ermittle die Breite des Bildschirms in Pixeln.

```sig
scene.screenWidth()
```

## Rückgabewert

* eine [Zahl](/types/number), die die Breite des Bildschirms auf dem Spielgerät oder im Simulator angibt.

## Beispiel #example

Zeichne eine breite Linie über den gesamten Bildschirm.

```blocks
let showLine: Sprite = null
let wideLine: Image = null
wideLine = image.create(scene.screenWidth(), 3)
wideLine.fill(5)
showLine = sprites.create(wideLine)
```

## Siehe auch #seealso

[Bildschirmhöhe](/reference/scene/screen-height)

