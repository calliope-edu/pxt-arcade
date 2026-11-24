# set Button

Emuliere das Drücken oder Loslassen einer Maustaste.

```sig
mouse.setButton(MouseButton.Right, false)
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Mausaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

## Parameter

* **button**: die Taste, für die ein Drücken oder Loslassen simuliert wird. Die Tasten sind ``left``, ``middle`` und ``right``.
* **down**: ein [boolescher Wert](/types/boolean), der entweder ``true`` für eine gedrückte oder ``false`` für eine losgelassene Taste ist.

## Beispiel #example

Simuliere Klicks mit der linken und rechten Maustaste mit den Tasten auf dem Board.

```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
    mouse.setButton(MouseButton.Left, true)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    mouse.setButton(MouseButton.Right, false)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    mouse.setButton(MouseButton.Right, true)
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    mouse.setButton(MouseButton.Right, false)
})
```

## Siehe auch #seealso

[bewegen](/reference/mouse/move), [Rad drehen](/reference/mouse/turn-wheel)

```package
mouse
```