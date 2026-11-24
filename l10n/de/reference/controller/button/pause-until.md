# pause Until

Lässt dein Programm warten, bis ein Ereignis für eine Taste eintritt.

```sig
controller.A.pauseUntil(ControllerButtonEvent.Pressed)
```

## Parameter

* **event**: die Tastenaktion, auf die gewartet wird. Die Tastenaktionen (Ereignisse) sind:
> * ``pressed``: Taste wurde gedrückt
> * ``released``: Taste wurde nach dem Drücken losgelassen

## Beispiel #example

Warte mit dem Verschieben eines gelben Quadrats in die obere linke Ecke des Bildschirms, bis die Taste ``B`` gedrückt wird.

```blocks
let square = sprites.create(img`
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
`)
controller.B.pauseUntil(ControllerButtonEvent.Pressed)
square.x = 3
square.y = 3
```

## Siehe auch #seealso

[bei Ereignis](/reference/controller/button/on-event)
