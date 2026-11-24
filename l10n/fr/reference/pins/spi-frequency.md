# spi Frequency

Règle la fréquence d'horloge SPI.

```sig
pins.spiFrequency(1000000);
```

## Paramètres

* **frequency** : un [nombre](/types/number) à utiliser comme fréquence de l'horloge du bus SPI. Cette valeur est le nombre de changements d'horloge par seconde (Hz).

## Exemple

Règle la fréquence d'horloge SPI à `1` mégahertz.

```blocks
pins.spiFrequency(1000000);
```

## Voir aussi

[spi mode](/reference/pins/spi-mode)
