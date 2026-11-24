# create SPI

Ouvre un canal de communication série SPI sur les broches données.

```sig
pins.createSPI(undefined, undefined);
```

## Paramètres

* broche ``MOSI``
* broche ``MISO``
* broche ``SCK``

## Retourne

Une instance ``SPI`` qui permet d'interagir directement avec le bus.
