# wait For Event

Arrête l'exécution du code actuel et attend un événement.

```sig
control.waitForEvent(0, 0)
```
Tu voudras peut-être que ton code s'arrête un moment jusqu'à ce qu'un événement que tu attends se produise.
Si tu veux que ton code fasse une pause jusqu'à ce qu'un événement connu se produise, utilise un bloc ``||control:wait for event||``.
Un événement connu est quelque chose que tu identifies et qui se produit sur la carte ou dans ton programme.
Un événement a à la fois une source et une cause. La source est l'endroit d'où vient l'événement, comme un capteur ou
une condition dans ton programme. La cause est ce qui a provoqué l'événement à la source.

Tu attribues des nombres à tes sources et causes d'événements. Ces nombres sont utilisés par [``||control:raise event||``](/reference/control/raise-event) pour annoncer à ton programme qu'un événement vient de se produire.

Par exemple, tu pourrais créer un minuteur qui provoque toujours un événement toutes les 100 millisecondes. Le numéro
de source du minuteur est `6` et la valeur de la cause est `1`. Le programme pourrait attendre l'un de ces événements
de temps comme ceci :

```blocks
const myTimer = 6;
const timerTimeout = 1;

control.runInParallel(function() {
    while (true) {
        control.waitMicros(100000)
        control.raiseEvent(myTimer, timerTimeout)
    }
})

control.waitForEvent(myTimer, timerTimeout)
```

## Paramètres

* **id** : le [nombre](/types/number) d'identification (la source) de cet événement, par exemple : `10`.
* **value** : un [nombre](/types/number) qui indique la cause de l'événement, par exemple : `4`.

## Exemple #example

Crée un minuteur qui envoie un signal toutes les 2 secondes. Attends deux fois et écris dans la
console à chaque fois.

```blocks
const myTimer = 6;
const timerTimeout = 1;

control.runInParallel(function() {
    while (true) {
        pause(2000)
        control.raiseEvent(myTimer, timerTimeout)
    }
})

control.waitForEvent(myTimer, timerTimeout)
console.log("Timer timeout")
control.waitForEvent(myTimer, timerTimeout)
console.log("Timer timeout")
```

## Voir aussi #seealso

[raise event](/reference/control/raise-event), [on event](/reference/control/on-event)
