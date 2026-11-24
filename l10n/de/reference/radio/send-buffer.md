# sende Puffer

Sendet einen Puffer per Funk an andere @boardname@s in der Umgebung. Die
maximale Pufferlänge beträgt 19 Bytes.

```sig
radio.sendBuffer(pins.createBuffer(1))
```

## Parameter

* `msg` ist ein [Puffer](/types/buffer), der per Funk gesendet wird.


## #example

## Siehe auch

[Bit Radio](/reference/radio)
[wenn Puffer empfangen](/reference/radio/on-received-buffer)

```package
radio
```
