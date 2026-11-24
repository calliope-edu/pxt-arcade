# Bit Radio

Envoie et reçois des données avec le protocole Bit Radio.

### ~ hint

#### Bit Radio

Le protocole Bit Radio a été développé à l'origine par l'[Université de Lancaster](https://github.com/lancaster-university/microbit-dal/commit/d9d2343ab63a707ac9d0167545261ab57b996430#diff-4f1efa652dafc9c738aae3a4bc5c3dad) pour le projet BBC micro:bit.

Ce protocole ne contient aucune forme de chiffrement, d'authentification ou d'autorisation. Son seul but est de servir d'outil pédagogique pour montrer le fonctionnement de communications simples et d'offrir un bac à sable pour apprendre.

### ~


```cards
radio.sendNumber(0);
radio.sendValue("name", 0);
radio.sendString("");
radio.sendBuffer(pins.createBuffer(1));
radio.onReceivedNumber(function (receivedNumber) { });
radio.onReceivedValue(function (name, value) { });
radio.onReceivedString(function (receivedString) { });
radio.onReceivedBuffer(function (receivedBuffer) { });
radio.setGroup(0);
```

## Avancé

```cards
radio.setTransmitPower(7);
radio.setFrequencyBand(50);
radio.setTransmitSerialNumber(false);
radio.raiseEvent(0, 0);
```

```package
radio
```

## Voir aussi

[envoyer un nombre](/reference/radio/send-number),
[envoyer une valeur](/reference/radio/send-value),
[envoyer une chaîne](/reference/radio/send-string),
[envoyer un buffer](/reference/radio/send-buffer),
[quand un nombre est reçu](/reference/radio/on-received-number),
[quand une valeur est reçue](/reference/radio/on-received-value),
[quand une chaîne est reçue](/reference/radio/on-received-string),
[quand un buffer est reçu](/reference/radio/on-received-buffer),
[définir le groupe](/reference/radio/set-group),
[définir la puissance d'émission](/reference/radio/set-transmit-power),
[définir l'envoi du numéro de série](/reference/radio/set-transmit-serial-number),
[déclencher un événement](/reference/radio/raise-event)

