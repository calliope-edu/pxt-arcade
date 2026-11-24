# wenn Zeichenkette empfangen

Führe einen Teil eines Programms aus, wenn der @boardname@ eine [Zeichenkette](/types/string) über ``radio`` empfängt.

```sig
radio.onReceivedString(function (receivedString) {})
```

## Parameter

* **receivedString**: Die [Zeichenkette](/types/string), die in diesem Paket gesendet wurde, oder die leere Zeichenkette, wenn dieses Paket keine Zeichenkette enthielt. Siehe [sende Zeichenkette](/reference/radio/send-string) und [sende Wert](/reference/radio/send-value)

## ~ hint

Sieh dir dieses Video an, um zu erfahren, wie die Funk-Hardware des @boardname@ funktioniert:

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Problembehandlung

Das Ereignis ``||radio:on received string||`` kann wegen Einschränkungen der Hardware nur einmal angelegt werden.

Eventuell muss die Funkgruppe gesetzt und abgeglichen werden, bevor die Funk-Ereignisse funktionieren.

## Siehe auch

[Bit Radio](/reference/radio)
[wenn Zahl empfangen](/reference/radio/on-received-number),
[empfangenes Paket](/reference/radio/received-packet),
[sende Zahl](/reference/radio/send-number),
[sende Zeichenkette](/reference/radio/send-string),
[sende Wert](/reference/radio/send-value),
[setze Gruppe](/reference/radio/set-group)

```package
radio
```
