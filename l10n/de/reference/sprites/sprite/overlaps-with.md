# überlappt mit

Prüfe, ob dieses Sprite ein anderes Sprite überlappt.

```sig
sprites.create(null).overlapsWith(null)
```

Eine Überlappung zweier Sprites wird erkannt, wenn das erste nicht transparente Pixel im Bild des ersten Sprites das erste nicht transparente Pixel des zweiten Sprites überlappt. Wenn bei einem Sprite das Flag ``ghost`` gesetzt ist, wird keine Überlappung mit einem anderen Sprite bemerkt. Außerdem tritt eine Überlappung auch dann auf, wenn die **Z**-Werte der Sprites verschieden sind.

## Parameter

* **other**: das andere Sprite, bei dem auf Überlappung mit diesem Sprite geprüft wird.

## Rückgabewert

* ein [boolescher](/types/boolean) Wert, der ``true`` ist, wenn das andere Sprite dieses Sprite überlappt.

## Beispiel #example

Schicke ein blaues Quadrat auf ein rotes Quadrat zu. Solange das rote Quadrat das blaue Quadrat überlappt, ändere die Farbe des "roten" Quadrats zufällig in eine andere Farbe.

```blocks
let redBox: Image = null
let blueBox: Image = null
let blueBoxStay: Sprite = null
let redBoxStay: Sprite = null
blueBox = image.create(32, 32)
blueBox.fill(4)
redBox = image.create(32, 32)
redBox.fill(10)
blueBoxStay = sprites.create(blueBox)
redBoxStay = sprites.create(redBox)
blueBoxStay.x = 0
blueBoxStay.vx = 10
game.onUpdateInterval(100, function () {
    if (redBoxStay.overlapsWith(blueBoxStay)) {
        redBox.fill(Math.randomRange(1, 15))
    }
})
```

## Siehe auch #seealso

[wenn überlappt](/reference/sprites/on-overlap)
