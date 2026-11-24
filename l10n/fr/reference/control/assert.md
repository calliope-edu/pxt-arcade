# assert

Affiche un numéro d'erreur et arrête le programme si la condition de l'assertion est fausse.

```sig
control.assert(false, 0)
```

Tu peux exiger que ton programme s'arrête à un bloc assert si une certaine condition que tu vérifies est fausse. Le numéro d'erreur de l'assertion est écrit sur le port série avec un message d'échec.

## Paramètres

* **cond** : un [booléen](/types/boolean) où vrai signifie que tout va bien et faux signifie : arrête le programme !
* **code** : un [nombre](/types/number) d'erreur que tu associes à une situation d'erreur dans ton programme.

## Exemple #example

Arrête le programme si un capteur connecté à la broche `A0` envoie un signal bas (`0`).

```blocks
forever(function () {
    control.assert((pins.A0.digitalRead() == 1), 15)
    pause(1000)
})
```

## Voir aussi #seealso

[panic](/reference/control/panic)

```package
base
```