# set Pull

Indique à une broche numérique d'utiliser une tension haute ou basse pour signifier que le signal d'entrée est inactif.

```sig
pins.A0.setPull(PinPullMode.PullDown)
```

Quand tu veux utiliser une broche numérique pour recevoir un signal d'entrée, la broche a normalement
une direction de _tirage_ (pull). Cela signifie que lorsque la broche n'a pas de signal d'entrée, elle lit `true` si
la direction de tirage est `up`. Mais si la direction de tirage est `down`, la broche lit `false`.

Pour régler la direction de tirage, tu choisis quelle tension (haute ou basse) doit signifier
que le signal d'entrée de la broche est inactif. Le microprocesseur de ta carte connecte la broche à la tension
haute si tu la règles sur `up` et à la tension basse si tu la règles sur `down`.

Ensuite, quand tu veux créer un signal sur la broche, tu branches ton interrupteur ou un capteur de façon à
connecter la broche à la tension opposée à la direction de tirage choisie. Par exemple,
si tu règles la broche `D7` sur `up`, tu branches une patte d'un interrupteur à la broche et l'autre
patte à la tension basse (GND). Quand tu appuies sur l'interrupteur, la broche `D7` est tirée vers `low`
parce qu'elle est connectée à la tension basse. On dit alors que la broche est _signalée_.

Bien sûr, si la direction de tirage de la broche est `down`, la broche est signalée quand elle est connectée
à la tension haute (tirée vers `high`).

Ton code peut attendre qu'une broche passe de `high` à `low`, ou de `low` à `high`. C'est
ce qu'on appelle un événement d'_impulsion_.

## Paramètres

*  **pull** : la direction de tirage à donner à la broche
> * `up` : la broche est tirée vers le haut (tension haute) quand elle n'est pas signalée et lit `true`.
> * `down` : la broche est tirée vers le bas (tension basse) quand elle n'est pas signalée et lit `false`.
> * `none` : la broche n'est connectée ni à la tension haute ni à la tension basse. Une résistance externe ou un autre
circuit électronique détermine la direction de tirage.

## Exemple #example

Règle la direction de tirage de la broche numérique `D4` sur `up`. Fais clignoter la LED connectée à la broche `D13` pendant
un quart de seconde quand la broche `D4` reçoit une impulsion `low`.

```blocks
pins.D4.setPull(PinPullMode.PullUp)

pins.D4.onPulsed(PulseValue.Low, () => {
    pins.D13.digitalWrite(true)
    pause(250)
    pins.D13.digitalWrite(false)
})
```

## Voir aussi #seealso

[digital read](/reference/pins/digital-read),
[on pulsed](/reference/pins/on-pulsed),
[pulse in](/reference/pins/pulse-in)
