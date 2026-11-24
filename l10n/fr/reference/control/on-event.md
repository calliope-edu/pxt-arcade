# lors d'un événement

Exécute du code quand un événement enregistré se produit.

```sig
control.onEvent(0, 0, () => {})
```
Au lieu d'attendre dans une boucle qui fait partie du programme principal, un bloc d'événement est
une bonne façon de faire réagir du code supplémentaire à quelque chose qui se passe sur la carte ou
dans ton programme.

Voici comment ça marche : du code dans une autre partie du programme décide d'annoncer
que quelque chose de spécial ou d'important vient de se produire. Il le fait en _déclenchant_ un _événement_.
Un autre code est placé dans un bloc ``||control:on event||``. Le bloc ``||control:on event||`` s'_enregistre_
pour s'exécuter quand un événement correspondant est _déclenché_.

Ton programme décide de ce qu'est un événement et le rend officiel en _enregistrant_ l'événement avec
un numéro d'identification de source (id), **src**. L'id dans **src** permet de savoir quelle **_chose_** provoque un événement,
comme un capteur ou une période de temps spéciale qui vient de se terminer. La **value** indique la cause de
l'événement.

### Pourquoi utiliser des événements ?

Si tu veux exécuter du code quand un état change, tu pourrais le faire ainsi
dans la partie principale du programme :

```blocks
let nowStatus = false
control.runInParallel(() => {
    control.waitMicros(10000)
    nowStatus = true
})

let lastStatus = nowStatus;
while(lastStatus == nowStatus) {
    control.waitMicros(1000)
}
```
La boucle [``||loops:while||``](/blocks/loops/while) vérifie si `nowStatus` change. Le problème, c'est que ton programme reste bloqué
dans la boucle jusqu'à ce que `nowStatus` change et ne peut rien faire d'autre en attendant.

Mais nous pouvons modifier le programme pour utiliser un événement au lieu d'attendre dans une boucle. Enregistrons un événement
et donnons-lui un identifiant de source, ou **src**, de `15` et une **value** de cause de `1` :

```blocks
let because = 0;
control.runInParallel(() => {
    control.waitMicros(100000)
    control.raiseEvent(15, 1)
})

control.onEvent(15, 1, () => {
    because = 1;
})
```

Tu vois donc que le programme a enregistré un événement connu sous `15`, `1`. La source est identifiée par `15` et la
cause de l'événement est `1`. Pourquoi utiliser ces nombres ? Eh bien, imaginons que tu as un capteur d'humidité connecté
à ta carte. Tu pourrais indiquer à ton programme que tout événement venant de la source `15` concerne ton capteur. Tu peux dire qu'une cause `1` signifie que c'est trop sec.

## Paramètres

* **src** : le [nombre](/types/number) d'identification (la source) de cet événement, par exemple : `10`.
* **value** : un [nombre](/types/number) qui indique la cause de l'événement, par exemple : `4`.
* **handler** : le code à exécuter quand l'événement se produit.

## Exemple #example

Enregistre deux événements venant de la source `22`. Écris dans la console quand
les événements `0` et `1` sont _déclenchés_.

```blocks
const myNotify = 22

control.runInParallel(function() {
    for (let i = 0; i < 2; i++) {
        pause(1000)
    control.raiseEvent(myNotify, i)
    }
})

control.onEvent(myNotify, 0, () => {
    console.logValue("myNotify", 0)
})

control.onEvent(myNotify, 1, () => {
    console.logValue("myNotify", 1)
})
```

## Voir aussi ##seealso

[déclencher un événement](/reference/control/raise-event)