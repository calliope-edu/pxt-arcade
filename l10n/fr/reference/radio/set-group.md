# définir groupe

Donne à un programme l'ID de groupe que tu indiques pour envoyer et recevoir
par radio.

```sig
radio.setGroup(0);
```

Un groupe est comme une chaîne de télévision (une @boardname@ ne peut
envoyer ou recevoir que dans un seul groupe à la fois). Un ID de groupe est comme le numéro
de la chaîne.

Si tu n'indiques pas à ton programme quel ID de groupe utiliser avec cette
fonction, il déterminera lui-même son propre ID de groupe. Si tu charges
exactement le même programme sur deux @boardname@s différentes, elles pourront
communiquer entre elles car elles auront le même ID de groupe.

## Paramètres

* **id** : un [nombre](/types/number) de ``0`` à ``255``.

## Simulateur

Cette fonction ne marche que sur la @boardname@, pas dans les navigateurs.

## Exemple

Ce programme fixe l'ID de groupe à 128.

```blocks
radio.setGroup(128)
```

## Voir aussi

[Radio](/reference/radio)
[quand un nombre est reçu](/reference/radio/on-received-number),
[quand une chaîne est reçue](/reference/radio/on-received-string),
[quand une valeur est reçue](/reference/radio/on-received-value),
[envoyer nombre](/reference/radio/send-number),
[envoyer valeur](/reference/radio/send-value),
[envoyer chaîne](/reference/radio/send-string)

```package
radio
```