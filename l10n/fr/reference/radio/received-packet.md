# received Packet

Obtiens une propriété du dernier paquet radio reçu

```sig
radio.receivedPacket(RadioPacketProperty.Time)
```

Certaines informations sur le dernier paquet reçu sont disponibles, comme l'heure de réception, le numéro de série du paquet ou la force du signal à la réception.

## Paramètres

* **type** : le type de propriété à renvoyer pour le paquet reçu :

> `time` : l'heure à laquelle le paquet a été reçu
> `serial number` : le numéro de série du paquet
> `signal strength` : la force du signal au moment où le paquet a été reçu

## Simulateur

Cette fonction ne fonctionne que sur la @boardname@, pas dans les navigateurs.

## Exemple

Obtiens la force du signal du dernier paquet reçu.

```blocks
let ss = radio.receivedPacket(RadioPacketProperty.SignalStrength)
```

## Voir aussi

[quand un nombre est reçu](/reference/radio/on-received-number),
[quand une chaîne est reçue](/reference/radio/on-received-string),
[quand une valeur est reçue](/reference/radio/on-received-value)

```package
radio
```
