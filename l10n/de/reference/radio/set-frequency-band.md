# setze Frequenzband

Ändere das Sende- und Empfangsband des Funks auf den angegebenen Kanal. Standard ist 7.

```sig
radio.setFrequencyBand(50);
```

## Parameter

* ``band`` ist eine [Zahl](/types/number) zwischen ``0`` und ``83``. Jeder Schritt ist 1 MHz breit, beginnend bei 2400 MHz.

## Simulator

Diese Funktion funktioniert nur auf dem @boardname@, nicht im Browser.

## Beispiel

Dieses Programm lässt ``radio`` das Frequenzband 50 verwenden.

```blocks
radio.setFrequencyBand(50)
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
