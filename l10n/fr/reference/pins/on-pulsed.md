# on Pulsed **obsolète**

### ~hint

Utilise plutôt [pins.onEvent](/reference/pins/on-event).

### ~

Exécute du code quand une broche reçoit une impulsion `high` (true) ou `low` (false).

```sig
pins.A0.onPulsed(PulseValue.High, () => {})
```

Une impulsion est un changement de tension à l'entrée d'une broche numérique. Cela peut arriver si un interrupteur connecté
à la broche est pressé ou si un capteur relié à la broche veut donner un signal. Une impulsion est le fait de
changer la tension de haute à basse, ou de basse à haute. L'entrée d'une broche est normalement maintenue
à une tension haute ou basse quand elle ne reçoit pas d'impulsion (son _état non signalé_). Tu peux décider à quelle
valeur d'entrée garder la broche quand elle ne reçoit pas d'impulsion. Tu le fais en lui donnant une direction de _tirage_ (pull)
avec [``||pins:set pull||``](/reference/pins/set-pull).

Ton code se trouve dans un bloc d'événement qui démarre quand la tension d'entrée de la broche change. Tu indiques la
direction d'impulsion pour laquelle le code doit s'exécuter. Mets la valeur de **pulse** à `high` si tu veux
que le code démarre quand la broche passe d'une tension basse à une tension haute. Utilise `low` pour **pulse** si
tu veux que ton code s'exécute quand la tension de la broche passe de haute à basse.

## Paramètres

* **pulse** : la valeur d'impulsion pour laquelle exécuter le code.
* **body** : le code à exécuter quand la broche reçoit une impulsion.

## Exemple #example

Quand la broche `D4` reçoit une impulsion `low`, exécute du code qui fait clignoter une LED connectée à la broche `D13` .

```blocks
pins.D4.setPull(PinPullMode.PullUp)

pins.D4.onPulsed(PulseValue.Low, () => {
    pins.D13.digitalWrite(true)
    pause(250)
    pins.D13.digitalWrite(false)
})
```

## Voir aussi #seealso

[pulse in](/reference/pins/pulse-in), [set pull](/reference/pins/set-pull)
