# mettre en pause jusqu'à

Met en pause une partie du programme pendant un certain nombre de millisecondes.

```sig
control.pause(400)
```

Quand le code d'un bloc arrive à ``||control:pause until||``, il attend le temps que tu lui indiques. Le code
dans des blocs comme ``||loops:forever||`` et ``||control:run in parallel||`` continue de s'exécuter pendant que le code d'un autre
bloc attend à un ``||control:pause||``.

## Paramètres

* **ms** : le [nombre](/types/number) de millisecondes pendant lesquelles tu veux faire une pause. Ainsi, 100 millisecondes = 1/10 de seconde et 1000 millisecondes = 1 seconde.

## Exemple #example

Écris les cinq premiers nombres naturels dans la console en attendant une demi-seconde entre chaque écriture.

```blocks
for (let i = 0; i < 5; i++) {
    console.logValue("naturals", i + 1)
    control.pauseUntil(500)
}
```

## Voir aussi #seealso

[while](/blocks/loops/while), [for](/blocks/loops/for),
[forever](/reference/loops/forever)