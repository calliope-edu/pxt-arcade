# move

Emuliere eine Mausbewegung in X- und Y-Richtung.

```sig
mouse.move(0, 0);
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Mausaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

## Parameter

* **x**: eine Abstands-[Zahl](/types/number) in horizontaler Richtung, um die der Mauszeiger bewegt wird. Verwende eine negative Zahl, um eine Bewegung nach links, und eine positive Zahl, um eine Bewegung nach rechts zu simulieren.
* **y**: eine Abstands-[Zahl](/types/number) in vertikaler Richtung, um die der Mauszeiger bewegt wird. Verwende eine negative Zahl, um eine Bewegung nach oben, und eine positive Zahl, um eine Bewegung nach unten zu simulieren.

## Beispiel #example

Sende Mausbewegungen an einen Computer, der mit dem @boardname@ verbunden ist. Eine Mausbewegung um `10` nach links wird emuliert, wenn das Board nach links geneigt wird, und eine Mausbewegung um `10` wird emuliert, wenn das Board nach rechts geneigt wird.

```blocks
input.onGesture(Gesture.TiltLeft, function () {
    mouse.move(-10, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    mouse.move(10, 0)
})
```

## Siehe auch #seealso

[Taste setzen](/reference/mouse/set-button), [Rad drehen](/reference/mouse/turn-wheel)

```package
mouse
```