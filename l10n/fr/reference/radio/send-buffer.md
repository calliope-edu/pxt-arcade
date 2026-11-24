# Send Buffer

Envoie un buffer aux autres @boardname@ à proximité connectées par radio. La
longueur maximale du buffer est de 19 octets.

```sig
radio.sendBuffer(pins.createBuffer(1))
```

## Paramètres

* `msg` est un [buffer](/types/buffer) à envoyer par radio.


## #example

## Voir aussi

[Bit Radio](/reference/radio)
[quand un buffer est reçu](/reference/radio/on-received-buffer)

```package
radio
```
