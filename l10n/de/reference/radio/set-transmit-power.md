# setze Sendeleistung

Mach das ``radio``-Signal des @boardname@ stärker oder schwächer.

```sig
radio.setTransmitPower(7);
```

Das Signal kann so schwach wie `0` und so stark wie `7` sein. Standard ist ``6``.

Die wissenschaftliche Bezeichnung für die Stärke des ``radio``-Signals ist
**dBm** oder **Dezibel-Milliwatt**. Eine Signalstärke von `0`
entspricht etwa -30 dBm und eine Stärke von `7`
etwa +4 dBm.

## Reichweite

Wenn dein @boardname@ mit der Stärke `7` sendet und du dich in
einem offenen Gelände ohne viele andere Computer in der Nähe befindest, kann das Signal des @boardname@
bis zu 70 Meter (etwa 230 Fuß) weit reichen.

## Parameter

* ``power`` ist eine [Zahl](/types/number) zwischen ``0`` und ``7``, die angibt, wie stark das Signal ist.

## Simulator

Diese Funktion funktioniert nur auf dem @boardname@, nicht im Browser.

## Beispiel

Dieses Programm lässt ``radio`` mit voller Stärke senden.

```blocks
radio.setTransmitPower(7)
```

## Siehe auch

[Bit Radio](/reference/radio)
[empfangenes Paket](/reference/radio/received-packet),
[sende Zahl](/reference/radio/send-number),
[sende Wert](/reference/radio/send-value),
[sende Zeichenkette](/reference/radio/send-string)

```package
radio
```
