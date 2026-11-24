# digital Write

Écris une valeur `false` ou `true` sur une broche numérique.

```sig
pins.A0.digitalWrite(false)
```
Les broches numériques écrivent l'une de deux valeurs : `false` ou `true`. Souvent, `false` signifie que quelque chose de connecté
à la broche est **éteint** ou que son état est `false`. De la même façon, `true` signifie que quelque chose
de connecté à la broche est **allumé** ou a l'état `true`.

La valeur du dernier ``||pins:digital write||`` reste sur la broche jusqu'à ce qu'un autre ``||pins:digital write||``
ait lieu.

## Paramètres

* **value** : une valeur [booléenne](types/boolean) qui est soit `false`, soit `true`. La signification de la valeur dépend de la façon dont ce qui est connecté à la broche se comporte lorsqu'il reçoit la nouvelle valeur.

## Exemple #example

Allume une LED sur ta platine d'essai connectée à la broche `D4`. Tu écris la valeur `true` sur la broche.

```blocks
pins.D4.digitalWrite(true)
```

## Voir aussi #seealso

[digital read](/reference/pins/digital-read)
