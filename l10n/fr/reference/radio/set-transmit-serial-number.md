# définir transmission du numéro de série

Fait inclure le numéro de série de la carte dans chaque paquet de données radio.

```sig
radio.setTransmitSerialNumber(true);
```

## Paramètres

* **transmit** : un [booléen](/types/boolean) qui, s'il vaut ``true``, signifie que le numéro de série de la carte est inclus dans chaque paquet transmis. S'il vaut ``false``, la valeur du numéro de série est mise à `0`.

## Exemple

Ce programme fait envoyer le numéro de série dans chaque paquet par la ``radio``.

```blocks
radio.setTransmitSerialNumber(true);
```

## Voir aussi

[Radio](/reference/radio)
[propriété du paquet reçu](/reference/radio/received-packet),
[envoyer nombre](/reference/radio/send-number),
[envoyer valeur](/reference/radio/send-value),
[envoyer chaîne](/reference/radio/send-string)

```package
radio
```