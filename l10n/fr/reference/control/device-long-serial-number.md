# numéro de série long de l'appareil

Obtiens le numéro de série long (64 bits) de la @boardname@

```sig
control.deviceSerialNumber()
```

Le logiciel système de ta carte crée un numéro unique pour identifier la carte. Tu peux utiliser ce numéro dans ton programme si tu veux savoir quelle carte exécute ton programme.

## Renvoie

* un [tampon](/types/buffer) qui contient une valeur de 64 bits identifiant cette carte de façon unique.

## Exemple #example

Écris le numéro de série long de la carte sur le port série sous forme de chaîne Base64.

```blocks
console.log("serialnumber: " + control.deviceLongSerialNumber().toBase64())
```

## Voir aussi #seealso

[version DAL de l'appareil](/reference/control/device-dal-version),
[numéro de série de l'appareil](/reference/control/device-serial-number)