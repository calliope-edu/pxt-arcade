# raise Event

Annonce que quelque chose s'est produit à une source d'événement.

```sig
control.raiseEvent(0, 0)
```
Tu utilises ``||control:raise event||`` pour annoncer que quelque chose s'est produit avec la carte ou que quelque chose de spécial
s'est produit dans ton programme. Tu le fais si d'autres parties de ton programme pourraient vouloir
le savoir.

Si tu as ajouté des blocs [``||control:on event||``](/reference/control/on-event) à ton programme,
le code qu'ils contiennent s'exécutera si les nombres **src** et **value** sont les mêmes que ceux utilisés avec
``||control:raise event||``. **src** indique d'où vient l'événement. Tu choisis un nombre
pour identifier quelque chose comme un capteur ou une situation spéciale dans ton programme. Si tu veux
annoncer qu'il commence à faire sombre, tu peux donner à **src** une valeur comme `51` comme numéro de source
du capteur de lumière. Cela signifie que pour tout ce que tu veux annoncer à propos du capteur de lumière, tu déclenches
l'événement avec `51`.

De nombreux événements peuvent se produire pour une même source (**src**). Avec le capteur de lumière, tu peux annoncer qu'il
fait plus sombre ou plus clair. C'est la cause de l'événement, la **value**. Ainsi, pour le capteur de
lumière (le numéro de source `51`), tu pourrais ajouter deux événements pour **value** : `1` pour plus sombre et `2` pour plus clair.

Avec l'exemple du capteur de lumière, tu indiques au programme qu'il fait plus sombre :

```block
control.raiseEvent(51, 1)
```

## Paramètres

* **src** : le [nombre](/types/number) d'identification (la source) de cet événement, par exemple : `10`.
* **value** : un [nombre](/types/number) qui indique la cause de l'événement, par exemple : `4`.

## Exemple #example

Enregistre deux événements provenant de la source `22`. Écris dans la console lorsque
les événements `0` et `1` sont _déclenchés_.

```blocks
const myNotify = 22;

control.runInParallel(function() {
    for (let i = 0; i < 2; i++) {
        pause(1000);
        control.raiseEvent(myNotify, i);
    }
})

control.onEvent(myNotify, 0, () => {
    console.logValue("myNotify", 0)
})

control.onEvent(myNotify, 1, () => {
    console.logValue("myNotify", 1)
})
```

## Voir aussi #seealso

[on event](/reference/control/on-event), [wait for event](/reference/control/wait-for-event)
