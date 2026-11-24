# toujours

Exécute une partie du programme en arrière-plan et répète-la sans arrêt.

```sig
forever(() => {
})
```

Le code que tu mets dans une boucle ``||loops:toujours||`` s'exécute et se répète pendant toute la durée
de ton programme. Le code des autres parties de ton programme ne s'arrête pas pendant que ta boucle ``||loops:toujours||``
tourne. Cela inclut les autres boucles ``||loops:toujours||`` et le bloc [``||control:exécuter en parallèle||``](/reference/control/run-in-parallel).

## Paramètres

* **a** : le code à exécuter encore et encore.

## Exemple #example

Crée un générateur d'humeur qui écrit une humeur dans la console toutes les `5` secondes.

```blocks
let mood = ["happy", "sad", "joyful", "angry"]
forever(function () {
    console.log("mood = " + mood[Math.randomRange(0, 3)])
    pause(5000)
})
```

## Voir aussi #seealso

[tant que](/blocks/loops/while), [répéter](/blocks/loops/repeat),
[exécuter en parallèle](/reference/control/run-in-parallel)