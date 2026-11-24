# pulse In

Attends qu'une impulsion se produise sur une broche numérique et indique combien de temps elle a duré.

```sig
pins.A0.pulseIn(PulseValue.High)
```

Une impulsion est un changement de tension à l'entrée d'une broche numérique. Cela peut arriver si un interrupteur connecté
à la broche est pressé ou si un capteur relié à la broche veut donner un signal. Une impulsion est le fait de
changer la tension de haute à basse, ou de basse à haute. L'entrée d'une broche est normalement maintenue
à une tension haute ou basse quand elle ne reçoit pas d'impulsion (son _état non signalé_). Tu peux décider à quelle
valeur d'entrée garder la broche quand elle ne reçoit pas d'impulsion. Tu le fais en lui donnant une direction de _tirage_ (pull)
avec [``||pins:set pull||``](/reference/pins/set-pull).

Tu attends une impulsion sur une broche, passant soit de `high` à `low`, soit de `low` à `high`. Une **value** d'impulsion `high` est
utilisée quand tu attends un changement d'entrée de `low` à `high`. Une **value** d'impulsion `low` est utilisée pour attendre
un changement d'entrée de `high` à `low`.

Quand il détecte une impulsion dans la direction attendue, ``||pins:pulse in||`` arrête d'attendre et te dit
combien de temps l'impulsion a duré. Il n'attend pas indéfiniment cependant. Il y a une limite de 2 secondes pour attendre
que l'impulsion se produise et de 2 secondes pour qu'elle se termine. Si l'impulsion met trop de temps à arriver ou dure
trop longtemps, ``||pins:pulse in||`` dira simplement que l'impulsion n'a duré aucun temps, 0 microseconde. Si tu ne veux pas attendre
2 secondes, tu peux utiliser une durée plus courte dans **maxDuration**. La durée
est en microsecondes (1 seconde = 1000000 microsecondes).

## Paramètres

* **value** : la valeur d'impulsion à attendre, soit `high` soit `low`.
* **maxDuration** : la durée maximale d'attente de l'impulsion, en microsecondes, comme : 50000.

## Retourne

* un [nombre](/types/number) qui indique combien de temps l'impulsion a duré. La durée est un nombre de microsecondes.

## Exemple #example

Vérifie toutes les demi-secondes s'il y a une impulsion `low` sur la broche `D5`. Écris dans la console s'il y a eu une impulsion.

```blocks
let pulseTime = 0;
pins.D5.setPull(PinPullMode.PullUp)

forever(function() {
    pulseTime = pins.D5.pulseIn(PulseValue.Low)
    if (pulseTime > 0) {
        console.logValue("pulse-time", pulseTime)
    }
    pause(500)
})
```

## Voir aussi #seealso

[digital read](/reference/pins/digital-read), [set pull](/reference/pins/set-pull),
[on pulsed](/reference/pins/on-pulsed)
