# create SPI

Öffnet einen seriellen SPI-Kommunikationskanal über die angegebenen Pins.

```sig
pins.createSPI(undefined, undefined);
```

## Parameter

* ``MOSI``-Pin
* ``MISO``-Pin
* ``SCK``-Pin

## Rückgabewert

Eine ``SPI``-Instanz, mit der du direkt mit dem Bus arbeiten kannst.
