# turn Wheel

Emuliere eine Drehung des Mausrads in eine der beiden Richtungen.

```sig
mouse.turnWheel(0);
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Mausaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

## Parameter

* **w**: eine [Anzahl](/types/number) von Raddrehschritten, die emuliert werden. Verwende eine negative Zahl, um eine Drehung nach vorne, und eine positive Zahl, um eine Drehung nach hinten zu simulieren.

## Beispiel #example

Sende Mausraddrehungen an einen Computer, der mit dem @boardname@ verbunden ist. Eine Drehung des Mausrads nach vorne wird emuliert, wenn das Board nach oben geneigt wird, und eine Drehung nach hinten, wenn das Board nach unten geneigt wird.

```blocks
input.onGesture(Gesture.TiltUp, function () {
    mouse.turnWheel(-5)
})
input.onGesture(Gesture.TiltDown, function () {
    mouse.turnWheel(5)
})
```

## Siehe auch #seealso

[Taste setzen](/reference/mouse/set-button), [bewegen](/reference/mouse/move)

```package
mouse
```