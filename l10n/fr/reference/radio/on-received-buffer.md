# on Received Buffer

Exécute une partie d'un programme lorsque la @boardname@ reçoit un buffer par ``radio``.

```sig
radio.onReceivedBuffer(function (receivedBuffer) {})
```

Les données contenues dans **receivedBuffer** y sont placées sous forme d'un [type](/types) de données. Les données peuvent être un [nombre](/types/number) ou une [chaîne](/types/string). Avec les buffers, la façon dont les données sont placées dans le buffer doit cependant respecter un format précis. En particulier, les nombres doivent suivre un certain ordre lorsque leurs _octets_ individuels sont placés dans le buffer. Les nombres doivent aussi être lus dans le buffer dans l'ordre où ils y ont été placés. Tu peux en apprendre plus sur les [formats de nombres](/types/buffer/number-format).

## Paramètres

* **receivedBuffer** : le buffer envoyé dans ce paquet, ou la chaîne vide si ce paquet ne contenait pas de chaîne. Voir [envoyer un buffer](/reference/radio/send-buffer)

## #example

## Voir aussi

[Bit Radio](/reference/radio)
[envoyer un buffer](/reference/radio/send-buffer),
[formats de nombres](/types/buffer/number-format)

```package
radio
```

