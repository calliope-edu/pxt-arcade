# beim Zeichnen

Zeichnet auf den Bildschirm, bevor die Sprites gezeichnet werden.

```sig
game.onPaint(function () {
	
})
```

## Parameter

* **a**: der Code, der den Bildschirm bemalt, bevor die Sprites gezeichnet werden.

## Beispiel #example

Ändere alle `2` Sekunden zufällig die Hintergrundfarbe des Bildschirms.

```blocks
let bkColor = 0
bkColor = 0
game.onPaint(function () {
    scene.setBackgroundColor(bkColor)
})
game.onUpdateInterval(2000, function () {
    bkColor = Math.randomRange(0, 15)
})
```

## Siehe auch #seealso

[bei Aktualisierung](/reference/game/on-update)