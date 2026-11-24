# Paket

Ein Paket, das per Funk empfangen wurde.

## Eigenschaften

* `receivedNumber` - Die [Zahl](/types/number), die in diesem Paket gesendet wurde, oder `0`, wenn dieses Paket keine Zahl enthielt. Siehe [sende Zahl](/reference/radio/send-number) und [sende Wert](/reference/radio/send-value)
* `receivedString` - Die [Zeichenkette](/types/string), die in diesem Paket gesendet wurde, oder die leere Zeichenkette, wenn dieses Paket keine Zeichenkette enthielt. Siehe [sende Zeichenkette](/reference/radio/send-string) und [sende Wert](/reference/radio/send-value)
* `time` - Die Systemzeit des @boardname@, der dieses Paket gesendet hat, zum Zeitpunkt des Sendens.
* `serial` - Die Seriennummer des @boardname@, der dieses Paket gesendet hat, oder `0`, wenn der @boardname@ seine Seriennummer nicht mitgeschickt hat.
* `signal` - Wie stark das Funksignal ist. Der genaue Wertebereich variiert, reicht aber ungefähr von `-128` dB (schwach) bis `-42` dB (stark).

## Paketaufbau

Dieser Abschnitt beschreibt den Datenaufbau des Pakets, falls du die Daten außerhalb von MakeCode auswerten möchtest.

    Packet byte layout
    | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28
    ----------------------------------------------------------------
    | packet type    | system time   | serial number     | payload

* Die Seriennummer ist standardmäßig 0, solange sie nicht vom Benutzer aktiviert wird
* Die Systemzeit sind die Millisekunden seit dem Start; sie läuft nach etwa einem Monat über

### Pakettypen

* PACKET_TYPE_NUMBER 0

    Nutzdaten: Zahl (9 ... 12)


* PACKET_TYPE_VALUE 1

    Nutzdaten: Zahl (9 ... 12), Namenslänge (13), Name (14 ... 26)

* PACKET_TYPE_STRING 2

    Nutzdaten: Zeichenkettenlänge (9), Zeichenkette (10 ... 28)

* PACKET_TYPE_BUFFER 3

    Nutzdaten: Pufferlänge (9), Puffer (10 ... 28)

* PACKET_TYPE_DOUBLE 4

    Nutzdaten: Zahl (9 ... 16)

* PACKET_TYPE_DOUBLE_VALUE 5

    Nutzdaten: Zahl (9 ... 16), Namenslänge (17), Name (18 ... 26)

## Siehe auch

[Bit Radio](/reference/radio)
[wenn Datenpaket empfangen](/reference/radio/on-data-packet-received),

```package
radio
```
