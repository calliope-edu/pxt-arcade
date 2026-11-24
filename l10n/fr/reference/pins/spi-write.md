# spi Write

Écris une seule valeur de données vers un appareil esclave SPI et renvoie la réponse.

```sig
pins.spiWrite(0);
```

## Paramètres

* ``value`` : une valeur [nombre](/types/number) à envoyer à l'esclave SPI.

## Retourne

* un [nombre](/types/number) qui est une valeur de réponse de l'esclave SPI.

## Exemple

Écris la valeur `16` vers l'appareil esclave SPI.

```blocks
let spiOK = pins.spiWrite(16);
```

## Voir aussi

[spi transfer](/reference/pins/spi-transfer)
