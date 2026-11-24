# définir bande de fréquence

Change la bande d'émission et de réception de la radio pour le canal indiqué. La valeur par défaut est 7.

```sig
radio.setFrequencyBand(50);
```

## Paramètres

* ``band`` est un [nombre](/types/number) entre ``0`` et ``83``. Chaque pas a une largeur de 1 MHz, à partir de 2400 MHz.

## Simulateur

Cette fonction ne marche que sur la @boardname@, pas dans les navigateurs.

## Exemple

Ce programme fait utiliser la bande de fréquence 50 à la ``radio``.

```blocks
radio.setFrequencyBand(50)
```

## Voir aussi

[Radio](/reference/radio)
[paquet reçu](/reference/radio/received-packet),
[envoyer nombre](/reference/radio/send-number),
[envoyer valeur](/reference/radio/send-value),
[envoyer chaîne](/reference/radio/send-string)

```package
radio
```