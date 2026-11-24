# Radio Broadcast

L'extension Radio Broadcast contient des blocs pour envoyer des messages à toutes les cartes @boardname@ à proximité et en recevoir d'elles. Seuls deux blocs sont utilisés : l'un pour envoyer un message diffusé et l'autre pour exécuter du code lorsqu'un message diffusé est reçu.

Un message, qui est un [nombre](/types/number), est envoyé à, ou reçu par, toutes les cartes @boardname@ à proximité qui font partie du même [groupe](/reference/radio/set-group) radio.

## Blocs de cette extension

```cards
radio.sendMessage(0)
radio.onReceivedMessage(0, function() {})
```

## Voir aussi

[envoyer un message](/reference/radio/send-message),
[quand un message est reçu](/reference/radio/on-received-message)

```package
radio-broadcast
```
