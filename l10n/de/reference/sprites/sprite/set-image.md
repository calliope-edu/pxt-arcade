# Bild setzen

Setze ein neues Bild für den Sprite.

```sig
sprites.create(null).setImage(null)
```

Das aktuell für den Sprite gesetzte Bild wird durch das neue Bild ersetzt. Das neue Bild wird für den Sprite angezeigt.

## Parameter

* **img**: ein [Bild](/types/image), das für den Sprite gesetzt wird.

## Beispiel #example

Erstelle zwei quadratische Blockbilder, eines mit grünen Pixeln, das andere mit orangefarbenen Pixeln. Setze jede Sekunde abwechselnd das grüne oder das orangefarbene Bild für den Sprite auf dem Bildschirm.

```blocks
let meinSprite: Sprite = null
let image2: Image = null
let image1: Image = null
let toggle = false
image1 = image.create(32, 32)
image2 = image1.clone()
image1.fill(7)
image2.fill(4)
meinSprite = sprites.create(image1, 0)
game.onUpdateInterval(1000, function () {
    if (toggle) {
        meinSprite.setImage(image1)
    } else {
        meinSprite.setImage(image2)
    }
    toggle = !(toggle)
})
```

## Siehe auch #seealso

[Bild](/reference/sprites/sprite/image)
