# SPI Mode

Règle le mode du signal SPI.

```sig
pins.spiMode(3);
```

Le SPI utilise deux changements du signal d'horloge pour décider quand transférer les données. Ce sont la _polarité (CPOL)_ et la _phase (CPHA)_ de l'horloge. Comme il y a deux réglages à vérifier, le mode peut avoir l'une de 4 valeurs : CPOL montant ou descendant, et CPHA montant ou descendant. L'appareil émetteur et l'appareil récepteur doivent utiliser le même mode. Le mode par défaut est `3`.

## Paramètres

* **mode** : le mode de transfert SPI à régler. C'est l'une des valeurs suivantes :
>* **0** : CPOL = `0`, CPHA = `0` - transfert sur le front montant initial de l'horloge
>* **1** : CPOL = `0`, CPHA = `1` - transfert sur le front descendant final de l'horloge
>* **2** : CPOL = `1`, CPHA = `0` - transfert sur le front descendant initial de l'horloge
>* **3** : CPOL = `1`, CPHA = `1` - transfert sur le front montant final de l'horloge

## Exemple

Règle le mode du signal SPI pour transférer sur le front montant final du signal d'horloge.

```blocks
pins.spiMode(3);
```

## Voir aussi

[spi frequency](/reference/pins/spi-frequency)
