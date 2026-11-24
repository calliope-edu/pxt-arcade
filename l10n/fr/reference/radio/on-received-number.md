# on Received Number

Exécute une partie d'un programme lorsque la @boardname@ reçoit un
[nombre](/types/number) par ``radio``.

```sig
radio.onReceivedNumber(function (receivedNumber) {})
```

## Paramètres

* **receivedNumber** : le [nombre](/types/number) envoyé dans ce paquet, ou `0` si ce paquet ne contenait pas de nombre. Voir [envoyer un nombre](/reference/radio/send-number) et [envoyer une valeur](/reference/radio/send-value)

## ~ hint

Regarde cette vidéo pour voir comment fonctionne le matériel radio de la @boardname@ :

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Dépannage

L'événement ``||radio:onReceivedNumber||`` ne peut être créé qu'une seule fois, en raison des limites du matériel.

Il peut être nécessaire de définir (synchroniser) le groupe radio avant que les événements radio fonctionnent.

## Voir aussi

[Bit Radio](/reference/radio)
[quand une chaîne est reçue](/reference/radio/on-received-string),
[paquet reçu](/reference/radio/received-packet),
[envoyer un nombre](/reference/radio/send-number),
[envoyer une chaîne](/reference/radio/send-string),
[envoyer une valeur](/reference/radio/send-value),
[définir le groupe](/reference/radio/set-group)

```package
radio
```

