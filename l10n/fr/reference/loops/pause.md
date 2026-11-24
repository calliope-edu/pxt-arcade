# pause

Met en pause une partie du programme pendant un certain nombre de millisecondes.

```sig
pause(400)
```

Quand le code d'un bloc arrive à une ``||control:pause||``, il attend pendant la durée que tu indiques. Le code
dans des blocs comme ``||loops:toujours||`` et ``||control:exécuter en parallèle||`` continue de s'exécuter pendant que le code d'un autre
bloc attend à une ``||control:pause||``.

## Paramètres

* **ms** : le [nombre](/types/number) de millisecondes pendant lesquelles tu veux faire une pause. Ainsi, 100 millisecondes = 1/10 de seconde et 1000 millisecondes = 1 seconde.

## Exemple #example

Écris les cinq premiers nombres naturels dans la console, en attendant une demi-seconde entre chaque écriture.

```blocks
for (let i = 0; i < 5; i++) {
    console.logValue("naturals", i + 1)
    pause(500)
}
```

## Voir aussi #seealso

[tant que](/blocks/loops/while), [pour](/blocks/loops/for),
[toujours](/reference/loops/forever)