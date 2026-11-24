# on Received Value

Exécute une partie d'un programme lorsque la @boardname@ reçoit une paire nom-valeur par ``radio``.

```sig
radio.onReceivedValue(function (name, value) {})
```

## Paramètres

* **name** : une [chaîne](/types/string) qui est le nom de la valeur reçue.
* **value** : un [nombre](/types/number) qui est la valeur reçue.

## ~ hint

Regarde cette vidéo pour voir comment fonctionne le matériel radio de la @boardname@ :

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Dépannage

L'événement ``||radio:on received value||`` ne peut être créé qu'une seule fois, en raison des limites du matériel.

Il peut être nécessaire de définir (synchroniser) le groupe radio avant que les événements radio fonctionnent.

## Voir aussi

[Bit Radio](/reference/radio)
[quand un nombre est reçu](/reference/radio/on-received-number),
[paquet reçu](/reference/radio/received-packet),
[envoyer un nombre](/reference/radio/send-number),
[envoyer une chaîne](/reference/radio/send-string),
[envoyer une valeur](/reference/radio/send-value),
[définir le groupe](/reference/radio/set-group)

```package
radio
```

