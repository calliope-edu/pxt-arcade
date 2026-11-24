# spi Frequency

Lege die Taktfrequenz für SPI fest.

```sig
pins.spiFrequency(1000000);
```

## Parameter

* **frequency**: eine [Zahl](/types/number), die als Frequenz für den Takt des SPI-Busses gesetzt wird. Dieser Wert ist die Anzahl der Taktwechsel pro Sekunde (Hz).

## Beispiel

Setze die SPI-Taktfrequenz auf `1` Megahertz.

```blocks
pins.spiFrequency(1000000);
```

## Siehe auch

[spi mode](/reference/pins/spi-mode)
