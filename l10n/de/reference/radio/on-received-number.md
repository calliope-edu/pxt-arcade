# wenn Zahl empfangen

Führe einen Teil eines Programms aus, wenn der @boardname@ eine
[Zahl](/types/number) über ``radio`` empfängt.

```sig
radio.onReceivedNumber(function (receivedNumber) {})
```

## Parameter

* **receivedNumber**: Die [Zahl](/types/number), die in diesem Paket gesendet wurde, oder `0`, wenn dieses Paket keine Zahl enthielt. Siehe [sende Zahl](/reference/radio/send-number) und [sende Wert](/reference/radio/send-value)

## ~ hint

Sieh dir dieses Video an, um zu erfahren, wie die Funk-Hardware des @boardname@ funktioniert:

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Problembehandlung

Das Ereignis ``||radio:onReceivedNumber||`` kann wegen Einschränkungen der Hardware nur einmal angelegt werden.

Eventuell muss die Funkgruppe gesetzt und abgeglichen werden, bevor die Funk-Ereignisse funktionieren.

## Siehe auch

[Bit Radio](/reference/radio)
[wenn Zeichenkette empfangen](/reference/radio/on-received-string),
[empfangenes Paket](/reference/radio/received-packet),
[sende Zahl](/reference/radio/send-number),
[sende Zeichenkette](/reference/radio/send-string),
[sende Wert](/reference/radio/send-value),
[setze Gruppe](/reference/radio/set-group)

```package
radio
```
