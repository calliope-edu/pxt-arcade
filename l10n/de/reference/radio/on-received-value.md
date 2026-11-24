# wenn Wert empfangen

Führe einen Teil eines Programms aus, wenn der @boardname@ ein Name-Wert-Paar über ``radio`` empfängt.

```sig
radio.onReceivedValue(function (name, value) {})
```

## Parameter

* **name**: eine [Zeichenkette](/types/string), die der Name des empfangenen Werts ist.
* **value**: eine [Zahl](/types/number), die der empfangene Wert ist.

## ~ hint

Sieh dir dieses Video an, um zu erfahren, wie die Funk-Hardware des @boardname@ funktioniert:

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Problembehandlung

Das Ereignis ``||radio:on received value||`` kann wegen Einschränkungen der Hardware nur einmal angelegt werden.

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
