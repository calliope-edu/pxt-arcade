# digital Read

Lis une valeur numérique `false` ou `true` sur une broche.

```sig
pins.A0.digitalRead()
```

Les broches numériques lisent l'une de deux valeurs : `false` ou `true`. Souvent, `false` signifie que quelque chose de connecté
à la broche est **éteint** ou que son état est `false`. De la même façon, `true` signifie que quelque chose
de connecté à la broche est **allumé** ou a l'état `true`.

## Retourne

* une valeur [booléenne](types/boolean) qui est soit `false`, soit `true`. La signification de la valeur dépend de la façon dont ce qui est connecté à la broche décide de la valeur à donner.

## Exemple #example

Vérifie si un interrupteur sur ta platine d'essai est allumé ou éteint. L'interrupteur est connecté à la broche `D4`. Écris la position de l'interrupteur dans la console.

```blocks
let mySwitchOn = pins.D4.digitalRead();

if (mySwitchOn) {
    console.log("Switch at D4 is ON")
} else {
    console.log("Switch at D4 is OFF")
}
```

## Voir aussi #seealso

[digital write](/reference/pins/digital-write)
