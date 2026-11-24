# empfangenes Paket

Liefert eine Eigenschaft des zuletzt empfangenen Funkpakets

```sig
radio.receivedPacket(RadioPacketProperty.Time)
```

Einige Informationen über das zuletzt empfangene Paket sind verfügbar, zum Beispiel der Zeitpunkt des Empfangs, die Seriennummer des Pakets oder die Signalstärke beim Empfang.

## Parameter

* **type**: die Art der Eigenschaft, die für das empfangene Paket zurückgegeben wird:

> `time`: der Zeitpunkt, zu dem das Paket empfangen wurde
> `serial number`: die Seriennummer des Pakets
> `signal strength`: die Signalstärke zum Zeitpunkt des Empfangs

## Simulator

Diese Funktion funktioniert nur auf dem @boardname@, nicht im Browser.

## Beispiel

Ermittle die Signalstärke des zuletzt empfangenen Pakets.

```blocks
let ss = radio.receivedPacket(RadioPacketProperty.SignalStrength)
```

## Siehe auch

[wenn Zahl empfangen](/reference/radio/on-received-number),
[wenn Zeichenkette empfangen](/reference/radio/on-received-string),
[wenn Wert empfangen](/reference/radio/on-received-value)

```package
radio
```
