# setze Übertragung Seriennummer

Lass das Funkpaket die Seriennummer des Boards in jedes Datenpaket einbetten.

```sig
radio.setTransmitSerialNumber(true);
```

## Parameter

* **transmit**: ein [Wahrheitswert](/types/boolean): Bei ``true`` wird die Seriennummer des Boards in jedes gesendete Paket aufgenommen. Bei ``false`` wird der Wert der Seriennummer auf `0` gesetzt.

## Beispiel

Dieses Programm lässt ``radio`` die Seriennummer in jedem Paket mitsenden.

```blocks
radio.setTransmitSerialNumber(true);
```

## Siehe auch

[Funk](/reference/radio)
[Eigenschaft des empfangenen Pakets](/reference/radio/received-packet),
[sende Zahl](/reference/radio/send-number),
[sende Wert](/reference/radio/send-value),
[sende Zeichenkette](/reference/radio/send-string)

```package
radio
```