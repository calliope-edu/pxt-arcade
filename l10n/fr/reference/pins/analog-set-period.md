# analog Set Period

Utilise cette période pour les commandes de servo et les autres signaux PWM.

```sig
pins.A1.analogSetPeriod(20000)
```

Avec la _modulation de largeur d'impulsion (PWM)_, un signal d'impulsion est envoyé régulièrement, de nombreuses fois par seconde.
Le nombre d'impulsions envoyées chaque seconde détermine sa période. Si un signal _pwm_ est envoyé 50
fois par seconde, sa période est de 1/20e de seconde, soit 20 millisecondes.

Tu utilises des microsecondes pour définir la période de ton signal _pwm_. Une seconde vaut un million de
microsecondes et 1 milliseconde vaut 1000 microsecondes.

## Paramètres

* **period** : un [nombre](types/number) qui est la période du signal d'impulsion envoyé sur la broche.

## Exemple #example

Définis la période d'un signal PWM à 20 millisecondes.

```blocks
pins.A1.analogSetPeriod(20000)
```

## Voir aussi #seealso

[servo write](/reference/pins/servo-write),
[servo set pulse](/reference/pins/servo-set-pulse)

[Qu'est-ce que la PWM ?](/reference/pins/what-is-pwm)
