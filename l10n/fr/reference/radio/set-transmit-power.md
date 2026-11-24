# définir puissance d'émission

Rends le signal ``radio`` de la @boardname@ plus fort ou plus faible.

```sig
radio.setTransmitPower(7);
```

Le signal peut aller de `0` (le plus faible) à `7` (le plus fort). La valeur par défaut est ``6``.

Le nom scientifique de la puissance du signal ``radio`` est
**dBm**, ou **décibel-milliwatts**. Une puissance de signal de `0`
correspond à -30 dBm, et une puissance de `7`
correspond à +4 dBm.

## Portée

Si ta @boardname@ émet avec une puissance de `7` et que tu te trouves dans
un espace dégagé sans beaucoup d'autres ordinateurs autour, le signal de la @boardname@
peut porter jusqu'à 70 mètres.

## Paramètres

* ``power`` est un [nombre](/types/number) entre ``0`` et ``7`` qui indique la puissance du signal.

## Simulateur

Cette fonction ne marche que sur la @boardname@, pas dans les navigateurs.

## Exemple

Ce programme fait émettre la ``radio`` à pleine puissance.

```blocks
radio.setTransmitPower(7)
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