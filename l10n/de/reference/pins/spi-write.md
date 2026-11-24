# spi Write

Schreibe einen einzelnen Datenwert an ein SPI-Slave-Gerät und gib die Antwort zurück.

```sig
pins.spiWrite(0);
```

## Parameter

* ``value``: ein [Zahlen](/types/number)wert, der an den SPI-Slave gesendet wird.

## Rückgabewert

* eine [Zahl](/types/number), die ein Antwortwert vom SPI-Slave ist.

## Beispiel

Schreibe den Wert `16` an das SPI-Slave-Gerät.

```blocks
let spiOK = pins.spiWrite(16);
```

## Siehe auch

[spi transfer](/reference/pins/spi-transfer)
