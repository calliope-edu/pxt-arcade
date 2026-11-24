# click

Emuliere einen Mausklick.

```sig
mouse.click(MouseButton.Left)
```

Ein Mausklick ist eine schnelle Folge von Tastenereignissen `on` und `off`. Mit **click()** werden beide als eine Aktion simuliert.

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Mausaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

## Parameter

* **button**: die Kennung der Taste, für die ein Mausklick emuliert wird: `left`, `right` oder `middle`.

## Beispiel #example

Sende einen Rechtsklick an einen Computer, der mit dem @boardname@ verbunden ist.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function() {
    mouse.click(MouseButton.Right)
})
```

## Siehe auch #seealso

[Taste setzen](/reference/mouse/set-button),
[Rad drehen](/reference/mouse/turn-wheel)

```package
mouse
```