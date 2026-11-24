# setze Beschleunigungsmesser-Bereich

Lege fest, wie der @boardname@ g-Kraft oder
[Beschleunigung](/reference/input/acceleration) misst (wie stark der @boardname@
schneller oder langsamer wird). Mit diesem Block legst du die größte
g-Kraft fest, die du messen willst.

```sig
input.setAccelerometerRange(AcceleratorRange.OneG);
```

## Parameter

* ``range`` die größte g-Kraft (Beschleunigung), die du messen willst: `1g`, `2g`, `4g` oder `8g`.
Größere Werte, die dein @boardname@ misst, werden ignoriert. Du bekommst also keine
Ereignisse oder Messwerte in deinem Programm, wenn eine größere g-Kraft auftritt.

## Beispiel #example

Lege fest, dass dein @boardname@ g-Kräfte bis 4 g
misst. Schreibe dann die gemessene Beschleunigung auf **serial**, wenn du das Board seitwärts bewegst.

```blocks
input.setAccelerometerRange(AcceleratorRange.FourG)
forever(() => {
    serial.writeNumber(input.acceleration(Dimension.X))
})
```

### ~hint
**Simulator**

Dieses Programm funktioniert nur auf dem @boardname@. Du musst es zuerst herunterladen, bevor du es ausprobieren kannst.
### ~

## Siehe auch #seealso

[Beschleunigung](/reference/input/acceleration)

```package
accelerometer
```
