# wenn Puffer empfangen

Führe einen Teil eines Programms aus, wenn der @boardname@ über ``radio`` einen Puffer empfängt.

```sig
radio.onReceivedBuffer(function (receivedBuffer) {})
```

Die Daten in **receivedBuffer** werden dort als Daten-[Typ](/types) abgelegt. Die Daten können eine [Zahl](/types/number) oder eine [Zeichenkette](/types/string) sein. Bei Puffern müssen die Daten allerdings in einem bestimmten Format im Puffer abgelegt werden. Insbesondere müssen Zahlen eine bestimmte Reihenfolge haben, wenn ihre einzelnen _Bytes_ in den Puffer geschrieben werden. Die Zahlen müssen außerdem in derselben Reihenfolge aus dem Puffer gelesen werden, in der sie hineingeschrieben wurden. Mehr dazu erfährst du unter [Zahlenformate](/types/buffer/number-format).

## Parameter

* **receivedBuffer**: Der Puffer, der in diesem Paket gesendet wurde, oder die leere Zeichenkette, wenn dieses Paket keine Zeichenkette enthielt. Siehe [sende Puffer](/reference/radio/send-buffer)

## #example

## Siehe auch

[Bit Radio](/reference/radio)
[sende Puffer](/reference/radio/send-buffer),
[Zahlenformate](/types/buffer/number-format)

```package
radio
```
