# Maus

Emuliere Mausaktionen über eine USB-Verbindung.

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um eine Maus zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

```cards
mouse.setButton(MouseButton.Left, true);
mouse.move(0, 0);
mouse.turnWheel(0);
```

## Siehe auch

[bewegen](/reference/mouse/move), [Taste setzen](/reference/mouse/set-button), [Rad drehen](/reference/mouse/turn-wheel)

```package
mouse
```