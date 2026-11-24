# numéro de série de l'appareil

Obtiens le numéro de série de la @boardname@

```sig
control.deviceSerialNumber()
```

Le logiciel système de ta carte crée un numéro unique pour identifier la carte. Tu peux utiliser ce numéro dans ton programme si tu veux savoir quelle carte exécute ton programme.

## Renvoie

* un [nombre](/types/number) créé pour identifier cette carte de façon unique.

## Exemple #example

Écris le numéro de série de la carte sur le port série.

```blocks
serial.writeValue("serialnumber", control.deviceSerialNumber());
```

## Voir aussi #seealso

[numéro de série long de l'appareil](/reference/control/device-long-serial-number),
[version DAL de l'appareil](/reference/control/device-dal-version)