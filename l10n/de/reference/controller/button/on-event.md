# on Event

Führe Code aus, wenn eine Taste gedrückt oder losgelassen wird.

```sig
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

});
```

## Parameter

* **event**: die Tastenaktion, auf die gewartet wird. Die Tastenaktionen (Ereignisse) sind:
> * ``pressed``: Taste wurde gedrückt
> * ``released``: Taste wurde nach dem Drücken losgelassen
> * ``repeated``: dieses Ereignis wiederholt sich ständig, solange die Taste gedrückt ist
* **handler**: der Code, der ausgeführt werden soll, wenn etwas mit einer Taste passiert

## Beispiel #example

Bewege ein gelbes Quadrat an eine zufällige Stelle auf dem Bildschirm, wenn eine Taste gedrückt wird.

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    yellowBox.x = Math.randomRange(3, scene.screenWidth() - 3)
    yellowBox.y = Math.randomRange(3, scene.screenHeight() - 3)
})
```

## Siehe auch #seealso

[ist gedrückt](/reference/controller/button/is-pressed),
[repeatDelay](/reference/controller/button/repeat-delay),
[repeatInterval](/reference/controller/button/repeat-interval)
