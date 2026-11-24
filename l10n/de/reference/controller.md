# Controller

Reagiere auf die Tasten des Spielcontrollers.

## ~ hint

Die Controller-Tasten sind Tasten der Tastatur zugeordnet, wenn ein @boardname@-Spiel auf einem Gerät mit Tastatur gespielt wird. Auf einer Tastatur im **QWERTY**-Format sind die Tasten, die den Controller-Tasten für einen einzelnen Spieler zugeordnet sind, im Diagramm für **Player #1** dargestellt. Wenn zwei Spieler dasselbe Gerät verwenden, werden die für **Player #2** beschrifteten Tasten benutzt.

![Zuordnung der Tastatur zu den Controller-Tasten](https://cdn.makecode.com/blob/d3103fbe8ee470984cc0e45d0efb543ce6bebc42/static/hardware/key-assign.jpg)

## ~

## Einzelspieler

```cards
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
controller.A.isPressed()
controller.moveSprite(null, 0, 0)
controller.dx(100)
controller.dy(100)
```

## Mehrspieler

```cards
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.moveSprite(null)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.dx()
controller.player2.dy()
```

## Konfiguration

* [Wiederholungsintervall der Taste](/reference/controller/button/repeat-interval)
* [Wiederholungsverzögerung der Taste](/reference/controller/button/repeat-delay)

## Siehe auch

[bei Ereignis](/reference/controller/button/on-event), [ist gedrückt](/reference/controller/button/is-pressed), [bei Tastenereignis](/reference/controller/button/on-button-event), [bewege Sprite](/reference/controller/move-sprite), [dx](/reference/controller/dx), [dy](/reference/controller/dy)