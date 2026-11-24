# constrain

Vérifie que la valeur d'un nombre donné n'est ni plus petite ni plus grande que deux autres nombres.

```sig
Math.constrain(0,0,0)
```

Une valeur est *contrainte*, ou limitée, à une plage en la comparant à deux nombres limites. L'un des nombres limites fixe la plus petite valeur que le nombre testé doit avoir. L'autre fixe la plus grande valeur que le nombre testé doit avoir.

Si la valeur testée se trouve dans la plage de ces deux nombres limites, la valeur elle-même est retournée. Si la valeur est en dehors de cette plage, la valeur retournée est le nombre limite le plus proche de la valeur testée.

Ainsi, si `15` est contraint dans une plage de `3` à `10`, alors `Math.constrain(15, 6, 10)` retournera `10`. De même, si `3` est contraint dans la même plage, `Math.constrain(3, 6, 10)` retournera `6`. Bien sûr, une valeur de `4` contrainte entre `3` et `10` reste `4`.

## Paramètres

* **value** : un [nombre](/types/number) dont on teste s'il est dans une plage.
* **low** : la limite inférieure de la plage dans laquelle tester **value**.
* **high** : la limite supérieure de la plage dans laquelle tester **value**.

## Valeur retournée

* un [nombre](/types/number) qui est une valeur contrainte par la plage de nombres de **low** à **high**.

## Exemple #example

Garde une valeur souhaitée dans une plage réaliste de `50` à `100`.

```block 
let desired = 155
let realistic = Math.constrain(desired, 50, 100)
```

## Voir Aussi

[map](/reference/math/map)
