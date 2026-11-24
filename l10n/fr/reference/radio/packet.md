# Packet

Un paquet reçu par la radio.

## Propriétés

* `receivedNumber` - Le [nombre](/types/number) envoyé dans ce paquet, ou `0` si ce paquet ne contenait pas de nombre. Voir [envoyer un nombre](/reference/radio/send-number) et [envoyer une valeur](/reference/radio/send-value)
* `receivedString` - La [chaîne](/types/string) envoyée dans ce paquet, ou la chaîne vide si ce paquet ne contenait pas de chaîne. Voir [envoyer une chaîne](/reference/radio/send-string) et [envoyer une valeur](/reference/radio/send-value)
* `time` - L'heure système de la @boardname@ qui a envoyé ce paquet, au moment de l'envoi.
* `serial` - Le numéro de série de la @boardname@ qui a envoyé ce paquet, ou `0` si la @boardname@ n'a pas inclus son numéro de série.
* `signal` - La force du signal radio. La plage exacte des valeurs varie, mais elle va environ de `-128` dB (faible) à `-42` dB (fort).

## Structure du paquet

Cette section décrit la structure des données du paquet, si tu dois interpréter les données en dehors de MakeCode.

    Disposition des octets du paquet
    | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28
    ----------------------------------------------------------------
    | type paquet    | heure système | numéro de série   | charge utile

* Le numéro de série vaut 0 par défaut, sauf s'il est activé par l'utilisateur
* L'heure système est le nombre de millisecondes depuis le démarrage ; elle repart à zéro après environ un mois

### Types de paquets

* PACKET_TYPE_NUMBER 0

    charge utile : nombre (9 ... 12)


* PACKET_TYPE_VALUE 1

    charge utile : nombre (9 ... 12), longueur du nom (13), nom (14 ... 26)

* PACKET_TYPE_STRING 2

    charge utile : longueur de la chaîne (9), chaîne (10 ... 28)

* PACKET_TYPE_BUFFER 3

    charge utile : longueur du tampon (9), tampon (10 ... 28)

* PACKET_TYPE_DOUBLE 4

    charge utile : nombre (9 ... 16)

* PACKET_TYPE_DOUBLE_VALUE 5

    charge utile : nombre (9 ... 16), longueur du nom (17), nom (18 ... 26)

## Voir aussi

[Bit Radio](/reference/radio)
[quand un paquet de données est reçu](/reference/radio/on-data-packet-received),

```package
radio
```
